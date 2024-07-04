/* istanbul ignore file */
import { memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
    ROOT_PATH,
} from '../Common/Constants/RoutePath';
import LandingPage from './LandingPage';
import ErrorPage from './ErrorPage';

const ContainerRoutes = () => {

    return (
        <>
            <Routes>
                <Route path={ROOT_PATH} element={<LandingPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
};
  
export default memo(ContainerRoutes);
  