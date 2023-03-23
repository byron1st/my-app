import { GITHUB_TOKEN, GITHUB_API_VERSION } from '$env/static/private';

if (!GITHUB_TOKEN) {
	throw new Error('GITHUB_TOKEN is not defined');
}

const PER_PAGE = 100;

export type Repo = {
	id: string;
	node_id: string;
	name: string;
	full_name: string;
	html_url: string;
	description: string;
	language: string | null;
	stargazers_count: number;
	size: number;
	pushed_at: string;
	license: {
		key: string;
		name: string;
		url: string;
	};
};

export async function getRepos(): Promise<Repo[]> {
	const response = await fetch(`https://api.github.com/user/repos?per_page=${PER_PAGE}`, {
		headers: {
			Accept: 'application/vnd.github.v3+json',
			Authorization: `Bearer ${GITHUB_TOKEN}`,
			'X-GitHub-Api-Version': GITHUB_API_VERSION
		}
	});
	if (!response.ok) {
		throw new Error(`failed to fetch repos via GitHub API: ${response.status}`);
	}

	const repos: Repo[] = await response.json();
	return repos;
}
