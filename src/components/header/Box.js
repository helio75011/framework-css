import * as React from 'react';
import Box from '@mui/system/Box';
import './Header.sass';
import Citation from './Citation';
import Mercredi from './Mercredi';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css'; 

export default function BoxBasic() {
    return (
        <Box component="section" sx={{ p: 2, border: '1px solid black', display: 'flex', justifyContent: 'space-between' }}>
            <Citation></Citation>
            <Mercredi></Mercredi>
        </Box>
    )
}