/* istanbul ignore file */
import ReactDOM from 'react-dom/client';
import { StrictMode, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from './Common/Redux/Store';
import Loader from './Common/Components/Loader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={Store}>
                <Suspense fallback={<Loader />}>
                    <StrictMode>
                        <App />
                    </StrictMode>
                </Suspense>
        </Provider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();