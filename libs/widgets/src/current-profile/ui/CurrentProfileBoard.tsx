'use client';

import { useCurrentUser } from '@cpd/entities/src/currentUser';
import CurrentUserBoardSkeleton from '@cpd/entities/src/currentUser/ui/CurrentUserBoardSkeleton';
import { Box, Button, Text, useToast } from '@cpd/ui';
import React, {
  ComponentPropsWithoutRef,
  ReactNode,
  useState,
  lazy,
} from 'react';

const CurrentUserBoardUpdate = lazy(
  () => import('@cpd/entities/src/currentUser/ui/CurrentUserBoardUpdate')
);

const CurrentUserBoard = lazy(
  () => import('@cpd/entities/src/currentUser/ui/CurrentUserBoard')
);

const ControlContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      borderTop
      borderColor={'neutral-300'}
      flex
      gap={2}
      marginTop={'0-5'}
      paddingTop={'0-5'}
    >
      {children}
    </Box>
  );
};

const CurrentProfileBoard = ({
  children,
  ...rest
}: ComponentPropsWithoutRef<'div'>) => {
  const [isEditable, setIsEditable] = useState(false);

  const { data: currentUser, isLoading } = useCurrentUser();
  const { success: showToast } = useToast();

  const onUpdate = () => {
    setIsEditable(false);
    showToast('Your information have been updated.');
  };

  const getBoardRender = () => {
    if (isLoading) {
      return <CurrentUserBoardSkeleton />;
    }
    if (currentUser) {
      if (!isEditable) {
        return (
          <>
            <CurrentUserBoard />
            <ControlContainer>
              <Button
                className={'pl-0'}
                link
                onClick={() => setIsEditable(true)}
              >
                Edit
              </Button>
            </ControlContainer>
          </>
        );
      } else {
        return (
          <CurrentUserBoardUpdate
            cancel={() => setIsEditable(false)}
            success={() => onUpdate()}
          />
        );
      }
    }
    return (
      <Text>Oops, an error occurred when retrieving your information.</Text>
    );
  };

  return (
    <>
      <Box
        size={1200}
        {...rest}
        wrapper
      >
        {children}
        {getBoardRender()}
      </Box>
    </>
  );
};

export default CurrentProfileBoard;
