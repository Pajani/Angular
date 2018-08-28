importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');


firebase.initializeApp({

    "apiKey": "AIzaSyBZ6qq9OJbIKvYraCIOOGqNyp_19yBXm2o",
    "authDomain": "thandora-58cba.firebaseapp.com",
    "databaseURL": "https://thandora-58cba.firebaseio.com",
    "projectId": "thandora-58cba",
    "storageBucket": "thandora-58cba.appspot.com",
    "messagingSenderId": "391118300920"

});

const messaging = firebase.messaging();