import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
${({ theme }) => css`
  html {
    font-size: 62.5%;
    height: 100%;

    body {
      background-color: ${theme.colors.white};
      display: flex;
      flex-direction: column;
      font-family: 'Varela Round', sans-serif;
      height: 100%;
      line-height: 1.6;
      margin: 0;

      ::-webkit-scrollbar {
        display: none;
      }
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  }
`}
`;
