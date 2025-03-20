import { IRecipeTags } from '@cpd/features/recipe';

export interface IRecipe {
  createdAt: string;
  name: string;
  steps: string[];
  tags?: IRecipeTags;
  uuid: string;
}
