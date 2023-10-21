import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';

import { Navigation } from '.';

describe('Navigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ChakraProvider>
        <Navigation />
      </ChakraProvider>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have proper link paths in the website', () => {
    const { getByText } = render(
      <ChakraProvider>
        <Navigation />
      </ChakraProvider>
    );

    expect(getByText('Inspiration').closest('a')).toHaveAttribute('href', '#');
    expect(getByText('Find Work').closest('a')).toHaveAttribute('href', '#');
  });
});
