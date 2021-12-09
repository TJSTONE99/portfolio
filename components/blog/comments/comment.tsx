import { BiUser } from 'react-icons/bi';
import { AiOutlineEdit, AiOutlineDelete, AiOutlineSave } from 'react-icons/ai';

const toggleEditMode = (mode: modes) => {

  switch (mode){
  case modes.EDIT:
    mode = modes.VIEW;
    break;
  default:
    mode = modes.EDIT;
  }
};

export enum modes {
    VIEW = 'view',
    EDIT = 'edit',
    POST = 'post'
}

export default function Comment(props: { mode: modes }) {
  
  return (
    <>
      <div 
        className="flex flex-row items-center gap-3 space-y-8 text-blue-300 shadow-sm relative bg-blue-900 p-3 -mx-6 rounded-2xl w-9/12"
      >
        <BiUser className="font-medium text-5xl" />

        <div className="flex flex-col w-full">


          {props.mode === modes.VIEW ? (
            <p>
                I am a full-stack developer based in the UK with a passion for building and designing websites from the ground up. I love working with modern frameworks and tools to make my day to day the most informed and efficient it can be.
            </p>
          ) : null}

          {props.mode === modes.EDIT || props.mode === modes.POST ? (
            <label className="text-gray-700" htmlFor="name">
              <textarea className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="Enter your comment" name="comment" rows="5" cols="40">
              </textarea>
            </label>
          ) : null}


          {props.mode === modes.VIEW || props.mode === modes.EDIT ? (
            <div className={`flex ${props.mode === modes.VIEW ? 'flex-row' : 'flex-row-reverse'} justify-between items-center`}>
            
              <div className="flex flex-row-reverse gap-2">
                {props.mode === 'edit' ? (
                  <button
                    type="button"
                    className="inline-flex items-center justify-center h-10 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                    onClick={()=>toggleEditMode(props.mode)}
                  >
                    <AiOutlineSave />

                    <span className="ml-2">Save</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="inline-flex items-center justify-center h-10 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                    onClick={()=>toggleEditMode(props.mode)}
                  >
                    <AiOutlineEdit />

                    <span className="ml-2">Edit</span>
                  </button>
                )}

                {props.mode === 'edit' ? (
                  <button
                    className="inline-flex items-center justify-center h-10 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-500 hover:bg-red-600 focus:shadow-outline focus:outline-none"
                  >
                    <AiOutlineDelete />

                    <span className="ml-2">Delete</span>
                  </button>
                ) : null}
                
              </div>

              <div className="flex flex-col">
                <span>Posted: </span>
                <span>Last Updated: </span>
              </div>
            </div>
          ) : (
            <div className="flex flex-row w-full justify-end">
              <button
                type="button"
                className="inline-flex items-center justify-center h-10 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                onClick={()=>toggleEditMode(props.mode)}
              >
                <AiOutlineEdit />

                <span className="ml-2">Post</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </>
  );
}