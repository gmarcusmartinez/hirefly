import styled, { css } from 'styled-components';

export const FormStep = styled.div`
  height: calc(100% - 20px);
  padding: 0 1rem;
  position: absolute;
  top: 2rem;
  width: 100%;
  &#payment {
    transform: translateX(100%);
  }
  &#desc {
    transform: translateX(200%);
  }
  &#skills {
    transform: translateX(300%);
  }
  &#bio {
    transform: translateX(100%);
  }
  &#cp-skills {
    transform: translateX(200%);
  }
`;

export const FormStepBtn = styled.button`
  ${({ theme, className }) => css`
    border: none;
    border-radius: 0.4rem;
    background-color: ${className === 'disabled'
      ? theme.colors.greyPrimary
      : theme.colors.primary};
    color: #fff;
    height: 4rem;
    letter-spacing: ${theme.letterSpacing.sm};
    margin-right: 0.5rem;
    margin-bottom: 4rem;
    width: 12rem;
    &:active {
      transform: translate(2px, 2px);
    }
  `}
`;
