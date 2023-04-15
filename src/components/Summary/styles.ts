import styled from 'styled-components';

export const Container = styled.header`
  display: grid;
  gap: 2rem;
  margin-top: -8rem;

  @media (min-width: 801px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-rows: repeat(3, 1fr);
  }

  div {
    background: var(--shape-background);
    padding: 1.5rem 2rem;
    border-radius: 0%.25rem;
    color: var(--title);
    
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.total-shape {
      background: var(--green-light);
      color: #FFF;
    }
  }
`;