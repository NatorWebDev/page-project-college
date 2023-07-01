import React, { useState } from "react";
import { Form } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function Register() {
  const [value, setValue] = useState("");

  return (
    <div className="w-full h-screen bg-Background absolute flex items-center justify-center login_bg">
      <img
        src="login_bg.jpg"
        alt=""
        className="absolute w-full h-full z-10 blur-sm"
      />

      <div className="w-384 h-512 bg-white flex flex-col items-center shadow-2xl rounded-lg p-4 pt-12 relative z-20 ">
        <h2 className="w-64 h-64 rounded-full relative flex items-center justify-center overflow-hidden">
          <img
            src="logo.png"
            alt=""
            srcset=""
            className="absolute h-96 w-96 object-cover"
          />
        </h2>
        <h2 className="text-xl font-bold mt-12">Sign Up</h2>
        <Form className="w-full flex flex-col p-24 justify-around flex-1 ">
          <div className="flex justify-between w-full h-32 w-full">
            <input
              type="text"
              placeholder="First Name"
              className="input h-32 w-128 rounded"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input h-32 w-128 rounded"
            />
          </div>

          <input
            type="text"
            name="awa"
            id=""
            className="input w-full h-32 rounded"
            placeholder="UserName"
          />

          <input
            type="text"
            name="awa"
            id=""
            className="input w-full h-32 rounded"
            placeholder="Password"
          />
          <input
            type="text"
            name="awa"
            id=""
            className="input w-full h-32 rounded"
            placeholder="E-mail"
          />
          <PhoneInput
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
            className="input w-full h-32 rounded"
            defaultCountry="VE"
          />
          <input
            type="button"
            value="Sign Up"
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
