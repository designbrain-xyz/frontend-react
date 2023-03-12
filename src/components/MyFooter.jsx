import { Footer } from "flowbite-react";
import { BsGithub, BsTelegram } from "react-icons/bs";

const MyFooter = ({ props }) => {
    return (
        <Footer container={true} className="mt-auto px-4 md:px-8">
            <div className="w-full flex items-center justify-between">
                <Footer.Copyright href="#" by="DesignBrain™" year={2023} />
                <div className="flex space-x-8 justify-center">
                    <Footer.Icon href="#" icon={BsTelegram} />
                    <Footer.Icon href="#" icon={BsGithub} />
                </div>
            </div>
        </Footer>
    );
};

export default MyFooter;
