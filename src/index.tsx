import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {LoginOrRegister} from "./UI/login/loginNavigation";
import {UserService} from "./backend-service-connector/service";
import {SettingsMenu} from "./UI/home/settings/settingsMenu";
import {Home} from "./UI/home/dashboard/home";
import {HistoryContainer} from "./UI/home/history";
import {TransactionService} from "./backend-service-connector/service/transactionService";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const userService = new UserService()
const transactionService = new TransactionService()

root.render(
    <Router>
        <Routes>
            <Route
                path={'/'}
                element={
                    <LoginOrRegister userService={userService}/>
                }
            />
            <Route
                path={'/home/user'}
                element={
                    <SettingsMenu userService={userService}
                    />}
            />
            <Route
                path={'/home'}
                element={
                    <Home userService={userService}
                    />}
            />
            <Route
                path={'/home/history'}
                element={
                    <HistoryContainer userService={userService} transactionService={transactionService}/>}
            />
        </Routes>
    </Router>
);

reportWebVitals();
