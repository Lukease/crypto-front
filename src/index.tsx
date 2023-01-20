import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {LoginOrRegister} from "./UI/login/loginNavigation";
import {UserService} from "./backend-service-connector/service";
import {SettingsMenu} from "./UI/settings/settingsMenu";
import {Home} from "./UI/home/home";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const userService = new UserService()
/**
 * #1
 index = main component
 user service jest obserwatorem (który bedzie naszym komunikatorem z backendem, bedą w nim wszystkie zapytania o dane z backendu)
 który musimy wstrzykiwać w nasze komponenty zaczynając od gółwnego aby przekazywać go do dzieci
 przed wstrzyknięciem musimy zainicjować userService

 po zainstalowaniu pakietu react router: npm i react-router-dom i zaimportowaniu routa do naszego pliku,
 mamy możliwość renderowania odpowiednich elementów/komponentów na odpowiedniej ścieżce np komponent  Home
 bedzie się wyświetlał na ścieżce http://localhost:3000/home ponieważ podaliśmy w roucie patch={/home} element={ komponent Home}
 przekazujemy także userService jako parametr
 **/
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
                path={'/settings'}
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
        </Routes>
    </Router>
);

reportWebVitals();
