import { db } from "../config/firebase.js";

const collection = db.collection("products");

export const ProductModel = {
  getAll: async () => {
    const snapshot = await collection.get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  getById: async (id) => {
    const doc = await collection.doc(id).get();
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
  },

  create: async (data) => {
    const ref = await collection.add(data);
    return ref.id;
  },

  delete: async (id) => {
    await collection.doc(id).delete();
  }
};
