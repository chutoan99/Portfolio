// Shared content types for the bundled JSON data (app/data/*).

export interface ProjectTechnology {
	lable: string
	image: string
}

export interface ProjectLink {
	ref: string
	contentKey: string
}

// A single device mockup in a project showcase.
export interface ShowcaseDevice {
	image: string
	zIndex: number
	from: { x: string; y: string }
	to: { x: string; y: string }
}

export interface ProjectShowcase {
	devices: ShowcaseDevice[]
	scrollThreshold: number
	reversed?: boolean
	gridTemplate: string
}

export interface Project {
	nameKey: string
	descriptionKey: string
	demoKey: string
	technologies: ProjectTechnology[]
	ref: string
	link: ProjectLink[]
	showcase: ProjectShowcase
}

export interface Skill {
	name: string
	type: string[]
	path?: string
	default?: string
	grey?: string
	active?: boolean
}

export interface ExperienceItem {
	label?: string
	desc: string
}

export interface Experience {
	position: string
	company: string
	location: string
	period: string
	type: string
	intro?: string
	items: ExperienceItem[]
}
