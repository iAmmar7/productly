import { useEffect, useState, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';

import { Icon } from '../Icon';
import { isEmpty } from '../../lib/utils';

const SelectBox = (props) => {
  const { value: valueProps, options, onChange, menuPlacement = 'bottom' } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(valueProps);
  const ref = useRef();

  const handleToggle = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  useEffect(() => {
    const mutableRef = ref;

    const handleClickOutside = (event) => {
      if (mutableRef.current && !mutableRef.current.contains(event.target) && isOpen) handleToggle();
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleToggle, isOpen, ref]);

  const handleChange = (opt) => () => {
    if (value === opt) {
      handleToggle();
      return;
    }
    setValue(opt);
    onChange && onChange(opt);
    handleToggle();
  };

  return (
    <div ref={ref}>
      <div className='relative'>
        <button
          type='button'
          className='bg-black relative w-full border border-white rounded-md shadow-sm pl-3 pr-8 py-[6px] text-left hover:bg-white hover:text-black hover:border-black transition-all duration-150 ease-linear disabled:opacity-60 disabled:bg-black disabled:text-white disabled:border-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary'
          aria-haspopup='listbox'
          aria-expanded='true'
          aria-labelledby='listbox-label'
          onClick={handleToggle}
        >
          <span className='truncate flex items-center'>{value ?? 'Select'}</span>
          <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none flex-col'>
            <Icon icon='ri-arrow-drop-up-line' className='mt-[2px]' />
            <Icon icon='ri-arrow-drop-down-line' className='-mt-4' />
          </span>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { ease: 'easeInOut', duration: 0.2 } }}
              exit={{ opacity: 0, transition: { ease: 'easeInOut', duration: 0.2 } }}
              className={clsx(
                'absolute z-10 my-1 w-full bg-white shadow-lg max-h-80 rounded-md text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm',
                menuPlacement === 'top' && 'bottom-10'
              )}
              role='listbox'
              aria-labelledby='listbox-label'
              aria-activedescendant='listbox-option-3'
            >
              <ol
                className={
                  'max-h-64 scrollbar scrollbar-track-gray-100 scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-600 scrollbar-thumb-rounded scrollbar-thin overflow-y-scroll'
                }
              >
                {!isEmpty(options) &&
                  options.map((opt) => (
                    <li
                      key={opt}
                      className='text-gray-900 cursor-pointer select-none relative py-2 pl-3 pr-9 flex items-center hover:bg-gray-50 transition-all duration-150 ease-in-out rounded-md'
                      id={opt}
                      role='option'
                      tabIndex={1}
                      aria-selected={value === opt}
                      onClick={handleChange(opt)}
                    >
                      <span className={clsx('font-normal truncate min-w-max', opt === value && 'text-primary')}>
                        {opt}
                      </span>
                    </li>
                  ))}
              </ol>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SelectBox;
