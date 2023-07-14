import { AiOutlineClose, AiOutlineMenu, AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';

import { useWindowSize } from '../../../hooks';
import { IMenu } from '../../../models/menu';
import { DeskTopMenu } from '../DeskTopMenu';
import { MobileMenu } from '../MobileMenu';

const COLOR = 'white';
const BACKGROUND_COLOR = '#212121';
const MIN_WIDTH = '2.25rem';
const MAX_WIDTH = '12rem';
const PADDING = '0.5em';
const FONT_SIZE = '1rem';
const TOGGLE_ICON_SIZE = '1.25rem';

interface MenuProps {
  menus: IMenu[];
}

export const Menu: React.FC<MenuProps> = ({ menus }) => {
  const { isMobile } = useWindowSize();
  return isMobile ? (
    <MobileMenu
      menus={menus}
      backgroundColor={BACKGROUND_COLOR}
      color={COLOR}
      minWidth={MIN_WIDTH}
      maxWidth={MAX_WIDTH}
      padding={PADDING}
      fontSize={FONT_SIZE}
      toggleIconSize={TOGGLE_ICON_SIZE}
      toggleIconCollapsed={<AiOutlineClose />}
      toggleIconExpanded={<AiOutlineMenu />}
    />
  ) : (
    <DeskTopMenu
      menus={menus}
      backgroundColor={BACKGROUND_COLOR}
      color={COLOR}
      minWidth={MIN_WIDTH}
      maxWidth={MAX_WIDTH}
      padding={PADDING}
      fontSize={FONT_SIZE}
      toggleIconSize={TOGGLE_ICON_SIZE}
      toggleIconCollapsed={<AiOutlineMenuFold />}
      toggleIconExpanded={<AiOutlineMenuUnfold />}
    />
  );
};
