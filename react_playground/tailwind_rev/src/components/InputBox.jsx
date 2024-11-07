export const InputBox = ({
    onClick, placeholder, type
}) => {
    return <span onClick={onClick} className="min-w-72 border-solid border-2 border-blue-800 rounded-md text-sm bg-blue-700">
        <input placeholder={placeholder} type={type} className="px-4 py-2 bg-blue-700 placeholder:text-blue-500"></input>
    </span>

}