import Head from 'next/head';
import { Fragment } from 'react';

import client from '../apollo-client';
import { PRODUCTS } from '../graphql/queries';

function Home(props) {
  const { products } = props;

  console.log('server', products);

  return (
    <Fragment>
      <Head>
        <title>Productly</title>
        <meta name='description' content='Product listing challenge' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='text-center border'>
        <h1>Welcome to Productly!</h1>
      </div>
    </Fragment>
  );
}

export default Home;

export async function getServerSideProps() {
  const products = await client.query({
    query: PRODUCTS,
    variables: { store: 'US', offset: 0, categoryId: 4209, limit: 48 },
    fetchPolicy: 'network-only',
  });

  return {
    props: {
      products,
    },
  };
}
