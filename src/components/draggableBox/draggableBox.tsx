import React, {useRef} from 'react';
import {Animated, PanResponder} from 'react-native';

export type IDraggableBoxProps = {
  children: React.ReactNode;
};

export const DraggableBox: React.FC<IDraggableBoxProps> = React.memo(
  ({children}) => {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
      PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
        onPanResponderRelease: () => {
          pan.extractOffset();
        },
      }),
    );

    return (
      <Animated.View
        style={{
          transform: [{translateX: pan.x}, {translateY: pan.y}],
          zIndex: 47563874568,
        }}
        {...panResponder.current.panHandlers}>
        {children}
      </Animated.View>
    );
  },
);
