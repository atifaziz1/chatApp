import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';

// const Button = ({onPress, style, children}) => {
//   return (
//     <View style={{flexWrap: 'wrap', margin: 10}}>
//       <TouchableOpacity style={style} onPress={onPress}>
//         <Text style={{color: 'white'}}>{children}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

const Button = ({props, children}) => {
  return (
    <View style={{flexWrap: 'wrap', margin: 10}}>
      <TouchableOpacity
        style={{backgroundColor: 'green'}}
        onPress={() => {
          console.log('=-=-=-');
        }}>
        <Text style={{color: 'white'}}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
