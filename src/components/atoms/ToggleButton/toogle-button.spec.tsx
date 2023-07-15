import { render } from '@testing-library/react';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';

import { ToggleButton } from '.';

const size = '1rem';
const collapsed = 'collapsed';
const expanded = 'expanded';
const iconExpanded = <AiOutlineMenuUnfold className={expanded} />;
const iconCollapsed = <AiOutlineMenuFold className={collapsed} />;
const color = 'black';

describe('ToggleButton', () => {
  it('should render collapsed icon if isCollapsed is undefined', () => {
    const props = { size, iconExpanded, iconCollapsed, color, isCollapsed: undefined };
    const { container } = render(<ToggleButton {...props} />);
    expect(container.outerHTML.includes(collapsed)).toBeTruthy();
  });

  it('should render collapsed icon if isCollapsed is false', () => {
    const props = { size, iconExpanded, iconCollapsed, color, isCollapsed: false };
    const { container } = render(<ToggleButton {...props} />);
    expect(container.outerHTML.includes(collapsed)).toBeTruthy();
  });

  it('should render expanded icon if isCollapsed is true', () => {
    const props = { size, iconExpanded, iconCollapsed, color, isCollapsed: true };
    const { container } = render(<ToggleButton {...props} />);
    expect(container.outerHTML.includes(expanded)).toBeTruthy();
  });
});
