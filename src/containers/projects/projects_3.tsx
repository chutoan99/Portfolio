import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ProjectInfo from '../../components/project_info';
import { PROJECTS } from '../../shared/contants';
import { Device } from '.';

export default function Projects3() {
  const device_03: Device[] = [
    { x: '0%', end: '-190%', image: './assets/images/iPhone_X_Side_View_Mockup_(2).png', zIndex: 1, animation: useAnimation() },
    { x: '0%', end: '-90%', image: './assets/images/iPhone_X_Side_View_Mockup_(1).png', zIndex: 10, animation: useAnimation() },
    { x: '0%', end: '90%', image: './assets/images/iPhone_X_Side_View_Mockup_(4).png', zIndex: 10, animation: useAnimation() },
    { x: '0%', end: '190%', image: './assets/images/iPhone_X_Side_View_Mockup_(3).png', zIndex: 1, animation: useAnimation() },
    { x: '0%', end: '0%', image: './assets/images/iPhone_X_Mockup_Front_View.png', zIndex: 20, animation: useAnimation() },
  ];
  const handleScroll = () => {
    if (scrollY > 3600) {
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
    <div
      className="
        flex items-start gap-[3.125rem] w-full  px-[1rem] rounded-xl bg-white  
        lt:max-w-[75rem] lt:px-0 py-12  lt:w-[75rem]
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
              lt:h-full  lt:scale-[1]
            "
          >
            {device_03.map((device, index) => (
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
          <ProjectInfo project={PROJECTS[2]} />
        </div>
      </div>
    </div>
  );
}
