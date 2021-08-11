import styled, { css } from 'styled-components';

export const Container = styled.div`
  animation: popup ease-in 0.2s;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 0.4rem;
  display: flex;
  height: 4rem;
  justify-content: center;
  margin: 0.25rem;
  max-width: 36rem;
  width: 90%;
  @keyframes popup {
    0% {
      transform: translateY(5rem);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const Message = styled.div`
  ${({ theme, className }) => css`
    color: ${className === 'success'
      ? theme.colors.success
      : theme.colors.error};
    font-size: 1.25rem;
    letter-spacing: ${theme.letterSpacing.sm};
  `}
`;
