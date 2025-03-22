"use client";

import { Typography } from "@material-tailwind/react";
import Lanyard from '../components/bits/Lanyard/Lanyard'


function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8">
        <div className="container mx-auto  grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-3">
          <div className="col-span-2 ">
            {/* @ts-ignore */}
            <Typography variant="h1" color="white" className="mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">
              Innovación, Excelencia y Control Total de tu Infraestructura
            </Typography>
            {/* @ts-ignore */}
            <Typography
              variant="lead"
              className="mb-16 !text-white md:pr-16 xl:pr-28"
            >
              Bienvenido a CrackDevOps, tu socio estratégico en consultoría avanzada 
              de ingeniería de plataformas y DevOps. En un mundo digital que evoluciona 
              rápidamente, no puedes darte el lujo de externalizar tu ventaja competitiva. 
              Nuestro enfoque único combina Platform Engineering, DevOps, Inteligencia Artificial (IA), y metodologías ágiles para asegurar que tu infraestructura tecnológica sea tu mejor activo.
            </Typography> 
          </div>
          <Lanyard  position={[0, 0, 20]} gravity={[0, -40, 0]} />
          


        </div>
        
      </header>
      
    </div>
  );
}
export default Hero;
