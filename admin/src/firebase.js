import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'my api key',
  authDomain: 'domain',
  projectId: 'id here',
  storageBucket: 'bucket',
  messagingSenderId: '12',
  appId: '123'
}

export const app = initializeApp(firebaseConfig)
