import GenerationTool from "@/components/GenerationTool";
import SketchTool from "@/components/SketchTool";
import StylingTool from "@/components/StylingTool"
import styles from "@/styles/Service.module.css"

import { Tabs } from 'antd';
import Layout from "@/components/Layout";

const sections = [
    "Rooms",
    "Styles",
    "Artists",
    "Designers",
    "Other"
]


const tags = [
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


export default function Home() {
    return (
        <Layout>
            <div className={styles.layout}>
                <Tabs
                    defaultActiveKey="1"
                    items={[
                        {
                            label: 'Generation',
                            key: '1',
                            children: <GenerationTool mode="Generate" />,
                        },
                        {
                            label: 'Sketching',
                            key: '2',
                            children: <SketchTool />,
                        },
                        {
                            label: 'Styling',
                            key: '3',
                            children: <StylingTool mode="Styling" />,
                        },

                    ]}
                />
            </div>
        </Layout>
    );
}
