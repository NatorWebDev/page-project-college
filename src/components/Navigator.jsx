import React from "react";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

export default function Navigator() {
  const [isActive, setisActive] = useState(false);

  const links = [
    {
      name: "Bienvenida",
      link: "/welcome",
    },
    {
      name: "inicio de sesión",
      link: "/login",
    },
    {
      name: "registro",
      link: "/register",
    },
    {
      name: "Crear Evento",
      link: "/create",
    },
    {
      name: "Editar Perfil",
      link: "/profileedit",
    },
  ];

  const activeStyles =
    "absolute w-128 flex flex-col gap-[16px] toLeft transition-all duration-300";
  const notActiveStyles =
    "absolute w-128 flex flex-col gap-[16px] reduce transition-all duration-300";

  return (
    <div
      className=" w-64 h-64 rounded-full absolute bg-white right-12 centerY z-40 flex items-center justify-center cursor-pointer purpleShadow hover:bg-primary group/circle transition-all duration-100"
      onClick={() => {
        isActive ? setisActive(false) : setisActive(true);
      }}
    >
      {isActive && (
      <ImCross className="text-sm group-hover/circle:text-white"/>
      )}
      {!isActive && (
      <AiOutlineMenu className=" font-bold text-lg group-hover/circle:text-white" />
      )}
      <ul className={isActive ? activeStyles : notActiveStyles}>
        {links.map((link, index) => (
          <li
            key={index}
            className="w-full py-4 bg-white flex items-center justify-center rounded-lg purpleShadow hover:bg-primary hover:text-white transition-all duration-200"
          >
            <Link
              className="w-full h-full text-center"
              to={link.link}
              onClick={
                isActive
                  ? () => {}
                  : (e) => {
                      e.preventDefault;
                    }
              }
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

    </div>
  );
}
