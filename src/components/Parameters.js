import styles from "@/styles/Parameters.module.css"

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FrequencyPrompts from "./FrequencyPrompts";

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
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
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
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab label="Prompt" {...a11yProps(0)} />
                        <Tab label="Frequency prompts" {...a11yProps(1)} />
                        <Tab label="setting" {...a11yProps(2)} />
                        <Tab label="working mode" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    {promptTags}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <FrequencyPrompts selectTag={updateData}/>
                </TabPanel>
                {/* <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel> */}
            </Box>
        </div>
    );
}