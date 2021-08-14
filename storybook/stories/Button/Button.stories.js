import React from 'react';

import {action} from '@storybook/addon-actions';
import {text, object} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import {Text} from 'react-native';
const label = 'Styles';

// import Button from '.';
import Button from '../../../src/components/Button/Button';

const defaultValue = {
  padding: 10,
  backgroundColor: 'blue',
  borderRadius: 10,
};

storiesOf('Test/Button', module).add('default', () => {
  const style = object(label, defaultValue);
  const _text = text('Button Text', 'Press Me');
  const onPress = action('tapped-default');
  const props = {
    style,
    onPress,
  };
  return (
    <Button {...props}>
      <Text>{_text}</Text>
    </Button>
  );
});

// export default {
//   title: 'Test/Button',
//   component: Button,
//   argTypes: {
//     backgroundColor: {control: 'color'},
//   },
// };

// const Template = args => <Button {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };
