import type { Project } from '~/types'
import projects from '~~/public/data/projects.json'

// Data lives as plain JSON in /public/data (editable, no backend). It is imported at
// build time so it renders server-side (full SEO) and the site deploys fully static.
export function useProjects(): Project[] {
	return projects as Project[]
}
