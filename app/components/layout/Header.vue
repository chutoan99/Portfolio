<script setup lang="ts">
// From containers/header/index.tsx.
// React useState(menuVisible) -> ref; the hamburger/menu visuals come from
// `.outer-menu` in index.scss. Menu labels stay literal (as in the original).
const menuVisible = ref(false)
const items = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact']
</script>

<template>
	<header class="w-full flex justify-center">
		<div
			class="
				fixed top-0 pt-[32px] select-none z-50 bg-gradient-to-b to-transparent w-full max-w-[1200px] pr-[16px]
				sm:pr-[15px]
				md:pr-[20px]
				lt:pr-0
			">
			<div class="flex justify-between section-container">
				<a href="#home" class="link" aria-label="Home" />
				<nav class="outer-menu" :class="{ 'menu-visible': menuVisible }" aria-label="Main navigation">
					<button
						type="button"
						class="hamburger w-6 h-6 flex items-center justify-center link relative"
						:aria-label="menuVisible ? 'Close menu' : 'Open menu'"
						:aria-expanded="menuVisible"
						@click="menuVisible = !menuVisible">
						<div
							class="relative flex-none w-full bg-black duration-300 flex items-center justify-center" />
					</button>
					<section
						class="menu fixed top-0 left-0 w-full h-full overflow-hidden invisible pointer-events-none flex items-center justify-center"
						:style="{ visibility: 'hidden' }">
						<div class="flex-none overflow-hidden flex items-center justify-center">
							<div
								class="text-center opacity-0 overflow-y-auto flex flex-none justify-center items-center max-h-screen">
								<ul
									class="list-none py-[16px] px-[0px] m-[0px] block max-h-screen"
									role="menu">
									<li
										v-for="el in items"
										:key="el"
										class="p-0 m-[24px] text-2xl block"
										role="menuitem">
										<a
											class="
												link relative inline font-bold text-5xl
												duration-300 hover:no-underline
											"
											:href="`#${el.toLowerCase()}`"
											@click="menuVisible = false">
											{{ el }}
										</a>
									</li>
								</ul>
							</div>
						</div>
					</section>
				</nav>
			</div>
		</div>
	</header>
</template>
