export const InputBox = ({
    onClick, placeholder, type
}) => {
    return <div className="flex flex-col justify-center items-center mb-6">
        <span className="my-2 text-blue-300 text-sm">Please confirm your birth year. This data will not be stored</span>
        <span onClick={onClick} className="min-w-72 border-solid border-2 border-blue-800 rounded-md text-sm bg-blue-700">
            <input placeholder={placeholder} type={type} className="px-4 py-2 bg-blue-700 placeholder:text-blue-500"></input>
        </span>
    </div>
}