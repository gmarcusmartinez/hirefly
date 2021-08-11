import styled, { css } from 'styled-components';

export const OverLay = styled.div`
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: center;
  width: 100%;
`;

export const Message = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.greyPrimary}
    font-size: 1.4rem;
    letter-spacing: ${theme.letterSpacing.md};
    margin-bottom: ${theme.spacing.md};
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    animation: spin 1s ease-in-out infinite;
    border: 8px solid rgba(195, 195, 195, 0.6);
    border-top-color: ${theme.colors.primary};
    border-radius: 50%;
    height: 12rem;
    width: 12rem;
    -webkit-animation: spin 1s ease-in-out infinite;
    z-index: 0;
    @keyframes spin {
      to {
        -webkit-transform: rotate(360deg);
      }
    }
    @-webkit-keyframes spin {
      to {
        -webkit-transform: rotate(360deg);
      }
    }
  `}
`;
