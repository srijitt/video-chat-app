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
    <div className='flex flex-col items-center my-12'>
      <div className='bg-red-300 w-[50%] px-12 py-4 flex gap-20'>
        <div className='py-4 w-full'>
          <label htmlFor="ID" className='font-bold mb-4'>YOUR ID</label>
          <form className="flex flex-col space-y-4" onSubmit={(e) => { e.preventDefault() }}>
            <input type="text" name="ID" value={name} onChange={(e) => { setName(e.target.value); console.log(e.target.value) }} className='p-2 border-2 border-red-400' />

            {console.log(me)}

            <CopyToClipboard text={me}>
              <button className='flex space-x-2 justify-center items-center bg-yellow-300 py-2 rounded-xl'>
                <p>Copy to Clipboard</p>
                <IoCopyOutline />
              </button>
            </CopyToClipboard>

          </form>
        </div>

        <div className='py-4 w-full'>
          <label htmlFor="IDtoCall" className='font-bold mb-4'>ID TO CALL</label>
          <form className="flex flex-col space-y-4" onSubmit={(e) => { e.preventDefault()}}>
            <input type="text" name="IDtoCall" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} className='p-2 border-2 border-red-400' />

            {callAccepted && !callEnded ? (
              <button className='flex space-x-2 justify-center items-center bg-red-600 py-2 rounded-xl' onClick={leaveCall}>
                <p>Hang Up</p>
                <MdCallEnd />
              </button>
            ) : (
              <button className='flex space-x-2 justify-center items-center bg-green-400 py-2 rounded-xl' onClick={() => callUser(idToCall)}>
                <p>Call</p>
                <LuVideo />
              </button>
            )}

          </form>
        </div>
      </div>
      {children}
    </div>
  )
}
