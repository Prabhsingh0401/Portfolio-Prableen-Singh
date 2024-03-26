import React from "react";
import Typewriter from "typewriter-effect";
import "./index.scss"

const Type = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: ["Web Developer", "UI/UX Designer", "Photographer"],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 20,
        }}
      />
    </div>
  );
};

export default Type;