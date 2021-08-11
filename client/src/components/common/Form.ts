import styled, { css } from 'styled-components';

export const Container = styled.div`
  font-family: 'Varela Round', sans-serif;
  height: 100%;
  padding: 0 1rem;
`;

export const Active = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 100%;
    max-width: 55rem;
    margin: auto;
    overflow-x: hidden;
    width: 100%;
    @media (min-width: ${theme.screenSize.tablet}) {
      height: calc(100% - 60px);
    }
  `}
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  transition: transform 200ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
`;
