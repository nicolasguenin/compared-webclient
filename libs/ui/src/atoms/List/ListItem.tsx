import { type ComponentPropsWithoutRef } from 'react';

const ListItem = ({ ...rest }: ComponentPropsWithoutRef<'li'>) => {
  return <li {...rest} />;
};

export default ListItem;
