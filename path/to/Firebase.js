import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAEyOtwIaSg1RHitS3GKmv6HyAkHWvGPb8",
  authDomain: "software-bf897.firebaseapp.com",
  databaseURL: "https://software-bf897-default-rtdb.firebaseio.com",
    projectId: "software-bf897",
    storageBucket: "software-bf897.appspot.com",
    messagingSenderId: "778068301661",
    appId: "1:778068301661:web:37be5a563deb4eed637ab4",
    measurementId: "G-0PHKRS9EBS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

class BoxButtonSignup {
  signup() {
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm password').value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const database_ref = ref(database);
        const user_data = {
          email: email,
          contact: contact,
          username: username,
          password: password,
          last_login: Date.now()
        };
        set(ref(database, 'user/' + user.uid), user_data);
        alert('User created!!');
      })
      .catch((error) => {
        // Handle error here
      });
  }
}

const boxButtonSignup = new BoxButtonSignup();

document.querySelector(".boxButtonSignup").addEventListener("click", function () {
  boxButtonSignup.signup();
});
