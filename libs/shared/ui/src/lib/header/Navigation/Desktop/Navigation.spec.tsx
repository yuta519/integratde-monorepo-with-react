import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Navigation } from '.';

describe('Navigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Navigation />);
    expect(baseElement).toBeTruthy();
  });

  it('should have proper link paths in the website', () => {
    const { getByText } = render(<Navigation />);

    expect(getByText('Inspiration').closest('a')).toHaveAttribute('href', '#');
    expect(getByText('Find Work').closest('a')).toHaveAttribute('href', '#');
  });

  it('should have proper link paths in the website', () => {
    render(<Navigation />);

    expect(screen.getByText('Inspiration').closest('a')).toHaveTextContent(
      'Inspiration'
    );
  });
});
