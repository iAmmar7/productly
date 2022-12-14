import { useEffect, useState, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';

import { Icon } from '../Icon';
import { isEmpty, isObject } from '../../lib/utils';

const SelectBox = (props) => {
  const { id, value: valueProps, options, onChange, menuPlacement = 'bottom', disabled, className } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(valueProps);
  const ref = useRef();

  const handleToggle = useCallback(() => {
    if (disabled) return;
    setIsOpen(!isOpen);
  }, [disabled, isOpen]);

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

  const modValue = isObject(value) ? value.value : value;
  const modName = isObject(value) ? value.name : value;

  return (
    <div ref={ref} id={id}>
      <div className={clsx('relative', className)}>
        <button
          type='button'
          className={
            'bg-black relative w-full border border-white rounded-md shadow-sm px-2 sm:px-3 py-1 sm:py-[6px] text-left hover:bg-white hover:text-black hover:border-black transition-all duration-150 ease-linear disabled:opacity-60 disabled:bg-black disabled:text-white disabled:border-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary'
          }
          aria-haspopup='listbox'
          title={id}
          aria-expanded='true'
          aria-labelledby='listbox-label'
          onClick={handleToggle}
          disabled={disabled}
        >
          <span className='truncate'>{modName ?? 'Select'}</span>
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
                'absolute z-10 my-1 min-w-full bg-white shadow-lg max-h-80 rounded-md text-sm sm:text-base ring-1 ring-black ring-opacity-5 focus:outline-none',
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
                  options.map((opt) => {
                    const modOptValue = isObject(opt) ? opt.value : opt;
                    const modOptName = isObject(opt) ? opt.name : opt;
                    return (
                      <li
                        key={modOptValue}
                        className='text-gray-900 cursor-pointer select-none relative py-1 sm:py-2 px-2 sm:px-3 flex items-center hover:bg-gray-50 transition-all duration-150 ease-in-out rounded-md'
                        id={modOptValue}
                        role='option'
                        tabIndex={1}
                        aria-selected={modValue === modOptValue}
                        onClick={handleChange(opt)}
                      >
                        <span className={clsx('min-w-max', modOptValue === modValue && 'text-primary')}>
                          {modOptName}
                        </span>
                      </li>
                    );
                  })}
              </ol>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SelectBox;
