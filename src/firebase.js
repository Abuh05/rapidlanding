import firebase from  "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDmfxY8YKCOnrHmjqoe9gE95Orr3_3A570",
    authDomain: "rapidmedicare-8ced9.firebaseapp.com",
    projectId: "rapidmedicare-8ced9",
    storageBucket: "rapidmedicare-8ced9.appspot.com",
    messagingSenderId: "158530739668",
    appId: "1:158530739668:web:bf7901f9a1303684d4ca41"
  
})

var db = firebaseApp.firestore();

export { db };
