import app from "./config";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

const db = getFirestore(app);

export const getProducts = async () => {
    let products: Array<{}> = [];
    const res = await getDocs(collection(db, "products"));
    products = res.docs.map((doc) => doc.data());
    return products;
};

export default db;
