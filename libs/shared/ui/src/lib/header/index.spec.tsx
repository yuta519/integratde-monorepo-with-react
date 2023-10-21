import { render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';

import { Header } from '.';

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ChakraProvider>
        <Header />
      </ChakraProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
