import * as React from "react";
import ParticleImage, {
  ParticleForce,
  ParticleOptions,
  Vector,
  forces,
} from "react-particle-image";

interface ParticleProps {
  imgSrc: string;
  filterColor?: string;
  logoScale?:number;
  logoWidth?:number;
  logoHeight?:number;
  colorFunction?: (params: { x: number; y: number; image: any }) => string;
}

export default function Particles({
  imgSrc,
  filterColor='white',
  colorFunction,
  logoScale=0.25,
  logoWidth,
  logoHeight=200,
}: ParticleProps) {
  const particleOptions: ParticleOptions = {
    mass: () => 50,
    radius: () => Math.random() * 0.01 + 0.4,
    filter: ({ x, y, image }) => {
      const pixel = image.get(x, y);
      return pixel.r > 100;
    },
    color: colorFunction || (() => filterColor),
    friction: () => 0.15,
    initialPosition: ({ canvasDimensions }) => {
      return new Vector(
        canvasDimensions.width / 2,
        canvasDimensions.height / 2
      );
    },
  };

  return (
    <div
      style={{
        filter: `drop-shadow(0 0 5px ${filterColor ? filterColor : "white"})`,
        borderRadius: 100,
        overflow: "hidden",
        backgroundColor: '#060709'
      }}
    >
      <div
        style={{
          filter: `drop-shadow(0 0 5px ${filterColor ? filterColor : "white"})`,
        }}
      >
        <ParticleImage
          width={logoWidth}
          height={logoHeight}
          scale={logoScale}
          entropy={10}
          maxParticles={6500}
          backgroundColor="trasperant"
          src={imgSrc}
          mouseMoveForce={(x, y) => forces.disturbance(x, y, 20)}
          touchMoveForce={(x, y) => forces.disturbance(x, y, 20)}
          mouseDownForce={(x, y) => forces.disturbance(x, y, 20)}
          particleOptions={particleOptions}
        />
      </div>
    </div>
  );
}
