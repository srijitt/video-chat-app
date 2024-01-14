import React from 'react';
import { useContext } from 'react';
import { SocketContext } from '../Context';
import { IoCallOutline } from "react-icons/io5";

export const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <div className='w-full lg:px-10'>
      {call.isReceivingCall && !callAccepted &&
        (<div className='bg-slate-300 rounded-xl w-full px-12 py-10 flex flex-col md:flex-row items-center justify-between  gap-8'>
          <span className='bg-white py-2 px-14 rounded-2xl'>{call.name || 'USER'} is calling</span>
          <button onClick={answerCall} className='flex bg-green-200 justify-center rounded-2xl items-center
           px-4 py-2 gap-4'>
            <p>Answer</p>
            <IoCallOutline />
          </button>
        </div>)}
    </div>
  )
}
