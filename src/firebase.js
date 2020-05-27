import * as firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyArM_QxOERDFClTzjXD6TZXuCMp_8o19X8',
  authDomain: 'fb-capazy.firebaseapp.com',
  databaseURL: 'https://fb-capazy.firebaseio.com',
  projectId: 'fb-capazy',
  storageBucket: 'fb-capazy.appspot.com',
  messagingSenderId: '443272781718',
  appId: '1:443272781718:web:3caca735b2675a5a8cc7b7',
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
