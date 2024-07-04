import { memo } from 'react';
import { 
    Container,
} from '@mui/material';
import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <Container maxWidth="xl">
            <br />
            <br />
            <br />
            <div className="number">Oops</div>
            <div className="text">
                <span>
            Something Went Wrong!
                </span>
                <br />
      An unknown exception has occurred. 
      Please send the screenshot of this page to your support team.
            </div>
        </Container>
     
    );
};

export default memo(ErrorPage);