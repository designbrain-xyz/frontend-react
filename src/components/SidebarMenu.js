import styles from "@/styles/SidebarMenu.module.css"

import { RxDashboard } from 'react-icons/rx'
import { VscHistory } from 'react-icons/vsc'
import { BsQuestionOctagon } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'
import { VscFeedback } from 'react-icons/vsc'
import { CiLogout } from 'react-icons/ci'


export default function SidebarMenu() {
    return (
        <div className={styles.sidebar}>

            <div>MENU</div>

            <div className={styles.menu}>
                <div className={styles.selected}>
                    <RxDashboard className={styles.selected}/>
                </div>
                <hr />
                <div>
                    <VscHistory />
                </div>

                <hr />

                <div>
                    <VscFeedback />
                </div>
                <hr />

                <div>
                    <BsQuestionOctagon />
                </div>

                <hr />

                <div>
                    <BiUser />
                </div>
                 <hr />
            </div>

            <div className={styles.logo}>
                DESIGN BRAIN
            </div>
        </div>
    )
}