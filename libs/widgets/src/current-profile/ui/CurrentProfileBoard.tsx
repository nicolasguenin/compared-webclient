'use client';

import {
  CurrentUserBoard,
  useCurrentUser,
} from '@cpd/entities/src/currentUser';
import CurrentUserBoardUpdate from '@cpd/entities/src/currentUser/ui/CurrentUserBoardUpdate';
import { Box, Button, Text, useToast } from '@cpd/ui';
import React, { ComponentPropsWithoutRef, ReactNode, useState } from 'react';

const ControlContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      borderTop
      borderColor={'neutral-300'}
      flex
      gap={2}
      marginTop={2}
      paddingTop={2}
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
      return <Text>Loading...</Text>;
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
  };

  return (
    <Box
      padding={2}
      highlighted
      rounded
      shadow
      size={1200}
      wrapper
      {...rest}
    >
      {children}
      {getBoardRender()}
    </Box>
  );
};

export default CurrentProfileBoard;
