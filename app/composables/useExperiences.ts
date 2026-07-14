import type { Experience } from '~/types'

export function useExperiences() {
	return useFetch<Experience[]>('/api/experiences', {
		key: 'experiences',
		default: () => []
	})
}
