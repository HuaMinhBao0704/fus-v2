import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';

import App from './App.jsx';
import './index.css';
import { AppContextProvider } from './context/AppContextProvider.jsx';

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatePresence>
        <AppContextProvider>
          <Toaster position='top-right' />
          <App />
        </AppContextProvider>
      </AnimatePresence>
    </BrowserRouter>
  </React.StrictMode>,
);
