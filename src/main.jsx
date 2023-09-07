import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from './App.jsx'
import './style/main.scss'
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from "./components/Common/Navbar.jsx";
import Footer from "./components/Common/Footer.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Navbar />
            <App />
            <Footer />
        </Router>
    </React.StrictMode>,
)
