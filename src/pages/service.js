import GenerationTool from "@/components/GenerationTool";
import ServiceHeader from "@/components/ServiceHeader";
import styles from "@/styles/Service.module.css"

import { Tabs, TabPane } from 'antd';

const onChange = (key) => {
    console.log(key);
};


export default function Home() {

    return (

        <div className={styles.layout}>
            <ServiceHeader />

            <Tabs defaultActiveKey="4" onChange={onChange}>
                <TabPane tab="По запросу" key="1"> <GenerationTool /> </TabPane>
                <TabPane tab="Скетчинг" key="2"> <GenerationTool /> </TabPane>
                <TabPane tab="До/после" key="3"> <GenerationTool /> </TabPane>
                <TabPane  key="4"> Choose your work mode </TabPane>
            </Tabs>

        </div>

    );
}
