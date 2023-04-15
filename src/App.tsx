import { Dashboard } from './components/Dashboard';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { useState } from 'react';

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function toggleNewTransactionModalState() {
    setIsNewTransactionModalOpen(!isNewTransactionModalOpen);
  }

  return (
    <>
      <GlobalStyle />
      <Header
        onChangeNewTransactionModalState={toggleNewTransactionModalState}
      />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        toggleModalState={toggleNewTransactionModalState}
      />
    </>
  );
}

export default App;
