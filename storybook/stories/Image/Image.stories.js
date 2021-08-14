import React from 'react';
import {text, object} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import MyImage from '../../../src/components/MyImage';

const defaultValue = {
  width: 100,
  height: 100,
  borderRadius: 10,
};
storiesOf('Image', module).add('test', () => {
  return (
    <MyImage
      style={object('Style', defaultValue)}
      imageUri={text('uri', 'https://loremflickr.com/640/360')}
    />
  );
});
