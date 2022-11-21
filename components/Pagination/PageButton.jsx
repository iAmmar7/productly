import clsx from 'clsx';

function PageButton(props) {
  const { children, className, ...otherProps } = props;
  return (
    <button
      className={clsx(
        'border w-6 h-8 flex items-center justify-center hover:bg-white hover:text-black hover:border-black transition-all duration-150 ease-linear disabled:opacity-60 disabled:bg-black disabled:text-white disabled:border-white',
        className
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default PageButton;
