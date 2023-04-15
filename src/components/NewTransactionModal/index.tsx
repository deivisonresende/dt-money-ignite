import {
  Container,
  TransactionTypeButton,
  TransactionTypeContainer
} from './styles';
import { FormEvent, useState } from 'react';

import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';
import close from '../../assets/close.svg';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean;
  toggleModalState: () => void;
}

export function NewTransactionModal({
  isOpen,
  toggleModalState
}: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [transactionType, setTransactionType] = useState('deposit');

  const { createTransaction, reloadTransactions } = useTransactions();

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      value,
      category,
      type: transactionType,
      createdAt: new Date().toISOString()
    });

    toggleModalState()

    setTitle('')
    setValue(0)
    setCategory('')
    setTransactionType('deposit')

    reloadTransactions()
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalState}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button
          type="button"
          onClick={toggleModalState}
          className="react-modal-close"
        >
          <img src={close} alt="Fechar" />
        </button>

        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar transação</h2>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Descrição"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <input
            type="number"
            id="value"
            name="value"
            placeholder="Valor"
            value={value}
            onChange={e => setValue(Number(e.target.value))}
          />

          <TransactionTypeContainer>
            <TransactionTypeButton
              type="button"
              onClick={() => setTransactionType('deposit')}
              isActive={transactionType === 'deposit'}
            >
              <img src={income} alt="Entrada" />
              <span>Entrada</span>
            </TransactionTypeButton>
            <TransactionTypeButton
              type="button"
              onClick={() => setTransactionType('withdraw')}
              isActive={transactionType === 'withdraw'}
            >
              <img src={outcome} alt="Saída" />
              <span>Saída</span>
            </TransactionTypeButton>
          </TransactionTypeContainer>

          <input
            type="text"
            id="category"
            name="category"
            placeholder="Categoria"
            value={category}
            onChange={e => setCategory(e.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    </>
  );
}
