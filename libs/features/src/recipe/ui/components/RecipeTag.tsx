import { IRecipeTag } from '@cpd/features/recipe/types';
import { Tooltip } from '@cpd/ui';
import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

type RecipeTagProps = ComponentPropsWithoutRef<'svg'> &
  Pick<IRecipeTag, 'name' | 'icon'>;

const RecipeTag = ({ className, icon, name, ...rest }: RecipeTagProps) => {
  const href = `/images/recipe-tags-defs.svg#${icon}`;
  return (
    <>
      <Tooltip content={name}>
        <svg
          viewBox='0 0 24 24'
          className={clsx('icon icon-24', className)}
          {...rest}
        >
          <use href={href}></use>
        </svg>
      </Tooltip>
    </>
  );
};

export default RecipeTag;
