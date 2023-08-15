import { Transaction, Action, ReducerActions } from "@shared/interface";
import { createContext, useContext, useEffect, useState } from "react"
import { useImmerReducer } from "use-immer";
import BudgetBuddy from "@pages/BudgetBuddy";

const BudgetContext = createContext<any>(null);

function fetchFromLocal() {
  const txns = localStorage.getItem('transactions');
  return txns ? JSON.parse(txns) : []
}

export const BudgetProvider = () => {

  const [transactions, dispatch] = useImmerReducer<Transaction[], Action>(transactionsReducer, fetchFromLocal());
  const [open, setOpen] = useState(false);
  const [editTxn, setEditTxn] = useState<Transaction | null>(null);

  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  const addTransaction = (transaction: Transaction) =>
    dispatch({ type: ReducerActions.ADD, item: transaction });

  const changeTransaction = (transaction: Transaction) =>
    dispatch({ type: ReducerActions.CHANGE, item: transaction });

  const deleteTransaction = (transaction: Transaction) =>
    dispatch({ type: ReducerActions.DELETE, item: transaction });

  const importTransactions = (transactions: Transaction[]) =>
    dispatch({ type: ReducerActions.ADD_MULTIPLE, items: transactions });

  useEffect(() => {
    localStorage.setItem('transactions',
      JSON.stringify(transactions && transactions.length ? transactions : []))
  }, [transactions]);

  return (
    <BudgetContext.Provider
      value={{ open, openDialog, closeDialog, editTxn, setEditTxn, transactions, addTransaction, changeTransaction, deleteTransaction, importTransactions }}
    >
      <BudgetBuddy />
    </BudgetContext.Provider>
  )
}

export const useBudgetContext = () => {
  return useContext(BudgetContext)
}

// USE IMMER REDUCER
function transactionsReducer(tasks: Transaction[], action: Action) {
  switch (action.type) {

    case ReducerActions.ADD:
      tasks.push(action.item);
      break;

    case ReducerActions.CHANGE:
      const index = tasks.findIndex((t) => t.id === action.item.id);
      index !== -1 && (tasks[index] = action.item);
      break;

    case ReducerActions.DELETE:
      return tasks.filter(t => t.id !== action.item.id);

    case ReducerActions.ADD_MULTIPLE:
      tasks.push(...action.items)
      break;

    default:
      throw Error('Unknown action: ' + action);
  }
}