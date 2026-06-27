// ===============================
// Next Hire India - Firebase
// ===============================

// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getDatabase,
    ref,
    push,
    set,
    get,
    child,
    remove,
    update
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";


// Firebase Config
const firebaseConfig = {

    apiKey: "AIzaSyBSVWBUsCm-gUjGrpqDcVDJOPezWM9y9gQ",

    authDomain: "next-hire-india.firebaseapp.com",

    databaseURL: "https://next-hire-india-default-rtdb.asia-southeast1.firebasedatabase.app",

    projectId: "next-hire-india",

    storageBucket: "next-hire-india.firebasestorage.app",

    messagingSenderId: "408453370854",

    appId: "1:408453370854:web:4a3ca3b9b312cc9669bc27",

    measurementId: "G-7YV7H965QS"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);


// Export
export {
    database,
    ref,
    push,
    set,
    get,
    child,
    remove,
    update
};
