import React from 'react';

export type ContextType = {
  isCreatingBoard: boolean;
  setIsCreatingBoard: (value: boolean) => void;
};

export default React.createContext<ContextType>({
  isCreatingBoard: false,
  setIsCreatingBoard: (value: boolean) => {},
});
