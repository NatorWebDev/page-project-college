import React from 'react'
import { Form } from "react-router-dom";

export default function Login() {
  return (
    <div className='w-full h-screen bg-Background absolute flex items-center justify-center login_bg'>
        <img src="login_bg.jpg" alt=""  className='absolute w-full h-full z-10 blur-sm'/>

        <div className='w-384 h-512 bg-white flex flex-col items-center shadow-2xl rounded-lg p-12 pt-32 relative z-20' >
            <h2 className='w-64 h-64 rounded-full bg-black '></h2>
            <h2 className='text-xl font-bold mt-12'>Sign in</h2>
            <Form className='w-full flex flex-col p-24 mt-24'>
                <label htmlFor="awa" className=''>UserName</label>
                <input type="text" name="awa" id=""  className='input w-full h-32 rounded'/>
                
                <label htmlFor="awa" className='mt-12'>Password</label>
                <input type="text" name="awa" id=""  className='input w-full h-32 rounded'/>

            </Form>
        </div>

    </div>
  )
}
