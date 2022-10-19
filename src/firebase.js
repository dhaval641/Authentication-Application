import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAM3DyfYVTrkE7YPRfrbgA0OB12vOzWwmU",
  authDomain: "authen-app-363522.firebaseapp.com",
  projectId: "authen-app-363522",
  storageBucket: "authen-app-363522.appspot.com",
  messagingSenderId: "411578301421",
  appId: "1:411578301421:web:7e594394ef456d309205e4",
  measurementId: "G-77QN3CD4YG",
  databaseURL: "https://authen-app-363522-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export default app;
