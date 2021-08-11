import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: ${theme.spacing.xs};
    overflow-y: scroll;
  `}
`;
