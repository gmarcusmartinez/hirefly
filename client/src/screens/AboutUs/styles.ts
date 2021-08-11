import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    @media (min-width: ${theme.screenSize.desktop}) {
      align-items: center;
      flex-direction: row;
      justify-content: space-evenly;
    }
  `}
`;
