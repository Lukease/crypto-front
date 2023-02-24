import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LoginNavigation } from './UI/login'
import { SettingsMenu } from './UI/home/settings'
import { Home_Menu } from './UI/home/dashboard'
import { HistoryContainer } from './UI/home/history'
import {TransactionService, UserService, WalletService} from './backend-service-connector/service'
import { UserServiceContext,WalletServiceContext,TransactionServiceContext } from './backend-service-connector/context'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
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
                    <UserServiceContext.Provider value={userService}>
                        <LoginNavigation />
                    </UserServiceContext.Provider>
                }
            />
            <Route
                path={'/home/user'}
                element={
                    <UserServiceContext.Provider value={userService}>
                        <SettingsMenu />
                    </UserServiceContext.Provider>
                }
            />
            <Route
                path={'/home'}
                element={
                    <WalletServiceContext.Provider value={walletService}>
                        <Home_Menu />
                    </WalletServiceContext.Provider>
                }
            />
            <Route
                path={'/home/history'}
                element={
                    <TransactionServiceContext.Provider value={transactionService}>
                        <HistoryContainer />
                    </TransactionServiceContext.Provider>
                }
            />
        </Routes>
    </Router>,
)

reportWebVitals()
