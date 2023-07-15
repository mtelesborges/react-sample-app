import { IMenu } from '../../../models';
import { MenuItem } from '../MenuItem';

interface MenuItemListProps {
  menus: IMenu[];
  padding: string;
  iconWidth: string;
  isCollapsed: boolean;
  isMobile: boolean;
}

export const MenuItemList: React.FC<MenuItemListProps> = ({ menus, padding, iconWidth, isCollapsed, isMobile }) =>
  menus.map((item) => (
    <MenuItem
      key={item.id}
      title={item.title}
      icon={item.icon}
      paddingLeft={padding}
      iconWidth={iconWidth}
      url={item.url}
      isCollapsed={isCollapsed}
      isMobile={isMobile}
    />
  ));
