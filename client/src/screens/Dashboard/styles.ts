import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, className }) => css`
    background-color: ${className === 'darkmode' ? '#242424' : '#f9f9f9'};
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    position: fixed;
    top: 0;
    left: 0;

    @media (min-width: ${theme.screenSize.tablet}) {
      display: grid;
      grid-template-areas:
        'dashnav head'
        'dashnav mainarea';

      grid-template-columns: 7rem auto;
      grid-template-rows: 8rem auto;
    }

    @media (min-width: ${theme.screenSize.desktop}) {
      grid-template-columns: 26rem auto;
    }
  `}
`;

export const Main = styled.div`
  ${({ theme }) => css`
    overflow-y: scroll;
    height: 90vh;
    @media (min-width: ${theme.screenSize.tablet}) {
      grid-area: mainarea;
    }
  `}
`;
