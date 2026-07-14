<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import { CarouselConfig } from '~/utils/carousel.config'

// Experience cards are fetched from /api/experiences and rendered in a Swiper carousel
// (react-slick -> Swiper: dots -> pagination, autoplay/loop/speed preserved, arrows
// hidden via #experience CSS). Icons are inlined lucide SVGs (no sub-components).
const { data: experiences } = await useExperiences()
</script>

<template>
	<section
		id="experience"
		class="overflow-hidden mt-[120px] w-full h-full p-[20px] pt-[60px] pb-[50px] sm:pb-[100px] md:gap-[24px] bg-surface-alt">
		<div class="grid wide">
			<div class="row sm-gutter">
				<div class="col l-1 mo-1" />
				<div class="col l-10 m-0-10 c-12">
					<Swiper
						:modules="[Autoplay, Pagination]"
						:slides-per-view="CarouselConfig.slidesPerView"
						:loop="CarouselConfig.loop"
						:speed="CarouselConfig.speed"
						:autoplay="CarouselConfig.autoplay"
						:pagination="CarouselConfig.pagination">
						<SwiperSlide v-for="(exp, index) in experiences" :key="index">
							<div
								class="group rounded-xl bg-surface flex flex-col justify-center w-full gap-[16px] md:gap-[25px] lt:w-[960px] px-[8px] sm:px-[10px] md:px-[16px] pt-[16px] md:pt-[28px] pb-[16px] md:pb-[32px]"
								data-aos="zoom-in-up">
								<div class="flex flex-col lt:flex-row lt:items-start lt:justify-between gap-4 mb-4">
									<div class="space-y-2">
										<h3
											class="font-semibold group-hover:text-primary transition-colors text-base leading-6">
											{{ $t(exp.position) }}
										</h3>
										<div class="flex items-center gap-4 self-stretch">
											<div class="flex items-center gap-[8px]">
												<!-- lucide building-2 -->
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"
													class="lucide lucide-building2 h-4 w-4">
													<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
													<path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
													<path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
													<path d="M10 6h4" />
													<path d="M10 10h4" />
													<path d="M10 14h4" />
													<path d="M10 18h4" />
												</svg>
												<span class="font-medium text-[18px]">{{ $t(exp.company) }}</span>
											</div>
											<div class="flex items-center gap-[8px]">
												<!-- lucide map-pin -->
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"
													class="lucide lucide-map-pin h-4 w-4">
													<path
														d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
													<circle cx="12" cy="10" r="3" />
												</svg>
												<span class="text-sm">{{ exp.location }}</span>
											</div>
										</div>
									</div>
									<div class="flex flex-col lt:items-end gap-[8px]">
										<div
											class="flex items-center gap-[8px] px-[12px] py-[4px] bg-primary/10 text-primary rounded-[8px] w-fit">
											<!-- lucide calendar -->
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="lucide lucide-calendar h-4 w-4">
												<path d="M8 2v4" />
												<path d="M16 2v4" />
												<rect width="18" height="18" x="3" y="4" rx="2" />
												<path d="M3 10h18" />
											</svg>
											<span class="text-[18px] font-medium">{{ exp.period }}</span>
										</div>
										<span
											class="text-[13px] text-muted-foreground px-[8px] py-[4px] bg-surface-muted rounded-[5px] lt:rounded-[8px] w-fit">
											{{ exp.type }}
										</span>
									</div>
								</div>

								<div
									class="w-full items-start justify-start flex-col md:flex flex gap-[16px] md:gap-[40px] relative lt:flex-row">
									<ul class="space-y-1">
										<li v-if="exp.intro" class="flex items-start gap-[5px] self-stretch">
											<div>
												<span class="text-gray-600 text-[18px] not-italic font-normal leading-[24px]">
													{{ $t(exp.intro) }}
												</span>
											</div>
										</li>
										<li
											v-for="(item, i) in exp.items"
											:key="i"
											class="flex items-start gap-[5px] self-stretch">
											<!-- lucide arrow-right -->
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="lucide lucide-arrow-right h-3 w-3 text-primary flex-shrink-0 mt-[5px]">
												<path d="M5 12h14" />
												<path d="m12 5 7 7-7 7" />
											</svg>
											<div>
												<template v-if="item.label">
													<span
														class="text-[18px] not-italic leading-[24px] text-muted font-semibold">
														{{ $t(item.label) }}:
													</span>
													{{ ' ' }}
												</template>
												<span class="text-gray-600 text-[18px] not-italic font-normal leading-[24px]">
													{{ $t(item.desc) }}
												</span>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
				<div class="col l-1 mo-1" />
			</div>
		</div>
	</section>
</template>
