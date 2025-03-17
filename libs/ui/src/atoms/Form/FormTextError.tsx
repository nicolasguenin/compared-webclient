import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Text } from '../Text';
import { Symbol } from '../Symbol';

interface FormTextErrorProps extends ComponentPropsWithoutRef<'p'> {
  error: string | string[];
}

function FormTextErrorContainer({ children }: { children: ReactNode }) {
  return (
    <Text
      marginTop={'0-5'}
      weight={600}
      color={'danger'}
      size={'tn'}
    >
      <Symbol
        name={'alert-circle'}
        size={20}
        className={'mr-0-25'}
      />
      {children}
    </Text>
  );
}

export default function FormTextError({ error }: FormTextErrorProps) {
  if (typeof error === 'string') {
    return <FormTextErrorContainer>{error}</FormTextErrorContainer>;
  }
  if (Array.isArray(error)) {
    return (
      <>
        {error.map((x, index) => (
          <FormTextErrorContainer key={index}>{x}</FormTextErrorContainer>
        ))}
      </>
    );
  }
  return null;
}
