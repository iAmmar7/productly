import clsx from 'clsx';

function PageButton(props) {
  const { children, className, ...otherProps } = props;
  return (
    <button
      className={clsx(
        'border w-6 h-8 text-sm sm:text-base flex items-center justify-center hover:bg-white hover:text-black hover:border-black transition-all duration-150 ease-linear disabled:opacity-60 disabled:bg-black disabled:text-white disabled:border-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary',
        className
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default PageButton;
