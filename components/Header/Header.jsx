import { Icon } from '../Icon';

function Header() {
  return (
    <header className='h-16 w-full fixed flex items-center justify-center z-20 bg-black'>
      <div className='w-[96%] h-full border-b text-center py-3 border-muted'>
        <h1 className='font-marker text-4xl text-primary'>Productly</h1>
      </div>
      <div className='absolute right-4 sm:right-10'>
        <Icon icon='ri-shopping-cart-line' className='text-xl sm:text-2xl' />
      </div>
    </header>
  );
}

export default Header;
