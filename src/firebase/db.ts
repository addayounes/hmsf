import app from "./config";
import { getFirestore, collection, getDocs, getDoc, doc, addDoc } from "firebase/firestore";
import { CollectionReference, DocumentData, DocumentReference } from "firebase/firestore";
import { ProductCardProps } from "../components/ProductCard/ProductCard";

type DOC = DocumentReference<DocumentData>;
type COLL = CollectionReference<DocumentData>;
type FLOWER = ProductCardProps["product"];

const db = getFirestore(app);
const flowersCollection: COLL = collection(db, "products");

export const getProducts = async () => {
    let products: Array<{}> = [];

    const res = await getDocs(flowersCollection);

    products = res.docs.map((doc) => doc.data());

    return products;
};

export const getProductDetails = async (id: string) => {
    let product: {} = {};

    const targetDoc: DOC = doc(db, "products", id);
    const res = await getDoc(targetDoc);

    if (res.exists()) product = res.data();
    else return;

    return product;
};

export const addFlowers = async (flower: Object) => {
    await addDoc(flowersCollection, flower);
};

export default db;
