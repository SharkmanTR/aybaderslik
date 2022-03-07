import { initializeApp } from "firebase/app";
import {getFirestore,collection,doc,addDoc,setDoc,getDoc, query,where,updateDoc} from "firebase/firestore";
import cookies from 'js-cookie';

const firebaseConfig = {
    apiKey: "AIzaSyDFD4w7KuEv3ym_Y8Hlij1PDzNL0hqJWzc",
    authDomain: "aybaderslikdb.firebaseapp.com",
    projectId: "aybaderslikdb",
    storageBucket: "aybaderslikdb.appspot.com",
    messagingSenderId: "187871617678",
    appId: "1:187871617678:web:13ca7665558e15f4875fdf",
    measurementId: "G-QEVZ3W3G2Q"
};

const app=initializeApp(firebaseConfig);
const db = getFirestore(app);

async function DiyetFavFS({id,info}){
    const diyRef = doc(db,"diyetler",id);
    const diySnap = await getDoc(diyRef);
    const dat = diySnap.data();
    const docRef = await addDoc (collection(db,"ornekdiyetler"),dat);
    const upRef = await updateDoc(docRef,{
        info
    })
    alert("Diyet başarıyla örnek menülere eklenmiştir.")
}
export {DiyetFavFS}