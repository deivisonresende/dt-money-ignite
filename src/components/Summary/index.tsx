import { CURRENCY } from '../../config';
import { Container } from './styles';
import { FormatNumber } from '../../utils/formatNumber';
import { useTransactions } from '../../hooks/useTransactions';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import { sumTransactionsByType } from './utils/sumTransactionsByType';
import total from '../../assets/total.svg';

export function Summary() {
  const { transactions } = useTransactions();

  const depositTotal = sumTransactionsByType({ transactions, type: 'deposit' });
  const withdrawTotal = sumTransactionsByType({
    transactions,
    type: 'withdraw'
  });

  const balance = depositTotal - withdrawTotal;

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="Entradas" />
        </header>
        <strong>{FormatNumber.formatCurrency(CURRENCY, depositTotal)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcome} alt="Saídas" />
        </header>
        <strong>{FormatNumber.formatCurrency(CURRENCY, withdrawTotal)}</strong>
      </div>
      <div className="total-shape">
        <header>
          <p>Total</p>
          <img src={total} alt="Total" />
        </header>
        <strong>{FormatNumber.formatCurrency(CURRENCY, balance)}</strong>
      </div>
    </Container>
  );
}
