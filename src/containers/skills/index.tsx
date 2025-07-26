import React, { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ListIcon, ListIconModel, Types } from '../../shared/icons'

export default function Skills() {
	const [currentTag, setCurrentTag] = useState<Types>(Types.ALL)
	const [filteredIcons, setFilteredIcons] =
		useState<ListIconModel[]>(ListIcon)

	const onFilter = (tag: Types) => {
		switch (tag) {
			case Types.ALL:
				setFilteredIcons(ListIcon)
				break
			case Types.FRONT_END:
			case Types.BACK_END:
			case Types.DATABASE:
			case Types.OTHERS:
				const filtered = ListIcon.filter((item) =>
					item.type.includes(tag)
				)
				setFilteredIcons(filtered)
				break
		}
	}

	return (
		<section id='skills' className='bg-[#f1f5f9]'>
			<div
				className='
					max-w-[1165px] px-[10px] mx-auto 
					sm:px-[20px] 
					md:px-7.5
				'>
				<div
					className='
					h-full shrink-0 flex flex-col items-center justify-center pb-[50px] pt-[90px]
					lg:py-[100px]
					'>
					<ul
						className='
							flex w-full flex-row items-center justify-start gap-[8px] overflow-x-scroll overflow-y-hidden scroll-snap-x snap-mandatory scrollbar-none pt-[15px] pb-[32px] list-none select-none  
          					sm:justify-center sm:overflow-x-hidden sm:gap-[10px] sm:pb-[32px]'>
						{[
							'All',
							'Front end',
							'Back end',
							'Database',
							'Others'
						].map((item: string, i: number) => (
							<li
								key={i}
								onClick={() => {
									onFilter(item as Types)
									setCurrentTag(item as Types)
								}}
								className={`
										px-[20px] py-[4px] mx-[4px] relative overflow-hidden bg-white  transition-all rounded-[11px] text-base font-medium leading-5
										border border-[#7D11F9]  
										before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#7D11F9] before:transition-all before:duration-500 
										hover:text-white hover:before:bg-[#7D11F9]  hover:shadow-[#7D11F9] hover:before:left-0 hover:before:w-full hover:shadow-2xl
										${item === currentTag ? 'text-white before:bg-[#7D11F9] shadow-[#7D11F9] before:left-0 before:w-full shadow-2xl' : 'text-[#7D11F9]'}
									`}>
								<span
									className='relative z-10'
									style={{ backfaceVisibility: 'hidden' }}>
									{item}
								</span>
							</li>
						))}
					</ul>

					<div className='w-full flex flex-col flex-wrap text-center min-h-[350px]'>
						<motion.div
							className='
								grid grid-cols-4 gap-[10px]

								[@media(min-width:600px)]:ml-0 
								[@media(min-width:600px)]:mr-0 
								[@media(min-width:600px)]:gap-[15px] 
								[@media(min-width:600px)]:gap-[20px] 
								[@media(min-width:600px)]:grid-cols-6

								sm:ml-0 
								sm:mr-0 
								sm:gap-[20px] 
								sm:grid-cols-7

								md:grid-cols-8

								[@media(min-width:912px)]:grid-cols-9

								lt:min-h-[350px]  lt:grid-cols-[repeat(13,minmax(0,1fr))]
							'>
							<AnimatePresence>
								{filteredIcons
									.filter((item) => item.active)
									.map((icon, index) => (
										<React.Fragment key={index}>
											<motion.div
												layout
												animate={{ opacity: 1 }}
												initial={{ opacity: 0 }}
												exit={{ opacity: 0 }}
												transition={{ duration: 0.5 }}
												whileHover={{ scale: 1.15 }}
												whileTap={{ scale: 0.9 }}
												className='flex flex-col items-center justify-center bg-white rounded-[12px] group w-[80px] h-[80px] gap-[5px]rounded-[16px] shadow-[0px_49px_49px_0px_rgba(31,13,64,0.10),_0px_0px_2px_0px_rgba(31,13,64,0.08)]'>
												<div className='flex items-center justify-center shrink-0 fill-[rgba(255, 255, 255, 0.1)]'>
													<div className='relative w-[55px] h-[55px] cursor-pointer '>
														<div className='absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300'>
															<img
																src={
																	icon.grey ||
																	icon.default
																}
																alt={icon.name}
																width='100%'
																height='100%'
															/>
														</div>

														<div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
															<img
																src={
																	icon.default
																}
																alt={icon.name}
																width='100%'
																height='100%'
															/>
														</div>
													</div>
												</div>
											</motion.div>

											{/* Chèn SkillEmpty giữa các phần tử, không chèn sau phần tử cuối */}
											{index <
												filteredIcons.length - 1 && (
												<motion.div
													className='
														flex flex-col items-center justify-center bg-[rgba(255, 255, 255, 0.75)]  w-[80px] min-w-[80px] max-w-[80px] h-[80px] gap-[5px]
														border-[3px] border-dashed border-[#cccc] rounded-[16px]
													'>
													<div className='flex items-center justify-center shrink-0 fill-[rgba(255, 255, 255, 0.1)]'>
														<div className='w-0 h-0' />
													</div>
												</motion.div>
											)}
										</React.Fragment>
									))}
							</AnimatePresence>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	)
}
