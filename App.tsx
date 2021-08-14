// import React, {useState, useCallback, useEffect} from 'react';

// import {SafeAreaView, StyleSheet, Text} from 'react-native';
// import {GiftedChat} from 'react-native-gifted-chat';
// import firestore from '@react-native-firebase/firestore';
// import useFetch from './src/FirebaseUtils/services/FilmsArray';

// export {default} from './storybook';

// const App = () => {
//   const [messages, setMessages] = useState([]);
//   const {loading, data, error} = useFetch({
//     url: 'https://reactnative.dev/movies.json',
//     method: 'get',
//   });
//   if (loading) {
//     console.log('status of loading = ', loading);
//   }
//   if (data) {
//     console.log('Having results = ', data);
//   }

//   if (error) {
//     console.log('!!!ooppsss!!!', error);
//   }
//   useEffect(() => {
//     const getData = async () => {
//       firestore()
//         .collection('users')
//         .get()
//         .then(docs => {
//           docs.forEach(_doc => {
//             console.log('==a3==', _doc._data);
//           });
//         });
//     };
//     getData();
//     setMessages([
//       {
//         _id: 1,
//         text: 'Hello developer',
//         createdAt: new Date(),
//         user: {
//           _id: 2,
//           name: 'React Native',
//           avatar: 'https://placeimg.com/140/140/any',
//         },
//       },
//     ]);
//   }, []);

//   const onSend = useCallback((messages = []) => {
//     setMessages(previousMessages =>
//       GiftedChat.append(previousMessages, messages),
//     );
//   }, []);

//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
//       <Text style={{padding: 10, backgroundColor: '#d5d5d5', color: '#000000'}}>
//         This is testing text
//       </Text>

//       <GiftedChat
//         messages={messages}
//         onSend={messages => onSend(messages)}
//         user={{
//           _id: 1,
//         }}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

export {default} from './storybook';
