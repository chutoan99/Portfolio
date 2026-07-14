import type { Skill } from '~/types'

export function useSkills() {
	return useFetch<Skill[]>('/api/skills', {
		key: 'skills',
		default: () => []
	})
}
