import { act, fireEvent, render } from '@testing-library/react';

import HomePage from './index';

describe('HomePage', () => {
  const renderResult = () => {
    return render(<HomePage />);
  };

  it('should render the header', async () => {
    const { getByText } = renderResult();

    expect(getByText('Productly')).toBeInTheDocument();
  });
});
