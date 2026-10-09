<script setup lang="ts">
import type { Skill } from '~/types'

// Skills wall (modelled on tryorbt.com's sources wall): active skills from
// /public/data/skills.json are dealt round-robin into ROWS marquee rows. Each track renders
// its half twice and slides by -50%, so the loop is seamless; odd rows run in reverse.
// Hovering a row pauses it.
const ROWS = 5
// A half must be wider than the viewport or a gap shows before the loop restarts, so short
// rows repeat their items until a half has at least this many chips (~170px each).
const MIN_ITEMS_PER_HALF = 16
// Seconds per item, so rows with more items don't scroll faster.
const SECONDS_PER_ITEM = 7
// Slight per-row speed variance so the rows drift against each other.
const SPEED_VARIANCE = [1, 1.16, 1.06, 1.22, 1.1]

const skills = useSkills()

const rows = computed(() => {
	const active = skills.filter((item) => item.active)
	const buckets: Skill[][] = Array.from({ length: ROWS }, () => [])
	active.forEach((item, index) => buckets[index % ROWS]!.push(item))
	return buckets
		.filter((items) => items.length > 0)
		.map((items, index) => {
			const repeat = Math.ceil(MIN_ITEMS_PER_HALF / items.length)
			const half = Array.from({ length: repeat }, () => items).flat()
			return {
				// Only the first copy is exposed to assistive tech; the rest are visual repeats.
				count: items.length,
				chips: [...half, ...half],
				style: {
					animationDuration: `${Math.round(half.length * SECONDS_PER_ITEM * SPEED_VARIANCE[index % SPEED_VARIANCE.length]!)}s`,
					animationDirection: index % 2 === 0 ? 'normal' : 'reverse'
				}
			}
		})
})
</script>

<template>
	<section id="skills" class="bg-surface py-[50px] lt:pt-[77px] lt:pb-[154px]">
		<div class="skills-wall">
			<div
				v-for="(row, rowIndex) in rows"
				:key="rowIndex"
				class="skills-marquee">
				<div class="skills-track" :style="row.style">
					<div
						v-for="(skill, index) in row.chips"
						:key="`${skill.name}-${index}`"
						class="skill-chip"
						:aria-hidden="index >= row.count ? 'true' : undefined">
						<span class="skill-chip__icon">
							<img
								:src="`${skill.path}/default.svg`"
								:alt="index >= row.count ? '' : skill.name"
								loading="lazy"
								draggable="false" />
						</span>
						<span class="skill-chip__label">{{ skill.name }}</span>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.skills-wall {
	width: 100%;
}

.skills-marquee {
	width: 100%;
	overflow: hidden;
}

.skills-track {
	display: flex;
	gap: 16px;
	width: max-content;
	padding: 8px;
	animation: skills-scroll linear infinite;
}

.skills-track:hover {
	animation-play-state: paused;
}

.skill-chip {
	position: relative;
	display: flex;
	flex: 0 0 auto;
	align-items: center;
	gap: 14px;
	padding: 15px 26px 15px 16px;
	border-radius: 20px;
	corner-shape: superellipse(1.4);
	background: #f1f3f3;
	will-change: transform;
	transition:
		transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
		box-shadow 0.3s,
		background 0.3s;
}

.skill-chip__icon {
	display: grid;
	flex: 0 0 auto;
	place-items: center;
	width: 46px;
	height: 46px;
	opacity: 0.75;
	transition: opacity 0.3s;
}

.skill-chip__icon img {
	display: block;
	width: 38px;
	height: 38px;
}

/* Typography follows the site (same as the project tech chips), not orbt. */
.skill-chip__label {
	color: rgb(var(--color-muted));
	font-size: 16px;
	font-weight: 500;
	white-space: nowrap;
	transition: color 0.3s;
}

.skill-chip:hover {
	z-index: 2;
	background: #fff;
}

.skill-chip:hover .skill-chip__icon {
	opacity: 1;
}

.skill-chip:hover .skill-chip__label {
	color: rgb(var(--color-heading));
}

@keyframes skills-scroll {
	to {
		transform: translateX(-50%);
	}
}

@media (prefers-reduced-motion: reduce) {
	.skills-track {
		animation: none !important;
	}

	.skills-marquee {
		overflow-x: auto;
	}
}

@media (max-width: 600px) {
	.skills-track {
		gap: 12px;
		padding: 6px;
	}

	.skill-chip {
		gap: 11px;
		padding: 11px 18px 11px 12px;
		border-radius: 15px;
	}

	.skill-chip__icon {
		width: 36px;
		height: 36px;
	}

	.skill-chip__icon img {
		width: 30px;
		height: 30px;
	}

	.skill-chip__label {
		font-size: 14px;
	}
}
</style>
