import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { dialogService } from '../../lib/dialogService';

export default function Dialog(props) {

  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                {props.title}
              </h3>
              <button
                className="p-1 ml-auto float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => dialogService.close()}
              >
                <AiOutlineClose />
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              {props.bodyComponent}
            </div>
            {/*footer*/}
            {props.showFooter || props.submitBtn ? (
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => dialogService.close()}
                >
                            Close
                </button>

                {props.submitBtn ? (
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => dialogService.close()}
                  >
                    {props.submitBtn}
                  </button>
                ) : null
                }
              </div>
            ) : null
            }  
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
