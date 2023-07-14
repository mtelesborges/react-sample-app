import { useEffect, useState } from 'react';
import { FaUser, FaGear } from 'react-icons/fa6';
import { FaHome } from 'react-icons/fa';
import { IMenu } from '../models/menu';

export const useMenu = () => {
  const [menus, setMenus] = useState<IMenu[]>([]);

  // useEffect is used becouse in the near future this mocked data will be replaced by an api call
  useEffect(() => {
    const data: IMenu[] = [
      {
        id: 1,
        title: 'Home',
        url: '/home',
        icon: <FaHome />,
      },
      {
        id: 2,
        title: 'User',
        url: '/user',
        icon: <FaUser />,
      },
      {
        id: 3,
        title: 'Configuration',
        url: '/configuration',
        icon: <FaGear />,
      },
    ];
    setMenus(data);
  }, []);

  return menus;
};
