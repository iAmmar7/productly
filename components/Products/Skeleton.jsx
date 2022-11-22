import clsx from 'clsx';

import gridMapper from './gridMapper';

function Skeleton(props) {
  const { grid } = props;

  return (
    <div className={clsx('grid gap-x-4 gap-y-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3', gridMapper(grid))}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
        <div
          key={n}
          className='col-span-6 sm:col-span-3 md:col-span-1 shadow rounded-base bg-muted h-96 animate-pulse'
        ></div>
      ))}
    </div>
  );
}

export default Skeleton;
