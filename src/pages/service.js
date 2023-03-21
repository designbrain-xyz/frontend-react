import GenerationTool from "@/components/GenerationTool";
import ServiceHeader from "@/components/ServiceHeader";
import styles from "@/styles/Service.module.css"
import { API_URL } from '@/config/index'

import { Tabs, TabPane } from 'antd';

const onChange = (key) => {
    console.log(key);
};

const tags = [
    {
      "id": "1",
      "section_title": "Комнаты",
      "tags": [
        {
          "title": "Ванная",
          "isSelected": false
        },
        {
          "title": "Гостиная",
          "isSelected": false
        },
        {
          "title": "Детская",
          "isSelected": false
        },
        {
          "title": "Кабинет",
          "isSelected": false
        },
        {
          "title": "Офис",
          "isSelected": false
        },
        {
          "title": "Прихожая",
          "isSelected": false
        },
        {
          "title": "Спальня",
          "isSelected": false
        },
        {
          "title": "Холл",
          "isSelected": false
        },
        {
          "title": "Коридор",
          "isSelected": false
        },
        {
          "title": "Уборная",
          "isSelected": false
        },
        {
          "title": "Туалет",
          "isSelected": false
        },
        {
          "title": "Гардероб",
          "isSelected": false
        },
        {
          "title": "Библиотека",
          "isSelected": false
        },
        {
          "title": "Домашний кинотеатр",
          "isSelected": false
        },
        {
          "title": "Тренажерный зал",
          "isSelected": false
        },
        {
          "title": "Зимний сад",
          "isSelected": false
        },
        {
          "title": "Сауна",
          "isSelected": false
        }
      ]
    },
    {
      "id": "2",
      "section_title": "Стили",
      "tags": [
        {
          "title": "лофт",
          "isSelected": false
        },
        {
          "title": "модерн",
          "isSelected": false
        },
        {
          "title": "классика",
          "isSelected": true
        },
        {
          "title": "арт-деко",
          "isSelected": false
        },
        {
          "title": "хай-тек",
          "isSelected": false
        },
        {
          "title": "этно",
          "isSelected": false
        },
        {
          "title": "неоклассика",
          "isSelected": true
        },
        {
          "title": "прованс",
          "isSelected": true
        },
        {
          "title": "скандинавский",
          "isSelected": false
        },
        {
          "title": "эклектика",
          "isSelected": false
        },
        {
          "title": "экостиль",
          "isSelected": false
        },
        {
          "title": "современный",
          "isSelected": false
        },
        {
          "title": "американский",
          "isSelected": false
        },
        {
          "title": "английский",
          "isSelected": false
        },
        {
          "title": "арабский",
          "isSelected": false
        },
        {
          "title": "японский",
          "isSelected": false
        },
        {
          "title": "француский",
          "isSelected": false
        }
      ]
    },
    {
      "id": "3",
      "section_title": "Художники",
      "tags": [
        {
          "title": "Леонардо да Винчи",
          "isSelected": false
        },
        {
          "title": "Пабло Пикассо",
          "isSelected": false
        },
        {
          "title": "Сальвадор Дали",
          "isSelected": false
        },
        {
          "title": "Клод Моне",
          "isSelected": false
        },
        {
          "title": "Сандро Боттичелли",
          "isSelected": false
        },
        {
          "title": "Микеланджело Буонарроти",
          "isSelected": false
        },
        {
          "title": "Фрида Кало",
          "isSelected": false
        }
      ]
    },
    {
      "id": "4",
      "section_title": "Прочее",
      "tags": [
        {
          "title": "уютная атмосфера",
          "isSelected": false
        },
        {
          "title": "современный дизайн",
          "isSelected": false
        },
        {
          "title": "высокое качество",
          "isSelected": false
        },
        {
          "title": "цветочные мотивы",
          "isSelected": false
        }
      ]
    }
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

// export async function getServerSideProps() {

//     const res = await fetch('/api')
//     const tags = await res.json()

//     return {
//         props: { tags: tags }
//     }
// }
