import { Fragment } from 'react';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

function Base(props) {
  const { children } = props;

  return (
    <Fragment>
      <Header />
      <main className='container w-full mx-auto pt-16 min-h-screen'>{children}</main>
      <Footer />
    </Fragment>
  );
}

export default Base;
