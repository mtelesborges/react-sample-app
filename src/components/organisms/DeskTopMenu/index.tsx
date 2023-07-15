import { ReactElement, useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { IMenu } from '../../../models';
import { ToggleButton } from '../../atoms';
import { Ul } from '../../atoms/Ul';
import { MenuItemList } from '../../molecules';

const Nav = styled.nav<{
  $color: string;
  $backgroundColor: string;
  $fontSize: string;
  $minWidth: string;
  $maxWidth: string;
  $padding: string;
}>`
  color: ${(props) => props.$color};
  background-color: ${(props) => props.$backgroundColor};
  font-size: ${(props) => props.$fontSize};

  padding: ${(props) => props.$padding};
  min-height: 100vh;
  max-width: ${(props) => props.$minWidth};

  transition: max-width 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

  &.expanded {
    max-width: ${(props) => props.$maxWidth} !important;
  }
`;

interface DeskTopMenuProps {
  menus: IMenu[];
  backgroundColor: string;
  color: string;
  padding: string;
  minWidth: string;
  maxWidth: string;
  fontSize: string;
  toggleIconSize: string;
  toggleIconExpanded: ReactElement;
  toggleIconCollapsed: ReactElement;
}

export const DeskTopMenu: React.FC<DeskTopMenuProps> = ({
  menus,
  color,
  backgroundColor,
  padding,
  minWidth,
  maxWidth,
  fontSize,
  toggleIconSize,
  toggleIconExpanded,
  toggleIconCollapsed,
}) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const [iconWidth, setIconWidth] = useState<string>('');

  useEffect(() => setIconWidth(`calc(${minWidth} - (2 * ${padding}))`), [minWidth, padding]);

  const handleToggleClick = () => setIsCollapsed(!isCollapsed);

  return (
    <Nav
      $fontSize={fontSize}
      $color={color}
      $backgroundColor={backgroundColor}
      $minWidth={minWidth}
      $maxWidth={maxWidth}
      $padding={padding}
      className={isCollapsed ? 'collapsed' : 'expanded'}
    >
      <Ul>
        <ToggleButton
          color={color}
          size={toggleIconSize}
          isCollapsed={isCollapsed}
          iconExpanded={toggleIconExpanded}
          iconCollapsed={toggleIconCollapsed}
          onClick={handleToggleClick}
        />
        <MenuItemList
          menus={menus}
          iconWidth={iconWidth}
          isCollapsed={isCollapsed}
          padding={padding}
          isMobile={false}
        />
      </Ul>
    </Nav>
  );
};
