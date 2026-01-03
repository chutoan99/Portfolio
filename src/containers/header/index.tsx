import { useState } from 'react'
import styled from 'styled-components'

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
export const StyledOuterMenu = styled.nav<{ $visible: boolean }>`
	.hamburger {
		z-index: 1;
		backface-visibility: hidden;

		> div {
			height: 2px;
			transition: all 0.4s ease;
			display: flex;
			justify-content: center;
			position: relative;

			&::before,
			&::after {
				content: '';
				z-index: 1;
				position: absolute;
				left: 0;
				width: 100%;
				height: 2px;
				background: inherit;
				transition: all 0.4s ease;
			}

			&::before {
				top: -0.5rem;
			}

			&::after {
				top: 0.5rem;
			}
		}
	}

	.menu {
		pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
		visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
		backdrop-filter: ${({ $visible }) =>
			$visible ? 'blur(10px)' : 'none'};
		-webkit-backdrop-filter: ${({ $visible }) =>
			$visible ? 'blur(10px)' : 'none'};

		> div {
			width: 250vw;
			height: 250vw;
			transform: ${({ $visible }) =>
				$visible ? 'scale(1)' : 'scale(0)'};
			will-change: transform;
			border-radius: 50%;
			transition: all 0.4s ease;
			backface-visibility: hidden;
			background: rgba(0, 0, 0, 0.5);

			@supports not (backdrop-filter: blur(1px)) {
				background: rgba(0, 0, 0, 0.8);
			}

			> div {
				max-width: 90vw;
				opacity: ${({ $visible }) => ($visible ? 1 : 0)};
				transition: opacity 0.4s ease
					${({ $visible }) => ($visible ? '0.4s' : '0s')};
			}

			ul li a {
				background: linear-gradient(
					90deg,
					#ffffff 0%,
					#ffffff 50%,
					#8e4bda 51%,
					#7d11f9 100%
				);
				background-size: 200% 100%;
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;

				&:hover,
				&:focus {
					background-position: 100% 0;
				}
			}
		}
	}

	${({ $visible }) =>
		$visible &&
		`
    .hamburger > div {
      transform: rotate(135deg);
      background-color: white;

      &::before {
        top: 0;
        transform: rotate(90deg);
      }

      &::after {
        top: 0;
        transform: rotate(90deg);
        opacity: 0;
      }
    }

    &:hover {
      .hamburger > div {
        transform: rotate(225deg);
      }
    }
  `}
`
