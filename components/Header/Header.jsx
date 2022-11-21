import React from 'react';

function Header() {
  return (
    <header className='h-16 w-full fixed flex items-center justify-center z-20 bg-black'>
      <div className='w-[96%] border-b text-center pb-2 border-muted'>
        <h1 className='font-marker text-2xl text-primary'>Productly</h1>
      </div>
    </header>
  );
}

export default Header;
