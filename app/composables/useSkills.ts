import type { Skill } from '~/types'
import skills from '~~/public/data/skills.json'

// JSON in /public/data, imported at build time (SSR-rendered, static, no backend).
export function useSkills(): Skill[] {
	return skills as Skill[]
}
