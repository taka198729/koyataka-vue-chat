import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDjHXT3wMvtygt7R-B6dtVqq7-Qd81bfDg",
    authDomain: "vue-chat-51741.firebaseapp.com",
    projectId: "vue-chat-51741",
    storageBucket: "vue-chat-51741.appspot.com",
    messagingSenderId: "964510925725",
    appId: "1:964510925725:web:3723848165c571069b6574"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;