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
  backgroundColorExpanded: string;
  colorExpanded: string;
  backgroundColorCollapsed: string;
  colorCollapsed: string;
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
  colorExpanded,
  backgroundColorExpanded,
  colorCollapsed,
  backgroundColorCollapsed,
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
      $color={isCollapsed ? colorCollapsed : colorExpanded}
      $backgroundColor={isCollapsed ? backgroundColorCollapsed : backgroundColorExpanded}
      $minWidth={minWidth}
      $maxWidth={maxWidth}
      $padding={padding}
      className={isCollapsed ? 'collapsed' : 'expanded'}
    >
      <Ul>
        <ToggleButton
          color={isCollapsed ? colorCollapsed : colorExpanded}
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
