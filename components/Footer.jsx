import { APP_URL } from '../lib/constants';

function Footer() {
  return (
    <footer className='h-14 w-full flex items-center justify-center'>
      <div className='w-[96%] border-t text-right pt-2 border-muted'>
        <p className='text-muted text-sm'>
          All rights reserverd &copy; {new Date().getFullYear()},{' '}
          <a
            href={APP_URL}
            className='font-marker text-primary hover:text-white transition duration-sm ease-in-out'
            title='Productly'
          >
            Productly
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
