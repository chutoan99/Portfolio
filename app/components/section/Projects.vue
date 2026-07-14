<script setup lang="ts">
// Projects are loaded from /public/data/projects.json and rendered via <ProjectCard>.
const projects = useProjects()
</script>

<template>
	<section
		id="projects"
		class="flex flex-col justify-center items-center self-stretch py-[50px] bg-surface lt:px-[80px] lt:py-[96px]">
		<div class="w-full max-w-[1200px] mx-auto my-0">
			<div
				class="flex flex-col justify-center items-center gap-[50px] self-stretch lt:px-[32px] py-0">
				<ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
			</div>
		</div>
	</section>
</template>
