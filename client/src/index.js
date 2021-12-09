import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { UserProvider } from './context/index.jsx';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);