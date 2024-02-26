import axios from 'axios';
import firebase from 'firebase';
import 'firebase/messaging';

// const VAPID_PUBLIC_KEY = REACT_APP_VAPID_PUBLIC_KEY

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
//   measurementId: process.env.REACT_APP_measurementId
// };

const firebaseConfig = {
  apiKey: "AIzaSyB-8hjcLjl3lvMdpXF4eivjMVWknzaYNTY",
  authDomain: "fitme-27717.firebaseapp.com",
  projectId: "fitme-27717",
  storageBucket: "fitme-27717.appspot.com",
  messagingSenderId: "967812662416",
  appId: "1:967812662416:web:52bf6458209e09269f8415",
  measurementId: "G-B40JJ9611X"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

//메시지 처리 로직
// messaging.getToken({vapidKey: 'BB69S_1aMazsCEKfGZWi6xFOFHbRcQ_Xl43OhgMs_1Mka4SgVRbu0ZZiEC1o23EnxnMUhUh2k5s5qMlvvGVqa-0'}).then((currentToken) => {
//   if (currentToken) {
//     console.log('current token for client: ', currentToken);
//     // send token to server...
//     const data = new FormData();
//     data.append('title', "안녕");
//     data.append('body', "어쩔");
//     data.append('image_url', "123");
//     data.append('token',currentToken)
//     axios.post('http://192.168.0.104:5000/serviceWorker', data, {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(response => {
//       console.log(response.data);
//     })
//     .catch(err => {
//       console.log(err);
//     })

//   } else {
//     console.log('No registration token available. Request permission to generate one.');
//   }
// }).catch((err) => {
//   console.log('An error occurred while retrieving token. ', err);
// });

export { messaging };