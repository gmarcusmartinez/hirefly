import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, color }) => css`
    background-color: ${color === 'partner' ? '#fff' : theme.colors.primary};
    border-radius: 1.6rem;
    border-bottom-right-radius: ${color === 'partner' ? '' : 'unset'};
    border-bottom-left-radius: ${color === 'partner' ? 'unset' : ''};
    font-size: 1.4rem;
    margin: 0.5rem 0;
    height: min-content;
    padding: 1rem;
    font-family: 'Varela Round', sans-serif;
    width: max-content;
    max-width: 90%;
    margin-left: ${color === 'partner' ? '' : 'auto'};
    @media (min-width: ${theme.screenSize.tablet}) {
      max-width: 48rem;
    }
  `}
`;
