import { initializeApp } from "firebase/app";
import {getFirestore,collection,addDoc,setDoc} from "firebase/firestore";
import moment from "moment";

var md5 =require('md5');

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


async function DefGonFS({ono,uni,dsut,dyysut,dyssut,det,dekm,dkbak,dseb,dmey,dyag,dytoh,ekcho,ekpro,ekyag,gcho,gpro,gyag,topkcal,kcho,kpro,kyag,ycho,ypro,yyag,osabah,oara1,oogle,oara2,oaksam,oara3,dm,vakaadi,hastaliklar,servis,info,bulgular,ilaclar}){
    const docRef = await addDoc(collection(db,"defterler"),{
        ono,uni,dsut,dyysut,dyssut,det,dekm,dkbak,dseb,dmey,dyag,dytoh,ekcho,ekpro,ekyag,gcho,gpro,gyag,topkcal,kcho,kpro,kyag,ycho,ypro,yyag,osabah,oara1,oogle,oara2,oaksam,oara3,vakaadi,hastaliklar,servis,info,bulgular,ilaclar,
        metre:dm,
        gun:moment().format('DD'),
        ay:moment().format('MM'),
        yil:moment().format('YYYY')
    })
    alert("Staj defteriniz başarıyla eklendi.")
}
export{DefGonFS}