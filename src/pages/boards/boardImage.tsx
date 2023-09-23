import React, {useMemo} from 'react';
import {Image, ImageProps} from 'react-native';
import {importAll} from 'src/utils';

export type IBoardImage = {
  coverImage: string;
} & Omit<ImageProps, 'source'>;

export const BoardImage: React.FC<IBoardImage> = React.memo(
  ({coverImage, ...imageProps}) => {
    const images = importAll(
      require.context('../../assets/images/boardsImage', false, /\.jpg/),
    );

    const generateUrl = useMemo(() => {
      return Image.resolveAssetSource(images[coverImage]).uri;
    }, [coverImage, images]);

    return <Image source={{uri: generateUrl}} {...imageProps} />;
  },
);
