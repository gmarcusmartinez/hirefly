import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme, color }) => css`
    background-color: ${color === 'darkmode' ? '#121212' : ''};
    border-radius: 0.2rem;
    box-shadow: ${color === 'darkmode'
      ? theme.boxShadow.dmLight
      : theme.boxShadow.light};
    cursor: pointer;
    display: grid;
    grid-template-columns: 6rem auto 4rem;
    height: 10vh;
    margin-bottom: 0.25rem;
    opacity: 0.9;
    padding: 0.75rem;
    img {
      align-self: center;
      border-radius: 50%;
      height: 4.5rem;
      object-fit: cover;
      width: 4.5rem;
    }
    &:active {
      transform: translate(2px, 2px);
    }
    @media (min-width: ${theme.screenSize.tablet}) {
      height: 6rem;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme, color }) => css`
    align-self: center;
    overflow-y: hidden;
    span {
      color: ${color === 'darkmode' ? '#fff' : theme.colors.greyTertiary};
      font-size: 1.25rem;
    }
  `}
`;
