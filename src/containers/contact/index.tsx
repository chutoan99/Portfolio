import FormContact from './form-contact'
import FormInfo from './form-info'

export default function Contact() {
	return (
		<section
			id='contact'
			className='
				bg-[#f1f5f9] px-[16px] py-[70px] 
				lg:py-[100px]
			'>
			<div
				className='
					flex flex-col justify-between h-full max-w-[1200px] mx-auto gap-[25px] 
					sm:gap-[30px] sm:mt-[20px] sm:py-5 
					md:flex-row
				'>
				<FormInfo />
				<FormContact />
			</div>
		</section>
	)
}
