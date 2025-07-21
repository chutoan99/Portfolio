interface ILabelProps {
	content: string
}
export default function Label({ content }: ILabelProps) {
	return (
		<section>
			<div
				className='
					bg-[rgba(147,107,232,0.15)] pt-[16px] pb-[16px] 
					sm:pt-[40px] sm:pb-[40px] 
					md:pt-[48px] md:pb-[48px]
				'>
				<div
					className='
						flex flex-col flex-shrink-0 justify-center text-center
						text-[#3f3a64] font-medium not-italic leading-[60px] text-[27px] 
						h-[73px] max-w-[1200px] mx-auto
						sm:text-[34px] 
						md:text-[50px]
					'>
					{content}
				</div>
			</div>
		</section>
	)
}
