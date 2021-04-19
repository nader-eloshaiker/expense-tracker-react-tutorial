import './App.css'

import { AddTransaction } from './components/AddTransaction'
import { Balance } from './components/Balance'
import { GlobalProvider } from './context/GlobalState'
import { Header } from './components/Header'
import { IncomeExpenses } from './components/IncomeExpenses'
import React from 'react'
import { TransactionList } from './components/TransactionList'

const App: React.VFC = () => {
  return (
    <GlobalProvider>
      <Header title="Expense Tracker" />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App
