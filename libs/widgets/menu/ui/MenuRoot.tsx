import { ComponentPropsWithoutRef } from 'react';
import { IMenuSection } from '../types/Menu.interface';
import MenuSection from './MenuSection';

interface MenuRootProps extends ComponentPropsWithoutRef<'nav'> {
  data?: IMenuSection[];
}

const GeneratedMenu = ({ data }: { data: IMenuSection[] }) => {
  const getClassName = (index: number) => {
    return index === 0 ? undefined : 'border-top border-neutral-300';
  };

  return (
    <>
      {data.map((x, index) => (
        <MenuSection
          key={index}
          data={x}
          className={getClassName(index)}
        />
      ))}
    </>
  );
};

export default function MenuRoot({ data, children, ...rest }: MenuRootProps) {
  return (
    <nav {...rest}>
      {data && <GeneratedMenu data={data} />}
      {children}
    </nav>
  );
}
