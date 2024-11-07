export const Button = (
    { disabled, children, onClick }
) => {
    return <span onClick={onClick} className={`px-32 py-2 rounded-md text-white text-sm cursor-pointer ${disabled ? "bg-blue-300" : "bg-green-400"}`}>
        {children}
    </span>
}