import { useEffect } from 'react';
import { DeviceCustom } from '.';
import { motion, useAnimation } from 'framer-motion';
import ProjectInfo from '../../components/project_info';
import { PROJECTS } from '../../shared/contants';

export default function Projects1() {
  const device_01: DeviceCustom[] = [
    { x: '0%', y: '0%', change: ['0%', '0%'], image: './assets/images/iMac_27-inch Mockup.png', zIndex: 1, animation: useAnimation() },
    { x: '25%', y: '0%', change: ['-73%', '55%'], image: './assets/images/iPad_Pro_Mockup.png', zIndex: 20, animation: useAnimation() },
    { x: '-25%', y: '0%', change: ['47%', '37%'], image: './assets/images/New_Macbook_Pro_Mockup_Front_View.png', zIndex: 20, animation: useAnimation() },
  ];
  const handleScroll = () => {
    if (scrollY > 2000) {
      device_01.forEach((device: DeviceCustom) => {
        device.animation.start({
          x: device.change[0],
          y: device.change[1],
          transition: { ease: 'linear' },
          zIndex: device.zIndex,
        });
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="
        flex items-start gap-[3.125rem] w-full  rounded-xl bg-white
        lt:max-w-[75rem] px-[1rem] lt:px-0 py-12  lt:w-[75rem]
      "
    >
      <div
        className=" 
          flex flex-col gap-[1.25rem] 
          lt:grid
        "
        style={{ gridTemplateColumns: '5.5fr 4.5fr' }}
      >
        <div
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          className="
            h-[12.5rem] flex justify-center items-center flex-[1_0_0] self-stretch
            lt:h-full 
          "
        >
          <div
            className="
              flex justify-center center items-center w-full relative h-[12.5rem] scale-[0.5] 
              lt:h-full lt:scale-[1]
            "
          >
            {device_01.map((device: DeviceCustom, index: number) => (
              <motion.div key={index} initial={{ x: device.x }} animate={device.animation} className="absolute">
                <div className="w-full h-full">
                  <img src={device.image} alt="" width="100%" height="100%" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="800"
          className="
            lt:ml-[3.125rem]
          "
        >
          <ProjectInfo project={PROJECTS[0]} />
        </div>
      </div>
    </div>
  );
}
