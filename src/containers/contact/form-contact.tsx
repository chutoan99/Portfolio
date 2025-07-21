export default function FormContact() {
	return (
		<form
			id='form'
			data-aos='fade-left'
			data-aos-anchor-placement='center-center'
			className='
				flex-1 w-full h-full p-[16px]
				sm:p-[20px] 
				md:px-[30px] md:py-[20px] rounded-2xl bg-white shadow-[0px_49px_49px_0px_rgba(31,13,64,0.10),_0px_0px_2px_0px_rgba(31,13,64,0.08)]
			'>
			<div className='flex flex-col items-start gap-[20px]'>
				<div
					className='
						flex flex-col  justify-center items-start w-full h-full gap-[20px]  
						sm:flex-row sm:h-[55px] 
						md:gap-[10px] md:h-full 
						lg:flex-row
					'>
					{/* Name */}
					<div
						className='
							flex items-center w-full h-full px-[16px] py-[13.5px] bg-[rgba(147,107,232,0.05)] rounded-[10px] 
							hover:border hover:border-[#7d11f9] transition-all 
							sm:h-[55px] 
							lg:w-1/2
						'>
						<label id='form-name' />
						<input
							placeholder='Name'
							type='text'
							id='form-name'
							className='
								flex flex-col justify-center w-full bg-transparent text-[#6c757d] bg-[unset] text-[19px] border-none rounded-[10px] 
								focus:outline-2 focus:outline-transparent focus:outline-offset-2 focus:outline-none
							'
						/>
					</div>
					{/* Email */}
					<div
						className='
							flex items-center w-full h-full px-[16px] py-[13.5px] bg-[rgba(147,107,232,0.05)] rounded-[10px] 
							hover:border hover:border-[#7d11f9] transition-all 
							sm:h-[55px] 
							lg:w-1/2
						'>
						<label id='form-Email' />
						<input
							placeholder='Email'
							type='text'
							id='form-Email'
							className='
								flex flex-col justify-center w-full bg-transparent text-[#6c757d] bg-[unset] text-[19px] border-none rounded-[10px] 
								focus:outline-2 focus:outline-transparent focus:outline-offset-2 focus:outline-none
							'
						/>
					</div>
				</div>

				<div
					className='
						flex flex-col  justify-center items-start w-full h-full gap-[20px]  
						sm:flex-row sm:h-[55px] 
						md:gap-[10px] md:h-full 
						lg:flex-row
					'>
					{/* Subject */}
					<div
						className='
							flex items-center w-full h-full px-[16px] py-[13.5px] bg-[rgba(147,107,232,0.05)] rounded-[10px] 
							hover:border hover:border-[#7d11f9] transition-all 
							sm:h-[55px] 
							lg:w-1/2
						'>
						<label id='form-subject' />
						<input
							placeholder='Subject'
							type='text'
							id='form-subject'
							className='
								flex flex-col justify-center w-full bg-transparent text-[#6c757d] bg-[unset] text-[19px] border-none rounded-[10px] 
								focus:outline-2 focus:outline-transparent focus:outline-offset-2 focus:outline-none
                  			'
						/>
					</div>
					{/* phone */}
					<div
						className='
							flex items-center w-full h-full px-[16px] py-[13.5px] bg-[rgba(147,107,232,0.05)] rounded-[10px] 
							hover:border hover:border-[#7d11f9] transition-all sm:h-[55px] lg:w-1/2
						'>
						<label id='form-phone' />
						<input
							placeholder='Phone'
							type='phone'
							id='form-phone'
							className='
								flex flex-col justify-center w-full bg-transparent text-[#6c757d] bg-[unset] text-[19px] border-none rounded-[10px] 
								focus:outline-2 focus:outline-transparent focus:outline-offset-2 focus:outline-none
							'
						/>
					</div>
				</div>

				<div
					className='
						flex flex-col justify-center items-start w-full gap-[20px] 
						sm:flex-row
					'>
					{/* Note */}
					<div
						className='
							flex items-center w-full px-[16px] py-[13.5px] rounded-[10px] bg-[rgba(147,107,232,0.05)] 
							hover:border hover:border-[#7d11f9] transition-all duration-150 ease-in-out
						'>
						<label id='form-content'></label>
						<textarea
							placeholder='Content'
							id='form-content'
							className='
								flex w-full h-[140px] bg-transparent text-[#6c757d] text-[19px] font-normal border-none rounded-[10px] resize-none 
								focus:outline-2 focus:outline-transparent focus:outline-offset-2 focus:outline-none
							'></textarea>
					</div>
				</div>

				{/* button */}
				<div
					className='
						flex flex-col justify-end w-full 
						sm:flex-row
					'>
					<button
						type='submit'
						className='
							inline-flex items-start justify-center  
							bg-[#7d11f9] border border-[#7d11f9] rounded-[10px] px-[36px] py-[13px] 
							hover:opacity-50 transition-all duration-500 ease-in-out 
							sm:justify-start
						'>
						<span className='text-[#ffffff] text-[18px] leading-[28px] font-normal capitalize text-center'>
							Send Message
						</span>
					</button>
				</div>
			</div>
		</form>
	)
}
