import 'aos/dist/aos.css'
import Slider from 'react-slick'
import { CarouselConfig } from '../../shared/carousel.config'
export default function Experience() {
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
								YTESO GIAAN
							</p>
						</div>
						<div className='flex-1'>
							<h3 className='self-stretch text-primary text-xl not-italic font-semibold'>
								Frontend Developer
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
								Develop & implement projects for CIH
								International Hospital and Gia An 155 Hospital:
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								<span className='text-description font-bold'>
									HRM: Human resource management.
								</span>{' '}
								Handle Electronic Medical Records, storing
								comprehensive medical data for each patient,
								including medical history, diagnosis, and
								treatment.
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								<span className='text-description font-bold'>
									ERP: Enterprise resource planning.
								</span>{' '}
								Manage all employee information with multiple
								modules, including personnel, leave, insurance,
								salary & personal income tax, and labor
								equipment.
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								<span className='text-description font-bold'>
									EMR: Electronic medical record.
								</span>{' '}
								Handle Electronic Medical Records, storing
								comprehensive medical data for each patient,
								including medical history, diagnosis, and
								treatment.
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6'>
								Team size: 18 and the main tasks:
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								+ Work with TypeScript, Angular, Rxjs,
								TailwindCss and DevExpress, SQL Server…
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								+ Create an API using ASP.NET in C#(C Sharp),
								and Document with Swagger for the FE.
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								+ Collaborate with BA and QC to ensure alignment
								with business team objectives and requirements.
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								+ Create report templates use &quot;report
								designer DevExpress&quot;
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								+ Participate in project development meets,
								contribute innovative solutions, and address
								potential risks.
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								+ Work with the agile scrum methodology.
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
								ITD GROUP
							</p>
						</div>
						<div className='flex-1'>
							<h3 className='self-stretch text-primary text-xl not-italic font-semibold'>
								Frontend Developer
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
									iSecurity:{' '}
								</span>
								The system consolidates all security features
								within an area, integrates facial recognition,
								records, camera management, identification of
								passenger vehicles upon entry and exit, suggests
								intrusive behavior, object track on maps…
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								Team size: 10 and the main tasks:
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								+ Work with AngularJs, Javascript, Fabricjs,
								Bootstrap…
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								+ Responsible for maintain, develop new
								features, and manage source code versions of the
								company previously.
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								+ Support and guidance to students during their
								internship on various projects.
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 '>
								<span className='text-description font-bold'>
									iWater:{' '}
								</span>
								Main features include management water usage
								history, payment records, employee…
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								Team size: 8 and the main tasks:
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								+ Work with TypeScript, React, Redux, Material
								UI…
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								+ Read and comprehend BA documents to align with
								project requirements.
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 '>
								<span className='text-description font-bold'>
									iOki: Objectives & Key Results.
								</span>
								Manage and scor OKR of employees every quarter.
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								Team size: 20 and the main tasks:
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								+ Work with TypeScript, Angular, Jquery, Rxjs,
								Ngrx, Scss, Bootstrap…
							</li>
							<li className='self-stretch text-gray-600 text-lg not-italic font-normal leading-6 pl-[10px]'>
								+ Ensure precise conversion of Figma designs to
								web format with pixel-perfect accuracy and
								responsiveness.
							</li>
						</ul>
					</div>
				</div>
				{/* SECTION 2 */}
			</Slider>
		</section>
	)
}
