import { render } from '@testing-library/react';

import { Header } from '.';
import { ChakraProvider } from '@chakra-ui/react';

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
