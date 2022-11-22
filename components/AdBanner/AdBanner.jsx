import clsx from 'clsx';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import { Icon } from '../Icon';
import placementMapper from './placementMapper';

function AdBanner(props) {
  const [visible, setVisible] = useState(true);
  const { data } = props;

  const handleHideAd = () => setVisible(false);

  return (
    <AnimatePresence initial={true}>
      {visible && data.thumb && (
        <motion.section
          key='ad'
          initial='visible'
          animate='visible'
          exit='hide'
          variants={{
            visible: { opacity: 1 },
            hide: { opacity: 0 },
          }}
          transition={{ duration: 0.5 }}
          className={clsx(
            'absolute w-full left-1/2 transform -translate-x-1/2 h-48 sm:h-60 bg-primary z-50 rounded-md shadow-md',
            placementMapper(data?.placement)
          )}
        >
          <div className='relative'>
            <h2 className='sr-only'>Advertisement Banner</h2>
            <div className='h-48 sm:h-60 relative block overflow-hidden'>
              <Image src={data?.full} fill alt='advertisement' className='object-cover' priority />
            </div>
            <button className='absolute top-0 right-0 m-2' onClick={handleHideAd}>
              <Icon icon='ri-close-line' className='text-3xl' />
            </button>
            <p className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold font-marker animate-pulse'>
              Advertisement banner
            </p>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

export default AdBanner;
