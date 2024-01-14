import React, { useContext } from 'react'
import { SocketContext } from '../Context'

export const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

    return (
        <div className='flex flex-col md:flex-row md:gap-8 w-full py-12 px-8 md:px-4'>
            {stream && (
                <div className='w-full flex items-center flex-col'>
                    <h2 className='text-xl px-14 text-gray-600 border-2 border-red-700 shadow-xl rounded-[45px] py-2 text-center'>{name || 'MyName'}</h2>
                    <video playsInline muted ref={myVideo} autoPlay className='w-[80vh] h-[50vh] md:mt-8' />
                </div>
            )}


            {callAccepted && !callEnded && (
                <div className='w-full flex items-center flex-col'>
                    <h2 className='text-xl px-14 text-gray-800 border-2 border-blue-700 shadow-xl rounded-[45px] py-2 text-center'>{call.name || 'Caller'}</h2>
                    <video playsInline muted ref={userVideo} autoPlay className='w-[80vh] h-[50vh] md:mt-8' />
                </div>
            )}

        </div>
    )
}
