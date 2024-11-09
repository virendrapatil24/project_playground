import Button from "./Button"
import Image from "./Image"
import profileImage from "./../assets/profile_image.png"
import SideBarItem from "./SideBarItem"
import { HomeIcon } from "./icons/HomeIcon"
import { UserIcon } from "./icons/UserIcon"
import { UsersIcon } from "./icons/UsersIcon"
import { BilingIcon } from "./icons/BilingIcon"
import { SettingsIcon } from "./icons/SettingsIcon"


const SideBar = () => {
    return (
        <div className="bg-gray-100 w-1/5 p-4 border-r shadow-md">
            <div className="flex justify-between items-center">
                <Button>
                    <span className="text-white">Webinar<span className="text-green-700">.gg</span></span>
                </Button>
                <Image src={profileImage} width="w-9" height="h-9" className="rounded-md" />
            </div>
            <nav className="flex flex-col gap-4 pt-6">
                <SideBarItem label="Home" icon={HomeIcon} active={true} />
                <SideBarItem label="Webinars" icon={UsersIcon} />
                <SideBarItem label="Billing" icon={BilingIcon} />
                <SideBarItem label="User Management" icon={UserIcon} />
                <SideBarItem label="Settings" icon={SettingsIcon} />
            </nav>
        </div>
    )
}

export default SideBar