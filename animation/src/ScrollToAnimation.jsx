import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const ScrollToAnimation = () => {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const textRef = useRef(null);
  const textInsideRef = useRef(null);

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

    // GSAP Image Animations
    gsap.fromTo(
      img1Ref.current,
      { x: 0 },
      {
        x: 300,
        scrollTrigger: {
          trigger: img1Ref.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      img2Ref.current,
      { y: 0 },
      {
        y: -300,
        scrollTrigger: {
          trigger: img2Ref.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      img3Ref.current,
      { x: 0 },
      {
        x: -300,
        scrollTrigger: {
          trigger: img3Ref.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );

    // GSAP Text Grow Animation
    gsap.fromTo(
      textRef.current,
      { fontSize: "5rem", scale: 1 },
      {
        fontSize: "20rem",
        scale: 5,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 10%",
          scrub: true,
          pin: true, // Pin the text in place while it grows
          onLeave: () => {
            // When text leaves, fade it out and reveal images
            gsap.to(textRef.current, { opacity: 0, duration: 1 });
            gsap.to(textInsideRef.current, { display: "block", opacity: 1, duration: 2 });
          },
        },
      }
    );

    return () => lenis.destroy();
  }, []);

  return (
    <div>
      <div style={{ height: "150vh" }}>Scroll down</div>

      {/* Image Section */}
      <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "300px" }}>
        <img
          ref={img1Ref}
          src="https://via.placeholder.com/200"
          alt="img1"
          style={{ width: "200px", height: "200px" }}
        />
        <img
          ref={img2Ref}
          src="https://via.placeholder.com/200"
          alt="img2"
          style={{ width: "200px", height: "200px" }}
        />
        <img
          ref={img3Ref}
          src="https://via.placeholder.com/200"
          alt="img3"
          style={{ width: "200px", height: "200px" }}
        />
      </div>

      {/* Text Section */}
      <div
        ref={textRef}
        style={{
          fontSize: "5rem",
          fontWeight: "bold",
          textAlign: "center",
          color: "white",
          backgroundColor: "black",
          padding: "100px 0",
        }}
      >
        GROW TEXT
      </div>

      {/* Inside Text Image Section */}
      <div
        ref={textInsideRef}
        style={{
          display: "none",
          opacity: 0,
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          padding: "100px 0",
        }}
      >
        <h2>You've entered the text!</h2>
        <div>
          <img
            src="https://via.placeholder.com/400"
            alt="inside1"
            style={{ width: "200px", height: "200px", margin: "0 20px" }}
          />
          <img
            src="https://via.placeholder.com/400"
            alt="inside2"
            style={{ width: "200px", height: "200px", margin: "0 20px" }}
          />
        </div>
      </div>

      <div style={{ height: "150vh" }}>Scroll to see the effect!</div>
    </div>
  );
};

export default ScrollToAnimation;
