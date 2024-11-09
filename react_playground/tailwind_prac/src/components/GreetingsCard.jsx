export const GreetingsCard = ({ className }) => {
    return (
        <div className={`flex flex-col gap-3 p-4 ${className}`}>
            <span className="text-sm">Monday, 24 November</span>
            <span className="font-bold text-2xl text-blue-900">Good morning, Virendra!</span>
        </div>
    )
}