import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
  overflow-x: auto;
  display: flex;
  flex-direction: column;

  table {
    width: 100%;
    border-spacing: 0 0.3rem;

    th {
      color: var(--text);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
      border-radius: 0.25rem;
      background: var(--shape-background);
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      color: var(--text);
      font-weight: 400;
      border-radius: 0.25rem;
      background: var(--shape-background);

      &:first-child {
        color: var(--title);
      }

      &.deposit {
        color: var(--green-light);
      }

      &.withdraw {
        color: var(--red-light);
      }
    }
  }
`;

export const NoContentSpan = styled.span`
  font-weight: 500;
  color: var(--text);
  margin: 4rem auto;
`;