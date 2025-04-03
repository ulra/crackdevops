"use client";
import { Typography, IconButton} from "@material-tailwind/react";

const LINKS = ["servicios", "planes", "contacto"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-gray-900 px-8 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <h5
              className="tracking-widest mb-4 text-white"
              color="white"   
            >
              Crack<span className="text-red-600">Devops</span>
            </h5>
            <p color="white" className="mb-12 font-normal text-white">
            Tu socio estratégico en consultoría avanzada de ingeniería de plataformas y DevOps
            </p>
            <ul className="flex flex-wrap items-center justify-center md:justify-start">
              {LINKS.map((link, idx) => (
                <li key={link}>
                  <a
                    
                    href={`/${link}`}
                    color="white"
                    className={`py-1 font-medium transition-colors text-white ${
                      idx === 0 ? "pr-3" : "px-3"
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 w-full md:mt-0 md:w-auto"></div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <p
            color="white"
            className="text-center text-white font-normal opacity-75"
          >
            &copy; {CURRENT_YEAR} CrackDevops{" "}
           

            .
          </p>

          <div className="flex gap-2">
            
              <i className="fa-brands fa-twitter text-2xl not-italic opacity-75 text-white"></i>
              <i className="fa-brands fa-linkedin text-2xl not-italic opacity-75 text-white"></i>
              <i className="fa-brands fa-facebook text-2xl not-italic opacity-75 text-white"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
