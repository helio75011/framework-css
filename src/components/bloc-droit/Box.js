import * as React from 'react';
import Box from '@mui/system/Box';
import '../../style/style.sass';
import Circle from './Circle';
import Title from './Title';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css'; 

export default function BoxBasic() {
    return (
        <Box component="section" sx={{ height: '20rem',p: 2, border: '1px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Circle></Circle>
            <Title></Title>
        </Box>
    )
}