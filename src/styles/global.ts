import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --main-background: #7c4cff0f;
    --black-dark: #1f1d24;
    --black-light: #404040;
    --green-light: #33CC95;
    --red-light: #E52E4D;
    --shape-background: #FFFFFF;
    --title: #363F5F;
    --text: #969CB2;
    --input-background: #e7e9ee;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75% // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5% // 14px
    }
  }
 
  body {
    background-color: var(--main-background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: #363F5F;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgb(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .react-modal-content {
    width: 100%;
    max-width: 36rem;
    background: var(--shape-background);
    padding: 3rem;
    position: relative;
    border-radius: 0.5rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.7);
    }
  }
`;
