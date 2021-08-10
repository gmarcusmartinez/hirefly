import styled, { css } from 'styled-components';

export const Badge = styled.div`
  ${({ theme }) => css`
    align-items: center;
    border-radius: 50%;
    background-color: ${theme.colors.primary}
    display: flex;
    height: 2.2rem;
    justify-content: center;
    width: 2.2rem;

    position: absolute;
    top: -0.5rem;
    left: 2.2rem;

    span {
      color: #fff;
      font-size: 1.25rem;
      margin-left: 0.1rem;
    }
  `}
`;
