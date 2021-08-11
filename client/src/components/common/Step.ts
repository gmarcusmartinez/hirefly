import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, className }) => css`
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    height: 6rem;
    width: 100%;
    div {
      color: ${className === 'darkmode' ? '#fff' : ''};
    }
  `}
`;

export const Step = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.greyTertiary};
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    font-size: 1.25rem;
    height: 100%;
    letter-spacing: ${theme.letterSpacing.sm};
    text-align: center;
  `}
`;
export const Bar = styled.span`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    height: 0.5rem;
    margin-top: auto;
    transition: 0.2s ease-in-out;
    width: 0%;
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    align-self: center;
    font-size: 90%;
    flex-grow: 1;
    line-height: 5.5rem;
    @media (min-width: ${theme.screenSize.tablet}) {
      font-size: 1.45rem;
    }
  `}
`;
