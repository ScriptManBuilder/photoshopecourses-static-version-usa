import React from 'react';
import {
  LoaderContainer,
  LoaderContent,
  Logo,
  Tagline,
  SpinnerContainer,
  Spinner,
  ProgressSection,
  ProgressBarContainer,
  ProgressBar,
  ProgressText,
  LoadingText
} from '../styles/components/InitialLoaderStyles';

interface InitialLoaderProps {
  progress: number;
}

const InitialLoader: React.FC<InitialLoaderProps> = ({ progress }) => {
  const isComplete = progress >= 100;

  // Динамические сообщения загрузки в зависимости от прогресса
  const getLoadingMessage = () => {
    if (progress < 20) return 'Initializing Photoshop learning platform...';
    if (progress < 40) return 'Loading course materials and resources...';
    if (progress < 60) return 'Preparing interactive tutorials and videos...';
    if (progress < 80) return 'Setting up your creative workspace...';
    if (progress < 95) return 'Finalizing your learning environment...';
    return 'Ready to unleash your creativity...';
  };

  return (
    <LoaderContainer $isComplete={isComplete}>
      <LoaderContent>
        <Logo>PHOTOSHOP ECOURSES</Logo>
        <Tagline>Master Creative Excellence</Tagline>
        
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
        
        <ProgressSection>
          <ProgressBarContainer>
            <ProgressBar $progress={progress} />
          </ProgressBarContainer>
          <ProgressText>{Math.round(progress)}%</ProgressText>
        </ProgressSection>
        
        <LoadingText>
          {getLoadingMessage()}
        </LoadingText>
      </LoaderContent>
    </LoaderContainer>
  );
};

export default InitialLoader;