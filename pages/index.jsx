import Head from 'next/head';
import { Fragment } from 'react';

import client from '../apollo-client';
import { PRODUCTS } from '../graphql/queries';
import { Products } from '../components/Products';

function Home(props) {
  const { products } = props;

  return (
    <Fragment>
      <Head>
        <title>Productly</title>
        <meta name='description' content='Product listing challenge' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* <div className='container w-full mx-auto pt-16 min-h-screen'> */}
      <Products products={products} />
      {/* </div> */}
    </Fragment>
  );
}

export default Home;

export async function getServerSideProps(context) {
  const {
    query: { page = 1, limit = 24, filter = 'freshness' },
  } = context;

  const products = await client.query({
    query: PRODUCTS,
    variables: {
      store: 'US',
      offset: (parseInt(page) - 1) * parseInt(limit),
      categoryId: 4209,
      limit: parseInt(limit),
      filter,
    },
  });

  return {
    props: {
      products,
    },
  };
}
