import 'aos/dist/aos.css'
import Slider from 'react-slick'
import { CarouselConfig } from '../../shared/carousel.config'
import { useTranslation } from 'react-i18next'

export default function Experience() {
	const { t } = useTranslation()
	return (
		<section
			className='overflow-hidden mt-[120px] w-full h-full p-[20px] pt-[60px]  pb-[50px] sm:pb-[100px]  md:gap-[24px] bg-[#f1f5f9]'
			id='experience'>
			<div className='grid wide'>
				<div className='row sm-gutter'>
					<div className='col l-1 mo-1'></div>
					<div className='col l-10 m-0-10 c-12'>
						<Slider {...CarouselConfig.settings}>
							{/* SECTION 1 */}
							<div
								className='group rounded-xl bg-white flex flex-col justify-center w-full gap-[16px] md:gap-[25px] lt:w-[960px] px-[8px] sm:px-[10px] md:px-[16px] pt-[16px] md:pt-[28px] pb-[16px] md:pb-[32px]'
								data-aos='zoom-in-up'>
								<div className='flex flex-col lt:flex-row lt:items-start lt:justify-between gap-4 mb-4'>
									<div className='space-y-2'>
										<h3 className='font-semibold group-hover:text-primary transition-colors text-base leading-6'>
											{t(
												'common.label_position_frontend_developer'
											)}
										</h3>
										<div className='flex items-center gap-4 self-stretch'>
											<div className='flex items-center gap-2'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width={24}
													height={24}
													viewBox='0 0 24 24'
													fill='none'
													stroke='currentColor'
													strokeWidth={2}
													strokeLinecap='round'
													strokeLinejoin='round'
													className='lucide lucide-building2 h-4 w-4'>
													<path d='M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z' />
													<path d='M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2' />
													<path d='M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2' />
													<path d='M10 6h4' />
													<path d='M10 10h4' />
													<path d='M10 14h4' />
													<path d='M10 18h4' />
												</svg>
												<span className='font-medium text-[18px]'>
													{t(
														'common.title_experience_company_yteso'
													)}
												</span>
											</div>
											<div className='flex items-center gap-2'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width={24}
													height={24}
													viewBox='0 0 24 24'
													fill='none'
													stroke='currentColor'
													strokeWidth={2}
													strokeLinecap='round'
													strokeLinejoin='round'
													className='lucide lucide-map-pin h-4 w-4'>
													<path d='M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0' />
													<circle
														cx={12}
														cy={10}
														r={3}
													/>
												</svg>
												<span className='text-sm'>
													Ho Chi Minh
												</span>
											</div>
										</div>
									</div>
									<div className='flex flex-col lt:items-end gap-2'>
										<div className='flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-[8px]'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width={24}
												height={24}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='lucide lucide-calendar h-4 w-4'>
												<path d='M8 2v4' />
												<path d='M16 2v4' />
												<rect
													width={18}
													height={18}
													x={3}
													y={4}
													rx={2}
												/>
												<path d='M3 10h18' />
											</svg>
											<span className='text-[18px] font-medium'>
												Sep 2022 - Present
											</span>
										</div>
										<span className='text-xs text-muted-foreground px-2 py-1 bg-[#f3f4f6] rounded-[8px]'>
											Full-time
										</span>
									</div>
								</div>

								<div className='w-full items-start justify-start flex-col md:flex flex gap-[16px] md:gap-[40px] relative lt:flex-row'>
									<ul className='space-y-1'>
										<li className='flex items-start gap-[5px] self-stretch '>
											<div>
												<span className='text-gray-600 text-[18px] not-italic font-normal leading-[24px]'>
													{t(
														'common.msg_experience_yteso_intro'
													)}
												</span>
											</div>
										</li>
										<li className='flex items-start gap-[5px] self-stretch '>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width={24}
												height={24}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='lucide lucide-arrow-right h-3 w-3 text-primary flex-shrink-0 mt-[5px]'>
												<path d='M5 12h14' />
												<path d='m12 5 7 7-7 7' />
											</svg>
											<div className=''>
												<span className='text-[18px] not-italic leading-[24px] text-description font-semibold'>
													{t(
														'common.label_experience_hrm'
													)}
													:
												</span>{' '}
												<span className='text-gray-600 text-[18px] not-italic font-normal leading-[24px]'>
													{t(
														'common.msg_experience_hrm_description'
													)}
												</span>
											</div>
										</li>
										<li className='flex items-start gap-[5px] self-stretch '>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width={24}
												height={24}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='lucide lucide-arrow-right h-3 w-3 text-primary flex-shrink-0 mt-[5px]'>
												<path d='M5 12h14' />
												<path d='m12 5 7 7-7 7' />
											</svg>
											<div className=''>
												<span className='text-[18px] not-italic leading-[24px] text-description font-semibold'>
													{t(
														'common.label_experience_erp'
													)}
													:
												</span>{' '}
												<span className='text-gray-600 text-[18px] not-italic font-normal leading-[24px]'>
													{t(
														'common.msg_experience_erp_description'
													)}
												</span>
											</div>
										</li>
										<li className='flex items-start gap-[5px] self-stretch '>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width={24}
												height={24}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='lucide lucide-arrow-right h-3 w-3 text-primary flex-shrink-0 mt-[5px]'>
												<path d='M5 12h14' />
												<path d='m12 5 7 7-7 7' />
											</svg>

											<div className=''>
												<span className='text-[18px] not-italic leading-[24px] text-description font-semibold'>
													{t(
														'common.label_experience_emr'
													)}
													:
												</span>{' '}
												<span className='text-gray-600 text-[18px] not-italic font-normal leading-[24px]'>
													{t(
														'common.msg_experience_emr_description'
													)}
												</span>
											</div>
										</li>
										<li className='flex items-start gap-[5px] self-stretch '>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width={24}
												height={24}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='lucide lucide-arrow-right h-3 w-3 text-primary flex-shrink-0 mt-[5px]'>
												<path d='M5 12h14' />
												<path d='m12 5 7 7-7 7' />
											</svg>
											<div>
												<span className='text-gray-600 text-[18px] not-italic font-normal leading-[24px]'>
													{t(
														'common.msg_experience_yteso_team'
													)}
												</span>
											</div>
										</li>
										<li className='flex items-start gap-[5px] self-stretch '>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width={24}
												height={24}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='lucide lucide-arrow-right h-3 w-3 text-primary flex-shrink-0 mt-[5px]'>
												<path d='M5 12h14' />
												<path d='m12 5 7 7-7 7' />
											</svg>
											<div>
												<span className='text-gray-600 text-[18px] not-italic font-normal leading-[24px]'>
													{t(
														'common.msg_experience_yteso_task_1'
													)}
												</span>
											</div>
										</li>
										<li className='flex items-start gap-[5px] self-stretch '>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width={24}
												height={24}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='lucide lucide-arrow-right h-3 w-3 text-primary flex-shrink-0 mt-[5px]'>
												<path d='M5 12h14' />
												<path d='m12 5 7 7-7 7' />
											</svg>
											<div>
												<span className='text-gray-600 text-[18px] not-italic font-normal leading-[24px]'>
													{t(
														'common.msg_experience_yteso_task_2'
													)}
												</span>
											</div>
										</li>
										<li className='flex items-start gap-[5px] self-stretch '>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width={24}
												height={24}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='lucide lucide-arrow-right h-3 w-3 text-primary flex-shrink-0 mt-[5px]'>
												<path d='M5 12h14' />
												<path d='m12 5 7 7-7 7' />
											</svg>
											<div>
												<span className='text-gray-600 text-[18px] not-italic font-normal leading-[24px]'>
													{t(
														'common.msg_experience_yteso_task_3'
													)}
												</span>
											</div>
										</li>
										<li className='flex items-start gap-[5px] self-stretch '>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width={24}
												height={24}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='lucide lucide-arrow-right h-3 w-3 text-primary flex-shrink-0 mt-[5px]'>
												<path d='M5 12h14' />
												<path d='m12 5 7 7-7 7' />
											</svg>
											<div>
												<span className='text-gray-600 text-[18px] not-italic font-normal leading-[24px]'>
													{t(
														'common.msg_experience_yteso_task_4'
													)}
												</span>
											</div>
										</li>
										<li className='flex items-start gap-[5px] self-stretch '>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width={24}
												height={24}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='lucide lucide-arrow-right h-3 w-3 text-primary flex-shrink-0 mt-[5px]'>
												<path d='M5 12h14' />
												<path d='m12 5 7 7-7 7' />
											</svg>
											<div>
												<span className='text-gray-600 text-[18px] not-italic font-normal leading-[24px]'>
													{t(
														'common.msg_experience_yteso_task_5'
													)}
												</span>
											</div>
										</li>
										<li className='flex items-start gap-[5px] self-stretch '>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width={24}
												height={24}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='lucide lucide-arrow-right h-3 w-3 text-primary flex-shrink-0 mt-[5px]'>
												<path d='M5 12h14' />
												<path d='m12 5 7 7-7 7' />
											</svg>
											<div>
												<span className='text-gray-600 text-[18px] not-italic font-normal leading-[24px]'>
													{t(
														'common.msg_experience_yteso_task_6'
													)}
												</span>
											</div>
										</li>
									</ul>
								</div>
							</div>
							{/* SECTION 1 */}

							{/* SECTION 2 */}
							<div
								className='group rounded-xl bg-white flex flex-col justify-center w-full gap-[16px] md:gap-[25px] lt:w-[960px] px-[8px] sm:px-[10px] md:px-[16px] pt-[16px] md:pt-[28px] pb-[16px] md:pb-[32px]'
								data-aos='zoom-in-up'>
								<div className='flex flex-col lt:flex-row lt:items-start lt:justify-between gap-4 mb-4'>
									<div className='space-y-2'>
										<h3 className='font-semibold group-hover:text-primary transition-colors text-base leading-6'>
											{t(
												'common.label_position_frontend_developer'
											)}
										</h3>
										<div className='flex items-center gap-4 self-stretch'>
											<div className='flex items-center gap-2'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width={24}
													height={24}
													viewBox='0 0 24 24'
													fill='none'
													stroke='currentColor'
													strokeWidth={2}
													strokeLinecap='round'
													strokeLinejoin='round'
													className='lucide lucide-building2 h-4 w-4'>
													<path d='M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z' />
													<path d='M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2' />
													<path d='M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2' />
													<path d='M10 6h4' />
													<path d='M10 10h4' />
													<path d='M10 14h4' />
													<path d='M10 18h4' />
												</svg>
												<span className='font-medium text-[18px]'>
													{t(
														'common.title_experience_company_itd'
													)}
												</span>
											</div>
											<div className='flex items-center gap-2'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width={24}
													height={24}
													viewBox='0 0 24 24'
													fill='none'
													stroke='currentColor'
													strokeWidth={2}
													strokeLinecap='round'
													strokeLinejoin='round'
													className='lucide lucide-map-pin h-4 w-4'>
													<path d='M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0' />
													<circle
														cx={12}
														cy={10}
														r={3}
													/>
												</svg>
												<span className='text-sm'>
													Ho Chi Minh
												</span>
											</div>
										</div>
									</div>
									<div className='flex flex-col lt:items-end gap-2'>
										<div className='flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-[8px] '>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width={24}
												height={24}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='lucide lucide-calendar h-4 w-4'>
												<path d='M8 2v4' />
												<path d='M16 2v4' />
												<rect
													width={18}
													height={18}
													x={3}
													y={4}
													rx={2}
												/>
												<path d='M3 10h18' />
											</svg>

											<span className='text-[18px] font-medium'>
												May 2022 - Jul 2022
											</span>
										</div>
										<span className='text-xs text-muted-foreground px-2 py-1 bg-[#f3f4f6] rounded-[8px]'>
											Full-time
										</span>
									</div>
								</div>

								<div className='w-full items-start justify-start flex-col md:flex flex gap-[16px] md:gap-[40px] relative lt:flex-row'>
									<ul className='space-y-1'>
										{/* isecurity */}
										<li className='flex items-start gap-[5px] self-stretch '>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width={24}
												height={24}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='lucide lucide-arrow-right h-3 w-3 text-primary flex-shrink-0 mt-[5px]'>
												<path d='M5 12h14' />
												<path d='m12 5 7 7-7 7' />
											</svg>
											<div className=''>
												<span className='text-[18px] not-italic leading-[24px] text-description font-semibold'>
													{t(
														'common.label_experience_isecurity'
													)}
													:
												</span>{' '}
												<span className='text-gray-600 text-[18px] not-italic font-normal leading-[24px]'>
													{t(
														'common.msg_experience_isecurity_description'
													)}
												</span>
											</div>
										</li>
										<li className='flex items-start gap-[5px] self-stretch '>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width={24}
												height={24}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='lucide lucide-arrow-right h-3 w-3 text-primary flex-shrink-0 mt-[5px]'>
												<path d='M5 12h14' />
												<path d='m12 5 7 7-7 7' />
											</svg>
											<div className=''>
												<span className='text-gray-600 text-[18px] not-italic font-normal leading-[24px]'>
													{t(
														'common.msg_experience_isecurity_team'
													)}
												</span>
											</div>
										</li>
										<li className='flex items-start gap-[5px] self-stretch '>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width={24}
												height={24}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='lucide lucide-arrow-right h-3 w-3 text-primary flex-shrink-0 mt-[5px]'>
												<path d='M5 12h14' />
												<path d='m12 5 7 7-7 7' />
											</svg>
											<div className=''>
												<span className='text-gray-600 text-[18px] not-italic font-normal leading-[24px]'>
													{t(
														'common.msg_experience_isecurity_task_1'
													)}
												</span>
											</div>
										</li>
										<li className='flex items-start gap-[5px] self-stretch '>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width={24}
												height={24}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='lucide lucide-arrow-right h-3 w-3 text-primary flex-shrink-0 mt-[5px]'>
												<path d='M5 12h14' />
												<path d='m12 5 7 7-7 7' />
											</svg>
											<div className=''>
												<span className='text-gray-600 text-[18px] not-italic font-normal leading-[24px]'>
													{t(
														'common.msg_experience_isecurity_task_2'
													)}
												</span>
											</div>
										</li>
										<li className='flex items-start gap-[5px] self-stretch '>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width={24}
												height={24}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='lucide lucide-arrow-right h-3 w-3 text-primary flex-shrink-0 mt-[5px]'>
												<path d='M5 12h14' />
												<path d='m12 5 7 7-7 7' />
											</svg>
											<div className=''>
												<span className='text-gray-600 text-[18px] not-italic font-normal leading-[24px]'>
													{t(
														'common.msg_experience_isecurity_task_3'
													)}
												</span>
											</div>
										</li>

										{/* iwater */}
										<li className='flex items-start gap-[5px] self-stretch '>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width={24}
												height={24}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='lucide lucide-arrow-right h-3 w-3 text-primary flex-shrink-0 mt-[5px]'>
												<path d='M5 12h14' />
												<path d='m12 5 7 7-7 7' />
											</svg>
											<div className=''>
												<span className='text-[18px] not-italic leading-[24px] text-description font-semibold'>
													{t(
														'common.label_experience_iwater'
													)}
													:
												</span>{' '}
												<span className='text-gray-600 text-[18px] not-italic font-normal leading-[24px]'>
													{t(
														'common.msg_experience_iwater_description'
													)}
												</span>
											</div>
										</li>
										<li className='flex items-start gap-[5px] self-stretch '>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width={24}
												height={24}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='lucide lucide-arrow-right h-3 w-3 text-primary flex-shrink-0 mt-[5px]'>
												<path d='M5 12h14' />
												<path d='m12 5 7 7-7 7' />
											</svg>
											<div className=''>
												<span className='text-gray-600 text-[18px] not-italic font-normal leading-[24px]'>
													{t(
														'common.msg_experience_iwater_team'
													)}
												</span>
											</div>
										</li>
										<li className='flex items-start gap-[5px] self-stretch '>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width={24}
												height={24}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='lucide lucide-arrow-right h-3 w-3 text-primary flex-shrink-0 mt-[5px]'>
												<path d='M5 12h14' />
												<path d='m12 5 7 7-7 7' />
											</svg>
											<div className=''>
												<span className='text-gray-600 text-[18px] not-italic font-normal leading-[24px]'>
													{t(
														'common.msg_experience_iwater_task_1'
													)}
												</span>
											</div>
										</li>
										<li className='flex items-start gap-[5px] self-stretch '>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width={24}
												height={24}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='lucide lucide-arrow-right h-3 w-3 text-primary flex-shrink-0 mt-[5px]'>
												<path d='M5 12h14' />
												<path d='m12 5 7 7-7 7' />
											</svg>
											<div className=''>
												<span className='text-gray-600 text-[18px] not-italic font-normal leading-[24px]'>
													{t(
														'common.msg_experience_iwater_task_2'
													)}
												</span>
											</div>
										</li>

										{/* ioki */}
										<li className='flex items-start gap-[5px] self-stretch '>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width={24}
												height={24}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='lucide lucide-arrow-right h-3 w-3 text-primary flex-shrink-0 mt-[5px]'>
												<path d='M5 12h14' />
												<path d='m12 5 7 7-7 7' />
											</svg>
											<div className=''>
												<span className='text-[18px] not-italic leading-[24px] text-description font-semibold'>
													{t(
														'common.label_experience_ioki'
													)}
													:
												</span>{' '}
												<span className='text-gray-600 text-[18px] not-italic font-normal leading-[24px]'>
													{t(
														'common.msg_experience_ioki_description'
													)}
												</span>
											</div>
										</li>
										<li className='flex items-start gap-[5px] self-stretch '>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width={24}
												height={24}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='lucide lucide-arrow-right h-3 w-3 text-primary flex-shrink-0 mt-[5px]'>
												<path d='M5 12h14' />
												<path d='m12 5 7 7-7 7' />
											</svg>
											<div className=''>
												<span className='text-gray-600 text-[18px] not-italic font-normal leading-[24px]'>
													{t(
														'common.msg_experience_ioki_team'
													)}
												</span>
											</div>
										</li>

										<li className='flex items-start gap-[5px] self-stretch '>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width={24}
												height={24}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='lucide lucide-arrow-right h-3 w-3 text-primary flex-shrink-0 mt-[5px]'>
												<path d='M5 12h14' />
												<path d='m12 5 7 7-7 7' />
											</svg>
											<div className=''>
												<span className='text-gray-600 text-[18px] not-italic font-normal leading-[24px]'>
													{t(
														'common.msg_experience_ioki_task_1'
													)}
												</span>
											</div>
										</li>
										<li className='flex items-start gap-[5px] self-stretch '>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width={24}
												height={24}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='lucide lucide-arrow-right h-3 w-3 text-primary flex-shrink-0 mt-[5px]'>
												<path d='M5 12h14' />
												<path d='m12 5 7 7-7 7' />
											</svg>
											<div className=''>
												<span className='text-gray-600 text-[18px] not-italic font-normal leading-[24px]'>
													{t(
														'common.msg_experience_ioki_task_2'
													)}
												</span>
											</div>
										</li>
									</ul>
								</div>
							</div>
							{/* SECTION 2 */}
						</Slider>
					</div>
					<div className='col l-1 mo-1'></div>
				</div>
			</div>
		</section>
	)
}
