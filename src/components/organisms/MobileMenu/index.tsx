import { ReactElement, useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { IMenu } from '../../../models/menu';
import { ToggleButton } from '../../atoms/ToggleButton';
import { Ul } from '../../atoms/Ul';
import { MenuItemList } from '../../molecules/MenuItemList';

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
  height: 100vh;

  .expanded {
    width: 100vw !important;
  }
`;

interface MobileMenuProps {
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

export const MobileMenu: React.FC<MobileMenuProps> = ({
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
  const [navState, setNavState] = useState<string>('');
  const [navBackgroundColor, setNavBackgroundColor] = useState<string>('');
  const [toggleButtonColor, setToggleButtonColor] = useState<string>('');

  useEffect(() => setIconWidth(`calc(${minWidth} - (2 * ${padding}))`), [minWidth, padding]);
  useEffect(() => {
    setNavBackgroundColor(isCollapsed ? color : backgroundColor);
    setToggleButtonColor(isCollapsed ? backgroundColor : color);
    setNavState(isCollapsed ? 'collapsed' : 'expanded');
  }, [isCollapsed, color, backgroundColor]);

  const handleToggleClick = () => setIsCollapsed(!isCollapsed);

  return (
    <Nav
      $fontSize={fontSize}
      $color={color}
      $backgroundColor={navBackgroundColor}
      $minWidth={minWidth}
      $maxWidth={maxWidth}
      $padding={padding}
      className={navState}
    >
      <Ul>
        <ToggleButton
          color={toggleButtonColor}
          size={toggleIconSize}
          isCollapsed={isCollapsed}
          iconExpanded={toggleIconExpanded}
          iconCollapsed={toggleIconCollapsed}
          onClick={handleToggleClick}
        />
        {!isCollapsed && (
          <MenuItemList
            menus={menus}
            iconWidth={iconWidth}
            isCollapsed={isCollapsed}
            padding={padding}
            isMobile={true}
          />
        )}
      </Ul>
    </Nav>
  );
};
