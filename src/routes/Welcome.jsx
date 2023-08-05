import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <section className="flex absolute items-center justify-center w-full h-full">
      <img
        src="welcome_bg.jpg"
        alt=""
        className="absolute w-full h-full object-cover z-10 blur-[2px]"
      />
      <div className="absolute w-full h-full bg-primary opacity-50 z-20"></div>
      <div className="absolute z-30 text-white w-512 h-512 flex items-center justify-center flex-col">
        <div className="absolute top-96 w-96 h-96 rounded-full bg-white flex items-center justify-center">
          <img src="logo.png" alt="logo" className="absolute rounded-full" />
        </div>
        <h1 className="text-4xl font-bold appear">
          Sist.Red Social de Eventos
        </h1>
        <h2 className="text-2xl opacity-70 mt-8">Te damos la Bienvenida</h2>
        <div className="flex w-[80%] absolute h-192 w-full bottom-64 justify-around items-center text-xl p-64">
          <Link
            to={"/login"}
            className="w-128 h-48 flex items-center justify-center bg-primary rounded hover:bg-[#7722cc] transition-all duration-100 hover:whiteShadow"
          >
            Iniciar Sesion
          </Link>
          <Link
            to={"/register"}
            className="w-128 h-48 flex items-center justify-center bg-primary rounded hover:bg-[#7722cc] transition-all duration-100 hover:whiteShadow"
          >
            Registrarse
          </Link>
        </div>
      </div>
    </section>
  );
}
