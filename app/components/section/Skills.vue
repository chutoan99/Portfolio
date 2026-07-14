<script setup lang="ts">
import type { Skill } from '~/types'

// Skills are loaded from /public/data/skills.json, then filtered by category on the client.
// The grid is a plain reactive v-for (instant filtering — a TransitionGroup FLIP here
// conflicts with the per-cell transition/transform and leaves stale nodes in the DOM).
// whileHover/whileTap from Framer -> CSS scale on the card.
const skills = useSkills()

const tags: string[] = ['All', 'Front end', 'Back end', 'Database', 'Others']
const currentTag = ref<string>('All')

const filtered = computed<Skill[]>(() =>
	currentTag.value === 'All'
		? skills
		: skills.filter((item) => item.type.includes(currentTag.value))
)

const onFilter = (tag: string) => {
	currentTag.value = tag
}

// Flatten to a single keyed list (icon card + trailing dashed divider, interleaved).
// The divider count keys off the full filtered length, identical to the original index
// comparison `index < filteredIcons.length - 1`.
type Cell =
	| { key: string; kind: 'icon'; icon: Skill }
	| { key: string; kind: 'divider' }

const cells = computed<Cell[]>(() => {
	const active = filtered.value.filter((item) => item.active)
	const total = filtered.value.length
	const out: Cell[] = []
	active.forEach((icon, index) => {
		out.push({ key: `icon-${icon.name}`, kind: 'icon', icon })
		if (index < total - 1) out.push({ key: `divider-${icon.name}`, kind: 'divider' })
	})
	return out
})

const cardClass =
	'flex flex-col items-center justify-center bg-surface rounded-[12px] group w-[80px] h-[80px] gap-[5px]rounded-[16px] shadow-[0px_10px_10px_0px_rgba(31,13,64,0.10),_0px_0px_2px_0px_rgba(31,13,64,0.08)] transition-transform duration-300 hover:scale-[1.15] active:scale-90'
const dividerClass =
	'flex flex-col items-center justify-center bg-[rgba(255,255,255,0.75)] w-[80px] min-w-[80px] max-w-[80px] h-[80px] gap-[5px] border-[3px] border-dashed border-line-dashed rounded-[16px]'
</script>

<template>
	<section id="skills" class="bg-surface-alt">
		<div class="max-w-[1165px] px-[10px] mx-auto sm:px-[20px] md:px-[30px]">
			<div
				class="h-full shrink-0 flex flex-col items-center justify-center py-[50px] lg:py-[100px]">
				<ul
					class="flex w-full flex-row items-center justify-start gap-[8px] overflow-x-scroll overflow-y-hidden scroll-snap-x snap-mandatory scrollbar-none pt-[15px] pb-[32px] list-none select-none sm:justify-center sm:overflow-x-hidden sm:gap-[10px] sm:pb-[32px]">
					<li
						v-for="(item, i) in tags"
						:key="i"
						class="px-[20px] py-[4px] mx-[4px] relative overflow-hidden bg-surface transition-all rounded-[11px] text-base font-medium leading-5 border border-primary before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-primary before:transition-all before:duration-500 hover:text-white hover:before:bg-primary hover:shadow-primary hover:before:left-0 hover:before:w-full hover:shadow-2xl"
						:class="
							item === currentTag
								? 'text-white before:bg-primary shadow-primary before:left-0 before:w-full shadow-2xl'
								: 'text-primary'
						"
						@click="onFilter(item)">
						<span class="relative z-10" :style="{ backfaceVisibility: 'hidden' }">{{ item }}</span>
					</li>
				</ul>

				<div class="w-full flex flex-col flex-wrap text-center min-h-[350px]">
					<div
						:style="{ display: 'grid' }"
						class="grid-cols-4 gap-[10px] [@media(min-width:600px)]:ml-0 [@media(min-width:600px)]:mr-0 [@media(min-width:600px)]:gap-[15px] [@media(min-width:600px)]:gap-[20px] [@media(min-width:600px)]:grid-cols-6 sm:ml-0 sm:mr-0 sm:gap-[20px] sm:grid-cols-7 md:grid-cols-8 [@media(min-width:912px)]:grid-cols-9 lt:min-h-[350px] lt:grid-cols-[repeat(13,minmax(0,1fr))]">
						<div
							v-for="cell in cells"
							:key="cell.key"
							:class="cell.kind === 'icon' ? cardClass : dividerClass">
							<template v-if="cell.kind === 'icon'">
								<div
									class="flex items-center justify-center shrink-0 fill-[rgba(255,255,255,0.1)]">
									<div class="relative w-[55px] h-[55px] cursor-pointer">
										<div
											class="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
											<img
												:src="`${cell.icon.path}/grey.svg`"
												:alt="cell.icon.name"
												width="100%"
												height="100%" />
										</div>
										<div
											class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
											<img
												:src="`${cell.icon.path}/default.svg`"
												:alt="cell.icon.name"
												width="100%"
												height="100%" />
										</div>
									</div>
								</div>
							</template>
							<template v-else>
								<div
									class="flex items-center justify-center shrink-0 fill-[rgba(255,255,255,0.1)]">
									<div class="w-0 h-0" />
								</div>
							</template>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
