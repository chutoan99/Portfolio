import Typed from 'typed.js';
import type { NextPage } from 'next';
import { gsap, Linear } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useState, MutableRefObject, useRef } from 'react';
import AOS from 'aos';
//? APP
import Label from '../components/label';
import About from '../containers/about';
import Experience from '../containers/experience';
import Projects from '../containers/projects';
import Skills from '../containers/skills';
import Contact from '../containers/contact';
import Footer from '../containers/footer';
import Cursor from '../components/cursor';
import Background from '../containers/background';

import Map from '../containers/map';
import Header from '../containers/header';

export const isSmallScreen = (): boolean => document.body.clientWidth < 767;
export const NO_MOTION_PREFERENCE_QUERY = '(prefers-reduced-motion: no-preference)';

const Home: NextPage = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

  const [isDesktop, setIsDesktop] = useState(true);

  let timer: any = null;

  const debouncedDimensionCalculator = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const isDesktopResult = typeof window.orientation === 'undefined' && navigator.userAgent.indexOf('IEMobile') === -1;
      window.history.scrollRestoration = 'manual';
      setIsDesktop(isDesktopResult);
    }, 100);
  };

  useEffect(() => {
    debouncedDimensionCalculator();

    window.addEventListener('resize', debouncedDimensionCalculator);
    return () => window.removeEventListener('resize', debouncedDimensionCalculator);
  }, [timer]);

  const typedSpanElement: any = useRef(null);
  const targetSection: any = useRef(null);

  const initTypeAnimation = (typedSpanElement: MutableRefObject<HTMLSpanElement>): Typed => {
    return new Typed(typedSpanElement.current, {
      strings: ["I'm a frontend developer", "I'm a backend developer"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 8000,
      loop: true,
    });
  };

  const initRevealAnimation = (targetSection: MutableRefObject<HTMLDivElement>): GSAPTimeline => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.to(targetSection.current, { opacity: 1, duration: 2 }).from(targetSection.current.querySelectorAll('.seq'), { opacity: 0, duration: 0.5, stagger: 0.5 }, '<');

    return revealTl;
  };

  useEffect(() => {
    const typed = initTypeAnimation(typedSpanElement);
    initRevealAnimation(targetSection);

    return typed.destroy;
  }, [typedSpanElement, targetSection]);

  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      duration: 1200,
    });
  }, []);
  return (
    <>
      <Header></Header>
      <Cursor isDesktop={isDesktop} />
      <Background />
      <div className="flex justify-center section-container">
        <section
          className="
        absolute top-0 flex py-8  h-full justify-start px-4 min-h-screen  mx-auto w-full max-w-[75rem]  
        md:items-center md:px-12  
        2xl:container 

        "
        >
          <div
            className="
              font-medium flex flex-col justify-center select-none
              md:pt-0 
            "
          >
            <div
              className="
                mb-2 
                md:mb-4
              "
              ref={targetSection}
              style={{ opacity: 0 }}
            >
              <h2 className="text-4xl seq text-black">Hello 👋🏻</h2>
              <h1 className="text-4xl seq  text-black">I am Chu Toan</h1>
            </div>
            <p className="mb-4 text-black">
              <span
                className="
                  text-xl seq
                  sm:text-2xl 
                  md:text-5xl
                "
                ref={typedSpanElement}
              ></span>
            </p>
          </div>
        </section>
      </div>
      <About />
      <Experience />
      <Label content="Projects"></Label>
      <Projects />
      <Label content="Skills"></Label>
      <Skills />
      <Label content="Contact"></Label>
      <Contact />
      <Map />
      <Footer />
    </>
  );
};

export default Home;
