import { ActionCard } from "./ActionCard"
import { GreetingsCard } from "./GreetingsCard"
import ProfileCard from "./ProfileCard"
import ScheduleCard from "./ScheduleCard"
import { WidthSize } from "../App"
import { useContext } from "react"

const Content = () => {
    const { isDesktop } = useContext(WidthSize);

    return (
        <div className="flex flex-col h-screen w-full">
            <div className="bg-gray-900 h-32 w-full text-white">
            </div>
            <div className={`w-full  grid ${isDesktop ? " grid-cols-10 gird-rows-5 gap-6 px-8 py-12" : "grid-cols-5 px-4 grid-rows-8 py-6 gap-3"} `}>
                <ProfileCard className={`${isDesktop ? "row-start-1 row-end-3 col-start-1 col-end-3 h-72" : "col-start-2 col-end-5 row-start-2 row-end-4"} `}></ProfileCard>
                <GreetingsCard className={`${isDesktop ? "row-start-1 row-end-2 col-start-3 col-end-11" : "col-start-2 col-end-5 row-start-1 row-end-2 h-8"} `}></GreetingsCard>
                <ScheduleCard className={`${isDesktop ? "row-start-2 row-end-5 col-start-3 col-end-8" : "col-start-1 col-end-6 row-start-4 row-end-6"} `}></ScheduleCard>
                <ActionCard className={`${isDesktop ? "row-start-2 row-end-4 col-start-8 col-end-11 h-52" : "col-start-1 col-end-6 row-start-6 row-end-8"} `}></ActionCard>
                <div className={`${isDesktop ? "row-start-5 row-end-6 col-start-1 col-end-11 h-24" : "col-start-2 col-end-5"} `}></div>
            </div>
        </div>
    )
}

export default Content