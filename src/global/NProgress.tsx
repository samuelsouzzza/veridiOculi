'use client';

// use this for local testing
// import { Next13ProgressBar } from '../../../dist';
// this for deploying example
import { Next13ProgressBar } from 'next13-progressbar';

const ProvidersNProgress = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Next13ProgressBar
        height='4px'
        color='#39A600'
        options={{ showSpinner: false }}
        showOnShallow
      />
      {children}
    </>
  );
};

export default ProvidersNProgress;
