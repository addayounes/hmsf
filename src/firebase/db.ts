import app from "./config";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { CollectionReference, DocumentData } from "firebase/firestore";

const db = getFirestore(app);
const flowersCollection: CollectionReference<DocumentData> = collection(db, "products");

export const getProducts = async () => {
    let products: Array<{}> = [];

    const res = await getDocs(flowersCollection);

    products = res.docs.map((doc) => doc.data());

    return products;
};

export const addFlowers = async (flower: Object) => {
    await addDoc(flowersCollection, flower);
};

export default db;
