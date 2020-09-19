import { ReactNode, ReactType } from 'react';

import { RouteProps } from 'react-router-dom';
export interface Route extends RouteProps {
  path: string;
  nested?: boolean;
  title?: string; // Used for sidebar links and dashboard title
  //   icon?: React.FC<SVGProps>; // Used for sidebar icon
  hideFromSidebar?: boolean;
  protected?: boolean;
}

export type Routes = {
  [key: string]: Route;
};
