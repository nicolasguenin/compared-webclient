import { IMenuSection } from '../types/Menu.interface';

export default function createMenuSection(
  payload: Partial<IMenuSection> = {}
): IMenuSection {
  const { items, ...rest } = payload;

  return {
    type: 'section',
    items: items || [],
    ...rest,
  };
}
