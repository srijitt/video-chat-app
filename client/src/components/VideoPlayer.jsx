import React, { useContext } from 'react'
import { SocketContext } from '../Context'

export const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

    return (
        <div className='flex w-full pb-24'>
            {stream && (
                <div className='w-full flex items-center flex-col'>
                    <h2 className='text-2xl text-yellow-300 py-4 text-center'>{name || 'MyName'}</h2>
                    <video playsInline muted ref={myVideo} autoPlay className='w-[80vh] h-[50vh]' />
                </div>
            )}


            {callAccepted && !callEnded && (
                <div className='w-full flex items-center flex-col'>
                    <h2 className='text-2xl text-yellow-300 py-4 text-center'>{call.name || 'Caller'}</h2>
                    <video playsInline muted ref={userVideo} autoPlay className='w-[80vh] h-[50vh]' />
                </div>
            )}

        </div>
    )
}
