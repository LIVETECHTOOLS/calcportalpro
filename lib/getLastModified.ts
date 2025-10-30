import fs from "fs";
import path from "path";

/**
 * Get last modified date for a given route path.
 * Supports:
 *   - app routes:   /about → app/about/page.tsx
 *   - blog routes:  /blog/foo/bar → components/blog/foo/bar/page.tsx
 */
export function getLastModified(routePath: string): string {
  try {
    // Remove leading slash
    const cleanPath = routePath.replace(/^\/+/, "");

    // Try in app/ directory
    const appPath = path.join(process.cwd(), "app", cleanPath, "page.tsx");

    if (fs.existsSync(appPath)) {
      const stats = fs.statSync(appPath);
      return stats.mtime.toISOString();
    }

    // Try in components/blog/ directory (for nested blogs)
    const blogSubPath = cleanPath.replace(/^blog\//, ""); // remove "blog/" prefix
    const blogPath = path.join(process.cwd(), "components", "blog", blogSubPath, "page.tsx");

    if (fs.existsSync(blogPath)) {
      const stats = fs.statSync(blogPath);
      return stats.mtime.toISOString();
    }
  } catch (err) {
    console.warn(`⚠️ Could not get last modified for route: ${routePath}`, err);
  }

  // Default fallback: now
  return new Date().toISOString();
}
