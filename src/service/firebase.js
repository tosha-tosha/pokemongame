import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDndrpCN-Cr_CGStLXuVV8ap3Xi2T2pZwo",
    authDomain: "pokemongame-96bb1.firebaseapp.com",
    databaseURL: "https://pokemongame-96bb1-default-rtdb.firebaseio.com",
    projectId: "pokemongame-96bb1",
    storageBucket: "pokemongame-96bb1.appspot.com",
    messagingSenderId: "862336763116",
    appId: "1:862336763116:web:9d768535eb09e8616011c9"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = firebase.database();

export default database;
