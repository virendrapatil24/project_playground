import { Button } from './Button'
import { InputBox } from './InputBox'

const Screen1 = () => {
    return (
        <div className='bg-blue-900 w-screen h-screen'>
            <div className='flex flex-col justify-center items-center m-16 gap-4'>
                <div className='text-white text-2xl'><span className='text-green-400'>Webinar</span>.gg</div>
                <div className='text-white text-2xl my-8 font-semibold'>Verify Your Age</div>
                <div className="flex flex-col justify-center items-center mb-6">

                    <span className="my-2 text-blue-300 text-sm">Please confirm your birth year. This data will not be stored</span>
                    <InputBox placeholder="Your Birth Year" />
                </div>
                <Button disabled={false} onClick={() => console.log("does nothing")}>Continue</Button>
            </div>
        </div>
    )
}

export default Screen1