import styled, { keyframes } from 'styled-components';

// Анимации
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(1.05);
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
`;

const progressAnimation = keyframes`
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

// Основной контейнер лоадера
export const LoaderContainer = styled.div<{ $isComplete?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: ${props => props.$isComplete ? fadeOut : fadeIn} 0.8s ease-in-out;
  animation-fill-mode: forwards;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.2) 0%, transparent 50%);
    pointer-events: none;
  }
`;

// Контент лоадера
export const LoaderContent = styled.div`
  text-align: center;
  color: white;
  z-index: 1;
  position: relative;
  max-width: 400px;
  padding: 2rem;
  animation: ${fadeIn} 1s ease-out;
`;

// Логотип
export const Logo = styled.h1`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 3rem;
  font-weight: 900;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: ${pulse} 2s ease-in-out infinite;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

// Подзаголовок
export const Tagline = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0 0 3rem 0;
  opacity: 0.9;
  letter-spacing: 0.5px;
  animation: ${fadeIn} 1.2s ease-out;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }
`;

// Контейнер спиннера
export const SpinnerContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Спиннер
export const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-top: 4px solid #ffffff;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    border-width: 3px;
  }
  
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    border-width: 3px;
  }
`;

// Секция прогресса
export const ProgressSection = styled.div`
  margin: 2.5rem 0 1.5rem 0;
  animation: ${fadeIn} 1.4s ease-out;
`;

// Контейнер прогресс-бара
export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1rem;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    height: 6px;
  }
`;

// Прогресс-бар
export const ProgressBar = styled.div<{ $progress: number }>`
  height: 100%;
  width: ${props => props.$progress}%;
  background: linear-gradient(90deg, 
    #ffffff 0%, 
    #e0e7ff 50%, 
    #ffffff 100%
  );
  border-radius: 10px;
  transition: width 0.3s ease-out;
  position: relative;
  box-shadow: 0 2px 4px rgba(255, 255, 255, 0.3);
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    animation: ${shimmer} 2s infinite;
  }
`;

// Текст прогресса
export const ProgressText = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

// Текст загрузки
export const LoadingText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 400;
  margin: 1.5rem 0 0 0;
  opacity: 0.8;
  letter-spacing: 0.3px;
  animation: ${pulse} 2.5s ease-in-out infinite;
  min-height: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-top: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-top: 1rem;
    padding: 0 1rem;
  }
`;