import client from './apollo-client';
import { ApolloProvider } from '@apollo/client';
import { render } from '@testing-library/react';
import { createElement, Fragment } from 'react';

import { BaseLayout } from '../layout';
import { ErrorBoundary } from '../components/ErrorBoundary';

const renderer = (ui) => {
  const RendererWithProviders = ({ children }) => {
    const component = createElement(Fragment, null, children);

    return (
      <ApolloProvider client={client}>
        <BaseLayout>
          <ErrorBoundary>{component}</ErrorBoundary>
        </BaseLayout>
      </ApolloProvider>
    );
  };

  return render(ui, { wrapper: RendererWithProviders });
};

export default renderer;
