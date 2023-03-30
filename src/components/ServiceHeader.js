import styles from "@/styles/ServiceHeader.module.css"
import DesignBrainLogo from "./DesignBrainLogo"
import Link from "next/link";
export default function ServiceHeader() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link href="/" ><DesignBrainLogo /></Link>
            </div>
            {/* <div className={styles.link}>Сервис</div>
            <div className={styles.link_disabled}>Истории запросов</div>
            <div className={styles.link_disabled}>Обратная связь</div>
            <div className={styles.login_btn}>Войти</div> */}
        </div>
    )
}