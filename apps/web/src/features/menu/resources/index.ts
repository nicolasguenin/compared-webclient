import { IMenuGroup } from '@cpd/widgets/menu/types/Menu.interface';
import { recipes, vegan, vegetarian, worldCooking } from './categories';

const resources: Record<string, IMenuGroup> = {
  recipes,
  vegan,
  vegetarian,
  'world-cooking': worldCooking,
};

export default resources;
