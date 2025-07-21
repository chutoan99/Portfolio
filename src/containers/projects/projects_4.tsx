import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import ProjectInfo from '../../components/project_info'
import { PROJECTS } from '../../shared/contants'
import { DeviceCustom } from '.'

export default function Projects4() {
	const device_04: DeviceCustom[] = [
		{
			x: '0%',
			y: '0%',
			change: ['-38%', '29%'],
			image: './assets/images/15_ Macbook_Pro_Mockup_Left_View.png',
			zIndex: 20,
			animation: useAnimation()
		},
		{
			x: '25%',
			y: '0%',
			change: ['39%', '0%'],
			image: './assets/images/Macbook_Pro_Mockup.png',
			zIndex: 1,
			animation: useAnimation()
		}
	]
	const handleScroll = () => {
		if (scrollY > 4150) {
			device_04.forEach((device: DeviceCustom) => {
				device.animation.start({
					x: device.change[0],
					y: device.change[1],
					transition: { ease: 'linear' },
					zIndex: device.zIndex
				})
			})
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div
			className='
        flex items-start gap-[50px] w-full  px-[16px] rounded-xl bg-white 
        lt:px-0 py-[16px]2  lt:w-[1200px] lt:max-w-[1200px]
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
					<ProjectInfo project={PROJECTS[3]} />
				</div>
				<div
					data-aos='zoom-in'
					data-aos-offset='200'
					data-aos-easing='ease-in-sine'
					data-aos-duration='500'
					className='
            order-1 h-[200px]  flex justify-center items-center flex-[1_0_0] self-stretch  
            lt:order-2 lt:h-full
          '>
					<div
						className='
              flex justify-center center items-center w-full relative h-[200px]  scale-[0.5] 
              lt:h-full lt:scale-[1]
            '>
						{device_04.map(
							(device: DeviceCustom, index: number) => (
								<motion.div
									key={index}
									initial={{ x: device.x }}
									animate={device.animation}
									className='
                  initial 
                  lt:absolute
                '>
									<div className='w-full h-full'>
										<img
											src={device.image}
											alt=''
											width='100%'
											height='100%'
										/>
									</div>
								</motion.div>
							)
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
