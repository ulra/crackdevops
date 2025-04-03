import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      {/* @ts-ignore */}
      <Typography
        as="a"
        href={href || "#"}
        
        variant="small"
        className="font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* @ts-ignore */}
        <Typography
          className="tracking-widest"
          as="a"
          href="/"
          target="_blank"
          variant="h6"
          color={isScrolling ? "gray" : "white"}
        >
          Crack<span style={{color:'#E93529'}}>Devops</span>
        </Typography>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          <NavItem href="/">Home</NavItem>
          <NavItem href="/servicios">Servicios</NavItem>
          <NavItem href="/exito">Casos de exito</NavItem>
          <NavItem href="/planes">Planes</NavItem>
          <NavItem href="/contacto">Contacto</NavItem>
   
        </ul>
        <div className="hidden gap-2 lg:flex lg:items-center">
          {/* @ts-ignore */}
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
          >
            <i className="fa-brands fa-twitter text-base" />
          </IconButton>
          {/* @ts-ignore */}
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
          >
            <i className="fa-brands fa-facebook text-base" />
          </IconButton>
          {/* @ts-ignore */}
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
          >
            <i className="fa-brands fa-instagram text-base" />
          </IconButton>
       
        </div>
        {/* @ts-ignore */}
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/servicios">Servicios</NavItem>
            <NavItem href="planes">Planes</NavItem>
            <NavItem href="/contacto">
              Contacto
            </NavItem>
          </ul>
          <div className="mt-4 flex items-center gap-2">
            {/* @ts-ignore */}
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-twitter text-base" />
            </IconButton>
            {/* @ts-ignore */}
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-facebook text-base" />
            </IconButton>
            {/* @ts-ignore */}
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-instagram text-base" />
            </IconButton>

          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
