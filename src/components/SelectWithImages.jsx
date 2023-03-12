import Image from "next/image";
import { useRef, useState } from "react";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

const SelectWithImages = ({ options, value, setValue }) => {
    const [visible, setVisible] = useState(false);
    const ref1 = useRef();
    const ref2 = useRef();

    useOnClickOutside([ref1, ref2], () => {
        if (visible) setVisible(false);
    });

    return (
        <div className="relative w-full">
            <button
                className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg px-4 py-2.5 text-center flex justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700"
                onClick={() => setVisible(~visible)}
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
                    className="absolute z-10 mt-2 bg-white shadow divide-gray-100 rounded-lg w-full min-h-52 max-h-96 dark:bg-gray-700 overflow-y-scroll py-2 text-sm text-gray-700 dark:text-gray-200"
                >
                    <div className="grid grid-cols-3 gap-4 p-4">
                        {options.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => {
                                    setValue(item.name);
                                    setVisible(false);
                                }}
                                className="relative aspect-square rounded-lg shadow overflow-hidden hover:ring-4 hover:ring-blue-500"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="rounded-lg"
                                />
                                <div className="absolute bg-white w-full text-center font-medium text-sm text-gray-900 p-1">
                                    <p className="truncate text-clip">
                                        {item.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="hidden"></div>
            )}
        </div>
    );
};

export default SelectWithImages;
