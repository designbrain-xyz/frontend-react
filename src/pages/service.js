import GenerationTool from "@/components/GenerationTool";
import ServiceHeader from "@/components/ServiceHeader";
import styles from "@/styles/Service.module.css"
import { API_URL } from '@/config/index'

import { Tabs, TabPane } from 'antd';

const onChange = (key) => {
    console.log(key);
};


export default function Home({ tags }) {
    return (
        <div className={styles.layout}>
            <ServiceHeader />

            <Tabs
                defaultActiveKey="4"
                items={[
                    {
                        label: 'По запросу',
                        key: '1',
                        children: <GenerationTool tags={tags} />,
                    },
                    {
                        label: 'Скетчинг',
                        key: '2',
                        children: <GenerationTool tags={tags} />,
                        disabled: true,
                    },
                    {
                        label: 'До/после',
                        key: '3',
                        children: <GenerationTool tags={tags} />,
                    },
                    {
                        key: '4',
                        children: "Choose your work mode",
                    },
                ]}
            />
        </div>
    );
}

export async function getServerSideProps() {

    const res = await fetch(API_URL + '/api')
    const tags = await res.json()

    return {
        props: { tags: tags }
    }
}
