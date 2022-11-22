import { render } from '@testing-library/react';

import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary', () => {
  const ErrorComponent = () => {
    throw new Error('Catch by error boundary');
  };

  it('should render a fallback screen', () => {
    const { getByText, getByTitle } = render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );

    expect(getByText('Oops, there is an error!')).toBeInTheDocument();
    expect(getByTitle('Home')).toBeInTheDocument();
  });
});
