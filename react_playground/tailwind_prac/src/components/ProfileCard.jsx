import Image from "./Image"
import profileImage from "./../assets/profile_image.png"

const ProfileCard = ({ className }) => {
    return (
        <div className={`flex flex-col justify-center items-center bg-gray-100 border-2 rounded-xl gap-1 shadow-sm -translate-y-20 ${className}`}>
            <Image src={profileImage} width="w-24" height="h-24" className="rounded-md" />
            <span className="font-bold pt-4">Virendra Patil</span>
            <span className="text-sm text-gray-500 font-light pt-2">virendrapatil714@gmail.com</span>
            <span className="text-sm text-gray-500 font-light">7028405601</span>
            <span className="text-sm text-gray-500 font-light pt-2">Pune, India</span>
        </div>
    )
}

export default ProfileCard