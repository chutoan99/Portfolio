import { useState } from 'react'

export default function Header() {
	const [menuVisible, setMenuVisible] = useState(false)
	return (
		<header className='w-full flex justify-center'>
			<div
				className='
					fixed top-0 pt-[32px] select-none z-50 bg-gradient-to-b  to-transparent w-full max-w-[1200px] pr-[16px] 
					sm:pr-[15px] 
					md:pr-[20px] 
					lt:pr-0
				'>
				<div className='flex justify-between section-container'>
					<a href='#home' className='link'></a>
					<nav
						className={`outer-menu ${menuVisible ? 'menu-visible' : ''}`}>
						<button
							className='hamburger w-[24px] h-[24px] flex items-center justify-center link relative'
							onClick={setMenuVisible.bind(null, !menuVisible)}>
							<div className='relative flex-none w-full bg-black duration-300 flex items-center justify-center'></div>
						</button>
						<section
							className='menu fixed top-0 left-0 w-full h-full overflow-hidden invisible pointer-events-none flex items-center justify-center'
							style={{ visibility: 'hidden' }}>
							<div className='flex-none overflow-hidden flex items-center justify-center'>
								<div className='text-center opacity-0 overflow-y-auto flex flex-none justify-center items-center max-h-screen'>
									<ul
										className='list-none py-[16px] px-[0px] m-[0px] block max-h-screen'
										role='menu'>
										{[
											'Home',
											'About',
											'Experience',
											'Projects',
											'Skills',
											'Contact'
										].map((el) => (
											<li
												className='p-0 m-[24px] text-2xl block'
												key={el}
												role='menuitem'>
												<a
													className='
														link relative inline font-bold text-5xl 
														duration-300 hover:no-underline
													'
													href={`#${el.toLowerCase()}`}
													onClick={setMenuVisible.bind(
														null,
														false
													)}>
													{el}
												</a>
											</li>
										))}
									</ul>
								</div>
							</div>
						</section>
					</nav>
				</div>
			</div>
		</header>
	)
}
