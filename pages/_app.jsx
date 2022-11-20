import { Inter } from '@next/font/google';
import { ApolloProvider } from '@apollo/client';

import '../styles/globals.css';
import client from '../apollo-client';

const inter = Inter({ subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ApolloProvider>
  );
}

export default MyApp;
