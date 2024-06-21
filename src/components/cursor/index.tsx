import { useEffect, useRef } from 'react';
import { gsap, Linear } from 'gsap';

const Cursor = ({ isDesktop }: any) => {
  const cursor: any = useRef(null);
  const follower: any = useRef(null);

  const onHover = () => {
    gsap.to(cursor.current, {
      scale: 0.5,
      duration: 0.3,
    });
    gsap.to(follower.current, {
      scale: 3,
      duration: 0.3,
    });
  };

  const onUnhover = () => {
    gsap.to(cursor.current, {
      scale: 1,
      duration: 0.3,
    });
    gsap.to(follower.current, {
      scale: 1,
      duration: 0.3,
    });
  };

  const moveCircle = (e: MouseEvent) => {
    gsap.to(cursor.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
      ease: Linear.easeNone,
    });
    gsap.to(follower.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3,
      ease: Linear.easeNone,
    });
  };
  const isSmallScreen = (): boolean => document.body.clientWidth < 767;
  const initCursorAnimation = () => {
    follower.current.classList.remove('hidden');
    cursor.current.classList.remove('hidden');

    document.addEventListener('mousemove', moveCircle);

    document.querySelectorAll('.link').forEach((el) => {
      el.addEventListener('mouseenter', onHover);
      el.addEventListener('mouseleave', onUnhover);
    });
  };

  useEffect(() => {
    if (isDesktop && !isSmallScreen()) {
      initCursorAnimation();
    }
  }, [cursor, follower, isDesktop]);

  return (
    <>
      <div ref={cursor} className="fixed hidden bg-white w-4 h-4 select-none pointer-events-none z-50" style={{ borderRadius: '100%', mixBlendMode: 'difference' }}></div>
      <div
        ref={follower}
        className="fixed hidden h-8 w-8 select-none pointer-events-none z-50"
        style={{
          borderRadius: '100%',
          left: '-0.5rem',
          top: '-0.5rem',
          background: 'rgba(255, 255, 255, 0.2)',
          willChange: 'transform',
        }}
      ></div>
    </>
  );
};

export default Cursor;
