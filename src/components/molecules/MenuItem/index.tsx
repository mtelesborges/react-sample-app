import { ReactElement } from 'react';
import { styled } from 'styled-components';

import { IconContainer, MenuTitle } from '../../atoms';

export const Li = styled.li<{ $minWidth: string }>`
  display: flex;
  align-items: center;

  height: 2rem;
  min-width: ${(props) => props.$minWidth};
`;

export const MenuItem: React.FC<{
  title: string;
  url?: string;
  icon: ReactElement;
  iconWidth: string;
  paddingLeft: string;
  isCollapsed?: boolean;
  isMobile?: boolean;
}> = ({ title, icon, iconWidth, paddingLeft, isCollapsed, isMobile }) => (
  <Li $minWidth={isMobile ? 'auto' : 'fit-content'}>
    <IconContainer width={iconWidth} icon={icon} tooltip={isCollapsed ? title : undefined} />
    <MenuTitle padding={`0 0 0 ${paddingLeft}`} isCollapsed={isCollapsed} title={title} />
  </Li>
);
