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

import { MENULINKS } from '../shared/contants';

export const isSmallScreen = (): boolean => document.body.clientWidth < 767;
export const NO_MOTION_PREFERENCE_QUERY = '(prefers-reduced-motion: no-preference)';

export interface IDesktop {
  isDesktop: boolean;
}

const Home: NextPage = () => {
  const TYPED_STRINGS = ["I'm a frontend developer", "I'm a backend developer"];

  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

  const [isDesktop, setisDesktop] = useState(true);

  let timer: any = null;

  const debouncedDimensionCalculator = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const isDesktopResult = typeof window.orientation === 'undefined' && navigator.userAgent.indexOf('IEMobile') === -1;
      window.history.scrollRestoration = 'manual';
      setisDesktop(isDesktopResult);
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
      strings: TYPED_STRINGS,
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

  const { ref: heroSectionRef } = MENULINKS[0];
  const [menuVisible, setmenuVisible] = useState(false);
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      duration: 1200,
    });
  }, []);
  return (
    <>
      <header className="w-full flex justify-center">
        <div className="fixed top-0 py-8 select-none z-50 bg-gradient-to-b  to-transparent w-full max-w-[1200px] pr-[1rem] sm:pr-[.9375rem] md:pr-[1.25rem] lt:pr-0">
          <div className="flex justify-between section-container">
            <a href="#home" className="link"></a>
            <nav className={`outer-menu ${menuVisible ? 'menu-visible' : ''}`}>
              <button className="hamburger w-6 h-6 flex items-center justify-center link relative" onClick={setmenuVisible.bind(null, !menuVisible)}>
                <div className="relative flex-none w-full bg-black duration-300 flex items-center justify-center"></div>
              </button>
              <section className="menu fixed top-0 left-0 w-full h-full overflow-hidden invisible pointer-events-none flex items-center justify-center" style={{ visibility: 'hidden' }}>
                <div className="flex-none overflow-hidden flex items-center justify-center">
                  <div className="text-center opacity-0 overflow-y-auto flex flex-none justify-center items-center max-h-screen">
                    <ul className="list-none py-4 px-0 m-0 block max-h-screen" role="menu">
                      {[
                        {
                          name: 'Home',
                          ref: 'home',
                        },
                        {
                          name: 'About',
                          ref: 'About',
                        },

                        {
                          name: 'Projects',
                          ref: 'Projects',
                        },
                        {
                          name: 'Skills',
                          ref: 'skills',
                        },
                        {
                          name: 'Contact',
                          ref: 'contact',
                        },
                      ].map((el) => (
                        <li className="p-0 m-6 text-2xl block" key={el.name} role="menuitem">
                          <a className="link relative inline font-bold text-5xl duration-300 hover:no-underline " href={`#${el.ref}`} onClick={setmenuVisible.bind(null, false)}>
                            {el.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            </nav>
          </div>
        </div>
      </header>

      <Cursor isDesktop={isDesktop} />

      <Background />
      <div className="flex justify-center section-container">
        <section className="absolute top-0 flex md:items-center py-8  h-full justify-start  2xl:container mx-auto w-full max-w-[1200px] md:px-12 px-4 min-h-screen ">
          <div className="font-medium flex flex-col justify-center  md:pt-0 select-none">
            <div className="md:mb-4 mb-2" id={heroSectionRef} ref={targetSection} style={{ opacity: 0 }}>
              <h2 className="text-4xl seq text-black">Hello 👋🏻</h2>
              <h1 className="text-4xl seq  text-black">I am Chu Toan</h1>
            </div>
            <p className="mb-4 text-black">
              <span className="text-xl sm:text-2xl md:text-5xl seq" ref={typedSpanElement}></span>
            </p>
          </div>
        </section>
      </div>
      <About />
      <Experience />
      <Label id="label-projects" content="Projects"></Label>
      <Projects />
      <Label id="label-skills" content="Skills"></Label>
      <Skills></Skills>
      <Label id="label-contact" content="Contact"></Label>
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
