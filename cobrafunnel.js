import {initializeApp} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyBq1gWVZFLNPS4KmdcYUCQ1OQ-9buLyF3E",
    authDomain: "cobrafunnel.firebaseapp.com",
    databaseURL: "https://cobrafunnel-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cobrafunnel",
    storageBucket: "cobrafunnel.appspot.com",
    messagingSenderId: "65623425643",
    appId: "1:65623425643:web:99afba5ae374b10a1d672e"
};


const app = initializeApp(firebaseConfig);
var desktopMAIL = document.getElementById("mailbutton");

import {getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

const database = getDatabase();

var inputId;
var submitButton;

function sendEmail(xid, yid) {
    var mailko = document.getElementById(xid);
    var gumbic = document.getElementById(yid);
    const d = new Date();
    var datum = d.getFullYear().toString() + d.getMonth().toString() + d.getDate().toString() + d.getHours().toString() + d.getMinutes().toString() + d.getSeconds().toString();    
    set(ref(database, 'emails/' + datum), {
        email: mailko.value
    }).then(()=>{
        gumbic.innerHTML = "Success!";
        mailko.value = "";
    }).catch((error) => {
        gumbic.style.background = "#ff3f38";
        mailko.value = "";
        gumbic.innerHTML = "An error has occured.";
    })
}

if (inputId && submitButton == null) {
    inputId = "email_input";
    submitButton = "mailbutton";
}

desktopMAIL.addEventListener('click', () => sendEmail(inputId, submitButton));
