import { initializeApp } from "firebase/app";
import {getFirestore,collection,addDoc,setDoc} from "firebase/firestore";

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

async function UyeOlFS({email,xsifre,adsoyad,dtarihi,tel,tc,barkod,ono,paket,bitg,bita,bity,uni,sinif}){
    try {
        const docref= await addDoc(collection(db,"users"),{
            email,
            sifre:md5(xsifre),
            adsoyad,
            dtarihi,
            tel,
            tc,
            barkod,
            ono,
            paket,
            bitg,
            bita,
            bity,
            uni,
            sinif,
            hoca:"0",
            durum:"0"
        });
        alert("Merhaba "+ adsoyad+" sistemimize hoş geldin. Üyeliğin başarıyla gerçekleştir. Biz hesabını doğruladıktan sonra sistemimizi kullanmaya başlayabilirsin. Bu işlem en fazla 24 saat sürmektedir.")
        window.location.href="/girisyap";
    } catch (error) {
        alert("Hesabınızın oluşturulması esnasında bir hatayla karşılaşıldı. Lütfen daha sonra tekrar deneyiniz.")
    }
    
}
export {UyeOlFS}