import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Configuración de Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyAg-EMLmHNVdtA3ZCRZd1LayNtUYPbanHM",
  authDomain: "accesoriosmoto-9c5ad.firebaseapp.com",
  databaseURL: "https://accesoriosmoto-9c5ad-default-rtdb.firebaseio.com",
  projectId: "accesoriosmoto-9c5ad",
  storageBucket: "accesoriosmoto-9c5ad.appspot.com",
  messagingSenderId: "690121793311",
  appId: "1:690121793311:web:2749e33335059666de1a2a",
};

// Inicialización de Firebase
export const app = initializeApp(firebaseConfig);
export const firebaseDataBase = getDatabase(app);
