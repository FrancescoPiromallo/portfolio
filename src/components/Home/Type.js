import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
  <Typewriter
    options={{
      strings: [
        "<i style='font-size: 0.8em;'>Software Developer</i>",
        "<i style='font-size: 0.8em;'>Freelancer</i>",
        "<i style='font-size: 0.8em;'>Java Developer</i>",
        "<i style='font-size: 0.8em;'>Open Source Contributor</i>",
      ],
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
    }}
  />
  );
}

export default Type;
