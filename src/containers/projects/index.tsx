import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ProjectInfo from '../../components/project_Info';
import { PROJECTS } from '../../shared/contants';
interface Device {
  x: string;
  image: string;
  end: string;
  size: number[];
  zIndex: number;
  animation: ReturnType<typeof useAnimation>;
}
export default function Projects() {
  return (
    <section id="Projects" className="flex flex-col justify-center items-center self-stretch py-[3.125rem] lt:px-20 lt:py-24 bg-white">
      <div className="w-full max-w-[75rem] mx-auto my-0">
        <div className="flex flex-col justify-center items-center gap-[3.125rem] self-stretch   lt:px-8 py-0">
          {/* 01 SHOPPECLIENT */}
          <div className="flex items-start gap-[3.125rem] w-full lt:max-w-[75rem] px-[1rem] lt:px-0 py-12 rounded-xl bg-white">
            <div className="lt:grid grid-te" style={{ gridTemplateColumns: '5.5fr 4.5fr' }}>
              <div data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="500" className="flex justify-center items-center flex-[1_0_0] self-stretch">
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
              <div data-aos="fade-left" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-duration="800" className="lt:ml-[3.125rem]">
                <ProjectInfo project={PROJECTS[0]} />
              </div>
            </div>
          </div>
          <Projects2 /> {/* 02 SHOPEEADMIN  done*/}
          <Projects3 /> {/* 04 PHONGTRO */}
          <div className="flex items-start gap-[3.125rem] w-full lt:max-w-[75rem] px-[1rem] lt:px-0 py-12 rounded-xl bg-white">
            <div className="lt:grid  " style={{ gridTemplateColumns: '4.5fr 5.5fr ' }}>
              <div data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-duration="800" className="lt:mr-[3.125rem]">
                <ProjectInfo project={PROJECTS[3]} />
              </div>
              <div data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="500" className="flex justify-center items-center flex-[1_0_0] self-stretch">
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

function Projects3() {
  const value_nespresso = 3600;
  const device_03: Device[] = [
    { x: '240%', end: '-190%', image: './assets/images/iPhone_X_Side_View_Mockup_(2).png', size: [258, 116], zIndex: 1, animation: useAnimation() },
    { x: '120%', end: '-90%', image: './assets/images/iPhone_X_Side_View_Mockup_(1).png', size: [302, 135], zIndex: 10, animation: useAnimation() },
    { x: '0%', end: '0%', image: './assets/images/iPhone_X_Mockup_Front_View.png', size: [351, 176], zIndex: 20, animation: useAnimation() },
    { x: '-120%', end: '90%', image: './assets/images/iPhone_X_Side_View_Mockup_(4).png', size: [302, 135], zIndex: 10, animation: useAnimation() },
    { x: '-240%', end: '190%', image: './assets/images/iPhone_X_Side_View_Mockup_(3).png', size: [258, 116], zIndex: 1, animation: useAnimation() },
  ];
  const handleScroll = () => {
    if (scrollY > value_nespresso) {
      device_03.forEach((device: Device) => {
        device.animation.start({
          x: device.end,
          transition: { ease: 'linear' },
          zIndex: device.zIndex,
        });
      });
    }
  };

  // Nghe sự kiện cuộn trang
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex items-start gap-[3.125rem] w-full lt:max-w-[75rem] px-[1rem] lt:px-0 py-12 rounded-xl bg-white">
      <div className="lt:grid " style={{ gridTemplateColumns: '5.5fr 4.5fr' }}>
        <div data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="500" className="flex justify-center items-center flex-[1_0_0] self-stretch overflow-hidden">
          <div className="flex justify-center center items-center w-full relative">
            {device_03.map((device, index) => (
              <motion.div key={index} initial={{ x: device.x }} animate={device.animation} className="absolute">
                <div className={`h-[${device.size[0]}px] w-[${device.size[1]}px]`}>
                  <img src={device.image} alt="" width="100%" height="100%" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div data-aos="fade-left" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-duration="800" className="lt:ml-[3.125rem]">
          <ProjectInfo project={PROJECTS[2]} />
        </div>
      </div>
    </div>
  );
}

function Projects2() {
  const value_shope_admin = 3000;
  const device_02: Device[] = [
    { x: '25%', end: '-32%', image: './assets/images/New_Macbook_Pro_Mockup_Front_View_(3).png', size: [206, 336], zIndex: 1, animation: useAnimation() },
    { x: '0%', end: '0%', image: './assets/images/New_Macbook_Pro Mockup_Front_View_(1).png', size: [264, 462], zIndex: 20, animation: useAnimation() },
    { x: '-25%', end: '32%', image: './assets/images/New_Macbook_Pro_Mockup_Front_View_(2).png', size: [206, 336], zIndex: 1, animation: useAnimation() },
  ];
  const handleScroll = () => {
    if (scrollY > value_shope_admin) {
      device_02.forEach((device: Device) => {
        device.animation.start({
          x: device.end,
          transition: { ease: 'linear' },
          zIndex: device.zIndex,
        });
      });
    }
  };

  // Nghe sự kiện cuộn trang
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex items-start gap-[3.125rem] w-full lt:max-w-[75rem] px-[1rem] lt:px-0 py-12 rounded-xl bg-white">
      <div className="lt:grid  " style={{ gridTemplateColumns: '4.5fr 5.5fr ' }}>
        <div data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-duration="800" className="lt:mr-[3.125rem]">
          <ProjectInfo project={PROJECTS[1]} />
        </div>
        <div data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="500" className="flex justify-center items-center flex-[1_0_0] self-stretch overflow-hidden">
          <div className="flex justify-center center items-center w-full relative">
            {device_02.map((device, index) => (
              <motion.div key={index} initial={{ x: device.x }} animate={device.animation} className="absolute">
                <div className={`h-[${device.size[0]}px] w-[${device.size[1]}px]`}>
                  <img src={device.image} alt="" width="100%" height="100%" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
