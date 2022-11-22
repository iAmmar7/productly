import Head from 'next/head';
import { Fragment } from 'react';

import client from '../apollo-client';
import { PRODUCTS, PRODUCTS_BY_CATEGORIES } from '../graphql/queries';
import { Products } from '../components/Products';
import { isEmpty } from '../lib/utils';

function Home(props) {
  const { products } = props;

  return (
    <Fragment>
      <Head>
        <title>Productly</title>
        <meta name='description' content='Product listing challenge' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Products products={products} />
    </Fragment>
  );
}

export default Home;

export async function getServerSideProps(context) {
  const {
    query: { page = 1, limit = 24, category },
  } = context;

  let products = {};

  if (!isEmpty(category)) {
    products = await client.query({
      query: PRODUCTS_BY_CATEGORIES,
      variables: {
        category,
      },
    });
  } else {
    products = await client.query({
      query: PRODUCTS,
      variables: {
        skip: (parseInt(page) - 1) * parseInt(limit),
        limit: parseInt(limit),
      },
    });
  }

  return {
    props: {
      products,
    },
  };
}
