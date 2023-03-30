import DesignBrainLogo from "@/components/DesignBrainLogo";
import ImageSlider from "@/components/ImageSlider";

import styles from '@/styles/Home.module.css'
import Link from "next/link";
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css'

export default function Home() {

    const FIRST_IMAGE = {
        imageUrl: 'https://sun9-69.userapi.com/impf/EpanNJQEv6I5kMNXI-67oJ4TXy4ACMO-8ttP_w/x1Cd-6iQ8k0.jpg?size=1920x768&quality=95&crop=0,164,2048,818&sign=7d79a14b234685badc2e399db5f9b69e&type=cover_group'
    }
    const SECOND_IMAGE = {
        imageUrl: 'https://sun9-69.userapi.com/impf/EpanNJQEv6I5kMNXI-67oJ4TXy4ACMO-8ttP_w/x1Cd-6iQ8k0.jpg?size=1920x768&quality=95&crop=0,164,2048,818&sign=7d79a14b234685badc2e399db5f9b69e&type=cover_group'
    }

    return (
        <div className={styles.landing_page}>
            <div className={styles.description}>

                <DesignBrainLogo />

                <div className={styles.header}>
                    <p>CREATE ROOM OF YOUR DREAM WITH AI
                    </p>
                </div>

                <div className={styles.features}>
                    <div>
                        For all spaces
                    </div>
                    <div>
                        In any style
                    </div>
                </div>

                <div>
                    <Link href="/service" className={styles.btn_generate}>GENERATE</Link>
                </div>


            </div>
            {/* <div className={styles.showcases}>
                <div className={styles.showcase}>
                    <ImageSlider />
                </div>
                <div className={styles.showcase}>
                    <ImageSlider />
                </div>
                <div className={styles.showcase}>
                    <ImageSlider />
                </div>
            </div> */}
        </div>
    );
}
