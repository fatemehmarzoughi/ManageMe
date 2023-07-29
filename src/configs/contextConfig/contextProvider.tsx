import React, {ReactNode} from 'react';
import Context from './context';

export type IContextProviderStates = {
  isCreatingBoard: boolean;
};
export type IContextProviderProps = {
  children: ReactNode;
};

export default class ContextProvider extends React.PureComponent<
  IContextProviderProps,
  IContextProviderStates
> {
  constructor(props: IContextProviderProps) {
    super(props);
    this.state = {
      isCreatingBoard: false,
    };
  }

  override render(): React.ReactNode {
    return (
      <Context.Provider
        value={{
          /* -------------------------------- Rotation -------------------------------- */
          isCreatingBoard: this.state.isCreatingBoard,
          setIsCreatingBoard: (value: boolean) => {
            this.setState({
              isCreatingBoard: value,
            });
          },
        }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
