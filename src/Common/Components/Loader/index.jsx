import { memo } from 'react';
import { CircularProgress } from '@mui/material';

const Loader = () => {
    return(
        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', width: '100vw' }}>
            <span style={{ justifyContent: 'center', position: 'fixed', top: '55%' }}><CircularProgress size={60} /></span>
        </div>
    );
};

export default memo(Loader);