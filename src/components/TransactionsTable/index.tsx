import { Container } from './styles';
import { useTransactions } from '../../hooks/useTransactions';
import { useContext } from 'react';

export function TransactionsTable() {
  const { transactions } = useTransactions();
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
