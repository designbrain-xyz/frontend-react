import styles from "@/styles/GenerationTool.module.css"
import Prompt from "./Prompt"
import Slider from '@mui/material/Slider';
import Generation from "./Generation";

export default function GenerationTool() {
    return (
        <div className={styles.generation_tool}>
            <div>
                <Prompt />
            </div>
            <div>
                <Generation />
            </div>
        </div>
    )
}