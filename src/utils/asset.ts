// src/utils/asset.ts

/**
 * Resolves the full URL for an asset by prepending the base URL.
 * @param path - The relative path to the asset.
 * @returns The full URL to the asset.
 */
export const asset = (path: string): string => {
  const base = import.meta.env.BASE_URL;
  // Ensure the base ends with a slash and the path does not start with one
  return `${base.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`;
};