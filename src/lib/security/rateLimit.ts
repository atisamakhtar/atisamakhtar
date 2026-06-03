const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

/** In-memory rate limiter — swap for Upstash when REDIS_URL is set */
export async function checkRateLimit(identifier: string): Promise<{
  success: boolean;
  remaining: number;
}> {
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    try {
      const { Ratelimit } = await import("@upstash/ratelimit");
      const { Redis } = await import("@upstash/redis");
      const redis = new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      });
      const ratelimit = new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(5, "60 s"),
      });
      const result = await ratelimit.limit(identifier);
      return { success: result.success, remaining: result.remaining };
    } catch {
      // Fall through to in-memory
    }
  }

  const now = Date.now();
  const entry = rateLimitMap.get(identifier);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(identifier, { count: 1, resetAt: now + WINDOW_MS });
    return { success: true, remaining: MAX_REQUESTS - 1 };
  }

  if (entry.count >= MAX_REQUESTS) {
    return { success: false, remaining: 0 };
  }

  entry.count += 1;
  return { success: true, remaining: MAX_REQUESTS - entry.count };
}
