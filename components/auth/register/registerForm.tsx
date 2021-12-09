import { RiLockPasswordLine } from 'react-icons/ri';
import { MdOutlineEmail } from 'react-icons/md';
import { BiUser } from 'react-icons/bi';

export default function RegisterForm() {
  
  return (
    <>
      <form className="flex flex-col gap-2 items-center">
        <div className="flex relative">
          <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
            <BiUser />
          </span>
          <input type="text" id="username-with-icon" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="username" placeholder="Username"/>
        </div>
        
        <div className="flex relative">
          <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
            <MdOutlineEmail />
          </span>
          <input type="text" id="email-with-icon" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" placeholder="Email"/>
        </div>
        
        <div className="relative">
          <div className="flex relative">
            <span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
              <RiLockPasswordLine />
            </span>
            <input type="password" id="password-with-icon" className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="password" placeholder="Password"/>
          </div>
          <div className="grid w-full h-1 grid-cols-12 gap-4 mt-3">
            <div className="h-full col-span-3 bg-green-500 rounded">
            </div>
            <div className="h-full col-span-3 bg-green-500 rounded">
            </div>
            <div className="h-full col-span-3 bg-green-500 rounded">
            </div>
            <div className="h-full col-span-3 bg-gray-200 rounded">
            </div>
          </div>
          <div className="mt-2 text-green-500">
            Valid password
          </div>
        </div>

        <div className="flex relative">
          <span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
            <RiLockPasswordLine />
          </span>
          <input type="password" id="confirm-password-with-icon" className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="confirm-password" placeholder="Confirm password"/>
        </div>

        <div className="min-w-full text-center mt-2">
          <button
            className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
            type="submit"
            style={{ transition: 'all .15s ease' }}
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
}