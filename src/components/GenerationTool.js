import styles from "@/styles/GenerationTool.module.css"
import Prompt from "./Prompt"
import Slider from '@mui/material/Slider';
import GenerationResult from "./GenerationResult";

export default function GenerationTool({serverTags, serverSections}) {
    return (
        <div className={styles.generation_tool}>
            <div className={styles.prompt_container}>
                <Prompt 
                    serverTags={serverTags}
                    serverSections={serverSections}
                />
            </div>
            <div className={styles.result_container}>
                <GenerationResult />
            </div>
        </div>
    )
}