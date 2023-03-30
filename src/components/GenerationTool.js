import styles from "@/styles/GenerationTool.module.css"
import Prompt from "./Prompt"
import Slider from '@mui/material/Slider';
import GenerationResult from "./GenerationResult";
import { useEffect, useState } from "react";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function GenerationTool({ serverTags, serverSections, mode }) {

    const [prediction, setPrediction] = useState(null);
    const [prompt, setPrompt] = useState("")

    const generate = (prompt, imageUrl) => {
        handleSubmit(prompt, imageUrl)
    }

    const handleSubmit = async (prompt, imageUrl) => {

        let api = ""
        let body = {}

        console.log(mode)

        if (mode == 'Generate') {
            api = "/api/predictions",
                body = JSON.stringify({
                    prompt: prompt,
                })
        }
        if (mode == 'Sketching') {
            api = "/api/img2img",
                body = JSON.stringify({
                    prompt: prompt,
                    image: imageUrl
                })
        }

        if (mode == 'Styling') {
            api = "/api/depth",
                body = JSON.stringify({
                    prompt: prompt,
                    image: imageUrl
                })
        }

        console.log("api: ", api)
        console.log("body: ", body)

        const response = await fetch(api, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: body
        });
        let prediction = await response.json();
        if (response.status !== 201) {
            setError(prediction.detail);
            return;
        }
        setPrediction(prediction);

        while (
            prediction.status !== "succeeded" &&
            prediction.status !== "failed"
        ) {
            await sleep(1000);
            const response = await fetch("/api/predictions/" + prediction.id);
            prediction = await response.json();
            if (response.status !== 200) {
                setError(prediction.detail);
                return;
            }

            console.log(prediction)
            if (prediction.status == "succeeded") {
                setPrediction(prediction);
                console.log("setted", prediction)
            }
        }

    };



    return (
        <div className={styles.generation_tool}>
            <div className={styles.prompt_container}>
                <Prompt
                    generate={generate}
                    serverTags={serverTags}
                    serverSections={serverSections}
                    mode={mode}
                />
            </div>
            <div className={styles.result_container}>

                {prediction != null &&
                    <GenerationResult
                        images={prediction.output} />}
            </div>
        </div>
    )
}