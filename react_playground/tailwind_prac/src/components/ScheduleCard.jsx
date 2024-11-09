import { CalendarIcon } from "./icons/CalendarIcon"
import { ChevronIcon } from "./icons/ChevronIcon"
import { ArrowLongLeftIcon } from "./icons/ArrowLongLeftIcon"
import { ArrowLongRightIcon } from "./icons/ArrowLongRightIcon"


const ScheduleCard = ({ className }) => {
    const webinars = [
        { time: "11:30 AM", status: "Live", title: "UX Webinar" },
        { time: "11:30 AM", status: "Upcoming", title: "My first Webinar" },
        { time: "11:30 AM", status: "Upcoming", title: "Important Webinar" },
        { time: "11:30 AM", status: "Upcoming", title: "Webinar 1" },
    ];

    return (
        <div className={`flex flex-col bg-gray-50 rounded-xl border-1 shadow-md p-4 ${className}`}>
            <div className="flex items-center justify-between bg-gray-100 p-2 rounded-md">
                <div className="flex items-center">
                    <CalendarIcon />
                    <span className="font-medium text-sm px-2">Monday, 24 November 2024</span>
                    <ChevronIcon />
                </div>
                <div className="flex items-center gap-2">
                    <ArrowLongLeftIcon />
                    <ArrowLongRightIcon />
                </div>
            </div>
            <div className="flex flex-col divide-y gap-2">
                {webinars.map((webinar, index) => (
                    <div key={index} className="flex p-1 pb-0 divide-x">
                        <div className="flex flex-col justify-center p-2">
                            <span className="font-medium">{webinar.time}</span>
                            <span className="text-xs">{webinar.time}</span>
                        </div>
                        <div className="flex flex-col justify-center p-2">
                            <span className="text-xs font-light">{webinar.status}</span>
                            <span className="text-md font-medium">{webinar.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ScheduleCard