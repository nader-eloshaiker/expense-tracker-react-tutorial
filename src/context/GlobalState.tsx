import { GlobalStateModel } from '../models/GlobalStateModel'
import { TransactionModel } from '../models/TransactionModel'
import { createCtx } from './CreateCtxUseReducer'
import { ulid } from 'ulid'

// Initial State
const initialState: GlobalStateModel = {
  transactions: [
    { id: ulid(), text: 'Flower', amount: -20 },
    { id: ulid(), text: 'Salary', amount: 300 },
    { id: ulid(), text: 'Book', amount: -10 },
    { id: ulid(), text: 'Camera', amount: 150 },
  ],
}

// Create context
export enum GlobalActionTypeEnum {
  add = 'add',
  remove = 'remove',
}
// usage
type GlobalActionType =
  | { type: GlobalActionTypeEnum.add; payload: TransactionModel }
  | { type: GlobalActionTypeEnum.remove; payload: TransactionModel }

const reducer = (state: GlobalStateModel, action: GlobalActionType): GlobalStateModel => {
  switch (action.type) {
    case GlobalActionTypeEnum.add:
      return { ...state, transactions: [...state.transactions, action.payload] }
    case GlobalActionTypeEnum.remove:
      return {
        ...state,
        transactions: state.transactions.filter((transaction) => transaction.id !== action.payload.id),
      }
    default:
      throw new Error()
  }
}

export const [GlobalContext, GlobalProvider] = createCtx<GlobalStateModel, GlobalActionType>(reducer, initialState)

// Traning Implementation:

// // Create context
// export const GlobalContext = createContext(initialState)

// // Provider component
// export const GlobalProvider = ({ children }: React.PropsWithChildren<{}>) => {
//   const [state, dispatch] = useReducer(AppReducer, initialState)

//   const addTransaction = (transaction: TransactionModel): void => {
//     dispatch({
//       type: GlobalActionTypeEnum.add,
//       payload: transaction,
//     })
//   }

//   const deleteTransaction = (id: string): void => {
//     dispatch({
//       type: GlobalActionTypeEnum.remove,
//       payload: id,
//     })
//   }

//   return (
//     <GlobalContext.Provider value={{ transactions: state.transactions, addTransaction, deleteTransaction }}>
//       {children}
//     </GlobalContext.Provider>
//   )
// }

// // To use a reducer function use:
// //  const {deleteTransaction} = useContext(GlobalContext)
