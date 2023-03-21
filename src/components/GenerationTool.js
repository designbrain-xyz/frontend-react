import styles from "@/styles/GenerationTool.module.css"
import Prompt from "./Prompt"
import Slider from '@mui/material/Slider';
import GenerationResult from "./GenerationResult";

export default function GenerationTool({tags}) {
    return (
        <div className={styles.generation_tool}>
            <div className={styles.prompt_container}>
                <Prompt tags={tags}/>
            </div>
            <div className={styles.result_container}>
                <GenerationResult />
            </div>
        </div>
    )
}