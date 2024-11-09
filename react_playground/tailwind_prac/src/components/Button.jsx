
const Button = ({ children, className, onClick }) => {
    return (
        <button onClick={onClick} className={`bg-blue-900 text-sm px-4 py-2 rounded-md ${className}`}>{children}</button>
    )
}

export default Button;