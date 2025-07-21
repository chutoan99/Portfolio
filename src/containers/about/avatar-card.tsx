import styled from 'styled-components'
export const Card = styled.div`
	width: 100%;
	height: 100%;
	cursor: pointer;
	border-radius: 0.625rem;
	position: relative;
	overflow: hidden;

	@media (min-width: 1024px) {
		width: 23.12375rem;
	}

	@media (min-width: 1024px) {
		width: 23.12375rem;
		height: 30.5525rem;
	}

	.shine {
		display: none;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			to right,
			rgba(255, 255, 255, 0) 0,
			rgba(255, 255, 255, 0.8) 50%,
			rgba(255, 255, 255, 0) 100%
		);
		pointer-events: none;
		opacity: 0;
		z-index: 3;
		transform: translate(0, 0) rotate(0) skewX(30deg) skewY(0) scaleX(1)
			scaleY(1);
		animation: shine 0.75s linear 1;
	}

	&:hover .shine {
		display: block;
	}

	@keyframes shine {
		0% {
			left: -50%;
			opacity: 0;
		}
		50% {
			left: 25%;
			opacity: 0.5;
		}
		100% {
			left: 100%;
			opacity: 0;
		}
	}
`
export default function AvatarCard() {
	return (
		<Card>
			<div
				className='w-full h-[30.5525rem]'
				style={{
					background:
						"url('/assets/images/avatar.png') center / cover no-repeat",
					boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.13)'
				}}></div>
			<span className='shine'></span>
		</Card>
	)
}
