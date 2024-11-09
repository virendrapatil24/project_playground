import { useContext } from "react"
import { SideBarContext } from "./SideBar"

const SideBarItem = ({ label, icon: Icon, active }) => {
    const { expanded } = useContext(SideBarContext)

    return (
        <div className={`flex justify-between p-2 rounded-md text-sm text-gray-500 hover:cursor-pointer ${active ? "bg-gray-300 text-black" : "hover:bg-gray-200"}`}>
            {expanded && <span>{label}</span>}
            <Icon className="w-4 h-4" />
        </div>
    )
}

export default SideBarItem