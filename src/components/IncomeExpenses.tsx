import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'
import NumberFormat from 'react-number-format'

export const IncomeExpenses: React.VFC = () => {
  const { state, dispatch } = useContext(GlobalContext)
  const { transactions } = state
  const amounts = transactions.map((transaction) => transaction.amount)
  const totalIncome = amounts.reduce((acc, item) => (acc += item > 0 ? item : 0), 0)
  const totalExpense = amounts.reduce((acc, item) => (acc += item < 0 ? item : 0), 0)

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">
          <NumberFormat
            value={totalIncome}
            displayType={'text'}
            decimalScale={2}
            fixedDecimalScale={true}
            thousandSeparator={true}
            prefix={'$'}
          />
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">
          <NumberFormat
            value={totalExpense}
            displayType={'text'}
            decimalScale={2}
            fixedDecimalScale={true}
            thousandSeparator={true}
            prefix={'$'}
          />
        </p>
      </div>
    </div>
  )
}
