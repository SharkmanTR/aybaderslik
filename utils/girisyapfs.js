import { initializeApp } from "firebase/app";
import {getFirestore,collection,query, where,limit, getDocs} from "firebase/firestore";
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



async function GirisYapFS(email,sifre) {
    const userRef = collection(db,"users");
    const q = query(userRef,where("email","==",email), where("sifre","==",sifre),limit(1));
    const uss = await getDocs(q);
    const l = uss.docs.length;
    if(l!=1){
        alert("Giriş bilgileriniz hatalı. Lütfen tekrar deneyiniz.")
    }else{
        const dat = uss.docs.map(doc=>doc.data());
        const durum = dat.map(doc=>doc.durum).toString();
        if(durum=="0"){
            alert("Hesabınızı henüz doğrulamadık. Bu doğrulamanın ardından sistemimizi kullanmaya başlayabilirsin. Bu doğrulama en fazla 24 saat sürmektedir.")
        }else if(durum=="1"){
            cookies.set("id",uss.docs.map(doc=>doc.id).toString(),{expires:24*90});
            cookies.set("adsoyad",dat.map(d=>d.adsoyad).toString(),{expires:24*90});
            cookies.set("uni",dat.map(d=>d.uni).toString(),{expires:24*90});
            cookies.set("durum",durum,{expires:24*90});
            cookies.set("ono",dat.map(d=>d.ono).toString(),{expires:24*90});
            cookies.set("email",dat.map(d=>d.email).toString(),{expires:24*90});
            cookies.set("pass",dat.map(d=>d.sifre).toString(),{expires:24*90});
            cookies.set("sinif",dat.map(d=>d.sinif).toString(),{expires:24*90});
            cookies.set("hoca",dat.map(d=>d.hoca).toString(),{expires:24*90});
            cookies.set("login","1",{expires:24*90});
            window.location.href="/";
        }
        
    }
}
export {GirisYapFS}