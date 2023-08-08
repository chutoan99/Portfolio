import { PROJECTS } from '../../shared/contants';
export default function Projects() {
  return (
    <section id="Projects" className="flex flex-col justify-center items-center self-stretch px-20 py-24 bg-[#fff]">
      <div className=" max-w-[75rem] mx-auto my-0">
        <div className="flex flex-col justify-center items-center gap-[3.125rem] self-stretch px-8 py-0">
          {/* 01 SHOPPE */}
          <div className="flex items-start gap-[3.125rem] w-[75rem] px-0 py-12 rounded-xl bg-[#fff]">
            <div className="grid " style={{ gridTemplateColumns: '5.5fr 4.5fr' }}>
              <div className="flex justify-center items-center flex-[1_0_0] self-stretch">
                <div className="flex justify-center center items-center w-full relative">
                  <div className="z-20 left-0 absolute top-[15px]">
                    <div className=" h-[198px]">
                      <img src="./assets/images/iPad_Pro_Mockup.png" alt="" width="100%" height="100%" />
                    </div>
                  </div>
                  <div className=" z-5 absolute">
                    <div className=" h-[401px]">
                      <img src="./assets/images/iMac_27-inch Mockup.png" alt="" width="100%" height="100%" />
                    </div>
                  </div>
                  <div className="z-20 right-0 absolute top-[-35px]">
                    <div className=" h-[246.67px]">
                      <img src="./assets/images/New_Macbook_Pro_Mockup_Front_View.png" alt="" width="100%" height="100%" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 flex-[1_0_0] self-stretch rounded-[0.75rem_0rem_0rem_0.75rem] pl-[3.125rem]">
                <h3 className="w-[30rem] self-stretch overflow-hidden text-[#3f3a64] text-ellipsis text-xl not-italic font-semibold leading-7">
                  {PROJECTS[0].name}
                </h3>
                <p className="self-stretch text-[color:var(--gray-600,#4b5563)] text-[1.125rem] not-italic font-normal leading-6">
                  {PROJECTS[0].description}
                </p>
                <div className="flex items-center content-center gap-2 self-stretch flex-wrap">
                  {PROJECTS[0].technologies.map((item: string, index: number) => (
                    <span
                      key={index}
                      className=" flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-[repeat(2,1fr)] w-full gap-[3px] justify-between items-center px-0 py-6">
                  {PROJECTS[0].link.map((item: any, index: number) => (
                    <div className="flex items-center shrink-0 h-9" key={index}>
                      <a href={item.ref} target="_blank" rel="noopener noreferrer" className=" gap-3 flex justify-center shrink-0 cursor-pointer">
                        {item.icon}
                        <span className="cursor-pointer text-gray-600 text-base not-italic font-normal leading-6">{item.content}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 02 SHOPEE ADMIN */}
          <div className="flex items-start gap-[3.125rem] w-[75rem] px-0 py-12 rounded-xl bg-[#fff]">
            <div className="grid " style={{ gridTemplateColumns: '4.5fr 5.5fr ' }}>
              <div className="flex flex-col items-center gap-3 flex-[1_0_0] self-stretch rounded-[0.75rem_0rem_0rem_0.75rem] pr-[50px]">
                <h3 className="w-[30rem] self-stretch overflow-hidden text-[#3f3a64] text-ellipsis text-xl not-italic font-semibold leading-7">
                  {PROJECTS[1].name}
                </h3>
                <p className="self-stretch text-[color:var(--gray-600,#4b5563)] text-[1.125rem] not-italic font-normal leading-6">
                  {PROJECTS[1].description}
                </p>
                <div className="flex items-center content-center gap-2 self-stretch flex-wrap">
                  {PROJECTS[0].technologies.map((item: string, index: number) => (
                    <span
                      key={index}
                      className=" flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-[repeat(2,1fr)] w-full gap-[5px] justify-between items-center px-0 py-6">
                  {PROJECTS[0].link.map((item: any, index: number) => (
                    <div className="flex items-center shrink-0 h-9" key={index}>
                      <a href={item.ref} target="_blank" rel="noopener noreferrer" className=" gap-3 flex justify-center shrink-0 cursor-pointer">
                        {item.icon}
                        <span className="cursor-pointer text-gray-600 text-base not-italic font-normal leading-6">{item.content}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center items-center flex-[1_0_0] self-stretch">
                <div className="flex justify-center center items-center w-full relative">
                  <div className="z-5  absolute  left-0">
                    <div className=" h-[206px]">
                      <img src="./assets/images/New_Macbook_Pro_Mockup_Front_View_(3).png" alt="" width="100%" height="100%" />
                    </div>
                  </div>
                  <div className="z-20 absolute ">
                    <div className=" h-[264px]">
                      <img src="./assets/images/New_Macbook_Pro Mockup_Front_View_(1).png" alt="" width="100%" height="100%" />
                    </div>
                  </div>
                  <div className="z-5  absolute  right-0">
                    <div className=" h-[206px]">
                      <img src="./assets/images/New_Macbook_Pro_Mockup_Front_View_(2).png" alt="" width="100%" height="100%" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 03 NESPRESSO */}
          <div className=" flex items-start gap-[3.125rem]w-[75rem] px-0 py-12 rounded-xl bg-[#fff]">
            <div className="grid " style={{ gridTemplateColumns: '5.5fr 4.5fr ' }}>
              <div className="flex justify-center items-center flex-[1_0_0] self-stretch ">
                <div className="flex justify-center center items-center " style={{ position: 'relative' }}>
                  <div className="z-5 translate-x-[50%]">
                    <div className="h-[258px] w-[116px]">
                      <img src="./assets/images/iPhone_X_Side_View_Mockup_(2).png" alt="" width="100%" height="100%" />
                    </div>
                  </div>
                  <div className="z-10 translate-x-[25%]">
                    <div className="h-[302px] w-[135px]">
                      <img src="./assets/images/iPhone_X_Side_View_Mockup_(1).png" alt="" width="100%" height="100%" />
                    </div>
                  </div>
                  <div className="z-20">
                    <div className="h-[351px] w-[176px]">
                      <img src="./assets/images/iPhone_X_Mockup_Front_View.png" alt="" width="100%" height="100%" />
                    </div>
                  </div>
                  <div className="z-10 translate-x-[-25%]">
                    <div className="h-[302px] w-[135px]">
                      <img src="./assets/images/iPhone_X_Side_View_Mockup_(4).png" alt="" width="100%" height="100%" />
                    </div>
                  </div>
                  <div className="z-5 translate-x-[-50%]">
                    <div className="h-[258px] w-[116px]">
                      <img src="./assets/images/iPhone_X_Side_View_Mockup_(3).png" alt="" width="100%" height="100%" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 flex-[1_0_0] self-stretch rounded-[0.75rem_0rem_0rem_0.75rem] pl-[3.125rem]">
                <h3 className="w-[30rem] self-stretch overflow-hidden text-[#3f3a64] text-ellipsis text-xl not-italic font-semibold leading-7">
                  {PROJECTS[2].name}
                </h3>
                <p className="self-stretch text-[color:var(--gray-600,#4b5563)] text-[1.125rem] not-italic font-normal leading-6">
                  {PROJECTS[2].description}
                </p>
                <div className="flex items-center content-center gap-2 self-stretch flex-wrap">
                  {PROJECTS[2].technologies.map((item: string, index: number) => (
                    <span
                      key={index}
                      className=" flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-[repeat(2,1fr)] w-full gap-[5px] justify-between items-center px-0 py-6">
                  {PROJECTS[2].link.map((item: any, index: number) => (
                    <div className="flex items-center shrink-0 h-9" key={index}>
                      <a href={item.ref} target="_blank" rel="noopener noreferrer" className=" gap-3 flex justify-center shrink-0 cursor-pointer">
                        {item.icon}
                        <span className="cursor-pointer text-gray-600 text-base not-italic font-normal leading-6">{item.content}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 04 PHONG TRO */}
          <div className="flex items-start gap-[3.125rem] w-[75rem] px-0 py-12 rounded-xl bg-[#fff]">
            <div className="grid " style={{ gridTemplateColumns: '4.5fr 5.5fr ' }}>
              <div className="flex flex-col items-center gap-3 flex-[1_0_0] self-stretch rounded-[0.75rem_0rem_0rem_0.75rem] pr-[3.125rem]">
                <h3 className="w-[30rem] self-stretch overflow-hidden text-[#3f3a64] text-ellipsis text-xl not-italic font-semibold leading-7">
                  {PROJECTS[3].name}
                </h3>
                <p className="self-stretch text-[color:var(--gray-600,#4b5563)] text-[1.125rem] not-italic font-normal leading-6">
                  {PROJECTS[3].description}
                </p>
                <div className="flex items-center content-center gap-2 self-stretch flex-wrap">
                  {PROJECTS[3].technologies.map((item: string, index: number) => (
                    <span
                      key={index}
                      className=" flex justify-center items-center px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-[repeat(2,1fr)] w-full gap-[5px] justify-between items-center px-0 py-6">
                  {PROJECTS[3].link.map((item: any, index: number) => (
                    <div className="flex items-center shrink-0 h-9" key={index}>
                      <a href={item.ref} target="_blank" rel="noopener noreferrer" className=" gap-3 flex justify-center shrink-0 cursor-pointer">
                        {item.icon}
                        <span className="cursor-pointer text-gray-600 text-base not-italic font-normal leading-6">{item.content}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center items-center flex-[1_0_0] self-stretch">
                <div className="flex justify-center center items-center w-full relative">
                  <div className="left-0 absolute z-20 translate-x-[-4%] translate-y-[28%]">
                    <div className=" w-[393px] h-[232px]">
                      <img src="./assets/images/15_ Macbook_Pro_Mockup_Left_View.png" alt="" width="100%" height="100%" />
                    </div>
                  </div>
                  <div className="right-0 absolute z-5">
                    <div className=" w-[371px] h-[334px]">
                      <img src="./assets/images/Macbook_Pro_Mockup.png" alt="" width="100%" height="100%" />
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
