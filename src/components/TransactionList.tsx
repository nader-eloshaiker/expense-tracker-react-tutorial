import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'

export const TransactionList: React.VFC = () => {
  const { state, dispatch } = useContext(GlobalContext)
  const { transactions } = state

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction, index) => (
          <Transaction key={index} transaction={transaction} />
        ))}
      </ul>
    </>
  )
}
