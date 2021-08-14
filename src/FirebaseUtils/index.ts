import firestore from '@react-native-firebase/firestore';

const firebaseInit = () => {
  //   firebase.initializeApp({
  //     apiKey: 'AIzaSyDvSMYgcnelA910qQtiw0bXSZ0rS_-kJys',
  //     authDomain: 'chatapp-2df74.firebaseapp.com',
  //     databaseURL: 'https://chatapp-2df74.firebaseio.com',
  //     projectId: 'chatapp-2df74',
  //     storageBucket: '',
  //     // messagingSenderId: '861166145757',
  //   });
};

const usersCollection = async () => {
  const a = await firestore()
    .collection('users')
    .get()
    .then(docs => {
      return docs.forEach(_doc => {
        console.log('==a3==', _doc._data);
        return _doc._data;
      });
    });

  return 'atif';
};

// interface Lengthy {
//   length: number;
// }
// const test = <T extends Lengthy>(arg: T): String => {
//   let descriptionText = 'there is no';
//   if (arg.length > 0) {
//     descriptionText = 'Got ' + arg.length + ' elements';
//   }

//   return descriptionText;
// };

// const test2 = <T extends object, U extends keyof T>(obj: T, key: U) => {
//   return obj[key];
// };

export {firebaseInit, usersCollection};
