import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './style/main.scss'
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter as Router } from 'react-router-dom'

// import component
import Navbar from "./components/Common/Navbar.jsx";
import Footer from "./components/Common/Footer.jsx";
import App from './App.jsx'

// config axios
import axios from "axios";
axios.defaults.baseURL = 'https://fakestoreapi.com/';
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Navbar />
            <App />
            <Footer />
        </Router>
    </React.StrictMode>,
)
