import {TransactionService, UserService, WalletService} from '../service'
import {createContext} from 'react'

const userService = new UserService()
const transactionService = new TransactionService()
const walletService = new WalletService()

export const UserServiceContext = createContext(userService)
export const WalletServiceContext = createContext(walletService)
export const TransactionServiceContext = createContext(transactionService)
