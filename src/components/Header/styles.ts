import styled from 'styled-components';

export const Container = styled.header`
  background: var(--black-dark);
`;

export const Content = styled.div`
  max-width: 70rem; //1120px
  margin: 0 auto;

  padding: 2rem 1rem 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 401px) {
    flex-direction: row;
  }

  @media (max-width: 400px) {
    flex-direction: column;
  }

  button {
    color: #fff;
    background: var(--black-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    transition: filter 0.3s;

    @media (max-width: 400px) {
      margin-top: 3rem;
    }

    &:hover {
      filter: brightness(0.7);
    }

    span {
      margin-right: 0.5rem;
    }
  }
`;
