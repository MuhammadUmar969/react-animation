import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Lenis from "lenis";

const ScrollAnimation = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // GSAP Scroll Trigger
    gsap.to(boxRef.current, {
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
      x: 300,
      duration: 2,
    });

    return () => lenis.destroy();
  }, []);

  return (
    <div>
      <div style={{ height: "150vh" }}>Scroll down</div>
      <div
        ref={boxRef}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "purple",
        }}
      />
      <div style={{ height: "150vh" }}></div>
    </div>
  );
};

export default ScrollAnimation;
