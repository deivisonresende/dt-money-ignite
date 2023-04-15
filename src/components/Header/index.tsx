import { Container, Content } from './styles';

import { Plus } from 'phosphor-react';
import logo from '../../assets/logo.svg';

interface HeaderProps {
  onChangeNewTransactionModalState: () => void;
}

export function Header(props: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="DT Money logo" />
        <button type="button" onClick={props.onChangeNewTransactionModalState}>
          <span> Nova transação </span>
          <Plus size={16} />
        </button>
      </Content>
    </Container>
  );
}
