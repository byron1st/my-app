import { GITHUB_TOKEN, GITHUB_API_VERSION } from '$env/static/private';

if (!GITHUB_TOKEN) {
	throw new Error('GITHUB_TOKEN is not defined');
}

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
	visibility: 'public' | 'private';
	license: {
		key: string;
		name: string;
		url: string;
	};
};

const PER_PAGE = 100;

export async function getRepos(type: 'owner' | 'member'): Promise<Repo[]> {
	let page = 1;
	const repos: Repo[] = [];

	// eslint-disable-next-line no-constant-condition
	while (true) {
		const response = await fetch(
			`https://api.github.com/user/repos?per_page=${PER_PAGE}&type=${type}&page=${page}`,
			{
				headers: {
					Accept: 'application/vnd.github.v3+json',
					Authorization: `Bearer ${GITHUB_TOKEN}`,
					'X-GitHub-Api-Version': GITHUB_API_VERSION
				}
			}
		);
		if (!response.ok) {
			throw new Error(`failed to fetch repos via GitHub API: ${response.status}`);
		}

		const readRepos: Repo[] = await response.json();
		repos.push(...readRepos);

		if (readRepos.length === PER_PAGE) page += 1;
		else break;
	}

	return repos;
}
