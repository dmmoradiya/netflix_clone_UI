import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux';
import store from './store/StateStore';
<meta name="google-site-verification" content="lhJpHwTC4LCvQ29bGAL3DO_8Hg8jV_VT1cqyVNTsGV0" />


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>  
    <ChakraProvider resetCSS={false} >
    <App />
    </ChakraProvider>
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
