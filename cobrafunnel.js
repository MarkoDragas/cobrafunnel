import {initializeApp} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";

        const firebaseConfig = {
            apiKey: "AIzaSyBQhdPZaIO22FtBBP4FXE2Av9ZRymOeeGY",
            authDomain: "tsumori-productivity.firebaseapp.com",
            databaseURL: "https://tsumori-productivity-default-rtdb.europe-west1.firebasedatabase.app",
            projectId: "tsumori-productivity",
            storageBucket: "tsumori-productivity.appspot.com",
            messagingSenderId: "500474751665",
            appId: "1:500474751665:web:df2710c97d85a94fd4d090",
            measurementId: "G-ST4X8228FJ"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        var desktopMAIL = document.getElementById("mailbutton");

        import {getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
        
        const database = getDatabase();

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
        
        desktopMAIL.addEventListener('click', () => sendEmail("email_input", "mailbutton"));