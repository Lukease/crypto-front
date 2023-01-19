import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Navigation} from "./UI/login/loginNavigation";
import {UserService} from "./backend-service-connector/service";
import {SettingsMenu} from "./UI/settings/settingsMenu";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const userService = new UserService()

root.render(
    <Router>
        <Routes>
            <Route
                path={'/'}
                element={
                    <Navigation userService={userService}/>
                }
            />
            <Route
                path={'/settings'}
                element={
                    <SettingsMenu userService={userService}
                    />}
            />
        </Routes>
    </Router>
);

reportWebVitals();
