import { render, screen } from '@testing-library/react';
import { FaHome } from 'react-icons/fa';

import { MenuItem } from '.';

const title = 'title';
const url = '/';
const icon = <FaHome />;
const iconWidth = '2rem';
const paddingLeft = '1em';
const isCollapsed = true;

describe('ToggleButton', () => {
  it('should render icon and title', () => {
    const props = { title, url, icon, iconWidth, paddingLeft, isCollapsed };
    render(<MenuItem {...props} />);
    expect(screen.findByRole('list')).toBeDefined();
    expect(screen.findByText(title)).toBeDefined();
    expect(screen.findByRole('figure')).toBeDefined();
  });
});
