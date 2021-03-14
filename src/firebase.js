  import firebase from "firebase";
  
  const firebaseConfig = {
    apiKey: "AIzaSyDBsrsXDhagALqRo-dm7c_RIIaCvMd5VYw",
    authDomain: "idobata-with-nagatak.firebaseapp.com",
    projectId: "idobata-with-nagatak",
    storageBucket: "idobata-with-nagatak.appspot.com",
    messagingSenderId: "832346772368",
    appId: "1:832346772368:web:4c7de45c733d225fb59915"
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const messageRef = database.ref('messages');

  export const pushMessage = ({name, text}) =>{
      messageRef.push({name, text});
  };