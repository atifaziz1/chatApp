import React from 'react';
import {Image} from 'react-native';

const MyImage = ({imageUri, style}) => {
  return (
    <Image
      style={style}
      source={{
        uri: imageUri,
      }}
    />
  );
};

export default MyImage;
