import cookies from 'js-cookie'
import styles from '../components/Default/login.module.css';
import { useEffect, useState } from 'react';

var md5 = require('md5');



export default function GirisYap(ls){
    const l = cookies.get('login');
    const d =cookies.get('durum');
    const [ll,setl]=useState("x");
    useEffect(()=>{
        
        if(ll=="x"){

        }else if(ll=="0"){

        }else if(ll=="1"){
            window.location.href='/';
        }
    })
    return(
        
        <div>
                <div className={styles.login}>
                    <input id="txtemail" type="email" placeholder="E-posta:" className={styles.inputlgn} />
                    <input id="txtsifre" type="password" placeholder="Şifre:" className={styles.inputlgn} />
                    <button className={styles.btnlogin} onClick={btngirisclick}>
                        Giriş Yap
                    </button>
                    <div className={styles.foot}>
                        <p className={styles.a1} onClick={uyeolc}>Üye Ol</p>
                        <p className={styles.a2}>Şifremi Unuttum</p>
                    </div>
                </div>
        </div>
    )
    async function btngirisclick(){
        let e = document.getElementById("txtemail").value;
        let s =document.getElementById("txtsifre").value;
        s=md5(s);
        const log = await fetch('./api/logincheck',{
            method:'POST',
            header:{'Content-Type':'application/json'},
            body:JSON.stringify({
                uemil:e,
                upass:s
            })
        });
        const ls = await log.json();
        const lng=ls.map(l=>l.durum);

        if(lng=="1"){
            const id = ls.map(l=>l.id);
            const ono =ls.map(l=>l.ono);
            const uni=ls.map(l=>l.uni);
            const sinif=ls.map(l=>l.sinif);
            const em=ls.map(l=>l.email);
            const sf=ls.map(l=>l.sifre);
            const as = ls.map(l=>l.adsoyad);
            cookies.set("login","1",{expires:24*90});
            cookies.set("id",id,{expires:24*90});
            cookies.set("email",em,{expires:24*90});
            cookies.set("pass",sf,{expires:24*90});
            cookies.set("sinif",sinif,{expires:24*90});
            cookies.set("uni",uni,{expires:24*90});
            cookies.set("ono",ono,{expires:24*90});
            cookies.set("adsoyad",as,{expires:24*90});
            setl(ls.map(l=>l.durum));
        }

        return{
            props:{ls}
        }
    }
    function uyeolc() {
        window.location.href='/uyeol';
    }

}



