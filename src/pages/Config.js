import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD8V3hqvmMliE23OPMBsxe0Aay14M2jPAc",
  authDomain: "shoppify-907e8.firebaseapp.com",
  projectId: "shoppify-907e8",
  storageBucket: "shoppify-907e8.appspot.com",
  messagingSenderId: "216004263835",
  appId: "1:216004263835:web:f730536968c2b2593beb3e",
  measurementId: "G-S3GKG1ZPBQ"
};


const app = initializeApp(firebaseConfig);
 export const database = getAuth(app)
