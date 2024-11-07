import { useRef, useState } from "react"

export const OtpBox = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
        const value = e.target.value;
        console.log(value, otp)

        if (/^[0-9]$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value.substring(0, 1);
            setOtp(newOtp);
        }

        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    }

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && index >= 0) {
            if (otp[index]) {
                const newOtp = [...otp];
                newOtp[index] = "";
                setOtp(newOtp);
            }
            else {
                if (index > 0) inputRefs.current[index - 1].focus();
            }
        }
    }

    return <div className="flex gap-1">
        {otp.map((digit, index) => (
            <input
                key={index}
                type="text"
                value={digit}
                ref={(el) => inputRefs.current[index] = el}
                onChange={(e) => (handleChange(e, index))}
                onKeyDown={(e) => (handleKeyDown(e, index))}
                className="w-8 h-10 border-solid border-1 border-blue-800 rounded-md bg-blue-700 text-white text-center font-semibold outline-none"
                maxLength="1"
            />
        ))}
    </div>
}
