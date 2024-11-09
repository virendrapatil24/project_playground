import { UsersIcon } from "./icons/UsersIcon"
import { VideoIcon } from "./icons/VideoIcon"
import { CalendarIcon } from "./icons/CalendarIcon"

export const ActionCard = ({ className }) => {
    return (
        <div className={`grid grid-cols-2 gap-1 bg-gray-50 border-1 shadow-md rounded-xl ${className}`}>
            <div className="flex flex-col justify-center items-center gap-1">
                <CalendarIcon className="size-10 bg-green-300 p-2 rounded-md" />
                <span className="text-xs font-semibold">Schedule a webinar</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
                <UsersIcon className="size-10 bg-green-300 p-2 rounded-md" />
                <span className="text-xs font-semibold">Join a webinar</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
                <VideoIcon className="size-10 bg-green-300 p-2 rounded-md" />
                <span className="text-xs font-semibold">Open video recording</span>
            </div>
        </div>
    )
}