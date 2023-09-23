import React, {useMemo} from 'react';
import {Image, ImageProps} from 'react-native';

export type IBoardImage = {
  boardsLength: number;
} & Omit<ImageProps, 'source'>;

export const BoardImage: React.FC<IBoardImage> = React.memo(
  ({boardsLength, ...imageProps}) => {
    const generateUrl = useMemo(() => {
      const number =
        String(boardsLength)[0] === '0' ? 1 : String(boardsLength)[0];

      const url: string = `/src/assets/images/boardsImage/todo${number}.png`;
      console.log('url = ');
      console.log(url);

      return url;
    }, [boardsLength]);

    return <Image source={{uri: generateUrl}} {...imageProps} />;
  },
);
