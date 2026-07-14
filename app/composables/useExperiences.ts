import type { Experience } from '~/types'
import experiences from '~~/public/data/experiences.json'

// JSON in /public/data, imported at build time (SSR-rendered, static, no backend).
export function useExperiences(): Experience[] {
	return experiences as Experience[]
}
