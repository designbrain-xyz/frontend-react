const Range = ({ children, value, setValue }) => {
    return (
        <div>
            <label className="mb-2 col-span-2 font-medium text-gray-900 dark:text-white">
                {children}: {value}
            </label>

            <input
                type="range"
                min="1"
                max="10"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-500"
            />
        </div>
    );
};

export default Range;
