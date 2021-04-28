import React from "react";

import { createGlobalStyle } from "styled-components";
import Particles from "react-tsparticles";

import particlejson from "./particles.json";

const GlobalStyle = createGlobalStyle`
  body {
    background: #FFEB6F;
  }
`;

const options = {
  background: {
    color: {},
  },
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: ["#4FB2AB", "#EC898E", "#905B9E", "#E64C29", "#69A71B"],
    },
    links: {
      enable: false,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.7,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 20,
    },
  },
  detectRetina: true,
  fullScreen: {
    enable: true,
    zIndex: 1,
  },
};

function Home(props) {
  return (
    <>
      <GlobalStyle />
      <Particles id="tsparticles" options={options} />
    </>
  );
}

export default Home;
