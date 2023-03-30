import styles from "@/styles/GenerationTool.module.css"
import Prompt from "./Prompt"
import Slider from '@mui/material/Slider';
import GenerationResult from "./GenerationResult";
import { useState } from "react";

const serverSections = [
    "Rooms",
    "Styles",
    "Artists",
    "Designers",
    "Other"
]


const serverTags = [
    { title: "bathroom", isSelected: false, section: "Rooms" },
    { title: "living room", isSelected: false, section: "Rooms" },
    { title: "children's room", isSelected: false, section: "Rooms" },
    { title: "cabinet room", isSelected: false, section: "Rooms" },
    { title: "office", isSelected: false, section: "Rooms" },
    { title: "hallway", isSelected: false, section: "Rooms" },
    { title: "bedroom", isSelected: false, section: "Rooms" },
    { title: "hall", isSelected: false, section: "Rooms" },
    { title: "corridor", isSelected: false, section: "Rooms" },
    { title: "restroom", isSelected: false, section: "Rooms" },
    { title: "toilet", isSelected: false, section: "Rooms" },
    { title: "wardrobe room", isSelected: false, section: "Rooms" },
    { title: "library", isSelected: false, section: "Rooms" },
    { title: "home Theater", isSelected: false, section: "Rooms" },
    { title: "gym", isSelected: false, section: "Rooms" },
    { title: "winter Garden", isSelected: false, section: "Rooms" },
    { title: "sauna", isSelected: false, section: "Rooms" },
    { title: "kitchen", isSelected: false, section: "Rooms" },


    { title: "loft style", isSelected: false, section: "Styles" },
    { title: "classic style", isSelected: true, section: "Styles" },
    { title: "art deco", isSelected: false, section: "Styles" },
    { title: "high-tech style", isSelected: false, section: "Styles" },
    { title: "minimalist style", isSelected: false, section: "Styles" },
    { title: "ethno style", isSelected: false, section: "Styles" },
    { title: "neoclassical style", isSelected: true, section: "Styles" },
    { title: "provence style", isSelected: true, section: "Styles" },
    { title: "Scandinavian style", isSelected: false, section: "Styles" },
    { title: "eclecticism style", isSelected: false, section: "Styles" },
    { title: "eco style", isSelected: false, section: "Styles" },
    { title: "modern style", isSelected: false, section: "Styles" },
    { title: "American style", isSelected: false, section: "Styles" },
    { title: "English style", isSelected: false, section: "Styles" },
    { title: "Arab style", isSelected: false, section: "Styles" },
    { title: "Japanese style", isSelected: false, section: "Styles" },
    { title: "French style", isSelected: false, section: "Styles" },

    { title: "by Leonardo da Vinci", isSelected: false, section: "Artists" },
    { title: "by Pablo Picasso", isSelected: false, section: "Artists" },
    { title: "by Salvador Dali", isSelected: false, section: "Artists" },
    { title: "by Claude Monet", isSelected: false, section: "Artists" },
    { title: "by Sandro Botticelli", isSelected: false, section: "Artists" },
    { title: "by Michelangelo Buonarroti", isSelected: false, section: "Artists" },
    { title: "by Frida Kahlo", isSelected: false, section: "Artists" },

    { title: "by Joanna Gaines", isSelected: false, section: "Designers" },
    { title: "by Nate Berkus", isSelected: false, section: "Designers" },
    { title: "by Kelly Wearstler", isSelected: false, section: "Designers" },
    { title: "by Martyn Lawrence Bullar", isSelected: false, section: "Designers" },
    { title: "by Bobby Ber", isSelected: false, section: "Designers" },
    { title: "by Peter Marino", isSelected: false, section: "Designers" },
    { title: "by Justina Blakeney", isSelected: false, section: "Designers" },
    { title: "by Emily Henderson", isSelected: false, section: "Designers" },
    { title: "by Jonathan Adler", isSelected: false, section: "Designers" },
    { title: "by Ken Fulk", isSelected: false, section: "Designers" },
    { title: "by Roman and Williams", isSelected: false, section: "Designers" },
    { title: "by India Mahdavi", isSelected: false, section: "Designers" },
    { title: "by Tiffany Brooks", isSelected: false, section: "Designers" },
    { title: "by Axel Vervoordt", isSelected: false, section: "Designers" },
    { title: "by Kathryn M. Ireland", isSelected: false, section: "Designers" },
    { title: "by Thom Filicia", isSelected: false, section: "Designers" },
    { title: "by Jacques Grange", isSelected: false, section: "Designers" },
    { title: "by Thomas O'Brien", isSelected: false, section: "Designers" },
    { title: "by Vicky Charles", isSelected: false, section: "Designers" },
    { title: "by Michael S. Smith", isSelected: false, section: "Designers" },

    { title: "cozy atmosphere", isSelected: false, section: "Other" },
    { title: "modern design", isSelected: false, section: "Other" },
    { title: "high quality", isSelected: false, section: "Other" },
    { title: "best quality", isSelected: false, section: "Other" },
    { title: "award winning", isSelected: false, section: "Other" },
    { title: "floral motifs", isSelected: false, section: "Other" },
]


const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function SketchTool() {

    const [prediction, setPrediction] = useState(null);

    const sketching = async (prompt, imageUrl) => {

        const api = "/api/depth"
        const body = JSON.stringify({
            prompt: prompt,
            image: imageUrl
        })

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
                    generate={sketching}
                    serverTags={serverTags}
                    serverSections={serverSections}
                    mode={'Styling'}
                    prediction={prediction}
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