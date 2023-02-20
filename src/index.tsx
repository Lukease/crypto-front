import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {LoginNavigation} from './UI/login'
import {SettingsMenu} from './UI/home/settings'
import {Home_Menu} from './UI/home/dashboard'
import {HistoryContainer} from './UI/home/history'
import {TransactionService, WalletService, UserService} from './backend-service-connector/service'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
const userService = new UserService()
const transactionService = new TransactionService()
const walletService = new WalletService()

root.render(
    <Router>
        <Routes>
            <Route
                path={'/'}
                element={
                    <LoginNavigation {...userService}/>
                }
            />
            <Route
                path={'/home/user'}
                element={
                    <SettingsMenu {...userService}/>
            }
            />
            <Route
                path={'/home'}
                element={
                    <Home_Menu getActiveToken={walletService.getActiveToken} getUserWalletFromDb={walletService.getUserWalletFromDb}/>
                }
            />
            <Route
                path={'/home/history'}
                element={
                    <HistoryContainer {...transactionService}/>
                }
            />
        </Routes>
    </Router>
)

reportWebVitals()
