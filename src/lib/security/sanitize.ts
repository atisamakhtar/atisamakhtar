import DOMPurify from "isomorphic-dompurify";

export function sanitizeInput(value: string): string {
  return DOMPurify.sanitize(value, { ALLOWED_TAGS: [] }).trim();
}

export function sanitizeObject<T extends Record<string, string>>(obj: T): T {
  const result = { ...obj };
  for (const key of Object.keys(result)) {
    const val = result[key];
    if (typeof val === "string") {
      (result as Record<string, string>)[key] = sanitizeInput(val);
    }
  }
  return result;
}
