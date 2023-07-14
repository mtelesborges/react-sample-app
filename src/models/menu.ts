import { ReactElement } from 'react';

export interface IMenu {
  id: number;
  title: string;
  url?: string;
  icon: ReactElement;
}
