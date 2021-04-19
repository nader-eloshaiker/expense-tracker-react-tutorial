import { GlobalActionTypeEnum, GlobalContext } from '../context/GlobalState'
import React, { useContext, useState } from 'react'

import { TransactionModel } from '../models/TransactionModel'
import { ulid } from 'ulid'

export const AddTransaction: React.VFC = () => {
  const [text, setText] = useState<string>('')
  const [amount, setAmount] = useState<number>(0)
  const { state, dispatch } = useContext(GlobalContext)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    const transaction: TransactionModel = {
      id: ulid(),
      text,
      amount,
    }

    event.preventDefault()
    dispatch({
      type: GlobalActionTypeEnum.add,
      payload: transaction,
    })
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.valueAsNumber)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
