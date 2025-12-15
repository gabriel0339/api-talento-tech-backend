import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    "Configuración de credenciales usando una cuenta de servicio  cargada desde variables de entorno"
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),

    }),
  });
}

export const db = admin.firestore();;
