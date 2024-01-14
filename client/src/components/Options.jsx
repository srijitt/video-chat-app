import React, { useContext } from 'react';
import { SocketContext } from '../Context';
import { useState } from 'react';
import { IoCopyOutline } from "react-icons/io5";
import { LuVideo } from "react-icons/lu";
import { MdCallEnd } from "react-icons/md";
import CopyToClipboard from 'react-copy-to-clipboard';


export const Options = ({ children }) => {


  const { me, name, setName, callAccepted, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');


  return (
    <div className='w-full py-12 flex flex-col justify-center items-center'>
      
      <div className="w-[80%] lg:w-[60]">
      {children}
      
      <div className='flex flex-col lg:flex-row items-center justify-center lg:px-12 py-4 gap-10 lg:gap-40 lg:mt-10'>
        <div className='p-12 w-full bg-black  rounded-2xl'>
          <label htmlFor="ID" className='font-bold text-white'>Enter your name</label>
          <form className="flex flex-col space-y-4 mt-2" onSubmit={(e) => { e.preventDefault() }}>
            <input type="text" name="ID" value={name} onChange={(e) => { setName(e.target.value); console.log(e.target.value) }} className='py-2 px-4 border-2 border-slate-400 rounded-3xl' />

            {console.log(me)}

            <CopyToClipboard text={me}>
              <button className='flex space-x-2 justify-center items-center bg-slate-400 py-2 rounded-xl'>
                <p>Copy ID</p>
                <IoCopyOutline />
              </button>
            </CopyToClipboard>

          </form>
        </div>

        <div className='p-12 w-full border-2 border-slate-500 rounded-2xl'>
          <label htmlFor="IDtoCall" className='font-bold mb-4'>Enter caller's ID</label>
          <form className="flex flex-col space-y-4 mt-2" onSubmit={(e) => { e.preventDefault()}}>
            <input type="text" name="IDtoCall" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} className='py-2 px-4 border-2 border-slate-400 rounded-3xl' />

            {callAccepted && !callEnded ? (
              <button className='flex space-x-2 justify-center items-center bg-red-600 py-2 rounded-xl' onClick={leaveCall}>
                <p>Hang Up</p>
                <MdCallEnd />
              </button>
            ) : (
              <button className='flex space-x-2 justify-center items-center bg-slate-400 py-2 rounded-xl' onClick={() => callUser(idToCall)}>
                <p>Call</p>
                <LuVideo />
              </button>
            )}

          </form>
        </div>
        </div>
        
      </div>

      
    </div>
  )
}
