import clsx from 'clsx';

function Icon(props) {
  const { icon, className } = props;

  if (!icon) return null;

  return <i className={clsx(icon, 'opacity-100', className)} />;
}

export default Icon;
