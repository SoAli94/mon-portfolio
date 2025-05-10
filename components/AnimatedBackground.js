/// components/AnimatedBackground.js
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // version légère

export default function AnimatedBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // PAS loadFull
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: { value: "#ffffff" },
        },
        particles: {
          number: {
            value: 50,
            density: { enable: true, area: 800 },
          },
          color: { value: "#000000" },
          links: {
            enable: true,
            distance: 150,
            color: "#000",
            opacity: 0.4,
          },
          move: {
            enable: true,
            speed: 1,
          },
        },
      }}
    />
  );
}
