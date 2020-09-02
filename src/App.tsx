import React from 'react';
import { ToastProvider } from 'react-toast-notifications';

import Routes from './routes';

import './assets/styles/global.css';

// JSX - JavaScript + XML
function App() {
  return (
    <ToastProvider autoDismiss autoDismissTimeout={4000}>
      <Routes />
    </ToastProvider>
  );
}

export default App;
