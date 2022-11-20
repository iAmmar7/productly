import Image from 'next/image';
import React from 'react';

function Listing(props) {
  const { products } = props;

  console.log('products', products);

  return (
    <section>
      <h2 className='sr-only'>Product listing</h2>
      <ol className='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {products.data.products.products.map((prod) => {
          return (
            <li key={prod.id} className='border border-muted rounded-sm shadow-2xl cursor-pointer group'>
              <figure className='h-[420px] relative block overflow-hidden'>
                <Image
                  src={`https://${prod.imageUrl}`}
                  alt='prod image'
                  fill
                  className='rounded-sm transition-transform duration-1000 ease-in-out group-hover:scale-125 overflow-hidden'
                />
                <figcaption>{prod.name}</figcaption>
              </figure>
              <div className='text-center flex flex-col gap-y-1 py-2'>
                <p className='leading-tight'>{prod.name}</p>
                <p className='text-primary'>{prod.brandName}</p>
                <p>{prod.price.current.text}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export default Listing;
