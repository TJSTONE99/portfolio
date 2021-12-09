import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { login } from '../../../lib/amplify';

const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
  const formData = new FormData(event.currentTarget);
  event.preventDefault();
  const email = formData.get('email');
  const password = formData.get('password');

  if (email && password) await login(email.toString(), password.toString());
  
};

export default function LoginForm() {
  
  return (
    <>
      <form className="flex flex-col gap-2 items-center" onSubmit={handleSubmit}>
        <div className="flex relative">
          <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
            <MdOutlineEmail />
          </span>
          <input type="text" id="email-with-icon" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" placeholder="Email"/>
        </div>
        
        <div className="flex relative">
          <span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
            <RiLockPasswordLine />
          </span>
          <input type="password" id="password-with-icon" className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="password" placeholder="Password"/>
        </div>

        <div className="min-w-full mt-1">
          <label className="inline-flex items-center cursor-pointer">
            <input
              id="customCheckLogin"
              type="checkbox"
              className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
              style={{ transition: 'all .15s ease' }}
            />
            <span className="ml-2 text-sm font-semibold text-gray-700">
                Remember me
            </span>
          </label>
        </div>

        <div className="min-w-full text-center mt-2">
          <button
            className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
            type="submit"
            style={{ transition: 'all .15s ease' }}
          >
            Login
          </button>
        </div>
        <a 
          className="text-blue-500 font-semibold hover:underline" 
          href=""
        >
          Forgot Password
        </a>

        <a
          className="text-blue-500 font-semibold hover:underline" 
          href=""
        >
          Register
        </a>
      </form>
    </>
  );
}