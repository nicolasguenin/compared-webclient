/**
 * HOC based on React error boundary which show Error UI
 */

import { Box, Text } from '@cpd/ui';
import { ComponentType } from 'react';
import { withErrorBoundary } from 'react-error-boundary';

const FallbackRender = ({ error }: { error: any }) => {
  return (
    <Box
      paddingTop={'0-5'}
      bgColor={'danger'}
      rounded={'sm'}
      className={'overflow-hidden'}
    >
      <Text
        padding={'0-75'}
        paddingBottom={1}
        margin={0}
        bgColor={'danger-100'}
        weight={600}
        color={'danger'}
      >
        {error.response?.data?.message || error.message}
      </Text>
    </Box>
  );
};

export default function withError<T>(WrappedComponent: ComponentType<T>) {
  return withErrorBoundary(WrappedComponent, {
    fallbackRender: FallbackRender,
  });
}
