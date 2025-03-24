import React from 'react';
import {Text} from 'react-native';
import ErrorBoundary from './ErrorBoundary';

const ErrorBoundaryExample = (): React.JSX.Element => {
  return (
    <ErrorBoundary>
      <Text>This is a separate implementation to test ErrorBoundary.</Text>
    </ErrorBoundary>
  );
};

export default ErrorBoundaryExample;
