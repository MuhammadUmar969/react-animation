import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const BasicAnimation = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, { x: 600,y : 300, duration: 2 });
  }, []);

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "red",
        }}
      />
    </div>
  );
};

export default BasicAnimation;
