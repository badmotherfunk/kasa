import React from 'react';
import ReactDOM from 'react-dom/client';
import './utils/style/style.scss';
import Home from './components/App';
import {BrowserRouter} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>
  
);

