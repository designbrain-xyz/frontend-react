const Button = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
            {children}
        </button>
    );
};

export default Button;
