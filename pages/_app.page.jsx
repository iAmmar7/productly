import { Inter, Permanent_Marker } from '@next/font/google';
import { ApolloProvider } from '@apollo/client';
import { ErrorBoundary } from '../components/ErrorBoundary';
import 'remixicon/fonts/remixicon.css';

import '../styles/globals.css';
import client from '../config/apollo-client';
import { BaseLayout } from '../layout';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const marker = Permanent_Marker({ subsets: ['latin'], variable: '--font-marker', weight: '400' });

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <div className={`${inter.variable} ${marker.variable} font-sans`}>
        <BaseLayout>
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        </BaseLayout>
      </div>
    </ApolloProvider>
  );
}

export default MyApp;
