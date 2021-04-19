import { GlobalActionTypeEnum, GlobalContext } from '../context/GlobalState'
import React, { useContext } from 'react'

import { FaTimes } from 'react-icons/fa'
import NumberFormat from 'react-number-format'
import { TransactionModel } from '../models/TransactionModel'

type Props = {
  transaction: TransactionModel
}

export const Transaction = ({ transaction }: Props) => {
  const { state, dispatch } = useContext(GlobalContext)

  const deleteTransaction = (): void => {
    dispatch({
      type: GlobalActionTypeEnum.remove,
      payload: transaction,
    })
  }

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}

      <span className="flex-row-left">
        <NumberFormat
          value={transaction.amount}
          displayType={'text'}
          decimalScale={2}
          fixedDecimalScale={true}
          thousandSeparator={true}
          prefix={'$'}
        />

        <FaTimes className="delete-btn" onClick={deleteTransaction} />
      </span>
    </li>
  )
}
