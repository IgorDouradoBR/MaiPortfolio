import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "UI/UX Designer",
          "Design System",
          "User-Centered Design",
          "Wireframe and Prototyping",
          "Interaction Designer",
          "Figma and Adobe",
          "User Research",
          "Mobile and Responsive Design",
          "Accessibility and Inclusivity",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
