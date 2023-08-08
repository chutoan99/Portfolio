import ProjectInfo from '../../components/project_Info';
import { PROJECTS } from '../../shared/contants';
export default function Projects() {
  return (
    <section id="Projects" className="flex flex-col justify-center items-center self-stretch py-[3.125rem] lt:px-20 lt:py-24 bg-[#fff]">
      <div className="w-full max-w-[75rem] mx-auto my-0">
        <div className="flex flex-col justify-center items-center gap-[3.125rem] self-stretch   lt:px-8 py-0">
          {/* 01 SHOPPECLIENT */}
          <div className="flex items-start gap-[3.125rem] w-full lt:max-w-[75rem] px-[1rem] lt:px-0 py-12 rounded-xl bg-[#fff]">
            <div className="lt:grid grid-te" style={{ gridTemplateColumns: '5.5fr 4.5fr' }}>
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
              <ProjectInfo project={PROJECTS[0]} />
            </div>
          </div>

          {/* 02 SHOPEEADMIN */}
          <div className="flex items-start gap-[3.125rem] w-full lt:max-w-[75rem] px-[1rem] lt:px-0 py-12 rounded-xl bg-[#fff]">
            <div className="lt:grid  " style={{ gridTemplateColumns: '4.5fr 5.5fr ' }}>
              <ProjectInfo project={PROJECTS[1]} />
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
          <div className="flex items-start gap-[3.125rem] w-full lt:max-w-[75rem] px-[1rem] lt:px-0 py-12 rounded-xl bg-[#fff]">
            <div className="lt:grid  " style={{ gridTemplateColumns: '5.5fr 4.5fr ' }}>
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
              <ProjectInfo project={PROJECTS[2]} />
            </div>
          </div>

          {/* 04 PHONGTRO */}
          <div className="flex items-start gap-[3.125rem] w-full lt:max-w-[75rem] px-[1rem] lt:px-0 py-12 rounded-xl bg-[#fff]">
            <div className="lt:grid  " style={{ gridTemplateColumns: '4.5fr 5.5fr ' }}>
              <ProjectInfo project={PROJECTS[3]} />
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
