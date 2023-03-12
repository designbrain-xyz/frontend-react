import { Carousel } from "flowbite-react";
import Image from "next/image";
import SlideButton from "@/components/SlideButton";

const MyCarousel = ({ images }) => {
    const nImages = images.length;
    return (
        <Carousel
            slide={false}
            indicators={nImages > 1}
            leftControl={
                nImages > 1 ? <SlideButton direction={true} /> : <div></div>
            }
            rightControl={
                nImages > 1 ? <SlideButton direction={false} /> : <div></div>
            }
        >
            {images.map((image, index) => (
                <div
                    key={index}
                    className="relative h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-whit"
                >
                    <Image
                        src={image}
                        alt="blured background"
                        fill
                        className="blur-md"
                    />
                    <Image
                        src={image}
                        alt="generated image"
                        fill
                        className="object-contain fixed"
                    />
                </div>
            ))}
        </Carousel>
    );
};

export default MyCarousel;
