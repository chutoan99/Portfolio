import { useAnimation } from 'framer-motion'
import Projects1 from './projects_1'
import Projects2 from './projects_2'
import Projects3 from './projects_3'
import Projects4 from './projects_4'
export interface Device {
	x: string
	image: string
	end: string
	zIndex: number
	animation: ReturnType<typeof useAnimation>
}
export interface DeviceCustom {
	x: string
	y: string
	image: string
	change: string[]
	zIndex: number
	animation: ReturnType<typeof useAnimation>
}
export default function Projects() {
	return (
		<section
			id='projects'
			className='
        flex flex-col justify-center items-center self-stretch py-[3.125rem] bg-white
        lt:px-20 lt:py-24 
      '>
			<div
				className='
          w-full max-w-[75rem] mx-auto my-0
        '>
				<div
					className='
            flex flex-col justify-center items-center gap-[3.125rem] self-stretch   
            lt:px-8 py-0
          '>
					<Projects1 />
					<Projects2 />
					<Projects3 />
					<Projects4 />
				</div>
			</div>
		</section>
	)
}
