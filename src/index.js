import React from 'react';
import ReactDOM from 'react-dom/client';
import { BroswerRouter as Router } from "react-router-dom";
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <App />
    </Router>
);
