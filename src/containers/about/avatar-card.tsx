export default function AvatarCard() {
	return (
		<div className='avatar-card'>
			<div
				className='w-full h-[489px]'
				style={{
					background:
						"url('/assets/images/avatar.png') center / cover no-repeat",
					boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.13)'
				}}></div>
			<span className='shine'></span>
		</div>
	)
}
