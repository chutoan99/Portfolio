export default function FormContact() {
	return (
		<form
			id='form'
			data-aos='fade-left'
			data-aos-anchor-placement='center-center'
			className='
        pb-0 flex-1 w-full h-full 
        sm:px-[ 1.25rem] 
        md:px-0
    '>
			<div className='flex flex-col items-start gap-[1.25rem]'>
				<div
					className='
        flex flex-col  justify-center items-start w-full h-full gap-[1.25rem]  
        sm:flex-row sm:h-[3.4375rem] 
        md:gap-[0.625rem] md:h-full 
        lg:flex-row
        '>
					{/* Name */}
					<div
						className='
                  flex items-center w-full h-full px-[1rem] py-[0.84375rem] bg-[rgba(147,107,232,0.05)] rounded-[0.625rem] 
                  hover:border hover:border-[#7d11f9] transition-all 
                  sm:h-[3.4375rem] 
                  lg:w-1/2
                '>
						<label id='form-name' />
						<input
							placeholder='Name'
							type='text'
							id='form-name'
							className='
                    flex flex-col justify-center w-full bg-transparent text-[#6c757d] bg-[unset] text-[1.2rem] border-none rounded-[0.625rem] 
                    focus:outline-2 focus:outline-transparent focus:outline-offset-2 focus:outline-none
                  '
						/>
					</div>
					{/* Email */}
					<div
						className='
                flex items-center w-full h-full px-[1rem] py-[0.84375rem] bg-[rgba(147,107,232,0.05)] rounded-[0.625rem] 
                hover:border hover:border-[#7d11f9] transition-all 
                sm:h-[3.4375rem] 
                lg:w-1/2
                '>
						<label id='form-Email' />
						<input
							placeholder='Email'
							type='text'
							id='form-Email'
							className='
                    flex flex-col justify-center w-full bg-transparent text-[#6c757d] bg-[unset] text-[1.2rem] border-none rounded-[0.625rem] 
                    focus:outline-2 focus:outline-transparent focus:outline-offset-2 focus:outline-none
                  '
						/>
					</div>
				</div>

				<div
					className='
            flex flex-col  justify-center items-start w-full h-full gap-[1.25rem]  
            sm:flex-row sm:h-[3.4375rem] 
            md:gap-[0.625rem] md:h-full 
            lg:flex-row
        '>
					{/* Subject */}
					<div
						className='
                  flex items-center w-full h-full px-[1rem] py-[0.84375rem] bg-[rgba(147,107,232,0.05)] rounded-[0.625rem] 
                  hover:border hover:border-[#7d11f9] transition-all 
                  sm:h-[3.4375rem] 
                  lg:w-1/2
                '>
						<label id='form-subject' />
						<input
							placeholder='Subject'
							type='text'
							id='form-subject'
							className='
                    flex flex-col justify-center w-full bg-transparent text-[#6c757d] bg-[unset] text-[1.2rem] border-none rounded-[0.625rem] 
                    focus:outline-2 focus:outline-transparent focus:outline-offset-2 focus:outline-none
                  '
						/>
					</div>
					{/* phone */}
					<div
						className='
                  flex items-center w-full h-full px-[1rem] py-[0.84375rem] bg-[rgba(147,107,232,0.05)] rounded-[0.625rem] 
                  hover:border hover:border-[#7d11f9] transition-all sm:h-[3.4375rem] lg:w-1/2
                '>
						<label id='form-phone' />
						<input
							placeholder='Phone'
							type='phone'
							id='form-phone'
							className='
                    flex flex-col justify-center w-full bg-transparent text-[#6c757d] bg-[unset] text-[1.2rem] border-none rounded-[0.625rem] 
                    focus:outline-2 focus:outline-transparent focus:outline-offset-2 focus:outline-none
                  '
						/>
					</div>
				</div>

				<div
					className='
            flex flex-col justify-center items-start w-full gap-[1.25rem] 
            sm:flex-row
            '>
					{/* Note */}
					<div
						className='
                  flex items-center w-full px-[1rem] py-[0.84375rem] rounded-[0.625rem] bg-[rgba(147,107,232,0.05)] 
                  hover:border hover:border-[#7d11f9] transition-all duration-150 ease-in-out
                '>
						<label id='form-content'></label>
						<textarea
							placeholder='Content'
							id='form-content'
							className='
                    flex w-full h-[8.75rem] bg-transparent text-[#6c757d] text-[1.2rem] font-normal border-none rounded-[0.625rem] resize-none 
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
                bg-[#7d11f9] border border-[#7d11f9] rounded-[0.625rem] px-[2.25rem] py-[0.8125rem] 
                hover:opacity-50 transition-all duration-500 ease-in-out 
                sm:justify-start
            '>
						<span className='text-[#ffffff] text-[1.125rem] leading-[1.75rem] font-normal capitalize text-center'>
							Send Message
						</span>
					</button>
				</div>
			</div>
		</form>
	)
}
