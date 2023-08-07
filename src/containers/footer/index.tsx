export default function Footer() {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6022.901875674484!2d106.68264261990022!3d10.735216114031621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fa4d0ecc92f%3A0x8b8f57b85e977ed3!2zS2h1IGTDom4gY8awIFRydW5nIFPGoW4sIELDrG5oIEjGsG5nLCBCw6xuaCBDaMOhbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e1!3m2!1svi!2s!4v1689935738249!5m2!1svi!2s"
        height="650"
        loading="lazy"
        style={{ width: '100%' }}
      ></iframe>
      <footer
        id="footer"
        className="flex justify-center px-[5.33331rem] py-[6.66669rem] h-[15.25rem]"
        style={{ background: 'rgba(147, 107, 232, 0.05)' }}
      >
        <div className="w-[75rem] flex justify-between ">
          <ul className="items-center flex gap-[2.66669rem] list-none">
            <li className="list-none text-[1.33331rem] not-italic font-normal leading-[150%] capitalize hover:cursor-pointer hover:text-[#7d11f9] hover:transition-[0.3s]">
              <a href="#home" className=" text-[black] capitalize no-underline">
                home
              </a>
            </li>
            <li className="list-none text-[1.33331rem] not-italic font-normal leading-[150%] capitalize hover:cursor-pointer hover:text-[#7d11f9] hover:transition-[0.3s]">
              <a href="#about" className=" text-[black] capitalize no-underline">
                about
              </a>
            </li>
            <li className="list-none text-[1.33331rem] not-italic font-normal leading-[150%] capitalize hover:cursor-pointer hover:text-[#7d11f9] hover:transition-[0.3s]">
              <a href="#Projects" className=" text-[black] capitalize no-underline">
                projects
              </a>
            </li>
            <li className="list-none text-[1.33331rem] not-italic font-normal leading-[150%] capitalize hover:cursor-pointer hover:text-[#7d11f9] hover:transition-[0.3s]">
              <a href="#Experience" className=" text-[black] capitalize no-underline">
                experience
              </a>
            </li>
            <li className="list-none text-[1.33331rem] not-italic font-normal leading-[150%] capitalize hover:cursor-pointer hover:text-[#7d11f9] hover:transition-[0.3s]">
              <a href="#skills" className=" text-[black] capitalize no-underline">
                skills
              </a>
            </li>
            <li className="list-none text-[1.33331rem] not-italic font-normal leading-[150%] capitalize hover:cursor-pointer hover:text-[#7d11f9] hover:transition-[0.3s]">
              <a href="#contact" className=" text-[black] capitalize no-underline">
                contact
              </a>
            </li>
          </ul>
          <ul className="items-center flex justify-end gap-4 list-none">
            <li className=" w-8 h-8 shrink-0 hover:cursor-pointer hover:opacity-50 hover:transition-all hover:duration-[0.5s] hover:ease-[ease-in-out]">
              <svg xmlns="http://www.w3.org/2000/svg" width={33} height={33} viewBox="0 0 33 33" fill="none">
                <path
                  d="M22.6667 8.6665H18.6667C17.9303 8.6665 17.3333 9.26346 17.3333 9.99984V13.9998H22.6667C22.8183 13.9965 22.9621 14.067 23.0523 14.189C23.1424 14.311 23.1677 14.4692 23.12 14.6132L22.1333 17.5465C22.0424 17.8157 21.7908 17.9977 21.5067 17.9998H17.3333V27.9998C17.3333 28.368 17.0348 28.6665 16.6667 28.6665H13.3333C12.9651 28.6665 12.6667 28.368 12.6667 27.9998V17.9998H10.6667C10.2985 17.9998 10 17.7013 10 17.3332V14.6665C10 14.2984 10.2985 13.9998 10.6667 13.9998H12.6667V9.99984C12.6667 7.05432 15.0545 4.6665 18 4.6665H22.6667C23.0348 4.6665 23.3333 4.96498 23.3333 5.33317V7.99984C23.3333 8.36802 23.0348 8.6665 22.6667 8.6665Z"
                  fill="#7D11F9"
                />
              </svg>
            </li>
            <li className=" w-8 h-8 shrink-0 hover:cursor-pointer hover:opacity-50 hover:transition-all hover:duration-[0.5s] hover:ease-[ease-in-out]">
              <svg xmlns="http://www.w3.org/2000/svg" width={33} height={33} viewBox="0 0 33 33" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.0001 4.6665H11.3334C7.65152 4.6665 4.66675 7.65128 4.66675 11.3332V21.9998C4.66675 25.6817 7.65152 28.6665 11.3334 28.6665H22.0001C25.6819 28.6665 28.6667 25.6817 28.6667 21.9998V11.3332C28.6667 7.65128 25.6819 4.6665 22.0001 4.6665ZM26.3334 21.9998C26.3261 24.39 24.3902 26.3258 22.0001 26.3332H11.3334C8.94321 26.3258 7.0074 24.39 7.00008 21.9998V11.3332C7.0074 8.94297 8.94321 7.00716 11.3334 6.99984H22.0001C24.3902 7.00716 26.3261 8.94297 26.3334 11.3332V21.9998ZM23.0001 11.6665C23.7365 11.6665 24.3334 11.0695 24.3334 10.3332C24.3334 9.5968 23.7365 8.99984 23.0001 8.99984C22.2637 8.99984 21.6667 9.5968 21.6667 10.3332C21.6667 11.0695 22.2637 11.6665 23.0001 11.6665ZM16.6667 10.6665C13.353 10.6665 10.6667 13.3528 10.6667 16.6665C10.6667 19.9802 13.353 22.6665 16.6667 22.6665C19.9805 22.6665 22.6667 19.9802 22.6667 16.6665C22.6703 15.0741 22.0393 13.5459 20.9133 12.4199C19.7873 11.294 18.2591 10.663 16.6667 10.6665ZM13.0001 16.6665C13.0001 18.6916 14.6417 20.3332 16.6667 20.3332C18.6918 20.3332 20.3334 18.6916 20.3334 16.6665C20.3334 14.6414 18.6918 12.9998 16.6667 12.9998C14.6417 12.9998 13.0001 14.6414 13.0001 16.6665Z"
                  fill="#7D11F9"
                />
              </svg>
            </li>
            <li className=" w-8 h-8 shrink-0 hover:cursor-pointer hover:opacity-50 hover:transition-all hover:duration-[0.5s] hover:ease-[ease-in-out]">
              <svg xmlns="http://www.w3.org/2000/svg" width={33} height={33} viewBox="0 0 33 33" fill="none">
                <path
                  d="M28.6304 9.62304C28.0112 10.4491 27.2627 11.1696 26.4137 11.7569C26.4137 11.9726 26.4137 12.1884 26.4137 12.4162C26.4205 16.3346 24.8553 20.092 22.0691 22.8458C19.2827 25.5997 15.5083 27.1197 11.5921 27.065C9.32799 27.0726 7.0929 26.5557 5.0619 25.5546C4.95238 25.5068 4.88175 25.3985 4.88216 25.2789V25.147C4.88216 24.9749 5.02164 24.8354 5.1937 24.8354C7.41923 24.762 9.56536 23.9904 11.3285 22.6297C9.31404 22.589 7.50159 21.3957 6.66747 19.5608C6.62535 19.4606 6.63846 19.3456 6.7021 19.2574C6.76572 19.1693 6.87067 19.1208 6.979 19.1293C7.59123 19.1908 8.20958 19.1338 8.80027 18.9614C6.57652 18.4998 4.90562 16.6537 4.66648 14.3941C4.65799 14.2857 4.70656 14.1808 4.79467 14.117C4.88276 14.0534 4.99766 14.0402 5.09784 14.0825C5.69459 14.3458 6.33879 14.4845 6.99099 14.49C5.04246 13.2111 4.20082 10.7786 4.94207 8.56813C5.01859 8.35335 5.20242 8.19467 5.426 8.15043C5.64958 8.10617 5.87995 8.18288 6.03243 8.35236C8.66186 11.1508 12.2747 12.8185 16.1092 13.0036C16.0111 12.6116 15.9628 12.2089 15.9655 11.8048C16.0013 9.68613 17.3123 7.79879 19.2845 7.02633C21.2567 6.25389 23.4999 6.74921 24.964 8.28043C25.9619 8.09031 26.9267 7.75511 27.8276 7.28545C27.8936 7.24425 27.9773 7.24425 28.0433 7.28545C28.0845 7.35148 28.0845 7.4352 28.0433 7.50123C27.6069 8.50053 26.8697 9.33867 25.9345 9.89876C26.7535 9.80379 27.558 9.6106 28.3309 9.32336C28.396 9.27907 28.4815 9.27907 28.5465 9.32336C28.6011 9.34829 28.6419 9.39599 28.658 9.45373C28.6741 9.51148 28.664 9.57341 28.6304 9.62304Z"
                  fill="#7D11F9"
                />
              </svg>
            </li>
            <li className=" w-8 h-8 shrink-0 hover:cursor-pointer hover:opacity-50 hover:transition-all hover:duration-[0.5s] hover:ease-[ease-in-out]">
              <svg xmlns="http://www.w3.org/2000/svg" width={33} height={33} viewBox="0 0 33 33" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.33341 4.6665H26.0001C27.4729 4.6665 28.6667 5.86041 28.6667 7.33317V25.9998C28.6667 27.4726 27.4729 28.6665 26.0001 28.6665H7.33341C5.86065 28.6665 4.66675 27.4726 4.66675 25.9998V7.33317C4.66675 5.86041 5.86065 4.6665 7.33341 4.6665ZM11.3334 24.6665C11.7016 24.6665 12.0001 24.368 12.0001 23.9998V14.6665C12.0001 14.2984 11.7016 13.9998 11.3334 13.9998H9.33341C8.96523 13.9998 8.66675 14.2984 8.66675 14.6665V23.9998C8.66675 24.368 8.96523 24.6665 9.33341 24.6665H11.3334ZM10.3334 12.6665C9.22884 12.6665 8.33341 11.7711 8.33341 10.6665C8.33341 9.56193 9.22884 8.6665 10.3334 8.6665C11.438 8.6665 12.3334 9.56193 12.3334 10.6665C12.3334 11.7711 11.438 12.6665 10.3334 12.6665ZM24.0001 24.6665C24.3682 24.6665 24.6667 24.368 24.6667 23.9998V17.8665C24.7101 15.7476 23.1435 13.9392 21.0401 13.6798C19.5694 13.5455 18.1445 14.2324 17.3334 15.4665V14.6665C17.3334 14.2984 17.0349 13.9998 16.6667 13.9998H14.6667C14.2986 13.9998 14.0001 14.2984 14.0001 14.6665V23.9998C14.0001 24.368 14.2986 24.6665 14.6667 24.6665H16.6667C17.0349 24.6665 17.3334 24.368 17.3334 23.9998V18.9998C17.3334 17.8953 18.2289 16.9998 19.3334 16.9998C20.4379 16.9998 21.3334 17.8953 21.3334 18.9998V23.9998C21.3334 24.368 21.6319 24.6665 22.0001 24.6665H24.0001Z"
                  fill="#7D11F9"
                />
              </svg>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
