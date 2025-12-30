import 'aos/dist/aos.css'
import Slider from 'react-slick'
import { CarouselConfig } from '../../shared/carousel.config'
import { useTranslation } from 'react-i18next'

export default function Experience() {
	const { t } = useTranslation()
	return (
		<section
			className='w-full h-full p-[20px] md:px-[120px] pt-[60px]  pb-[50px] sm:pb-[100px]  md:gap-[24px] bg-[#f1f5f9]'
			id='experience'
				>
			<Slider {...CarouselConfig.settings}>
				{/* SECTION 1 */}
				<div
					className='rounded-xl bg-white flex flex-col justify-center w-full gap-[16px] md:gap-[25px] lt:w-[960px] px-[15px] sm:px-[25px] md:px-[28px] pt-[16px] md:pt-[28px] pb-[16px] md:pb-[32px]'
					data-aos='zoom-in-up'>
					<div className='w-full items-start justify-start flex-col md:flex flex gap-[16px] md:gap-[40px] relative lt:flex-row'>
						<div className='flex w-[115px] flex-col items-start gap-[12px] shrink-0'>
							<p className=' text-primary text-base not-italic font-semibold leading-6 flex-col sm:flex'>
								{t('common.title_experience_company_yteso')}
							</p>
						</div>
						<div className='flex-1'>
							<h3 className='self-stretch text-primary text-xl not-italic font-semibold'>
								{t('common.label_position_frontend_developer')}
							</h3>
						</div>
						{/* <div className='lt:w-[180px] absolute  right-[40px] lt:sticky lt:flex lt:justify-end'>
							<span className='text-primary text-right text-base not-italic font-normal'>
								Sep 2022 - Present
							</span>
						</div> */}
					</div>
					<div className='w-full items-start justify-start flex-col md:flex flex gap-[16px] md:gap-[40px] relative lt:flex-row'>
						<ul className='flex flex-col items-start gap-1 self-stretch'>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6'>
								{t('common.msg_experience_yteso_intro')}
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								<span className='text-description font-bold'>
									{t('common.label_experience_hrm')}
								</span>{' '}
								{t('common.msg_experience_hrm_description')}
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								<span className='text-description font-bold'>
									{t('common.label_experience_erp')}
								</span>{' '}
								{t('common.msg_experience_erp_description')}
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								<span className='text-description font-bold'>
									{t('common.label_experience_emr')}
								</span>{' '}
								{t('common.msg_experience_emr_description')}
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6'>
								{t('common.msg_experience_yteso_team')}
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								{t('common.msg_experience_yteso_task_1')}
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								{t('common.msg_experience_yteso_task_2')}
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								{t('common.msg_experience_yteso_task_3')}
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								{t('common.msg_experience_yteso_task_4')}
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								{t('common.msg_experience_yteso_task_5')}
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								{t('common.msg_experience_yteso_task_6')}
							</li>
						</ul>
					</div>
				</div>
				{/* SECTION 1 */}

				{/* SECTION 2 */}
				<div
					className='rounded-xl bg-white flex flex-col justify-center w-full gap-[16px] md:gap-[25px] lt:w-[960px] px-[15px] sm:px-[25px] md:px-[28px] pt-[16px] md:pt-[28px] pb-[16px] md:pb-[32px]'
					data-aos='zoom-in-up'>
					<div className='w-full items-start justify-start flex-col md:flex flex gap-[16px] md:gap-[40px] relative lt:flex-row'>
						<div className='flex w-[115px] flex-col items-start gap-[12px] shrink-0'>
							<p className=' text-primary text-base not-italic font-semibold leading-6 flex-col sm:flex'>
								{t('common.title_experience_company_itd')}
							</p>
						</div>
						<div className='flex-1'>
							<h3 className='self-stretch text-primary text-xl not-italic font-semibold'>
								{t('common.label_position_frontend_developer')}
							</h3>
						</div>			
						{/* <div className='lt:w-[180px] absolute  right-[40px] lt:sticky lt:flex lt:justify-end'>
							<span className='text-primary text-right text-base not-italic font-normal'>
								May 2022 - Jul 2022
							</span>
						</div> */}
			
					</div>
					<div className='w-full items-start justify-start flex-col md:flex flex gap-[16px] md:gap-[40px] relative lt:flex-row'>
						<ul className='flex flex-col items-start gap-[5px] self-stretch'>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6'>
								<span className='text-description font-bold'>
									{t('common.label_experience_isecurity')}
								</span>{' '}
								{t('common.msg_experience_isecurity_description')}
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								{t('common.msg_experience_isecurity_team')}
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								{t('common.msg_experience_isecurity_task_1')}
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								{t('common.msg_experience_isecurity_task_2')}
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								{t('common.msg_experience_isecurity_task_3')}
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 '>
								<span className='text-description font-bold'>
									{t('common.label_experience_iwater')}
								</span>{' '}
								{t('common.msg_experience_iwater_description')}
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								{t('common.msg_experience_iwater_team')}
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								{t('common.msg_experience_iwater_task_1')}
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								{t('common.msg_experience_iwater_task_2')}
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 '>
								<span className='text-description font-bold'>
									{t('common.label_experience_ioki')}
								</span>{' '}
								{t('common.msg_experience_ioki_description')}
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								{t('common.msg_experience_ioki_team')}
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								{t('common.msg_experience_ioki_task_1')}
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								{t('common.msg_experience_ioki_task_2')}
							</li>
						</ul>
					</div>
				</div>
				{/* SECTION 2 */}
			</Slider>
		</section>
	)
}
