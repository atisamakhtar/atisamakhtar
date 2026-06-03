type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | ClassValue[]
  | Record<string, boolean | undefined | null>;

/** Merge class names */
export function cn(...inputs: ClassValue[]): string {
  return clsx(...inputs);
}

function clsx(...inputs: ClassValue[]): string {
  const classes: string[] = [];
  for (const input of inputs) {
    if (!input) continue;
    if (typeof input === "string") classes.push(input);
    else if (Array.isArray(input)) classes.push(clsx(...input));
    else if (typeof input === "object") {
      for (const [key, val] of Object.entries(input)) {
        if (val) classes.push(key);
      }
    }
  }
  return classes.join(" ");
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export function absoluteUrl(path: string, baseUrl: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl.replace(/\/$/, "")}${normalized}`;
}
