import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    justify-content: center;
    span {
      color: ${theme.colors.primary};
      font-size: 3rem;
      cursor: pointer;
    }
  `}
`;
