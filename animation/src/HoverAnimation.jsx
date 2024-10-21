import React, { useRef } from "react";
import gsap from "gsap";

const HoverAnimation = () => {
  const boxRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(boxRef.current, { rotate: 360, duration: 1 });
  };

  const handleMouseLeave = () => {
    gsap.to(boxRef.current, { rotate: 0, duration: 1 });
  };

  return (
    <div>
      <div
        ref={boxRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: "120px",
          height: "120px",
          backgroundColor: "yellow",
        }}
      />
    </div>
  );
};

export default HoverAnimation;
