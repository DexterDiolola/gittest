import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
	apiKey: "AIzaSyB0-F8McKXH3hairS58z-rZIxSuoo8w9g8",
	authDomain: "poswiz-90d23.firebaseapp.com",
	databaseURL: "https://poswiz-90d23.firebaseio.com",
	projectId: "poswiz-90d23",
	storageBucket: "poswiz-90d23.appspot.com",
	messagingSenderId: "817085896264",
	appId: "1:817085896264:web:6c1d916966096c85e46a7d",
	measurementId: "G-R5JJXFPXJS"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({timestampsInSnapshots : true});

export default firebase;