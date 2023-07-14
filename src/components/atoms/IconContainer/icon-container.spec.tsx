import { render } from '@testing-library/react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';

import { IconContainer } from '.';

const width = '2rem';
const tooltip = 'tooltip';
const icon = <AiOutlineMenuUnfold />;

describe('IconContainer', () => {
  it('should render icon', () => {
    const props = { width, icon, tooltip };
    const { container } = render(<IconContainer {...props} />);
    expect(container.firstElementChild?.outerHTML).toContain('svg');
  });
});
