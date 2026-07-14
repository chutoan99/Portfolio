<script setup lang="ts">
import type { Project } from '~/types'

// From components/project_info/index.tsx. `project: any` -> typed `Project`.
// react-i18next -> $t; leftover next/image artifacts (data-nimg) dropped.
defineProps<{ project: Project }>()
</script>

<template>
	<div
		class="
			flex flex-col items-center gap-[16px] flex-[1_0_0] self-stretch rounded-[12px_0px_0px_12px]
			lt:gap-[18px]
		">
		<div class="flex gap-[10px] items-center w-full lt:w-[500px] flex-col lt:flex-row">
			<h3
				class="self-stretch overflow-hidden text-heading text-ellipsis text-xl not-italic font-semibold leading-7">
				{{ $t(project.nameKey) }}:
			</h3>
			<div class="flex justify-start w-full lt:flex-1">
				<a
					target="_blank"
					rel="noopener noreferrer"
					:href="project.ref"
					class="text-gray-600 text-[16px] border-b-black border-b border-solid h-[20px] hover:text-primary transition duration-150">
					{{ $t(project.demoKey) }}
				</a>
			</div>
		</div>

		<p class="self-stretch text-gray-600 text-[18px] not-italic font-normal leading-[24px]">
			{{ $t(project.descriptionKey) }}
		</p>

		<div class="flex items-center content-center gap-[6px] self-stretch flex-wrap">
			<a
				v-for="(item, index) in project.technologies"
				:key="index"
				class="flex cursor-pointer items-center gap-[5px] rounded-[5px] border border-black/10 px-[8px] py-[4px] font-medium text-neutral-500 text-[16px] duration-200 hover:bg-black/5 motion-reduce:transition-none dark:border-neutral-800 dark:text-white/50 dark:hover:border-neutral-700 dark:hover:bg-surface/5"
				href="https://reactjs.org/">
				<img
					:alt="`${item.lable} Logo`"
					loading="lazy"
					width="20"
					height="20"
					decoding="async"
					class="size-5 rounded"
					:src="item.image"
					:style="{ color: 'transparent' }" />
				{{ item.lable }}
			</a>
		</div>

		<div class="flex w-full gap-[20px] justify-start items-center px-0">
			<span
				v-for="(item, index) in project.link"
				:key="index"
				class="flex items-center shrink-0 h-[36px] w-fit">
				<a
					:href="item.ref"
					target="_blank"
					rel="noopener noreferrer"
					class="gap-[8px] flex items-center justify-center shrink-0 cursor-pointer">
					<svg width="20" height="21" viewBox="0 0 20 21" fill="none">
						<path
							d="M11.2867 9.15352C10.6041 8.47121 9.67846 8.08792 8.71334 8.08792C7.74821 8.08792 6.82259 8.47121 6.14 9.15352L3.56584 11.7269C2.88324 12.4095 2.49976 13.3353 2.49976 14.3006C2.49976 15.2659 2.88324 16.1918 3.56584 16.8744C4.24844 17.557 5.17424 17.9404 6.13959 17.9404C7.10493 17.9404 8.03074 17.557 8.71334 16.8744L10 15.5877"
							stroke="#7D11F9"
							stroke-width="1.66667"
							stroke-linecap="round"
							stroke-linejoin="round" />
						<path
							d="M8.71338 11.7269C9.39597 12.4092 10.3216 12.7925 11.2867 12.7925C12.2518 12.7925 13.1775 12.4092 13.86 11.7269L16.4342 9.15352C17.1168 8.47092 17.5003 7.54512 17.5003 6.57977C17.5003 5.61443 17.1168 4.68862 16.4342 4.00602C15.7516 3.32342 14.8258 2.93994 13.8605 2.93994C12.8951 2.93994 11.9693 3.32342 11.2867 4.00602L10 5.29269"
							stroke="#7D11F9"
							stroke-width="1.66667"
							stroke-linecap="round"
							stroke-linejoin="round" />
					</svg>
					<span
						class="cursor-pointer text-gray-600 text-[18px] not-italic font-normal leading-[24px]">
						{{ $t(item.contentKey) }}
					</span>
				</a>
			</span>
		</div>
	</div>
</template>
