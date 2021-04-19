import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'
import NumberFormat from 'react-number-format'

export const Balance: React.VFC = () => {
  const { state, dispatch } = useContext(GlobalContext)
  const { transactions } = state
  const amounts = transactions.map((transaction) => transaction.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0)

  return (
    <>
      <h4>Your Balance</h4>
      <h1>
        <NumberFormat
          value={total}
          displayType={'text'}
          decimalScale={2}
          fixedDecimalScale={true}
          thousandSeparator={true}
          prefix={'$'}
        />
      </h1>
    </>
  )
}
