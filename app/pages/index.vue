<script setup lang="ts">
// Home page — composes the sections. `isDesktop` gates the custom cursor.
const { t } = useI18n()
const { isDesktop } = useIsDesktop()
</script>

<template>
	<div>
		<LayoutHeader />
		<UiCursor :is-desktop="isDesktop" />

		<SectionHero />
		<SectionAbout />
		<SectionExperience />

		<UiHeading :content="t('common.title_projects')" />
		<SectionProjects />

		<UiHeading :content="t('common.title_skills')" />
		<SectionSkills />

		<UiHeading :content="t('common.title_contact')" />
		<SectionContact />

		<SectionMap />
		<LayoutFooter />
	</div>
</template>
