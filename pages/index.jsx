import Head from 'next/head';
import { Fragment } from 'react';

import client from '../config/apollo-client';
import { PRODUCTS, PRODUCTS_BY_CATEGORIES } from '../graphql/queries';
import { Products } from '../components/Products';
import { AdBanner } from '../components/AdBanner';
import { isEmpty, getRandomNumber } from '../lib/utils';

function Home(props) {
  const { products, banner, error } = props;

  // TODO: Handle error from the server

  return (
    <Fragment>
      <Head>
        <title>Productly</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Product listing challenge' />
        <meta content='Productly' property='og:title' />
        <meta content='Product listing challenge' name='description' />
        <meta content='Product listing challenge' property='og:description' />
      </Head>
      <AdBanner data={banner} />
      {/* <div className='container w-full mx-auto pt-16 min-h-screen relative'> */}
      <Products products={products} />
      {/* </div> */}
    </Fragment>
  );
}

export default Home;

export async function getServerSideProps(context) {
  const {
    query: { page = 1, limit = 24, category },
  } = context;

  try {
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

    // For advertisement banner; consider this a CMS call to fetch the banner image
    const unsplash = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
      { method: 'GET', 'User-Agent': '*' }
    );
    const unsplashImage = await unsplash.json();

    const bannerPlacement = ['top', 'middle', 'bottom'][getRandomNumber(0, 2)];

    return {
      props: {
        products,
        banner: { ...(unsplashImage?.urls || {}), placement: bannerPlacement },
      },
    };
  } catch (err) {
    return {
      props: {
        error: 'Oops! Something went wrong... .reload might help?',
      },
    };
  }
}
