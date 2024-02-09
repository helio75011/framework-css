import * as React from 'react';
import Box from '@mui/system/Box';
import '../../style/style.sass';
import Text from './Text';
import Autor from './Autor';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css'; 

export default function BoxBasic() {
    return (
        <Box component="section" sx={{ height: '10rem', p: 2, border: '1px solid black' }}>
            <Text></Text>
            <Autor></Autor>
        </Box>
    )
}