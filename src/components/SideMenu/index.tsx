export type SideMenuModel = {
  name: string;
  url: string;
  icon?: string;
}

export const SideMenu = (menus: SideMenuModel[]) =>
  <nav>
    <ul>
      {
        menus.map(menu => {
          return (
            <li>{menu.name}</li>
          )
        })
      }
    </ul>
  </nav>
