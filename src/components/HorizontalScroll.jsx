import Image from "next/image";

const HorizontalScroll = ({ children, options }) => {
    return (
        <div className="flex flex-col flex-nowrap overflow-x-scroll">
            <label className="mb-2 col-span-2 text-sm font-medium text-gray-900 dark:text-white">
                {children}
            </label>
            <div className="flex">
                <div class="flex gap-4">
                    {options.map((item) => (
                        <div className="">
                            <label className="p-1 w-full block text-center col-span-2 text-gray-900 dark:text-white">
                                {item.name}
                            </label>
                            <div class="relative h-full aspect-square rounded-lg border-2 border-blue-700">
                                <Image src={item.image} alt={item.name} fill />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HorizontalScroll;
