import { ActionCard } from "./ActionCard"
import { GreetingsCard } from "./GreetingsCard"
import ProfileCard from "./ProfileCard"
import ScheduleCard from "./ScheduleCard"

const Content = () => {
    return (
        <div className="flex flex-col h-screen w-full">
            <div className="bg-gray-900 h-32 w-full text-white">
            </div>
            <div className="flex-grow grid grid-cols-10 gird-rows-5 gap-6 px-8 py-12 w-full">
                <ProfileCard className="row-start-1 row-end-3 col-start-1 col-end-3 h-72"></ProfileCard>
                <GreetingsCard className="row-start-1 row-end-2 col-start-3 col-end-11"></GreetingsCard>
                <ScheduleCard className="row-start-2 row-end-5 col-start-3 col-end-8"></ScheduleCard>
                <ActionCard className="row-start-2 row-end-4 col-start-8 col-end-11 h-52"></ActionCard>
                <div className="row-start-5 row-end-6 col-start-1 col-end-11 h-24"></div>
            </div>
        </div>
    )
}

export default Content