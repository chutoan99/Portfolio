import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ListIcon, ListIconModel, Types } from '../../shared/icons'

export const ListSkills = `
  display: grid;
  row-gap: 10px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (min-width: 600px) {
    margin-left: 0;
    margin-right: 0;
    gap: 0.938rem;
    row-gap: 20px;
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  @media (min-width: 640px) {
    margin-left: 0;
    margin-right: 0;
    row-gap: 20px;
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }

  @media (min-width: 912px) {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    min-height: 21.875rem;
    grid-template-columns: repeat(10, minmax(0, 1fr)) !important;
  }
`

export default function Skills() {
	const [filteredIcons, setFilteredIcons] =
		useState<ListIconModel[]>(ListIcon)
	const [currentTag, setCurrentTag] = useState<Types>(Types.ALL)

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
		<section id='skills' className='bg-[rgba(147,107,232,0.15)]'>
			<div className='max-w-[1165px] px-2.5 mx-auto sm:px-[20px] md:px-7.5'>
				<div className='h-full shrink-0 flex flex-col items-center justify-center py-[50px] lg:py-[100px]'>
					<ul
						className='flex w-full flex-row items-center justify-start gap-2 overflow-x-scroll overflow-y-hidden scroll-snap-x snap-mandatory scrollbar-none pt-2 pb-8 list-none select-none  
          sm:justify-center sm:overflow-x-hidden sm:gap-[10px] sm:pb-[32px]'>
						{Object.values(Types).map((item: Types, i: number) => (
							<li
								key={i}
								onClick={() => {
									onFilter(item)
									setCurrentTag(item)
								}}
								data-text={item}
								className={`px-4 py-[16px] mx-1 text-base font-medium leading-5 border rounded-[11px] transition-colors duration-200 relative cursor-pointer after:content-[attr(data-text)] after:block after:whitespace-nowrap ${
									item === currentTag
										? 'text-white bg-primary border-white'
										: 'text-gray-600 border-gray-600 hover:text-white hover:bg-primary hover:border-white'
								}`}></li>
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
												className='flex flex-col items-center justify-center bg-white rounded-[12px] w-[80px] h-[80px] gap-[5px]rounded-[16px]'>
												<div className='flex items-center justify-center shrink-0 fill-[rgba(255, 255, 255, 0.1)]'>
													<div
														className='w-full h-full'
														role='tooltip'>
														<img
															src={icon.path}
															alt={icon.name}
															width='100%'
															height='100%'
														/>
													</div>
												</div>
											</motion.div>

											{/* Chèn SkillEmpty giữa các phần tử, không chèn sau phần tử cuối */}
											{index <
												filteredIcons.length - 1 && (
												<motion.div className='flex flex-col items-center justify-center bg-[rgba(255, 255, 255, 0.75)] border-[3px] border-dashed border-[#cccc] rounded-[16px] w-[80px] h-[80px] gap-[5px]'>
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
