import { useEffect } from 'react'
import { Device } from '.'
import { motion, useAnimation } from 'framer-motion'
import ProjectInfo from '../../components/project_info'
import { PROJECTS } from '../../shared/contants'

export default function Projects2() {
	const device_02: Device[] = [
		{
			x: '0%',
			end: '-40%',
			image: './assets/images/New_Macbook_Pro_Mockup_Front_View_(3).png',
			zIndex: 1,
			animation: useAnimation()
		},
		{
			x: '0%',
			end: '48%',
			image: './assets/images/New_Macbook_Pro_Mockup_Front_View_(2).png',
			zIndex: 1,
			animation: useAnimation()
		},
		{
			x: '0%',
			end: '0%',
			image: './assets/images/New_Macbook_Pro Mockup_Front_View_(1).png',
			zIndex: 20,
			animation: useAnimation()
		}
	]
	const handleScroll = () => {
		if (scrollY > 3000) {
			device_02.forEach((device: Device) => {
				device.animation.start({
					x: device.end,
					transition: { ease: 'linear' },
					zIndex: device.zIndex
				})
			})
		}
	}

	// Nghe sự kiện cuộn trang
	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div
			className='
				flex items-start gap-[50px] w-full p-[16px] rounded-xl
				lt:max-w-[1200px] lt:px-0  lt:w-[1200px]
			'>
			<div
				className=' 
					flex flex-col gap-[20px] 
					lt:grid
				'
				style={{ gridTemplateColumns: '4.5fr 5.5fr ' }}>
				<div
					data-aos='fade-right'
					data-aos-offset='300'
					data-aos-easing='ease-in-sine'
					data-aos-duration='800'
					className='
						order-2 
						lt:order-1 lt:mr-[50px]
					'>
					<ProjectInfo project={PROJECTS[1]} />
				</div>
				<div
					data-aos='zoom-in'
					data-aos-offset='200'
					data-aos-easing='ease-in-sine'
					data-aos-duration='500'
					className='
						order-1 h-[200px] flex justify-center items-center flex-[1_0_0] self-stretch 
						lt:order-2 lt:h-full
					'>
					<div
						className='
							flex justify-center center items-center w-full relative h-[200px] scale-[0.5] 
							lt:h-full  lt:scale-[1]
						'>
						{device_02.map((device: Device, index: number) => (
							<motion.div
								key={index}
								initial={{ x: device.x }}
								animate={device.animation}
								className='absolute'>
								<div className='w-full h-full'>
									<img
										src={device.image}
										alt=''
										width='100%'
										height='100%'
									/>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
