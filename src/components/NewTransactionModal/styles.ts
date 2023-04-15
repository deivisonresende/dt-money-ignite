import { darken, lighten } from 'polished';

import styled from 'styled-components';

export const Container = styled.form`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: var(--input-background);
    border: 1px solid #d7d7d7;

    font-weight: 400;
    font-size: 16px;

    &::placeholder {
      color: var(--text);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    height: 4rem;

    padding: 0 1.5rem;
    margin-top: 1.5rem;

    background: var(--green-light);
    color: #fff;

    border-radius: 0.25rem;
    border: 0;

    &:hover {
      transition: filter 0.3s;
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;

  margin: 1rem 0;
`;

interface TransactionTypeButtonProps {
  isActive: boolean;
}

export const TransactionTypeButton = styled.button<TransactionTypeButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  height: 4rem;

  border: ${({ isActive }) => isActive ? '1px solid #d7d7d7' : '1px solid #d7d7d573' };
  border-radius: 0.5rem;

  background: ${({ isActive }) => isActive ? '#eee' : 'transparent' };

  &:hover {
    transition: 0.5s;
    border-color: ${darken(0.2, '#d7d7d7')};
  }

  img {
    width: 1.25rem;
    height: 1.25rem;
  }

  span {
    font-size: 1rem;
    color: var(--title);
    font-weight: 400;
  }
`;
