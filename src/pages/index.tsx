import type { NextPage } from "next";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import { useRef } from "react";
import Background from "../components/background";
import Label from "../components/label";
import Header from "../containers/header";
import Hero from "../containers/hero";
import About from "../containers/about";
import Experience from "../containers/experience";
import Projects from "../containers/projects";
import Skills from "../containers/skills";
import Contact from "../containers/contact";
import Footer from "../containers/footer";

const Home: NextPage = () => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        tablet: {
          smooth: true,
          breakpoint: 768,
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        <Background />
        <Header />
        <Hero />
        <About />
        <Label id="label-experiences" content="Experiences"></Label>
        <Experience />
        <Label id="label-projects" content="Projects"></Label>
        <Projects></Projects>
        <Label id="label-skills" content="Skills"></Label>
        <Skills></Skills>
        <Label id="label-contact" content="Contact"></Label>
        <Contact />
        <Footer />
      </div>
    </LocomotiveScrollProvider>
  );
};

export default Home;
