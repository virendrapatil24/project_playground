export const Button = (
    { disabled, children, onClick }
) => {
    return <div onClick={onClick} className={`flex justify-center min-w-72 py-2 rounded-md text-sm font-semibold cursor-pointer ${disabled ? "bg-blue-300 text-white" : "bg-green-400 text-black"}`}>
        {children}
    </div>
}