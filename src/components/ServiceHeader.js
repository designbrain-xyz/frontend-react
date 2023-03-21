import styles from "@/styles/ServiceHeader.module.css"
export default function ServiceHeader() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>DESIGN BRAIN</div>
            <div>Сервис</div>
            <div>Истории запросов</div>
            <div>Обратная связь</div>
            <div>Войти</div>
        </div>
    )
}