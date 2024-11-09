import Button from "./Button"
import Image from "./Image"
import profileImage from "./../assets/profile_image.png"
import SideBarItem from "./SideBarItem"
import { HomeIcon } from "./icons/HomeIcon"
import { UserIcon } from "./icons/UserIcon"
import { UsersIcon } from "./icons/UsersIcon"
import { BilingIcon } from "./icons/BilingIcon"
import { SettingsIcon } from "./icons/SettingsIcon"
import { createContext, useState } from "react"
import { WidthSize } from "../App"
import { useContext } from "react"

const SideBarContext = createContext();

const SideBar = () => {
    const [expanded, setExpanded] = useState(true);
    const { isDesktop } = useContext(WidthSize)

    const handleExpandedClick = () => {
        setExpanded((prev) => !prev)
    };

    return (
        <div className={` bg-gray-100 p-4 border-r-2 shadow-sm transition-all ease-in-out duration-500 ${isDesktop ? "min-w-72" : "min-w-18"}`}>
            <div className="flex w-full justify-between items-center">
                {isDesktop && (
                    <Button>
                        <span className="text-white">Webinar<span className="text-green-700">.gg</span></span>
                    </Button>
                )}
                <div onClick={handleExpandedClick} className="hover:cursor-pointer">
                    <Image src={profileImage} width="w-9" height="h-9" className="rounded-md" />
                </div>
            </div>
            <SideBarContext.Provider value={{ expanded }}>
                <nav className="flex flex-col w-full gap-4 pt-6">
                    <SideBarItem label="Home" icon={HomeIcon} active={true} />
                    <SideBarItem label="Webinars" icon={UsersIcon} />
                    <SideBarItem label="Billing" icon={BilingIcon} />
                    <SideBarItem label="User Management" icon={UserIcon} />
                    <SideBarItem label="Settings" icon={SettingsIcon} />
                </nav>
            </SideBarContext.Provider>
        </div>
    )
}

export { SideBar, SideBarContext }