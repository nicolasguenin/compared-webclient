import { IMenuGroup } from '../types/Menu.interface';

export default function createMenuSection(
  payload: Partial<IMenuGroup> = {}
): IMenuGroup {
  const { items, name, ...rest } = payload;

  return {
    type: 'group',
    name: name || '',
    items: items || [],
    ...rest,
  };
}
