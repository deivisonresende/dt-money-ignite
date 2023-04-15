import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
  useTransition
} from 'react';

import { api } from '../services/api';

export interface Transaction {
  id: number;
  title: string;
  type: string;
  value: number;
  category: string;
  createdAt: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

type TransactionInput = Omit<Transaction, 'id'>;

interface TransactionContext {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
  reloadTransactions: () => void
}

const Context = createContext<TransactionContext>({} as TransactionContext);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [hasUpdate, setHasUpdate] = useState(false);

  useEffect(() => {
    api
      .get('/transactions')
      .then(response => setTransactions(response.data.transactions));
  }, [hasUpdate]);

  async function createTransaction(transaction: TransactionInput) {
    api.post('/transactions', JSON.stringify(transaction));
  }

  function reloadTransactions(){
    console.log(hasUpdate)
    setHasUpdate(!hasUpdate);
    console.log(hasUpdate)
  }

  return (
    <Context.Provider
      value={{
        transactions,
        createTransaction,
        reloadTransactions
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useTransactions() {
  const context = useContext(Context);
  return context;
}
