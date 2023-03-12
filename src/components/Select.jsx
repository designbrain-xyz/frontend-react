import { useRef, useState } from "react";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

const Select = ({ value, setValue, options }) => {
    const [visible, setVisible] = useState(false);
    const [ref1, ref2] = [useRef(), useRef()];

    useOnClickOutside([ref1, ref2], () => {
        if (visible) setVisible(false);
    });

    return (
        <div className="relative w-full">
            <button
                onClick={() => setVisible(~visible)}
                className="text-white w-full bg-blue-700 hover:bg-blue-800 font-medium rounded-lg px-4 py-2.5 text-center flex justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700"
                type="button"
                ref={ref1}
            >
                {value}{" "}
                <svg
                    className="w-4 h-4 ml-2"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    ></path>
                </svg>
            </button>
            {/* <!-- Dropdown menu --> */}
            {visible ? (
                <div
                    ref={ref2}
                    className="w-full z-10 absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
                >
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        {options.map((item) => (
                            // <option value={item.name} key={item.id}>
                            //     {item.name}
                            // </option>
                            <li
                                key={item.id}
                                onClick={() => {
                                    setValue(item.name), setVisible(false);
                                }}
                            >
                                <p className="block px-4 py-2 hover:bg-gray-100 text-center dark:hover:bg-gray-600 dark:hover:text-white">
                                    {item.name}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="hidden"></div>
            )}
        </div>
        // <div className="w-full">
        //     <select
        //         defaultValue={value}
        //         onChange={(e) => setValue(e.target.value)}
        //         className="block w-full text-center text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700"
        //     >
        //         <option value={value}>{value}</option>
        //         {options.map((item) => (
        //             <option value={item.name} key={item.id}>
        //                 {item.name}
        //             </option>
        //         ))}
        //     </select>
        // </div>
    );
};

export default Select;
