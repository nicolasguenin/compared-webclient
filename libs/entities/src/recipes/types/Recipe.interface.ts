export interface IRecipe {
  createdAt: string;
  name: string;
  steps: string[];
  uuid: string;
}

export type IRecipes = IRecipe[];
