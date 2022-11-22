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
      className='rounded-md shadow-2xl cursor-pointer group relative overflow-hidden text-sm sm:text-base'
      initial={{ scale: 0 }}
      animate={{ scale: 1, transition: { ease: 'easeInOut', duration: 0.5 } }}
      exit={{ scale: 0, transition: { ease: 'easeInOut', duration: 0.5 } }}
      viewport={{ once: true }}
      layout
    >
      <figure className='h-[230px] sm:h-[340px] lg:h-[420px] relative block overflow-hidden'>
        <Image
          src={data.thumbnail}
          alt='prod image'
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          priority
          className='rounded-md transition-transform duration-1000 ease-in-out group-hover:scale-125 overflow-hidden object-center'
        />
        <figcaption>{data.title}</figcaption>
      </figure>
      <div className='text-center flex flex-col gap-y-1 py-2 px-1'>
        <p className='leading-tight'>{data.title}</p>
        <p className='text-primary font-bold font-marker'>{data.brand}</p>
        <div className='flex items-center justify-center gap-x-2'>
          <p>${data.price}</p>
        </div>
      </div>
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
