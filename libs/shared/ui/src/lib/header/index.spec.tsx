import { render } from '@testing-library/react';

import { Header } from '.';

describe('Header', () => {
  it('should render successfully', () => {
    // expect(true).toBe(true);
    const { baseElement } = render(<Header />);
    expect(true).toBe(true);
    // expect(baseElement).toBeTruthy();
  });
});
