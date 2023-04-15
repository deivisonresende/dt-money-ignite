import { ReactNode, createContext, useEffect, useState } from 'react';

import { api } from '../../services/api';

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
  createTransaction: (transaction: TransactionInput) => void;
}

export const Context = createContext<TransactionContext>({} as TransactionContext);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get('/transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);

  function createTransaction(transaction: TransactionInput) {
    api.post('/transactions', transaction);
  }

  return (
    <Context.Provider
      value={{
        transactions,
        createTransaction
      }}
    >
      {children}
    </Context.Provider>
  );
}
