import Generation from "@/components/Generation";
import Parameters from "@/components/Parameters";
import SidebarMenu from "@/components/SidebarMenu";
import styles from "@/styles/Service.module.css"

export default function Home() {

    return (
        <div className={styles.layout}>
            {/* <SidebarMenu /> */}
            <div className={styles.left_col}>
                <Parameters />
            </div>

            <div className={styles.right_col}>
                <Generation />
            </div>
        </div>
    );
}
