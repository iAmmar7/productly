import clsx from 'clsx';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Icon } from '../Icon';

function AdBanner(props) {
  const [visible, setVisible] = useState(true);
  const { placement = 'top' } = props;

  const handleHideAd = () => setVisible(false);

  return (
    <AnimatePresence initial={true}>
      {visible && (
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
            'absolute w-full left-1/2 transform -translate-x-1/2 h-60 bg-primary z-50 rounded-md shadow-md',
            placement === 'top' && 'top-20',
            placement === 'middle' && 'top-1/2',
            placement === 'bottom' && 'bottom-28'
          )}
        >
          <div className='relative'>
            <h2 className='sr-only'>Advertisement Banner</h2>
            <button className='absolute top-0 right-0' onClick={handleHideAd}>
              <Icon icon='ri-close-line' className='text-3xl' />
            </button>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

export default AdBanner;
