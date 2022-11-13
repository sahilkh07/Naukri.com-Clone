import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import NewContextProvider from './Context/Context';
import "swiper/css/bundle";
import AuthContextProvider from './Context/AuthContextProvider';
import AdminContextProvider from './Context/AdminContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <AdminContextProvider>
  <AuthContextProvider>
 
  <NewContextProvider>
<ChakraProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>

  </ChakraProvider>
  </NewContextProvider>
  </AuthContextProvider>
  </AdminContextProvider>
  
  </BrowserRouter>
  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

