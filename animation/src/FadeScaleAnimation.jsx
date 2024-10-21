import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const FadeScaleAnimation = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "bounce.out" }
    );
  }, []);

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: "orange",
          marginTop: "100px",
        }}
      />
    </div>
  );
};

export default FadeScaleAnimation;
