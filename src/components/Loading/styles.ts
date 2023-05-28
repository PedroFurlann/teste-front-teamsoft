import styled, { keyframes } from 'styled-components';

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoadingSpinner = styled.div`
  border: 4px solid #FDD70E;
  border-top: 4px solid #F09035;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${rotationAnimation} 1s linear infinite;
`;