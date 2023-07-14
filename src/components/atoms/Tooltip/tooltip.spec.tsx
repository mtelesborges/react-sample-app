import { render, screen } from '@testing-library/react';

import { Tooltip } from '.';

describe('Tooltip', () => {
  it('should render children', () => {
    render(
      <Tooltip label="Hello World">
        <button>Hover me</button>
      </Tooltip>,
    );
    expect(screen.getByText('Hover me')).toBeDefined();
  });
});
