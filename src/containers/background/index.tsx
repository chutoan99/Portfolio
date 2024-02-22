import { FC, useEffect, useRef } from 'react';
import { m } from 'framer-motion';

const Background: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;
    const images = [
      'https://res.cloudinary.com/dxcershra/image/upload/v1691073502/porfolio/Group_14_jpw2gp.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1691073502/porfolio/Group_15_pdh5uo.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1691073502/porfolio/Group_16_ggkkyt.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1691073502/porfolio/Group_18_ajdsp8.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1691073501/porfolio/Group_19_webnwi.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1691073501/porfolio/Frame_1_a2yevf.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1691073501/porfolio/Frame_aawdqh.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1691073501/porfolio/Frame_2_yrau2t.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1691074046/porfolio/layer1_cwk3ga.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1691074046/porfolio/Frame_gnn9py.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1691074028/porfolio/Frame_1_ml3jzs.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1691074028/porfolio/Frame_7_jt8njm.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1691074028/porfolio/Frame_6_epoblu.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1691074028/porfolio/Frame_3_vfhqur.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1691074028/porfolio/Frame_2_lryw7n.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1691074028/porfolio/Frame_4_nortik.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1691074028/porfolio/Frame_5_kojyi9.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1691074279/porfolio/Group_1_ellcr8.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1691074278/porfolio/Frame_11_kogoh4.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1691074279/porfolio/Group_khom9w.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1691074279/porfolio/Frame_12_xealla.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1691074279/porfolio/Frame_10_owjsrs.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1691074279/porfolio/Frame_9_bjjltz.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1691074278/porfolio/Frame_13_gmau1u.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1691074278/porfolio/Frame_14_einpl2.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1691074741/porfolio/Frame_17_qhyqn7.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1691074700/porfolio/Frame_16_eit1vq.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1691074279/porfolio/Frame_8_j93ohe.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1691074700/porfolio/Frame_15_uub5u1.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1703352330/porfolio/qrikklynxw4a4vezimi2.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1703352837/porfolio/ivvtyxxpktjavtauk38m.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1703352837/porfolio/ghty5co3n0pblh4njvei.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1703352837/porfolio/q6nv0fduoppxjdrhhslr.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1703352837/porfolio/opucrlm4oujimted0yyq.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1703352837/porfolio/id9zvy7fw9tcwikzcpun.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1703352837/porfolio/igiqzq7z491pdgacbojo.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1703352837/porfolio/rxjqzh1jslkjlrhspe0a.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1703352837/porfolio/ciedavnuncqpauopxqnc.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1703352837/porfolio/mej3clgaftezvqaxgyqt.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1708580549/porfolio/l1wtsiau16fnj4axwylv.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1708580549/porfolio/djjglfktj0rtwn2maviy.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1708580550/porfolio/i2vc0wscknohjst98s73.png',
      'https://res.cloudinary.com/dxcershra/image/upload/v1708581126/porfolio/bvcjq6dwrcrt3ow5ew4j.png',
    'https://res.cloudinary.com/dxcershra/image/upload/v1708582094/porfolio/ls1jwxtocoh1xcgjo8nr.png',
    ].map((source) => {
      const image = document.createElement('img');
      image.src = source;
      return image;
    });

    let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    const mouse = {
      x: -1000,
      y: -1000,
    };

    canvas.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY + Math.abs(canvas.getBoundingClientRect().top);
    });

    canvas.addEventListener('mouseleave', () => {
      mouse.x = -1000;
      mouse.y = -1000;
    });

    class Particle {
      x: number;
      y: number;
      dx: number;
      dy: number;
      angle: number;
      size: number;
      image: HTMLImageElement;

      constructor(x: number, y: number, dx: number, dy: number, angle: number, size: number, image: HTMLImageElement) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.angle = angle;
        this.size = size;
        this.image = image;
      }

      update() {
        if (this.x < this.size / 2) this.dx = -this.dx;
        if (this.x > innerWidth - this.size / 2) this.dx = -this.dx;
        if (this.y < this.size / 2) this.dy = -this.dy;
        if (this.y > innerHeight - this.size / 2) this.dy = -this.dy;

        this.x += this.dx;
        this.y += this.dy;
        this.angle += 1;

        this.draw();
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle * (Math.PI / 180));

        ctx.drawImage(this.image, -this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
      }
    }

    let particles: Particle[] = [];

    let expectedSize = Math.round(innerWidth / 20);
    let SIZE = expectedSize < 30 ? 30 : expectedSize > 50 ? 50 : expectedSize;

    const setup = () => {
      let expectedSize = Math.round(innerWidth / 20);
      SIZE = expectedSize < 30 ? 30 : expectedSize > 50 ? 50 : expectedSize;

      particles = images.map(
        (image) => new Particle(SIZE + Math.random() * (innerWidth - SIZE * 2), SIZE + Math.random() * (innerHeight - SIZE * 2), (Math.random() - 0.5) * 1.5, (Math.random() - 0.5) * 1.5, 0, 40, image)
      );

      canvas.width = innerWidth;
      canvas.height = innerHeight;
    };

    const animate = () => {
      requestAnimationFrame(animate);

      ctx.clearRect(0, 0, innerWidth, innerHeight);

      particles.forEach((particle) => {
        particle.update();
      });
    };

    setup();
    animate();

    window.addEventListener('resize', setup);
  }, []);

  return (
    <div className="bg-white z-0 relative h-screen flex justify-center items-center flex-col gap-5">
      <m.canvas initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ duration: 0.4, delay: 1.4 }} ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default Background;
