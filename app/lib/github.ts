export type GithubStats = {
  publicRepos: number;
  followers: number;
  totalStars: number;
  topLanguage: string | null;
};

type GithubUser = { public_repos: number; followers: number };
type GithubRepo = { stargazers_count: number; language: string | null; fork: boolean };

/**
 * Pulls from GitHub's official public REST API (generous unauthenticated
 * rate limit, no key needed) rather than third-party card-generator
 * services, which have proven unreliable (rate-limited / paused deployments).
 * Revalidated hourly; returns null on any failure so the caller can hide
 * the widget instead of showing broken data.
 */
export async function getGithubStats(username: string): Promise<GithubStats | null> {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { next: { revalidate: 3600 } }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100`, { next: { revalidate: 3600 } }),
    ]);

    if (!userRes.ok || !reposRes.ok) return null;

    const user = (await userRes.json()) as GithubUser;
    const repos = (await reposRes.json()) as GithubRepo[];
    if (!Array.isArray(repos)) return null;

    const owned = repos.filter((r) => !r.fork);
    const totalStars = owned.reduce((sum, r) => sum + r.stargazers_count, 0);

    const languageCounts = new Map<string, number>();
    for (const repo of owned) {
      if (!repo.language) continue;
      languageCounts.set(repo.language, (languageCounts.get(repo.language) ?? 0) + 1);
    }
    const topLanguage = [...languageCounts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? null;

    return {
      publicRepos: user.public_repos,
      followers: user.followers,
      totalStars,
      topLanguage,
    };
  } catch {
    return null;
  }
}
