import { IIcon } from '@cpd/ui/src/types';

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
  type: 'link';
  url: string;
};

export type IMenuGroup = {
  name: string;
  icon?: IMenuIcon;
  items: IMenuItem[];
  tags?: IMenuTag[];
  type: 'group';
};

export type IMenuSection = {
  name?: string;
  icon?: IMenuIcon;
  items: IMenuGroup[];
  tags?: IMenuTag[];
  type: 'section';
};
