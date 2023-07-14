import { render, screen } from '@testing-library/react';
import { FaHome } from 'react-icons/fa';

import { IMenu } from '../../../models/menu';
import { MenuItemList } from '.';

const menus: IMenu[] = [
  {
    id: 1,
    title: 'title 1',
    icon: <FaHome />,
  },
  {
    id: 2,
    title: 'title 2',
    icon: <FaHome />,
  },
];
const padding = '0';
const iconWidth = '2rem';
const isCollapsed = true;
const isMobile = false;

describe('ToggleButton', () => {
  it('should render title', async () => {
    const props = { menus, padding, iconWidth, isCollapsed, isMobile };
    render(<MenuItemList {...props} />);
    menus.forEach((menu) => {
      expect(screen.getByText(menu.title)).toBeTruthy();
    });
  });
});
