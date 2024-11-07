import { Button } from "./Button"
import { OtpBox } from "./OtpBox"


const Screen3 = () => {
    return (
        <div className='bg-blue-900 w-screen h-screen'>
            <div className='flex flex-col justify-center items-center m-16 gap-4'>
                <div className='text-white text-2xl'><span className='text-green-400'>Webinar</span>.gg</div>
                <div className='text-white text-2xl my-8 font-semibold'>Check Your Email For A Code</div>
                <OtpBox />
                <Button>Verify</Button>
            </div>
        </div>
    )
}

export default Screen3