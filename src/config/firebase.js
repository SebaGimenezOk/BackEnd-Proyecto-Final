import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseDb = getFirestore(firebaseApp);

const firebaseConfig = {
    apiKey: "AIzaSyDSnC5MeQT77vkNmbZZmDmJZklGTzGpCFI",
    authDomain: "rupert-6d8dd.firebaseapp.com",
    projectId: "rupert-6d8dd",
    storageBucket: "rupert-6d8dd.appspot.com",
    messagingSenderId: "885801226170",
    appId: "1:885801226170:web:c4a759d3090a3c63a95783"
};

const app = initializeApp(firebaseConfig);
export default firebaseDb;

