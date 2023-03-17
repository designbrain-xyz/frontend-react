import styles from "@/styles/Parameters.module.css"

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FrequencyPrompts from "./FrequencyPrompts";
import Prompt from "./Prompt";
import Button from '@mui/material/Button';

// import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

// import { styled } from "@mui/material/styles";

const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 30,
        label: '30',
    },
    {
        value: 40,
        label: '40',
    },
    {
        value: 100,
        label: '100',
    },
];

function valuetext(value) {
    return `${value}°C`;
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{}}>
                    <Typography>{children}</Typography>
                </Box>
                // <Box sx={{ p: 3 }}>
                //     <Typography>{children}</Typography>
                // </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function Parameters() {
    const [value, setValue] = React.useState(0);
    const [promptTags, setPromptTags] = React.useState(new Set())

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const updateData = (value) => {
        setPromptTags(prv => new Set([...prv, value]));
    }

    return (
        <div className={styles.content}>
            <Box>
                <Box >
                    <Tabs value={value} onChange={handleChange} >
                        <Tab label="Prompt" {...a11yProps(0)} />
                        <Tab label="Frequency prompts" {...a11yProps(1)} />
                        <Tab label="setting" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    {/* {promptTags} */}
                    <Prompt selectTag={updateData} />
                    <Button variant="outlined">Генерация</Button>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <FrequencyPrompts selectTag={updateData} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Box sx={{ width: 300 }}>
                        <Slider
                            aria-label="Custom marks"
                            defaultValue={20}
                            getAriaValueText={valuetext}
                            step={10}
                            valueLabelDisplay="auto"
                            marks={marks}
                        />
                    </Box>
                    <Box sx={{ width: 300 }}>
                        <Slider
                            aria-label="Custom marks"
                            defaultValue={20}
                            getAriaValueText={valuetext}
                            step={10}
                            valueLabelDisplay="auto"
                            marks={marks}
                        />
                    </Box>
                    <Box sx={{ width: 300 }}>
                        <Slider
                            aria-label="Custom marks"
                            defaultValue={20}
                            getAriaValueText={valuetext}
                            step={10}
                            valueLabelDisplay="auto"
                            marks={marks}
                        />
                    </Box>
                </TabPanel>
            </Box>
        </div>
    );
}