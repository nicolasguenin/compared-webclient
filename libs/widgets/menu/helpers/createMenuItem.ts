import { IMenuItem } from '../types/Menu.interface';

export default function createMenuSection(
  payload: Partial<IMenuItem> = {}
): IMenuItem {
  const { name, url, ...rest } = payload;
  return {
    type: 'link',
    name: name || '',
    url: url || '',
    ...rest,
  };
}
