import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.apiKey_key,
  authDomain: import.meta.env.authDomain_key,
  projectId: import.meta.env.projectId_key,
  storageBucket: import.meta.env.storageBucket_key,
  messagingSenderId: import.meta.env.messagingSenderId_key,
  appId: import.meta.env.appId_key,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
