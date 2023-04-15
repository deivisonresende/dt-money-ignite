import { Transaction } from '../../../hooks/useTransactions';

type transactionType = 'deposit' | 'withdraw';

interface SumTransactionsByTypeProps {
  type: transactionType;
  transactions: Transaction[];
}

export function sumTransactionsByType({
  transactions,
  type
}: SumTransactionsByTypeProps) {
  return transactions
    .filter(transaction => transaction.type === type)
    .reduce((acc, current) => acc + current.value, 0);
}
