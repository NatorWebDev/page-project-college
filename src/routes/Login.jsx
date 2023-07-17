import React from "react";
import { Form,Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { BiSolidUser } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";


export default function Login() {
  return (
    <div className="w-full h-screen bg-Background absolute flex items-center justify-center login_bg">
      <div className="w-full z-[11] h-full select-none absolute bg-primary opacity-10"></div>
      <img
        src="login_bg.jpg"
        alt=""
        className="absolute w-full h-full z-10 blur-sm select-none object-cover"
      />

      <div className="w-384 h-512 bg-white flex flex-col items-center shadow-2xl rounded-lg p-12 pt-32 relative z-20 ">
        <h2 className="w-64 h-64 rounded-full relative flex items-center justify-center overflow-hidden">
          <img src="logo.png" alt="" srcset="" className="absolute h-96 w-96 object-cover"/>
        </h2>
        <h2 className="text-xl font-bold mt-12">Inicio de Sesión</h2>
        <Form className="w-full flex flex-col p-24 justify-around flex-1 ">
          <div>
            <label htmlFor="awa" className="flex items-center">
              <BiSolidUser  className="text-xl opacity-50 mr-4"/> 
              Nombre de Usuario 
            </label>
            <input
              type="text"
              name="awa"
              id=""
              className="input w-full h-32 rounded"
            />
          </div>
          <div>
            <label htmlFor="awa" className="flex items-center">
            <AiOutlineLock className="text-xl opacity-50 mr-4"/>
              Contraseña
            </label>
            <input
              type="text"
              name="awa"
              id=""
              className="input w-full h-32 rounded"
            />
          </div>
          <input
            type="button"
            value="Iniciar Sesión"
            className="w-192 h-48 rounded bg-primary self-center text-white font-bold cursor-pointer transition-all duration-100 hover:bg-[#7744cc]"
          />
          <div className="w-192 h-64 self-center">
            <GoogleLogin />
          </div>
        </Form>

        <Link to='/register' className="absolute bottom-24 left-24 text-[.8rem] text-[#555] hover:text-primary transition-all duration-75">No posee cuenta?, Registrarse</Link>
      </div>
    </div>
  );
}
