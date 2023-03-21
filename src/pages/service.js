import GenerationTool from "@/components/GenerationTool";
import ServiceHeader from "@/components/ServiceHeader";
import styles from "@/styles/Service.module.css"
import { API_URL } from '@/config/index'

import { Tabs, TabPane } from 'antd';

const onChange = (key) => {
    console.log(key);
};

const sections = [
    "Комнаты",
    "Стили",
    "Художники",
    "Прочее"
]

const tags = [
    { title: "Ванная", isSelected: false, section: "Комнаты" },
    { title: "Гостиная", isSelected: false, section: "Комнаты" },
    { title: "Детская", isSelected: false, section: "Комнаты" },
    { title: "Кабинет", isSelected: false, section: "Комнаты" },
    { title: "Офис", isSelected: false, section: "Комнаты" },
    { title: "Прихожая", isSelected: false, section: "Комнаты" },
    { title: "Спальня", isSelected: false, section: "Комнаты" },
    { title: "Холл", isSelected: false, section: "Комнаты" },
    { title: "Коридор", isSelected: false, section: "Комнаты" },
    { title: "Уборная", isSelected: false, section: "Комнаты" },
    { title: "Туалет", isSelected: false, section: "Комнаты" },
    { title: "Гардероб", isSelected: false, section: "Комнаты" },
    { title: "Библиотека", isSelected: false, section: "Комнаты" },
    { title: "Домашний кинотеатр", isSelected: false, section: "Комнаты" },
    { title: "Тренажерный зал", isSelected: false, section: "Комнаты" },
    { title: "Зимний сад", isSelected: false, section: "Комнаты" },
    { title: "Сауна", isSelected: false, section: "Комнаты" },


    { title: "лофт", isSelected: false, section: "Стили" },
    { title: "модерн", isSelected: false, section: "Стили" },
    { title: "классика", isSelected: true, section: "Стили" },
    { title: "арт-деко", isSelected: false, section: "Стили" },
    { title: "хай-тек", isSelected: false, section: "Стили" },
    { title: "этно", isSelected: false, section: "Стили" },
    { title: "неоклассика", isSelected: true, section: "Стили" },
    { title: "прованс", isSelected: true, section: "Стили" },
    { title: "скандинавский", isSelected: false, section: "Стили" },
    { title: "эклектика", isSelected: false, section: "Стили" },
    { title: "экостиль", isSelected: false, section: "Стили" },
    { title: "современный", isSelected: false, section: "Стили" },
    { title: "американский", isSelected: false, section: "Стили" },
    { title: "английский", isSelected: false, section: "Стили" },
    { title: "арабский", isSelected: false, section: "Стили" },
    { title: "японский", isSelected: false, section: "Стили" },
    { title: "француский", isSelected: false, section: "Стили" },

    { title: "Леонардо да Винчи", isSelected: false, section: "Художники" },
    { title: "Пабло Пикассо", isSelected: false, section: "Художники" },
    { title: "Сальвадор Дали", isSelected: false, section: "Художники" },
    { title: "Клод Моне", isSelected: false, section: "Художники" },
    { title: "Сандро Боттичелли", isSelected: false, section: "Художники" },
    { title: "Микеланджело Буонарроти", isSelected: false, section: "Художники" },
    { title: "Фрида Кал", isSelected: false, section: "Художники" },

    { title: "уютная атмосфера", isSelected: false, section: "Прочее" },
    { title: "современный дизайн", isSelected: false, section: "Прочее" },
    { title: "высокое качество", isSelected: false, section: "Прочее" },
    { title: "цветочные мотивы", isSelected: false, section: "Прочее" },
]

export default function Home() {
    return (
        <div className={styles.layout}>
            <ServiceHeader />

            <Tabs
                defaultActiveKey="4"
                items={[
                    {
                        label: 'По запросу',
                        key: '1',
                        children: <GenerationTool serverTags={tags} serverSections={sections}/>,
                    },
                    {
                        label: 'Скетчинг',
                        key: '2',
                        children: <GenerationTool serverTags={tags} serverSections={sections} />,
                        disabled: true,
                    },
                    {
                        label: 'До/после',
                        key: '3',
                        children: <GenerationTool serverTags={tags} serverSections={sections} />,
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

// export async function getServerSideProps() {

//     const res = await fetch('/api')
//     const tags = await res.json()

//     return {
//         props: { tags: tags }
//     }
// }
