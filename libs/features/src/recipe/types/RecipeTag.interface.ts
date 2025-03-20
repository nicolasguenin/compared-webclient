export interface IRecipeTag {
  id: number;
  icon: 'gluten-free' | 'vegan' | 'vegetarian';
  name: string;
}

export type IRecipeTags = IRecipeTag[];
