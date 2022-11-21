import { memo, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Icon } from '../Icon';

function ProductCard(props) {
  const { data } = props;
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorites = () => setIsFavorite(!isFavorite);

  return (
    <motion.li
      className='rounded-md shadow-2xl cursor-pointer group relative overflow-hidden'
      initial={{ scale: 0 }}
      animate={{ scale: 1, transition: { ease: 'easeInOut', duration: 0.5 } }}
      exit={{ scale: 0, transition: { ease: 'easeInOut', duration: 0.5 } }}
      viewport={{ once: true }}
      layout
    >
      <figure className='h-[420px] relative block overflow-hidden'>
        <Image
          src={`https://${data.imageUrl}`}
          alt='prod image'
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          priority
          className='rounded-md transition-transform duration-1000 ease-in-out group-hover:scale-125 overflow-hidden'
        />
        <figcaption>{data.name}</figcaption>
      </figure>
      <div className='text-center flex flex-col gap-y-1 py-2 px-1'>
        <p className='leading-tight'>{data.name}</p>
        <p className='text-primary font-bold'>{data.brandName}</p>
        <div className='flex items-center justify-center gap-x-2'>
          <p>{data.price.current.text}</p>
          {data.price.previous.value && <p className='line-through text-red-500'>{data.price.previous.text}</p>}
        </div>
      </div>
      {data.price.previous.value && <span className='absolute top-3 -left-2 bg-red-500 px-4 -rotate-45'>Sale</span>}
      <span className='absolute top-3 right-2'>
        <button onClick={handleToggleFavorites}>
          {isFavorite ? (
            <Icon
              icon='ri-heart-fill'
              className='text-red-500 text-xl hover:opacity-80 transition-all duration-150 ease-in-out'
            />
          ) : (
            <Icon
              icon='ri-heart-line'
              className='text-primary text-xl hover:opacity-80 transition-all duration-150 ease-in-out'
            />
          )}
        </button>
      </span>
    </motion.li>
  );
}

export default memo(ProductCard);
