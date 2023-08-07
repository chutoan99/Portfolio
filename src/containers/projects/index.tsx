export default function Projects() {
  return (
    <section
      id="Projects"
      className="flex flex-col justify-center items-center self-stretch px-20 py-24 bg-[#fff]"
    >
      <div className=" max-w-[75rem] mx-auto my-0">
        <div className="flex flex-col justify-center items-center gap-[3.125rem] self-stretch px-8 py-0">
          {/* 01 SHOPPE */}
          <div className="flex items-start gap-[3.125rem] w-[75rem] px-0 py-12 rounded-xl bg-[#fff]">
            <div
              className="grid "
              style={{ gridTemplateColumns: "5.5fr 4.5fr" }}
            >
              <div className="flex justify-center items-center flex-[1_0_0] self-stretch">
                <div className="flex justify-center center items-center w-full relative">
                  <div className="z-20 left-0 absolute top-[15px]">
                    <div className=" h-[198px]">
                      <img
                        src="./assets/images/iPad_Pro_Mockup.png"
                        alt=""
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </div>
                  <div className=" z-5 absolute">
                    <div className=" h-[401px]">
                      <img
                        src="./assets/images/iMac_27-inch Mockup.png"
                        alt=""
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </div>
                  <div className="z-20 right-0 absolute top-[-35px]">
                    <div className=" h-[246.67px]">
                      <img
                        src="./assets/images/New_Macbook_Pro_Mockup_Front_View.png"
                        alt=""
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 flex-[1_0_0] self-stretch rounded-[0.75rem_0rem_0rem_0.75rem] pl-[3.125rem]">
                <h3 className="w-[30rem] self-stretch overflow-hidden text-[#3f3a64] text-ellipsis text-xl not-italic font-semibold leading-7">
                  01. Shopee
                </h3>
                <p className="self-stretch text-[color:var(--gray-600,#4b5563)] text-[1.125rem] not-italic font-normal leading-6">
                  A meticulously cloned e-commerce platform inspired by Shopee.
                  Packed with a comprehensive suite of functions, it hosts tens
                  of thousands of categories, shops, and products, continuously
                  updated to keep pace with market trends. We've harnessed the
                  latest cutting-edge technologies to drive its development,
                  resulting in a user-friendly interface that promises an
                  intuitive and enjoyable shopping experience, currently
                  optimized for laptop usage.
                </p>
                <div className="flex items-center content-center gap-2 self-stretch flex-wrap">
                  <span className=" flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    React
                  </span>
                  <span className=" flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Node
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Typescript
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Express.js
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Mysql
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Taiwindcss
                  </span>

                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Sequelize
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Swagger
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Rest full
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Redux toolkit query
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Socket.io
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Cloudinary
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Jsonwebtoken
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Nodemailer
                  </span>
                </div>
                <div className="grid grid-cols-[repeat(2,1fr)] w-full gap-[3px] justify-between items-center px-0 py-6">
                  <div className="flex items-center shrink-0 h-9">
                    <a
                      href="https://shopee-client.vercel.app/"
                      className=" gap-3 flex justify-center shrink-0 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={21}
                        viewBox="0 0 20 21"
                        fill="none"
                      >
                        <path
                          d="M11.2867 9.15352C10.6041 8.47121 9.67846 8.08792 8.71334 8.08792C7.74821 8.08792 6.82259 8.47121 6.14 9.15352L3.56584 11.7269C2.88324 12.4095 2.49976 13.3353 2.49976 14.3006C2.49976 15.2659 2.88324 16.1918 3.56584 16.8744C4.24844 17.557 5.17424 17.9404 6.13959 17.9404C7.10493 17.9404 8.03074 17.557 8.71334 16.8744L10 15.5877"
                          stroke="#7D11F9"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.71338 11.7269C9.39597 12.4092 10.3216 12.7925 11.2867 12.7925C12.2518 12.7925 13.1775 12.4092 13.86 11.7269L16.4342 9.15352C17.1168 8.47092 17.5003 7.54512 17.5003 6.57977C17.5003 5.61443 17.1168 4.68862 16.4342 4.00602C15.7516 3.32342 14.8258 2.93994 13.8605 2.93994C12.8951 2.93994 11.9693 3.32342 11.2867 4.00602L10 5.29269"
                          stroke="#7D11F9"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="cursor-pointer text-gray-600 text-base not-italic font-normal leading-6">
                        Link demo web
                      </span>
                    </a>
                  </div>
                  <div className="flex items-center shrink-0 h-9 justify-end">
                    <a
                      href="https://server-shopee3.onrender.com/api/client/docs"
                      className=" gap-3 flex justify-center shrink-0 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={21}
                        viewBox="0 0 20 21"
                        fill="none"
                      >
                        <path
                          d="M11.2867 9.15352C10.6041 8.47121 9.67846 8.08792 8.71334 8.08792C7.74821 8.08792 6.82259 8.47121 6.14 9.15352L3.56584 11.7269C2.88324 12.4095 2.49976 13.3353 2.49976 14.3006C2.49976 15.2659 2.88324 16.1918 3.56584 16.8744C4.24844 17.557 5.17424 17.9404 6.13959 17.9404C7.10493 17.9404 8.03074 17.557 8.71334 16.8744L10 15.5877"
                          stroke="#7D11F9"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.71338 11.7269C9.39597 12.4092 10.3216 12.7925 11.2867 12.7925C12.2518 12.7925 13.1775 12.4092 13.86 11.7269L16.4342 9.15352C17.1168 8.47092 17.5003 7.54512 17.5003 6.57977C17.5003 5.61443 17.1168 4.68862 16.4342 4.00602C15.7516 3.32342 14.8258 2.93994 13.8605 2.93994C12.8951 2.93994 11.9693 3.32342 11.2867 4.00602L10 5.29269"
                          stroke="#7D11F9"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="cursor-pointer text-gray-600 text-base not-italic font-normal leading-6">
                        Link swagger api
                      </span>
                    </a>
                  </div>
                  <div className="flex items-center shrink-0 h-9">
                    <a
                      href="https://github.com/chutoan99/shopee-client"
                      className=" gap-3 flex justify-center shrink-0 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={21}
                        viewBox="0 0 20 21"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 0.68689C4.475 0.68689 0 5.16189 0 10.6869C0 15.1119 2.8625 18.8494 6.8375 20.1744C7.3375 20.2619 7.525 19.9619 7.525 19.6994C7.525 19.4619 7.5125 18.6744 7.5125 17.8369C5 18.2994 4.35 17.2244 4.15 16.6619C4.0375 16.3744 3.55 15.4869 3.125 15.2494C2.775 15.0619 2.275 14.5994 3.1125 14.5869C3.9 14.5744 4.4625 15.3119 4.65 15.6119C5.55 17.1244 6.9875 16.6994 7.5625 16.4369C7.65 15.7869 7.9125 15.3494 8.2 15.0994C5.975 14.8494 3.65 13.9869 3.65 10.1619C3.65 9.07439 4.0375 8.17439 4.675 7.47439C4.575 7.22439 4.225 6.19939 4.775 4.82439C4.775 4.82439 5.6125 4.56189 7.525 5.84939C8.325 5.62439 9.175 5.51189 10.025 5.51189C10.875 5.51189 11.725 5.62439 12.525 5.84939C14.4375 4.54939 15.275 4.82439 15.275 4.82439C15.825 6.19939 15.475 7.22439 15.375 7.47439C16.0125 8.17439 16.4 9.06189 16.4 10.1619C16.4 13.9994 14.0625 14.8494 11.8375 15.0994C12.2 15.4119 12.5125 16.0119 12.5125 16.9494C12.5125 18.2869 12.5 19.3619 12.5 19.6994C12.5 19.9619 12.6875 20.2744 13.1875 20.1744C15.1726 19.5042 16.8976 18.2283 18.1197 16.5264C19.3418 14.8244 19.9994 12.7821 20 10.6869C20 5.16189 15.525 0.68689 10 0.68689Z"
                          fill="#7D11F9"
                        />
                      </svg>
                      <span className="cursor-pointer text-gray-600 text-base not-italic font-normal leading-6">
                        Link source code frontend
                      </span>
                    </a>
                  </div>
                  <div className="flex items-center shrink-0 h-9 justify-end">
                    <a
                      href="https://github.com/chutoan99/shopee-server"
                      className=" gap-3 flex justify-center shrink-0 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={21}
                        viewBox="0 0 20 21"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 0.68689C4.475 0.68689 0 5.16189 0 10.6869C0 15.1119 2.8625 18.8494 6.8375 20.1744C7.3375 20.2619 7.525 19.9619 7.525 19.6994C7.525 19.4619 7.5125 18.6744 7.5125 17.8369C5 18.2994 4.35 17.2244 4.15 16.6619C4.0375 16.3744 3.55 15.4869 3.125 15.2494C2.775 15.0619 2.275 14.5994 3.1125 14.5869C3.9 14.5744 4.4625 15.3119 4.65 15.6119C5.55 17.1244 6.9875 16.6994 7.5625 16.4369C7.65 15.7869 7.9125 15.3494 8.2 15.0994C5.975 14.8494 3.65 13.9869 3.65 10.1619C3.65 9.07439 4.0375 8.17439 4.675 7.47439C4.575 7.22439 4.225 6.19939 4.775 4.82439C4.775 4.82439 5.6125 4.56189 7.525 5.84939C8.325 5.62439 9.175 5.51189 10.025 5.51189C10.875 5.51189 11.725 5.62439 12.525 5.84939C14.4375 4.54939 15.275 4.82439 15.275 4.82439C15.825 6.19939 15.475 7.22439 15.375 7.47439C16.0125 8.17439 16.4 9.06189 16.4 10.1619C16.4 13.9994 14.0625 14.8494 11.8375 15.0994C12.2 15.4119 12.5125 16.0119 12.5125 16.9494C12.5125 18.2869 12.5 19.3619 12.5 19.6994C12.5 19.9619 12.6875 20.2744 13.1875 20.1744C15.1726 19.5042 16.8976 18.2283 18.1197 16.5264C19.3418 14.8244 19.9994 12.7821 20 10.6869C20 5.16189 15.525 0.68689 10 0.68689Z"
                          fill="#7D11F9"
                        />
                      </svg>
                      <span className="cursor-pointer text-gray-600 text-base not-italic font-normal leading-6">
                        Link source code backend
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 02 SHOPEE ADMIN */}
          <div className="flex items-start gap-[3.125rem] w-[75rem] px-0 py-12 rounded-xl bg-[#fff]">
            <div
              className="grid "
              style={{ gridTemplateColumns: "4.5fr 5.5fr " }}
            >
              <div className="flex flex-col items-center gap-3 flex-[1_0_0] self-stretch rounded-[0.75rem_0rem_0rem_0.75rem] pr-[50px]">
                <h3 className="w-[30rem] self-stretch overflow-hidden text-[#3f3a64] text-ellipsis text-xl not-italic font-semibold leading-7">
                  04. Shopee Admin
                </h3>
                <p className="self-stretch text-[color:var(--gray-600,#4b5563)] text-[1.125rem] not-italic font-normal leading-6">
                  Presenting our Shopee-like project dashboard: a comprehensive
                  toolkit for seamless process management. Powered by the latest
                  technologies, it features a user-friendly interface inspired
                  by the trending design style of glassmorphism. Currently
                  tailored for laptops during its developmental phase, we're
                  dedicated to introducing more features in the near future to
                  enhance your experience.
                </p>
                <div className="flex items-center content-center gap-2 self-stretch flex-wrap">
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Angular
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Node
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Express
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Typescript
                  </span>

                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Ngrx
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Taiwindcss
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Ant Design
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Leaflet
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Sass
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Sequelize
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Mysql
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Rest full
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Swagger
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Socket.io
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Cloudinary
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Jsonwebtoken
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    nodemailer
                  </span>
                </div>
                <div className="grid grid-cols-[repeat(2,1fr)] w-full gap-[5px] justify-between items-center px-0 py-6">
                  <div className="flex items-center shrink-0 h-9">
                    <a
                      href="https://shopee-admin.vercel.app"
                      className=" gap-3 flex justify-center shrink-0 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={21}
                        viewBox="0 0 20 21"
                        fill="none"
                      >
                        <path
                          d="M11.2867 9.15352C10.6041 8.47121 9.67846 8.08792 8.71334 8.08792C7.74821 8.08792 6.82259 8.47121 6.14 9.15352L3.56584 11.7269C2.88324 12.4095 2.49976 13.3353 2.49976 14.3006C2.49976 15.2659 2.88324 16.1918 3.56584 16.8744C4.24844 17.557 5.17424 17.9404 6.13959 17.9404C7.10493 17.9404 8.03074 17.557 8.71334 16.8744L10 15.5877"
                          stroke="#7D11F9"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.71338 11.7269C9.39597 12.4092 10.3216 12.7925 11.2867 12.7925C12.2518 12.7925 13.1775 12.4092 13.86 11.7269L16.4342 9.15352C17.1168 8.47092 17.5003 7.54512 17.5003 6.57977C17.5003 5.61443 17.1168 4.68862 16.4342 4.00602C15.7516 3.32342 14.8258 2.93994 13.8605 2.93994C12.8951 2.93994 11.9693 3.32342 11.2867 4.00602L10 5.29269"
                          stroke="#7D11F9"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="cursor-pointer text-gray-600 text-base not-italic font-normal leading-6">
                        Link demo web
                      </span>
                    </a>
                  </div>
                  <div className="flex items-center shrink-0 h-9 justify-end">
                    <a
                      href="https://server-shopee3.onrender.com/api/admin/docs"
                      className=" gap-3 flex justify-center shrink-0 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={21}
                        viewBox="0 0 20 21"
                        fill="none"
                      >
                        <path
                          d="M11.2867 9.15352C10.6041 8.47121 9.67846 8.08792 8.71334 8.08792C7.74821 8.08792 6.82259 8.47121 6.14 9.15352L3.56584 11.7269C2.88324 12.4095 2.49976 13.3353 2.49976 14.3006C2.49976 15.2659 2.88324 16.1918 3.56584 16.8744C4.24844 17.557 5.17424 17.9404 6.13959 17.9404C7.10493 17.9404 8.03074 17.557 8.71334 16.8744L10 15.5877"
                          stroke="#7D11F9"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.71338 11.7269C9.39597 12.4092 10.3216 12.7925 11.2867 12.7925C12.2518 12.7925 13.1775 12.4092 13.86 11.7269L16.4342 9.15352C17.1168 8.47092 17.5003 7.54512 17.5003 6.57977C17.5003 5.61443 17.1168 4.68862 16.4342 4.00602C15.7516 3.32342 14.8258 2.93994 13.8605 2.93994C12.8951 2.93994 11.9693 3.32342 11.2867 4.00602L10 5.29269"
                          stroke="#7D11F9"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="cursor-pointer text-gray-600 text-base not-italic font-normal leading-6">
                        Link swagger api
                      </span>
                    </a>
                  </div>
                  <div className="flex items-center shrink-0 h-9">
                    <a
                      href="https://github.com/chutoan99/shopee-admin"
                      className=" gap-3 flex justify-center shrink-0 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={21}
                        viewBox="0 0 20 21"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 0.68689C4.475 0.68689 0 5.16189 0 10.6869C0 15.1119 2.8625 18.8494 6.8375 20.1744C7.3375 20.2619 7.525 19.9619 7.525 19.6994C7.525 19.4619 7.5125 18.6744 7.5125 17.8369C5 18.2994 4.35 17.2244 4.15 16.6619C4.0375 16.3744 3.55 15.4869 3.125 15.2494C2.775 15.0619 2.275 14.5994 3.1125 14.5869C3.9 14.5744 4.4625 15.3119 4.65 15.6119C5.55 17.1244 6.9875 16.6994 7.5625 16.4369C7.65 15.7869 7.9125 15.3494 8.2 15.0994C5.975 14.8494 3.65 13.9869 3.65 10.1619C3.65 9.07439 4.0375 8.17439 4.675 7.47439C4.575 7.22439 4.225 6.19939 4.775 4.82439C4.775 4.82439 5.6125 4.56189 7.525 5.84939C8.325 5.62439 9.175 5.51189 10.025 5.51189C10.875 5.51189 11.725 5.62439 12.525 5.84939C14.4375 4.54939 15.275 4.82439 15.275 4.82439C15.825 6.19939 15.475 7.22439 15.375 7.47439C16.0125 8.17439 16.4 9.06189 16.4 10.1619C16.4 13.9994 14.0625 14.8494 11.8375 15.0994C12.2 15.4119 12.5125 16.0119 12.5125 16.9494C12.5125 18.2869 12.5 19.3619 12.5 19.6994C12.5 19.9619 12.6875 20.2744 13.1875 20.1744C15.1726 19.5042 16.8976 18.2283 18.1197 16.5264C19.3418 14.8244 19.9994 12.7821 20 10.6869C20 5.16189 15.525 0.68689 10 0.68689Z"
                          fill="#7D11F9"
                        />
                      </svg>
                      <span className="cursor-pointer text-gray-600 text-base not-italic font-normal leading-6">
                        Link source code frontend
                      </span>
                    </a>
                  </div>
                  <div className="flex items-center shrink-0 h-9 justify-end">
                    <a
                      href="https://github.com/chutoan99/shopee-server"
                      className=" gap-3 flex justify-center shrink-0 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={21}
                        viewBox="0 0 20 21"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 0.68689C4.475 0.68689 0 5.16189 0 10.6869C0 15.1119 2.8625 18.8494 6.8375 20.1744C7.3375 20.2619 7.525 19.9619 7.525 19.6994C7.525 19.4619 7.5125 18.6744 7.5125 17.8369C5 18.2994 4.35 17.2244 4.15 16.6619C4.0375 16.3744 3.55 15.4869 3.125 15.2494C2.775 15.0619 2.275 14.5994 3.1125 14.5869C3.9 14.5744 4.4625 15.3119 4.65 15.6119C5.55 17.1244 6.9875 16.6994 7.5625 16.4369C7.65 15.7869 7.9125 15.3494 8.2 15.0994C5.975 14.8494 3.65 13.9869 3.65 10.1619C3.65 9.07439 4.0375 8.17439 4.675 7.47439C4.575 7.22439 4.225 6.19939 4.775 4.82439C4.775 4.82439 5.6125 4.56189 7.525 5.84939C8.325 5.62439 9.175 5.51189 10.025 5.51189C10.875 5.51189 11.725 5.62439 12.525 5.84939C14.4375 4.54939 15.275 4.82439 15.275 4.82439C15.825 6.19939 15.475 7.22439 15.375 7.47439C16.0125 8.17439 16.4 9.06189 16.4 10.1619C16.4 13.9994 14.0625 14.8494 11.8375 15.0994C12.2 15.4119 12.5125 16.0119 12.5125 16.9494C12.5125 18.2869 12.5 19.3619 12.5 19.6994C12.5 19.9619 12.6875 20.2744 13.1875 20.1744C15.1726 19.5042 16.8976 18.2283 18.1197 16.5264C19.3418 14.8244 19.9994 12.7821 20 10.6869C20 5.16189 15.525 0.68689 10 0.68689Z"
                          fill="#7D11F9"
                        />
                      </svg>
                      <span className="cursor-pointer text-gray-600 text-base not-italic font-normal leading-6">
                        Link source code backend
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center flex-[1_0_0] self-stretch">
                <div className="flex justify-center center items-center w-full relative">
                  <div className="z-5  absolute  left-0">
                    <div className=" h-[206px]">
                      <img
                        src="./assets/images/New_Macbook_Pro_Mockup_Front_View_(3).png"
                        alt=""
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </div>
                  <div className="z-20 absolute ">
                    <div className=" h-[264px]">
                      <img
                        src="./assets/images/New_Macbook_Pro Mockup_Front_View_(1).png"
                        alt=""
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </div>
                  <div className="z-5  absolute  right-0">
                    <div className=" h-[206px]">
                      <img
                        src="./assets/images/New_Macbook_Pro_Mockup_Front_View_(2).png"
                        alt=""
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 03 NESPRESSO */}
          <div className=" flex items-start gap-[3.125rem]w-[75rem] px-0 py-12 rounded-xl bg-[#fff]">
            <div
              className="grid "
              style={{ gridTemplateColumns: "5.5fr 4.5fr " }}
            >
              <div className="flex justify-center items-center flex-[1_0_0] self-stretch ">
                <div
                  className="flex justify-center center items-center "
                  style={{ position: "relative" }}
                >
                  <div className="z-5 translate-x-[50%]">
                    <div className="h-[258px] w-[116px]">
                      <img
                        src="./assets/images/iPhone_X_Side_View_Mockup_(2).png"
                        alt=""
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </div>
                  <div className="z-10 translate-x-[25%]">
                    <div className="h-[302px] w-[135px]">
                      <img
                        src="./assets/images/iPhone_X_Side_View_Mockup_(1).png"
                        alt=""
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </div>
                  <div className="z-20">
                    <div className="h-[351px] w-[176px]">
                      <img
                        src="./assets/images/iPhone_X_Mockup_Front_View.png"
                        alt=""
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </div>
                  <div className="z-10 translate-x-[-25%]">
                    <div className="h-[302px] w-[135px]">
                      <img
                        src="./assets/images/iPhone_X_Side_View_Mockup_(4).png"
                        alt=""
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </div>
                  <div className="z-5 translate-x-[-50%]">
                    <div className="h-[258px] w-[116px]">
                      <img
                        src="./assets/images/iPhone_X_Side_View_Mockup_(3).png"
                        alt=""
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 flex-[1_0_0] self-stretch rounded-[0.75rem_0rem_0rem_0.75rem] pl-[3.125rem]">
                <h3 className="w-[30rem] self-stretch overflow-hidden text-[#3f3a64] text-ellipsis text-xl not-italic font-semibold leading-7">
                  03. Nespresso Vietnam
                </h3>
                <p className="self-stretch text-[color:var(--gray-600,#4b5563)] text-[1.125rem] not-italic font-normal leading-6">
                  My freelance project, crafted for a Vietnamese client,
                  involving the transformation of a Figma design into a fully
                  functional website. I have reimagined the Nespresso website
                  exclusively for the Vietnamese market, incorporating the
                  latest cutting-edge technologies to ensure its development.
                  This creation is designed to seamlessly adapt across a wide
                  range of contemporary devices, providing a modern and
                  accessible experience for users.
                </p>
                <div className="flex items-center content-center gap-2 self-stretch flex-wrap">
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Vue
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Typescript
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Sass
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Storybook
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Figma
                  </span>
                </div>
                <div className="grid grid-cols-[repeat(2,1fr)] w-full gap-[5px] justify-between items-center px-0 py-6">
                  <div className="flex items-center shrink-0 h-9">
                    <a
                      href="https://nespresso-client.vercel.app"
                      className=" gap-3 flex justify-center shrink-0 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={21}
                        viewBox="0 0 20 21"
                        fill="none"
                      >
                        <path
                          d="M11.2867 9.15352C10.6041 8.47121 9.67846 8.08792 8.71334 8.08792C7.74821 8.08792 6.82259 8.47121 6.14 9.15352L3.56584 11.7269C2.88324 12.4095 2.49976 13.3353 2.49976 14.3006C2.49976 15.2659 2.88324 16.1918 3.56584 16.8744C4.24844 17.557 5.17424 17.9404 6.13959 17.9404C7.10493 17.9404 8.03074 17.557 8.71334 16.8744L10 15.5877"
                          stroke="#7D11F9"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.71338 11.7269C9.39597 12.4092 10.3216 12.7925 11.2867 12.7925C12.2518 12.7925 13.1775 12.4092 13.86 11.7269L16.4342 9.15352C17.1168 8.47092 17.5003 7.54512 17.5003 6.57977C17.5003 5.61443 17.1168 4.68862 16.4342 4.00602C15.7516 3.32342 14.8258 2.93994 13.8605 2.93994C12.8951 2.93994 11.9693 3.32342 11.2867 4.00602L10 5.29269"
                          stroke="#7D11F9"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="cursor-pointer text-gray-600 text-base not-italic font-normal leading-6">
                        Link demo web
                      </span>
                    </a>
                  </div>
                  <div className="flex items-center shrink-0 h-9">
                    <a
                      href="https://github.com/chutoan99/Nespresso"
                      className=" gap-3 flex justify-center shrink-0 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={21}
                        viewBox="0 0 20 21"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 0.68689C4.475 0.68689 0 5.16189 0 10.6869C0 15.1119 2.8625 18.8494 6.8375 20.1744C7.3375 20.2619 7.525 19.9619 7.525 19.6994C7.525 19.4619 7.5125 18.6744 7.5125 17.8369C5 18.2994 4.35 17.2244 4.15 16.6619C4.0375 16.3744 3.55 15.4869 3.125 15.2494C2.775 15.0619 2.275 14.5994 3.1125 14.5869C3.9 14.5744 4.4625 15.3119 4.65 15.6119C5.55 17.1244 6.9875 16.6994 7.5625 16.4369C7.65 15.7869 7.9125 15.3494 8.2 15.0994C5.975 14.8494 3.65 13.9869 3.65 10.1619C3.65 9.07439 4.0375 8.17439 4.675 7.47439C4.575 7.22439 4.225 6.19939 4.775 4.82439C4.775 4.82439 5.6125 4.56189 7.525 5.84939C8.325 5.62439 9.175 5.51189 10.025 5.51189C10.875 5.51189 11.725 5.62439 12.525 5.84939C14.4375 4.54939 15.275 4.82439 15.275 4.82439C15.825 6.19939 15.475 7.22439 15.375 7.47439C16.0125 8.17439 16.4 9.06189 16.4 10.1619C16.4 13.9994 14.0625 14.8494 11.8375 15.0994C12.2 15.4119 12.5125 16.0119 12.5125 16.9494C12.5125 18.2869 12.5 19.3619 12.5 19.6994C12.5 19.9619 12.6875 20.2744 13.1875 20.1744C15.1726 19.5042 16.8976 18.2283 18.1197 16.5264C19.3418 14.8244 19.9994 12.7821 20 10.6869C20 5.16189 15.525 0.68689 10 0.68689Z"
                          fill="#7D11F9"
                        />
                      </svg>
                      <span className="cursor-pointer text-gray-600 text-base not-italic font-normal leading-6">
                        Link source code
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 04 PHONG TRO */}
          <div className="flex items-start gap-[3.125rem] w-[75rem] px-0 py-12 rounded-xl bg-[#fff]">
            <div
              className="grid "
              style={{ gridTemplateColumns: "4.5fr 5.5fr " }}
            >
              <div className="flex flex-col items-center gap-3 flex-[1_0_0] self-stretch rounded-[0.75rem_0rem_0rem_0.75rem] pr-[3.125rem]">
                <h3 className="w-[30rem] self-stretch overflow-hidden text-[#3f3a64] text-ellipsis text-xl not-italic font-semibold leading-7">
                  02. PhongTro
                </h3>
                <p className="self-stretch text-[color:var(--gray-600,#4b5563)] text-[1.125rem] not-italic font-normal leading-6">
                  A complete revamp of a room rental website. This undertaking
                  encompasses a full range of functionalities, underpinned by a
                  constant influx of listing data collected through the use of
                  "puppeteer" technology, resulting in a continuously updated
                  collection of thousands of listings. Fueled by the latest
                  cutting-edge technologies, the development focuses on laptop
                  compatibility. As we look ahead, you can expect a steady
                  stream of innovative features to enhance user experience.
                </p>
                <div className="flex items-center content-center gap-2 self-stretch flex-wrap">
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Next.js
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Nest.js
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Typescript
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Graphql
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    React query
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Css
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Postgresql
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Cloudinary
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Typeorm
                  </span>
                  <span className="flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]">
                    Puppeteer
                  </span>
                </div>
                <div className="grid grid-cols-[repeat(2,1fr)] w-full gap-[5px] justify-between items-center px-0 py-6">
                  <div className="flex items-center shrink-0 h-9">
                    <a
                      href="https://phongtro-client.vercel.app"
                      className=" gap-3 flex justify-center shrink-0 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={21}
                        viewBox="0 0 20 21"
                        fill="none"
                      >
                        <path
                          d="M11.2867 9.15352C10.6041 8.47121 9.67846 8.08792 8.71334 8.08792C7.74821 8.08792 6.82259 8.47121 6.14 9.15352L3.56584 11.7269C2.88324 12.4095 2.49976 13.3353 2.49976 14.3006C2.49976 15.2659 2.88324 16.1918 3.56584 16.8744C4.24844 17.557 5.17424 17.9404 6.13959 17.9404C7.10493 17.9404 8.03074 17.557 8.71334 16.8744L10 15.5877"
                          stroke="#7D11F9"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.71338 11.7269C9.39597 12.4092 10.3216 12.7925 11.2867 12.7925C12.2518 12.7925 13.1775 12.4092 13.86 11.7269L16.4342 9.15352C17.1168 8.47092 17.5003 7.54512 17.5003 6.57977C17.5003 5.61443 17.1168 4.68862 16.4342 4.00602C15.7516 3.32342 14.8258 2.93994 13.8605 2.93994C12.8951 2.93994 11.9693 3.32342 11.2867 4.00602L10 5.29269"
                          stroke="#7D11F9"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="cursor-pointer text-gray-600 text-base not-italic font-normal leading-6">
                        Link demo web
                      </span>
                    </a>
                  </div>
                  <div className="flex items-center shrink-0 h-9 justify-end">
                    <a
                      href="https://server-phongtro.onrender.com/graphql"
                      className=" gap-3 flex justify-center shrink-0 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={21}
                        viewBox="0 0 20 21"
                        fill="none"
                      >
                        <path
                          d="M11.2867 9.15352C10.6041 8.47121 9.67846 8.08792 8.71334 8.08792C7.74821 8.08792 6.82259 8.47121 6.14 9.15352L3.56584 11.7269C2.88324 12.4095 2.49976 13.3353 2.49976 14.3006C2.49976 15.2659 2.88324 16.1918 3.56584 16.8744C4.24844 17.557 5.17424 17.9404 6.13959 17.9404C7.10493 17.9404 8.03074 17.557 8.71334 16.8744L10 15.5877"
                          stroke="#7D11F9"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.71338 11.7269C9.39597 12.4092 10.3216 12.7925 11.2867 12.7925C12.2518 12.7925 13.1775 12.4092 13.86 11.7269L16.4342 9.15352C17.1168 8.47092 17.5003 7.54512 17.5003 6.57977C17.5003 5.61443 17.1168 4.68862 16.4342 4.00602C15.7516 3.32342 14.8258 2.93994 13.8605 2.93994C12.8951 2.93994 11.9693 3.32342 11.2867 4.00602L10 5.29269"
                          stroke="#7D11F9"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="cursor-pointer text-gray-600 text-base not-italic font-normal leading-6">
                        Link graphql api
                      </span>
                    </a>
                  </div>
                  <div className="flex items-center shrink-0 h-9">
                    <a
                      href="https://github.com/chutoan99/phongtro-client"
                      className=" gap-3 flex justify-center shrink-0 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={21}
                        viewBox="0 0 20 21"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 0.68689C4.475 0.68689 0 5.16189 0 10.6869C0 15.1119 2.8625 18.8494 6.8375 20.1744C7.3375 20.2619 7.525 19.9619 7.525 19.6994C7.525 19.4619 7.5125 18.6744 7.5125 17.8369C5 18.2994 4.35 17.2244 4.15 16.6619C4.0375 16.3744 3.55 15.4869 3.125 15.2494C2.775 15.0619 2.275 14.5994 3.1125 14.5869C3.9 14.5744 4.4625 15.3119 4.65 15.6119C5.55 17.1244 6.9875 16.6994 7.5625 16.4369C7.65 15.7869 7.9125 15.3494 8.2 15.0994C5.975 14.8494 3.65 13.9869 3.65 10.1619C3.65 9.07439 4.0375 8.17439 4.675 7.47439C4.575 7.22439 4.225 6.19939 4.775 4.82439C4.775 4.82439 5.6125 4.56189 7.525 5.84939C8.325 5.62439 9.175 5.51189 10.025 5.51189C10.875 5.51189 11.725 5.62439 12.525 5.84939C14.4375 4.54939 15.275 4.82439 15.275 4.82439C15.825 6.19939 15.475 7.22439 15.375 7.47439C16.0125 8.17439 16.4 9.06189 16.4 10.1619C16.4 13.9994 14.0625 14.8494 11.8375 15.0994C12.2 15.4119 12.5125 16.0119 12.5125 16.9494C12.5125 18.2869 12.5 19.3619 12.5 19.6994C12.5 19.9619 12.6875 20.2744 13.1875 20.1744C15.1726 19.5042 16.8976 18.2283 18.1197 16.5264C19.3418 14.8244 19.9994 12.7821 20 10.6869C20 5.16189 15.525 0.68689 10 0.68689Z"
                          fill="#7D11F9"
                        />
                      </svg>
                      <span className="cursor-pointer text-gray-600 text-base not-italic font-normal leading-6">
                        Link source code frontend
                      </span>
                    </a>
                  </div>
                  <div className="flex items-center shrink-0 h-9 justify-end">
                    <a
                      href="https://github.com/chutoan99/phongtro-server"
                      className=" gap-3 flex justify-center shrink-0 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={21}
                        viewBox="0 0 20 21"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 0.68689C4.475 0.68689 0 5.16189 0 10.6869C0 15.1119 2.8625 18.8494 6.8375 20.1744C7.3375 20.2619 7.525 19.9619 7.525 19.6994C7.525 19.4619 7.5125 18.6744 7.5125 17.8369C5 18.2994 4.35 17.2244 4.15 16.6619C4.0375 16.3744 3.55 15.4869 3.125 15.2494C2.775 15.0619 2.275 14.5994 3.1125 14.5869C3.9 14.5744 4.4625 15.3119 4.65 15.6119C5.55 17.1244 6.9875 16.6994 7.5625 16.4369C7.65 15.7869 7.9125 15.3494 8.2 15.0994C5.975 14.8494 3.65 13.9869 3.65 10.1619C3.65 9.07439 4.0375 8.17439 4.675 7.47439C4.575 7.22439 4.225 6.19939 4.775 4.82439C4.775 4.82439 5.6125 4.56189 7.525 5.84939C8.325 5.62439 9.175 5.51189 10.025 5.51189C10.875 5.51189 11.725 5.62439 12.525 5.84939C14.4375 4.54939 15.275 4.82439 15.275 4.82439C15.825 6.19939 15.475 7.22439 15.375 7.47439C16.0125 8.17439 16.4 9.06189 16.4 10.1619C16.4 13.9994 14.0625 14.8494 11.8375 15.0994C12.2 15.4119 12.5125 16.0119 12.5125 16.9494C12.5125 18.2869 12.5 19.3619 12.5 19.6994C12.5 19.9619 12.6875 20.2744 13.1875 20.1744C15.1726 19.5042 16.8976 18.2283 18.1197 16.5264C19.3418 14.8244 19.9994 12.7821 20 10.6869C20 5.16189 15.525 0.68689 10 0.68689Z"
                          fill="#7D11F9"
                        />
                      </svg>
                      <span className="cursor-pointer text-gray-600 text-base not-italic font-normal leading-6">
                        Link source code backend
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center flex-[1_0_0] self-stretch">
                <div className="flex justify-center center items-center w-full relative">
                  <div className="left-0 absolute z-20 translate-x-[-4%] translate-y-[28%]">
                    <div className=" w-[393px] h-[232px]">
                      <img
                        src="./assets/images/15_ Macbook_Pro_Mockup_Left_View.png"
                        alt=""
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </div>
                  <div className="right-0 absolute z-5">
                    <div className=" w-[371px] h-[334px]">
                      <img
                        src="./assets/images/Macbook_Pro_Mockup.png"
                        alt=""
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
