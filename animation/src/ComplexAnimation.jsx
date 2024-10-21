import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ComplexAnimation = () => {
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power1.out" } });
    tl.to(box1Ref.current, { x: 300 })
      .to(box2Ref.current, { y: 200 })
      .to(box1Ref.current, { rotate: 360 });
  }, []);

  return (
    <div>
      <div
        ref={box1Ref}
        style={{ width: "100px", height: "100px", backgroundColor: "blue" }}
      />
      <div
        ref={box2Ref}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "green",
          marginTop: "20px",
        }}
      />
    </div>
  );
};

export default ComplexAnimation;
