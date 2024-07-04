
/* istanbul ignore file */
import { memo } from 'react';
import ContainerRoutes from '../Container';
import Loader from '../Common/Components/Loader';
import { useSelector } from 'react-redux';


const App = () => {
    const isLoading = useSelector((state) => state.commonReducer.isLoading);

    return (
        <>
            {isLoading && <Loader />}
            <ContainerRoutes />
        </>
    );
};

export default memo(App);
