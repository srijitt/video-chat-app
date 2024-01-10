import React from 'react';
import { useContext } from 'react';
import { SocketContext } from '../Context';
import { IoCallOutline } from "react-icons/io5";

export const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <div className='bg-orange-300 my-12'>
      {call.isReceivingCall && !callAccepted &&
        (<div className=' w-full px-12 py-4 flex items-center  gap-20'>
          <h1 className='bg-white py-2 px-14 rounded-2xl'>{call.name || 'USER'} is calling</h1>
          <button onClick={answerCall} className='flex bg-green-200 justify-center rounded-2xl items-center
           px-4 py-2  gap-4'>
            <p>Answer</p>
            <IoCallOutline />
          </button>
        </div>)}
    </div>
  )
}
