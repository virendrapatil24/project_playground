export const Button = (
    { disabled, children, onClick }
) => {
    return <div onClick={onClick} className={`flex justify-center min-w-72 py-2 rounded-md text-white text-sm cursor-pointer ${disabled ? "bg-blue-300" : "bg-green-400"}`}>
        {children}
    </div>
}