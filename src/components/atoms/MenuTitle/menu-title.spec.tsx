import { render, screen } from '@testing-library/react';

import { MenuTitle } from '.';

const title = 'Testing';
const collapsed = 'collapsed';
const expanded = 'expanded';

describe('MenuTitle', () => {
  it('should render title if isCollapsed is undefined', () => {
    const props = { title, isCollapsed: undefined };
    render(<MenuTitle {...props} />);
    const element = screen.getByText(title);
    expect(element).toBeDefined();
    expect(element.classList.contains(expanded)).toBeTruthy();
  });

  it('should render title if isCollapsed is false', () => {
    const props = { title, isCollapsed: false };
    render(<MenuTitle {...props} />);
    expect(screen.getByText(title)).toBeDefined();
    const element = screen.getByText(title);
    expect(element).toBeDefined();
    expect(element.classList.contains(expanded)).toBeTruthy();
  });

  it('should render title if isCollapsed is true', () => {
    const props = { title, isCollapsed: true };
    render(<MenuTitle {...props} />);
    const element = screen.getByText(title);
    expect(element).toBeDefined();
    expect(element.classList.contains(collapsed)).toBeTruthy();
  });
});
