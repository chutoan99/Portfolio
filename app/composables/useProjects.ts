import type { Project } from '~/types'

// Fetches project data from the Nitro API (SSR-friendly). Components consume this
// instead of importing a local array, so the data source can move to a real backend.
export function useProjects() {
	return useFetch<Project[]>('/api/projects', {
		key: 'projects',
		default: () => []
	})
}
