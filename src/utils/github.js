/**
 * Utility functions for interacting with GitHub API
 */

/**
 * Fetches the latest release information for a GitHub repository
 * @param {string} owner - The repository owner
 * @param {string} repo - The repository name
 * @returns {Promise<Object>} The latest release data
 */
export async function getLatestRelease(owner, repo) {
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases/latest`);
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching latest release:', error);
    return null;
  }
}

/**
 * Fetches the repository information
 * @param {string} owner - The repository owner
 * @param {string} repo - The repository name
 * @returns {Promise<Object>} The repository data
 */
export async function getRepoInfo(owner, repo) {
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching repo info:', error);
    return null;
  }
}

/**
 * Extracts and formats the version number from a release tag
 * @param {string} tag - The release tag (e.g., "v1.2.0")
 * @returns {string} The formatted version number
 */
export function formatVersion(tag) {
  // Remove the 'v' prefix if present
  return tag.startsWith('v') ? tag.substring(1) : tag;
}

/**
 * Formats a date string in a more readable format
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date
 */
export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}