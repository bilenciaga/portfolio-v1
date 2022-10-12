import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const Particle = () => {

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
}, []);

  return (
    <Particles
    className='particles'
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
        fps_limit: 60,
        particles: {
          color: { value: "#ffffff" },
          move: {
            size: true,
            attract: { enable: false, rotateX: 600, rotateY: 600 },
            bounce: false,
            direction: "none",
            enable: true,
            out_mode: "out",
            random: true,
            speed: 2,
            straight: false,
          },
          number: { density: { enable: true, value_area: 700 }, value: 100 },
          opacity: {
            anim: { enable: true, opacity_min: 0.1, speed: 1.2 },
            random: true,
            value: 1.2
          },
          size: {
            anim: { enable: false, size_min: 0.3, speed: 10, sync: false },
            random: true,
            value: 2.5
          }
        },
        retina_detect: true
      }
    }
/>
  )
}

export default Particle