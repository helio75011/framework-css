import * as React from 'react';
import BoxDeux from '@mui/system/Box';
import '../../style/style.sass';
import Heart from './Heart';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css'; 

export default function BoxBasic() {
    return (
        <BoxDeux component="section" sx={{ height: '10rem', p: 2, border: '1px solid black' }}>
            <Heart></Heart>
        </BoxDeux>
    )
}