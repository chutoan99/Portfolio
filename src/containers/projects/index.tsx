import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ProjectInfo from '../../components/project_Info';
import { PROJECTS } from '../../shared/contants';
interface Device {
  x: string;
  image: string;
  end: string;
  zIndex: number;
  animation: ReturnType<typeof useAnimation>;
}
interface DeviceCustom {
  x: string;
  y: string;
  image: string;
  change: string[];
  zIndex: number;
  animation: ReturnType<typeof useAnimation>;
}
export default function Projects() {
  return (
    <section id="Projects" className="flex flex-col justify-center items-center self-stretch py-[3.125rem] lt:px-20 lt:py-24 bg-white">
      <div className="w-full max-w-[75rem] mx-auto my-0">
        <div className="flex flex-col justify-center items-center gap-[3.125rem] self-stretch   lt:px-8 py-0">
          <Projects1 />
          <Projects2 />
          <Projects3 />
          <Projects4 />
        </div>
      </div>
    </section>
  );
}

function Projects1() {
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
    <div className="flex items-start gap-[3.125rem] w-full lt:max-w-[75rem] px-[1rem] lt:px-0 py-12 rounded-xl bg-white lt:w-[75rem]">
      <div className="lt:grid flex flex-col gap-[1.25rem]" style={{ gridTemplateColumns: '5.5fr 4.5fr' }}>
        <div
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          className="h-[12.5rem] lt:h-full flex justify-center items-center flex-[1_0_0] self-stretch"
        >
          <div className="flex justify-center center items-center w-full relative h-[12.5rem] lt:h-full scale-[0.5] lt:scale-[1]">
            {device_01.map((device: DeviceCustom, index: number) => (
              <motion.div key={index} initial={{ x: device.x }} animate={device.animation} className="absolute">
                <div className="w-full h-full">
                  <img src={device.image} alt="" width="100%" height="100%" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800" className="lt:ml-[3.125rem]">
          <ProjectInfo project={PROJECTS[0]} />
        </div>
      </div>
    </div>
  );
}

function Projects2() {
  const device_02: Device[] = [
    { x: '0%', end: '-40%', image: './assets/images/New_Macbook_Pro_Mockup_Front_View_(3).png', zIndex: 1, animation: useAnimation() },
    { x: '0%', end: '48%', image: './assets/images/New_Macbook_Pro_Mockup_Front_View_(2).png', zIndex: 1, animation: useAnimation() },
    { x: '0%', end: '0%', image: './assets/images/New_Macbook_Pro Mockup_Front_View_(1).png', zIndex: 20, animation: useAnimation() },
  ];
  const handleScroll = () => {
    if (scrollY > 3000) {
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
    <div className="flex items-start gap-[3.125rem] w-full lt:max-w-[75rem] px-[1rem] lt:px-0 py-12 rounded-xl bg-white lt:w-[75rem]">
      <div className="lt:grid flex flex-col gap-[1.25rem]" style={{ gridTemplateColumns: '4.5fr 5.5fr ' }}>
        <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800" className="order-2 lt:order-1 lt:mr-[3.125rem]">
          <ProjectInfo project={PROJECTS[1]} />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          className="order-1 lt:order-2 h-[12.5rem] lt:h-full flex justify-center items-center flex-[1_0_0] self-stretch"
        >
          <div className="flex justify-center center items-center w-full relative h-[12.5rem] lt:h-full scale-[0.5] lt:scale-[1]">
            {device_02.map((device: Device, index: number) => (
              <motion.div key={index} initial={{ x: device.x }} animate={device.animation} className="absolute">
                <div className="w-full h-full">
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

function Projects3() {
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
    <div className="flex items-start gap-[3.125rem] w-full lt:max-w-[75rem] px-[1rem] lt:px-0 py-12 rounded-xl bg-white lt:w-[75rem]">
      <div className="lt:grid flex flex-col gap-[1.25rem]" style={{ gridTemplateColumns: '5.5fr 4.5fr' }}>
        <div
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          className="h-[12.5rem] lt:h-full flex justify-center items-center flex-[1_0_0] self-stretch"
        >
          <div className="flex justify-center center items-center w-full relative h-[12.5rem] lt:h-full scale-[0.5] lt:scale-[1]">
            {device_03.map((device, index) => (
              <motion.div key={index} initial={{ x: device.x }} animate={device.animation} className="absolute">
                <div className="w-full h-full">
                  <img src={device.image} alt="" width="100%" height="100%" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800" className="lt:ml-[3.125rem]">
          <ProjectInfo project={PROJECTS[2]} />
        </div>
      </div>
    </div>
  );
}

function Projects4() {
  const device_04: DeviceCustom[] = [
    { x: '0%', y: '0%', change: ['-38%', '29%'], image: './assets/images/15_ Macbook_Pro_Mockup_Left_View.png', zIndex: 20, animation: useAnimation() },
    { x: '25%', y: '0%', change: ['39%', '0%'], image: './assets/images/Macbook_Pro_Mockup.png', zIndex: 1, animation: useAnimation() },
  ];
  const handleScroll = () => {
    if (scrollY > 4150) {
      device_04.forEach((device: DeviceCustom) => {
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
    <div className="flex items-start gap-[3.125rem] w-full lt:max-w-[75rem] px-[1rem] lt:px-0 py-12 rounded-xl bg-white lt:w-[75rem]">
      <div className="lt:grid flex flex-col gap-[1.25rem]" style={{ gridTemplateColumns: '4.5fr 5.5fr ' }}>
        <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800" className="order-2 lt:order-1 lt:mr-[3.125rem]">
          <ProjectInfo project={PROJECTS[3]} />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          className="order-1 lt:order-2 h-[12.5rem] lt:h-full flex justify-center items-center flex-[1_0_0] self-stretch"
        >
          <div className="flex justify-center center items-center w-full relative h-[12.5rem] lt:h-full scale-[0.5] lt:scale-[1]">
            {device_04.map((device: DeviceCustom, index: number) => (
              <motion.div key={index} initial={{ x: device.x }} animate={device.animation} className="initial lt:absolute">
                <div className="w-full h-full">
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
