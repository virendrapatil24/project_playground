import React from 'react'
import { Button } from './Button'

const Screen1 = () => {
    return (
        <div className='bg-blue-900 w-screen h-screen'>
            <div className='flex flex-col justify-center items-center m-10 gap-4'>
                <div className='text-white text-2xl'><span className='text-green-400'>Webinar</span>.gg</div>
                <div>Verify Your Age</div>
                <Button disabled={true} onClick={() => console.log("lol")}>Continue</Button>
            </div>
        </div>
    )
}

export default Screen1