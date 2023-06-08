import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/Routes';
import Authprovider from './Providers/Authprovider';
import { HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <Authprovider>
      <HelmetProvider>
        <div className='max-w-screen-lg mx-auto'>
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </Authprovider>
  </React.StrictMode>,
)
