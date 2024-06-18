import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCi2istuf_u1B2oWUSlbLKFsTQ3n9oMLGU',
  authDomain: 'authentication-fa2f3.firebaseapp.com',
  projectId: 'authentication-fa2f3',
  storageBucket: 'authentication-fa2f3.appspot.com',
  messagingSenderId: '1047198038873',
  appId: '1:1047198038873:web:104ed5a04c216de47fea48',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
