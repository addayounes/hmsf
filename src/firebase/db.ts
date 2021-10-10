import app from "./config";
import { getFirestore, collection, getDocs, getDoc, doc, addDoc } from "firebase/firestore";
import { CollectionReference, DocumentData, DocumentReference } from "firebase/firestore";

type DOC = DocumentReference<DocumentData>;
type COLL = CollectionReference<DocumentData>;

const db = getFirestore(app);
const flowersCollection: COLL = collection(db, "products");
const blogsCollection: COLL = collection(db, "blogs");

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

export const fetchBlogs = async () => {
    let blogs: Array<{}> = [];

    const res = await getDocs(blogsCollection);

    blogs = res.docs.map((doc) => doc.data());

    return blogs;
};

export const addFlowers = async (blog: Object) => {
    await addDoc(blogsCollection, blog);
};

export default db;
