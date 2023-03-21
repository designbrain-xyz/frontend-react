import GenerationTool from "@/components/GenerationTool";
import ServiceHeader from "@/components/ServiceHeader";
import styles from "@/styles/Service.module.css"
import { API_URL } from '@/config/index'

import { Tabs, TabPane } from 'antd';

const onChange = (key) => {
    console.log(key);
};


export default function Home({tags}) {
    return (
        <div className={styles.layout}>
            <ServiceHeader />
            <Tabs defaultActiveKey="4" onChange={onChange}>
                <TabPane tab="По запросу" key="1"> <GenerationTool tags={tags}/> </TabPane>
                <TabPane tab="Скетчинг" key="2"> <GenerationTool tags={tags}/> </TabPane>
                <TabPane tab="До/после" key="3"> <GenerationTool tags={tags}/> </TabPane>
                <TabPane  key="4"> Choose your work mode </TabPane>
            </Tabs>
        </div>
    );
}

export async function getServerSideProps() {

    const res = await fetch(API_URL + '/api')
    const tags = await res.json()
  
    return {
      props: {tags: tags}
    }
  }
