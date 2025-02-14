import { IIcon } from '@cpd/ui/src/types';

export enum MenuType {
  group = 'group',
  link = 'link',
  section = 'section',
}

export type IMenuTag = {
  name: string;
};

export type IMenuIcon = {
  name: IIcon;
};

export type IMenuItem = {
  icon?: IMenuIcon;
  name: string;
  tags?: IMenuTag[];
  type: MenuType.link;
  url: string;
};

export type IMenuGroup = {
  name: string;
  icon?: IMenuIcon;
  items: IMenuItem[];
  tags?: IMenuTag[];
  type: MenuType.group;
};

export type IMenuSection = {
  name?: string;
  icon?: IMenuIcon;
  items: (IMenuGroup | IMenuItem)[];
  tags?: IMenuTag[];
  type: MenuType.section;
};
