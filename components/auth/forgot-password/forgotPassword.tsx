import { MdOutlineEmail } from 'react-icons/md';

export default function ForgorPasswordForm() {
  
  return (
    <>
      <form className="flex flex-col gap-2 items-center">
        <div className="flex relative">
          <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
            <MdOutlineEmail />
          </span>
          <input type="text" id="email-with-icon" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" placeholder="Email"/>
        </div>

        <div className="min-w-full text-center mt-2">
          <button
            className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
            type="submit"
            style={{ transition: 'all .15s ease' }}
          >
            Recover
          </button>
        </div>
      </form>
    </>
  );
}