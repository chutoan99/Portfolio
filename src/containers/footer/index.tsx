export default function Footer() {
	return (
		<footer
			className='
				bg-[rgba(147,107,232,0.05)] flex justify-center h-full 
				pt-[50px] pb-[50px] px-[16px]
				sm:h-[244px] sm:p-[20px]
			'>
			<div
				className='
					flex flex-col justify-between gap-[25px] w-full max-w-[1200px]
					sm:flex-row sm:items-center
				'>
				<ul
					className='
						flex flex-col justify-start items-start gap-[10px] w-full list-none
						sm:flex-row 
						md:gap-[15px] 
						lg:items-center
					'>
					<li>
						<a
							href='#home'
							className='
								text-[21px] font-normal leading-[150%] capitalize text-black 
								hover:text-[#7D11F9] transition duration-150
							'>
							home
						</a>
					</li>
					<li>
						<a
							href='#about'
							className='
								text-[21px] font-normal leading-[150%] capitalize text-black 
								hover:text-[#7D11F9] transition duration-150
							'>
							about
						</a>
					</li>
					<li>
						<a
							href='#projects'
							className='
								text-[21px] font-normal leading-[150%] capitalize text-black 
								hover:text-[#7D11F9] transition duration-150
							'>
							projects
						</a>
					</li>
					<li>
						<a
							href='#skills'
							className='
								text-[21px] font-normal leading-[150%] capitalize text-black 
								hover:text-[#7D11F9] transition duration-150
							'>
							skills
						</a>
					</li>
					<li>
						<a
							href='#contact'
							className='
								text-[21px] font-normal leading-[150%] capitalize text-black 
								hover:text-[#7D11F9] transition duration-150
							'>
							contact
						</a>
					</li>
				</ul>
				<ul
					className='
						flex gap-[15px] justify-start items-center list-none
						md:justify-end
					'>
					{/* facebook */}
					<li
						className='
							w-[24px] h-[24px] shrink-0 
							hover:opacity-70 transition duration-500 cursor-pointer
						'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width={24}
							height={24}
							viewBox='0 0 20 20'>
							<path
								fill='#7D11F9'
								fillRule='evenodd'
								d='M18.896 0H1.104C.494 0 0 .494 0 1.104v17.792C0 19.506.494 20 1.104 20h9.578v-7.745H8.076V9.237h2.606V7.01c0-2.584 1.578-3.99 3.883-3.99c1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.596-1.496 1.47v1.927h2.989l-.39 3.018h-2.6V20h5.097c.61 0 1.104-.494 1.104-1.104V1.104C20 .494 19.506 0 18.896 0'></path>
						</svg>
					</li>
					{/* linkedin */}
					<li
						className='
							w-[24px] h-[24px] shrink-0 
							hover:opacity-70 transition duration-500 cursor-pointer
						'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width={24}
							height={24}
							viewBox='0 0 16 16'>
							<rect width={16} height={16} fill='none' />
							<path
								fill='#7D11F9'
								d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z'
							/>
						</svg>
					</li>
					{/* github */}
					<li
						className='
							w-[24px] h-[24px] shrink-0 
							hover:opacity-70 transition duration-500 cursor-pointer
						'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width={24}
							height={24}
							viewBox='0 0 1536 1536'>
							<path
								fill='#7D11F9'
								d='M519 1072q4-6-3-13q-9-7-14-2q-4 6 3 13q9 7 14 2m-28-41q-5-7-12-4q-6 4 0 12q7 8 12 5q6-4 0-13m-41-40q2-4-5-8q-7-2-8 2q-3 5 4 8q8 2 9-2m21 23q2-1 1.5-4.5t-3.5-5.5q-6-7-10-3t1 11q6 6 11 2m86 75q2-7-9-11q-9-3-13 4q-2 7 9 11q9 3 13-4m42 3q0-8-12-8q-10 0-10 8t11 8t11-8m39-7q-2-7-13-5t-9 9q2 8 12 6t10-10m642-317q0-212-150-362T768 256T406 406T256 768q0 167 98 300.5T606 1254q18 3 26.5-5t8.5-20q0-52-1-95q-6 1-15.5 2.5t-35.5 2t-48-4t-43.5-20T468 1073q-23-59-57-74q-2-1-4.5-3.5l-8-8l-7-9.5l4-7.5L415 967q6 0 15 2t30 15.5t33 35.5q16 28 37.5 42t43.5 14t38-3.5t30-9.5q7-47 33-69q-49-6-86-18.5t-73-39t-55.5-76T441 741q0-79 53-137q-24-62 5-136q19-6 54.5 7.5T614 505l26 16q58-17 128-17t128 17q11-7 28.5-18t55.5-26t57-9q29 74 5 136q53 58 53 137q0 57-14 100.5t-35.5 70T992 956t-62.5 26t-68.5 12q35 31 35 95q0 40-.5 89t-.5 51q0 12 8.5 20t26.5 5q154-52 252-185.5t98-300.5m256-480v960q0 119-84.5 203.5T1248 1536H288q-119 0-203.5-84.5T0 1248V288Q0 169 84.5 84.5T288 0h960q119 0 203.5 84.5T1536 288'></path>
						</svg>
					</li>
					{/* gitlab */}
					<li
						className='
							w-[24px] h-[24px] shrink-0 
							hover:opacity-70 transition duration-500 cursor-pointer
						'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width={24}
							height={24}
							viewBox='0 0 448 512'>
							<path
								fill='#7D11F9'
								d='M0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96m337.5 12.5l44.6 116.4l.4 1.2c5.6 16.8 7.2 35.2 2.3 52.5c-5 17.2-15.4 32.4-29.8 43.3l-.2.1l-68.4 51.2l-54.1 40.9c-.5.2-1.1.5-1.7.8c-2 1-4.4 2-6.7 2c-3 0-6.8-1.8-8.3-2.8l-54.2-40.9l-67.9-50.9l-.4-.3l-.2-.1c-14.3-10.8-24.8-26-29.7-43.3s-4.2-35.7 2.2-52.5l.5-1.2l44.7-116.4c.9-2.3 2.5-4.3 4.5-5.6c1.6-1 3.4-1.6 5.2-1.8c1.3-.7 2.1-.4 3.4.1c.6.2 1.2.5 2 .7c1 .4 1.6.9 2.4 1.5c.6.4 1.2 1 2.1 1.5c1.2 1.4 2.2 3 2.7 4.8l29.2 92.2H285l30.2-92.2c.5-1.8 1.4-3.4 2.6-4.8s2.8-2.4 4.5-3.1c1.7-.6 3.6-.9 5.4-.7s3.6.8 5.2 1.8c2 1.3 3.7 3.3 4.6 5.6'></path>
						</svg>
					</li>
					{/* bitbucket */}
					<li
						className='
							w-[24px] h-[24px] shrink-0 
							hover:opacity-70 transition duration-500 cursor-pointer
						'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width={24}
							height={24}
							viewBox='0 0 24 24'>
							<path
								fill='#7D11F9'
								fillRule='evenodd'
								d='M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm-.157 4.63h14.314c.21 0 .37.188.34.395l-.611 4.07h-9.29l.687 4.465h3.434l.528-3.434h4.486l-1.192 7.95a.34.34 0 0 1-.34.292H6.801a.34.34 0 0 1-.34-.293L4.504 6.025a.343.343 0 0 1 .34-.394Z'
								clipRule='evenodd'></path>
						</svg>
					</li>
				</ul>
			</div>
		</footer>
	)
}
