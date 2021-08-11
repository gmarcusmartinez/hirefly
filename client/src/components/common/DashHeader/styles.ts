import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, className }) => css`
    align-items: center;
    box-shadow: ${className === 'darkmode'
      ? theme.boxShadow.dmLight
      : theme.boxShadow.light};
    color: ${className === 'darkmode' ? '#fff' : theme.colors.greyTertiary};
    display: flex;
    font-family: 'Varela Round', sans-serif;
    height: 10vh;
    width: 100%;
    @media (min-width: ${theme.screenSize.tablet}) {
      grid-area: head;
      height: 8rem;
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: 1.25rem;
    margin-left: ${theme.spacing.md};
    letter-spacing: ${theme.letterSpacing.md};
    text-transform: capitalize;
    @media (min-width: ${theme.screenSize.tablet}) {
      font-size: 1.4rem;
    }
  `}
`;
