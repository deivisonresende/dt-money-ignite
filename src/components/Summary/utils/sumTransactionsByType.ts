import { Transactions } from "../../../TransactionsContext";

type transactionType = 'deposit' | 'withdraw';

interface SumTransactionsByTypeProps {
  type: transactionType;
  transactions: Transactions[]
}

export function sumTransactionsByType ({transactions, type }: SumTransactionsByTypeProps) {
  return transactions
  .filter(transaction => transaction.type === type)
  .reduce((acc, current) => acc + current.value, 0);
}
