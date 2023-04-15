import { useEffect, useState } from 'react';

import { Container } from './styles';
import { api } from '../../services/api';

interface Transactions {
  id: number;
  title: string;
  type: string;
  value: number;
  category: string;
  createdAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  useEffect(() => {
    api.get('/transactions').then(response => setTransactions(response.data.transactions));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(
            ({ id, title, type, value, category, createdAt }) => {
              return (
                <tr key={id} className="title">
                  <td>{title}</td>
                  <td className={type}>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(value)}
                  </td>
                  <td>{category}</td>
                  <td>
                    {new Intl.DateTimeFormat('pt-BR').format(
                      new Date(createdAt)
                    )}
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </Container>
  );
}
