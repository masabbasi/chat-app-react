import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyCo0SAWEf5d8Wf09DC6BrjMSy0kbkJvIWo",
  authDomain: "chat-app-ea470.firebaseapp.com",
  projectId: "chat-app-ea470",
  storageBucket: "chat-app-ea470.appspot.com",
  messagingSenderId: "271953442876",
  appId: "1:271953442876:web:b64debfb5b4c693cf86b39"
}).auth();