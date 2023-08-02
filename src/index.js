import React from 'react';
import ReactDOM from 'react-dom/client';
import RootContext from './Context';
import './index.css';
import Root from './Root';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RootContext>
   <Root/>
   </RootContext>
  </React.StrictMode>
);
