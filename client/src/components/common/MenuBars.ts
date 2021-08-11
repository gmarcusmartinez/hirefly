import styled, { css } from 'styled-components';

export const MenuBars = styled.div`
  ${({ theme, color }) => css`
    cursor: pointer;
    height: max-content;
    margin-left: auto;
    margin-right: 2rem;
    div {
      background-color: ${color === 'darkmode' ? '#fff' : ''};
    }

    &:hover {
      div {
        background-color: ${theme.colors.primary};
      }
    }
    @media (min-width: ${theme.screenSize.desktop}) {
      display: none;
    }
  `}
`;

export const Bar = styled.div`
  ${({ className }) => css`
    height: 0.2rem;
    margin: 0.8rem 0;
    transition: 0.25s;
    width: 3.2rem;
    &:nth-of-type(1) {
      transform: ${className === 'change'
        ? 'rotate(-45deg) translate(-8px, 6px)'
        : ''};
    }
    &:nth-of-type(2).change {
      opacity: ${className === 'change' ? '0' : ''};
    }
    &:nth-of-type(3).change {
      transform: ${className === 'change'
        ? 'rotate(45deg) translate(-8px, 6px)'
        : ''};
    }
  `}
`;
