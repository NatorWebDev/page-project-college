import React from "react";
import { Form } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

export default function Login() {
  return (
    <div className="w-full h-screen bg-Background absolute flex items-center justify-center login_bg">
      <img
        src="login_bg.jpg"
        alt=""
        className="absolute w-full h-full z-10 blur-sm"
      />

      <div className="w-384 h-512 bg-white flex flex-col items-center shadow-2xl rounded-lg p-12 pt-32 relative z-20 ">
        <h2 className="w-64 h-64 rounded-full relative flex items-center justify-center overflow-hidden">
          <img src="logo.png" alt="" srcset="" className="absolute h-96 w-96 object-cover"/>
        </h2>
        <h2 className="text-xl font-bold mt-12">Sign in</h2>
        <Form className="w-full flex flex-col p-24 justify-around flex-1 ">
          <div>
            <label htmlFor="awa" className="">
              UserName
            </label>
            <input
              type="text"
              name="awa"
              id=""
              className="input w-full h-32 rounded"
            />
          </div>
          <div>
            <label htmlFor="awa" className="">
              Password
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
            value="Login"
            className="w-192 h-48 rounded bg-primary self-center text-white font-bold cursor-pointer transition-all duration-100 hover:bg-[#7744cc]"
          />
          <div className="w-192 h-64 self-center">
            <GoogleLogin />
          </div>
        </Form>
      </div>
    </div>
  );
}
