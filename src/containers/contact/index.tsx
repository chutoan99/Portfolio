export default function Contact() {
  return (
    <section id="contact" className="bg-[white] px-0 py-[6.25rem]">
      <div className="justify-between gap-[1.875rem] flex  max-w-[75rem] mx-auto my-0">
        <div className="flex w-[30.9775rem] flex-col items-start gap-10 pb-0">
          {/* phone */}
          <div className="w-[30.9775rem] h-[3.4375rem] flex gap-6">
            <div className="hover:opacity-50 hover:cursor-pointer hover:transition-[03s] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={22}
                viewBox="0 0 17 22"
                fill="none"
              >
                <path
                  d="M16.9943 15.2232C16.9943 15.4442 16.9541 15.7327 16.8736 16.0888C16.7932 16.4448 16.7087 16.7251 16.6202 16.9297C16.4513 17.3389 15.9607 17.7727 15.1482 18.2311C14.3921 18.6485 13.6441 18.8572 12.904 18.8572C12.6868 18.8572 12.4737 18.8429 12.2645 18.8142C12.0554 18.7856 11.8242 18.7344 11.5708 18.6607C11.3174 18.5871 11.1284 18.5278 11.0037 18.4827C10.879 18.4377 10.6558 18.3538 10.334 18.2311C10.0123 18.1083 9.81522 18.0346 9.74283 18.0101C8.95454 17.7236 8.25071 17.384 7.63134 16.9911C6.60979 16.3445 5.54801 15.4606 4.44601 14.3393C3.34402 13.218 2.47529 12.1377 1.83984 11.0982C1.45374 10.468 1.11992 9.75189 0.838388 8.94981C0.814257 8.87615 0.741863 8.67563 0.621207 8.34825C0.500551 8.02087 0.418102 7.79375 0.373861 7.66689C0.329621 7.54003 0.271303 7.34769 0.19891 7.08988C0.126516 6.83207 0.0762423 6.59676 0.0480891 6.38396C0.019936 6.17117 0.00585938 5.95428 0.00585938 5.73329C0.00585938 4.98032 0.210975 4.21916 0.621207 3.44981C1.07166 2.62317 1.49798 2.12392 1.90016 1.95204C2.10126 1.86201 2.37676 1.77608 2.72666 1.69423C3.07656 1.61238 3.36011 1.57146 3.57729 1.57146C3.6899 1.57146 3.77436 1.58374 3.83067 1.60829C3.97545 1.6574 4.18861 1.96841 4.47015 2.54133C4.55863 2.69683 4.67928 2.91782 4.83211 3.20428C4.98495 3.49073 5.12571 3.75059 5.25441 3.98385C5.38311 4.21711 5.50779 4.43605 5.62845 4.64066C5.65258 4.6734 5.72296 4.7757 5.8396 4.94758C5.95623 5.11945 6.0427 5.26473 6.09901 5.3834C6.15531 5.50208 6.18347 5.61871 6.18347 5.73329C6.18347 5.89698 6.06884 6.1016 5.8396 6.34713C5.61035 6.59267 5.36099 6.81774 5.09153 7.02236C4.82206 7.22697 4.5727 7.44386 4.34346 7.67303C4.11421 7.90219 3.99959 8.09044 3.99959 8.23776C3.99959 8.31142 4.01969 8.40349 4.05991 8.51399C4.10013 8.62448 4.13432 8.70837 4.16247 8.76566C4.19062 8.82295 4.24693 8.92117 4.33139 9.0603C4.41585 9.19944 4.4621 9.27719 4.47015 9.29356C5.08147 10.4148 5.78128 11.3765 6.56957 12.1786C7.35785 12.9807 8.303 13.6927 9.40499 14.3148C9.42108 14.323 9.49749 14.37 9.63424 14.4559C9.77098 14.5419 9.86751 14.5992 9.92381 14.6278C9.98012 14.6565 10.0626 14.6913 10.1712 14.7322C10.2797 14.7731 10.3702 14.7936 10.4426 14.7936C10.5874 14.7936 10.7724 14.6769 10.9977 14.4437C11.2229 14.2104 11.436 13.9567 11.6371 13.6825C11.8382 13.4083 12.0594 13.1546 12.3007 12.9214C12.5421 12.6881 12.7432 12.5715 12.904 12.5715C13.0166 12.5715 13.1313 12.6001 13.2479 12.6574C13.3645 12.7147 13.5073 12.8027 13.6762 12.9214C13.8451 13.04 13.9457 13.1116 13.9779 13.1362C14.179 13.259 14.3941 13.3858 14.6234 13.5168C14.8526 13.6477 15.108 13.791 15.3895 13.9465C15.6711 14.102 15.8883 14.2247 16.0411 14.3148C16.6042 14.6012 16.9098 14.8181 16.9581 14.9654C16.9822 15.0227 16.9943 15.1087 16.9943 15.2232Z"
                  fill="#7D11F9"
                />
              </svg>
            </div>
            <div className="w-[28.4775rem] flex flex-col justify-center">
              <span className="h-[1.8125rem] w-full inline-block text-[#3f3a64] text-xl not-italic font-semibold leading-6">
                Call Me
              </span>
              <span className="w-full inline-block h-[1.6875rem] text-[#696969] text-[1.1875rem] not-italic font-normal leading-7">
                +84 972 712 621
              </span>
            </div>
          </div>
          {/* email */}
          <div className="w-[30.9775rem] h-[3.4375rem] flex gap-6">
            <div className="hover:opacity-50 hover:cursor-pointer hover:transition-[03s]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
              >
                <g clipPath="url(#clip0_1_40)">
                  <path
                    d="M16.7143 15.1072V7.39293C16.5 7.634 16.269 7.85498 16.0212 8.05587C14.2266 9.43534 12.8002 10.567 11.7422 11.451C11.4007 11.7389 11.1228 11.9632 10.9085 12.124C10.6942 12.2847 10.4046 12.4471 10.0396 12.6111C9.67467 12.7752 9.33147 12.8572 9.01004 12.8572H9H8.98995C8.66853 12.8572 8.32533 12.7752 7.96038 12.6111C7.59542 12.4471 7.3058 12.2847 7.09152 12.124C6.87723 11.9632 6.59933 11.7389 6.25781 11.451C5.19978 10.567 3.77344 9.43534 1.97879 8.05587C1.73103 7.85498 1.5 7.634 1.28571 7.39293V15.1072C1.28571 15.1943 1.31752 15.2696 1.38114 15.3332C1.44475 15.3968 1.52009 15.4286 1.60714 15.4286H16.3929C16.4799 15.4286 16.5552 15.3968 16.6189 15.3332C16.6825 15.2696 16.7143 15.1943 16.7143 15.1072ZM16.7143 4.55029C16.7143 4.5369 16.7143 4.50007 16.7143 4.4398C16.7143 4.37953 16.7143 4.33433 16.7143 4.3042C16.7143 4.27407 16.7126 4.23054 16.7093 4.17362C16.7059 4.1167 16.6959 4.07485 16.6791 4.04806C16.6624 4.02128 16.644 3.99114 16.6239 3.95766C16.6038 3.92418 16.5737 3.89907 16.5335 3.88232C16.4933 3.86558 16.4464 3.85721 16.3929 3.85721H1.60714C1.52009 3.85721 1.44475 3.88902 1.38114 3.95264C1.31752 4.01625 1.28571 4.09159 1.28571 4.17864C1.28571 5.30364 1.7779 6.25453 2.76228 7.03132C4.05469 8.04918 5.39732 9.11056 6.79018 10.2155C6.83036 10.249 6.94754 10.3477 7.14174 10.5118C7.33594 10.6759 7.48996 10.8014 7.60379 10.8885C7.71763 10.9755 7.86663 11.081 8.05078 11.2049C8.23493 11.3288 8.40402 11.4208 8.55804 11.4811C8.71205 11.5414 8.85603 11.5715 8.98995 11.5715H9H9.01004C9.14397 11.5715 9.28795 11.5414 9.44196 11.4811C9.59598 11.4208 9.76507 11.3288 9.94922 11.2049C10.1334 11.081 10.2824 10.9755 10.3962 10.8885C10.51 10.8014 10.6641 10.6759 10.8583 10.5118C11.0525 10.3477 11.1696 10.249 11.2098 10.2155C12.6027 9.11056 13.9453 8.04918 15.2377 7.03132C15.5993 6.74337 15.9358 6.35666 16.2472 5.87116C16.5586 5.38567 16.7143 4.94538 16.7143 4.55029ZM18 4.17864V15.1072C18 15.5492 17.8426 15.9275 17.5279 16.2423C17.2132 16.557 16.8348 16.7144 16.3929 16.7144H1.60714C1.16518 16.7144 0.78683 16.557 0.472098 16.2423C0.157366 15.9275 0 15.5492 0 15.1072V4.17864C0 3.73668 0.157366 3.35833 0.472098 3.0436C0.78683 2.72886 1.16518 2.5715 1.60714 2.5715H16.3929C16.8348 2.5715 17.2132 2.72886 17.5279 3.0436C17.8426 3.35833 18 3.73668 18 4.17864Z"
                    fill="#7D11F9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_40">
                    <rect
                      width={18}
                      height={18}
                      fill="white"
                      transform="matrix(1 0 0 -1 0 18)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="w-[28.4775rem] flex flex-col justify-center">
              <span className="h-[1.8125rem] w-full inline-block text-[#3f3a64] text-xl not-italic font-semibold leading-6">
                Email Me
              </span>
              <span className="w-full inline-block h-[1.6875rem] text-[#696969] text-[1.1875rem] not-italic font-normal leading-7">
                truongvanchutoan1999@gmail.com
              </span>
            </div>
          </div>
          {/* github */}
          <div className="w-[30.9775rem] h-[3.4375rem] flex gap-6">
            <div className="hover:opacity-50 hover:cursor-pointer hover:transition-[03s]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M15.5 22.2402V18.2402C15.6392 16.9875 15.28 15.7304 14.5 14.7402C17.5 14.7402 20.5 12.7402 20.5 9.24023C20.58 7.99023 20.23 6.76023 19.5 5.74023C19.78 4.59023 19.78 3.39023 19.5 2.24023C19.5 2.24023 18.5 2.24023 16.5 3.74023C13.86 3.24023 11.14 3.24023 8.50004 3.74023C6.50004 2.24023 5.50004 2.24023 5.50004 2.24023C5.20004 3.39023 5.20004 4.59023 5.50004 5.74023C4.77191 6.75612 4.41851 7.99302 4.50004 9.24023C4.50004 12.7402 7.50004 14.7402 10.5 14.7402C10.11 15.2302 9.82004 15.7902 9.65004 16.3902C9.48004 16.9902 9.43004 17.6202 9.50004 18.2402V22.2402"
                  stroke="#7D11F9"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.5 18.2402C4.99 20.2402 4.5 16.2402 2.5 16.2402"
                  stroke="#7D11F9"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="w-[28.4775rem] flex flex-col justify-center">
              <span className="h-[1.8125rem] w-full inline-block text-[#3f3a64] text-xl not-italic font-semibold leading-6">
                Github Me
              </span>
              <span className="w-full inline-block h-[1.6875rem] text-[#696969] text-[1.1875rem] not-italic font-normal leading-7">
                https://github.com/chutoan99
              </span>
            </div>
          </div>
          {/* location  */}
          <div className="w-[30.9775rem] h-[3.4375rem] flex gap-6">
            <div className="hover:opacity-50 hover:cursor-pointer hover:transition-[03s]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={20}
                viewBox="0 0 12 20"
                fill="none"
              >
                <path
                  d="M8.11713 9.16305C8.11713 9.16305 8.26334 9.02354 8.55576 8.74452C8.84818 8.46551 8.99439 7.93165 8.99439 7.14296C8.99439 6.35427 8.70197 5.68091 8.11713 5.12287C7.53229 4.56484 6.82658 4.28582 6 4.28582C5.17343 4.28582 4.46772 4.56484 3.88288 5.12287C3.29804 5.68091 3.00562 6.35427 3.00562 7.14296C3.00562 7.93165 3.29804 8.60501 3.88288 9.16305C4.46772 9.72109 5.17343 10.0001 6 10.0001C6.82658 10.0001 7.53229 9.72109 8.11713 9.16305ZM11.9888 7.14296C11.9888 7.95397 11.8601 8.61989 11.6028 9.14073L7.34514 17.7791C7.22037 18.0247 7.03517 18.2181 6.78954 18.3595C6.5439 18.5008 6.28073 18.5715 6 18.5715C5.71928 18.5715 5.4561 18.5008 5.21047 18.3595C4.96483 18.2181 4.78353 18.0247 4.66656 17.7791L0.397225 9.14073C0.139895 8.61989 0.0112305 7.95397 0.0112305 7.14296C0.0112305 5.56558 0.596071 4.21885 1.76575 3.10278C2.93544 1.98671 4.34685 1.42867 6 1.42867C7.65315 1.42867 9.06457 1.98671 10.2343 3.10278C11.4039 4.21885 11.9888 5.56558 11.9888 7.14296Z"
                  fill="#7D11F9"
                />
              </svg>
            </div>
            <div className="w-[28.4775rem] flex flex-col justify-center">
              <span className="h-[1.8125rem] w-full inline-block text-[#3f3a64] text-xl not-italic font-semibold leading-6">
                Location
              </span>
              <span className="w-full inline-block h-[1.6875rem] text-[#696969] text-[1.1875rem] not-italic font-normal leading-7">
                District 8, Ho Chi Minh City
              </span>
            </div>
          </div>
        </div>
        <form id="form" className=" w-[40.2725rem] pb-0">
          <div className="flex flex-col items-start gap-5">
            <div className="flex w-[40.2725rem] h-[3.4375rem] justify-center items-start gap-5 shrink-0">
              {/* Name */}
              <div
                className=" flex w-[312.17px] h-[3.4375rem] items-center shrink-0 px-4 py-[0.84375rem] rounded-[0.625rem] hover:border hover:transition-[0.3s] hover:rounded-[0.625rem] hover:border-solid hover:border-[#7d11f9]"
                style={{ background: "rgba(147, 107, 232, 0.05)" }}
              >
                <label id="form-name" />
                <input
                  className=" focus:border-none bg-transparent border-none flex w-full h-7 flex-col justify-center shrink-0 bg-[unset] text-[#6c757d] text-[1.2rem] not-italic font-normal leading-[normal] border-[unset] focus:outline-none"
                  placeholder="Name"
                  type="text"
                  id="form-name"
                />
              </div>
              {/* Email */}
              <div
                className="flex w-[312.17px] h-[3.4375rem] items-center shrink-0 px-4 py-[0.84375rem] rounded-[0.625rem] hover:border hover:transition-[0.3s] hover:rounded-[0.625rem] hover:border-solid hover:border-[#7d11f9]"
                style={{ background: "rgba(147, 107, 232, 0.05)" }}
              >
                <label id="form-Email" />
                <input
                  className="focus:outline-none bg-transparent border-none flex w-full h-7 flex-col justify-center shrink-0 bg-[unset] text-[#6c757d] text-[1.2rem] not-italic font-normal leading-[normal] border-[unset] focus:outline-none"
                  placeholder="Email"
                  type="text"
                  id="form-Email"
                />
              </div>
            </div>
            <div className=" flex w-[40.2725rem] h-[3.4375rem] justify-center items-start gap-5 shrink-0">
              {/* Subject */}
              <div
                className="flex w-[312.17px] h-[3.4375rem] items-center shrink-0 px-4 py-[0.84375rem] rounded-[0.625rem] hover:border hover:transition-[0.3s] hover:rounded-[0.625rem] hover:border-solid hover:border-[#7d11f9]"
                style={{ background: "rgba(147, 107, 232, 0.05)" }}
              >
                <label id="form-subject" />
                <input
                  className="focus:outline-none bg-transparent border-none flex w-full h-7 flex-col justify-center shrink-0 bg-[unset] text-[#6c757d] text-[1.2rem] not-italic font-normal leading-[normal] border-[unset] focus:outline-none"
                  placeholder="Subject"
                  type="text"
                  id="form-subject"
                />
              </div>
              {/* Email */}
              <div
                className="flex w-[312.17px] h-[3.4375rem] items-center shrink-0 px-4 py-[0.84375rem] rounded-[0.625rem] hover:border hover:transition-[0.3s] hover:rounded-[0.625rem] hover:border-solid hover:border-[#7d11f9]"
                style={{ background: "rgba(147, 107, 232, 0.05)" }}
              >
                <label id="form-phone" />
                <input
                  className="focus:outline-none bg-transparent border-none flex w-full h-7 flex-col justify-center shrink-0 bg-[unset] text-[#6c757d] text-[1.2rem] not-italic font-normal leading-[normal] border-[unset] focus:outline-none"
                  placeholder="Phone"
                  type="phone"
                  id="form-phone"
                />
              </div>
            </div>
            <div className=" flex w-[40.2725rem] justify-center items-start gap-5 shrink-0">
              {/* Note */}
              <div
                className=" box-border flex w-full items-center shrink-0 px-4 py-[0.84375rem] rounded-[0.625rem] hover:border hover:transition-[0.3s] hover:rounded-[0.625rem] hover:border-solid hover:border-[#7d11f9] "
                style={{ background: "rgba(147, 107, 232, 0.05)" }}
              >
                <label id="form-content"></label>
                <textarea
                  className="w-full bg-transparent border-none flex h-[8.75rem] flex-col justify-center shrink-0 text-[#6c757d] text-[1.2rem] bg-[unset] not-italic font-normal leading-[normal] rounded-[0.625rem] border-[unset] focus:outline-none"
                  placeholder="Content"
                  id="form-content"
                />
              </div>
            </div>
            <div className=" flex w-full justify-end">
              <button
                type="submit"
                className="inline-flex items-start border pl-9 pr-[2.2375rem] py-[0.8125rem] rounded-[0.625rem] border-solid border-[#7d11f9] hover:cursor-pointer hover:opacity-50 hover:transition-[0.3s] bg-[#7d11f9]"
              >
                <span className="text-white text-center text-lg not-italic font-normal leading-7 capitalize">
                  Send Message
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
