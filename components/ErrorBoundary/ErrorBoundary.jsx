import Link from 'next/link';
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='flex flex-col gap-6 items-center justify-center my-10'>
          <h2>Oops, there is an error!</h2>
          <Link
            href='/'
            type='button'
            title='Home'
            className='border border-muted px-6 py-2 rounded-md hover:bg-white hover:text-black
            hover:border-black transition-all duration-150 ease-linear disabled:opacity-60 disabled:bg-black
            disabled:text-white disabled:border-white focus:outline-none focus:ring-1 focus:ring-primary
            focus:border-primary'
          >
            Try again?
          </Link>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
