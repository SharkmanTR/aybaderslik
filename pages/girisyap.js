import cookies from 'js-cookie'
import styles from '../components/Default/login.module.css';
import { useEffect, useState } from 'react';
import Head from 'next/head';

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
                <Head>
                    <title>AYBA Derslik | Giriş Yap</title>
                    <link rel="shourtcut icon" href={`/ico/Default.ico`}></link>
                </Head>
                <div className={styles.login}>
                    <input id="txtemail" type="text" placeholder="E-posta" className={styles.inputlgn} />
                    <input id="txtsifre" type="password" placeholder="Şifre"  className={styles.inputlgn} />
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
        var e = document.getElementById("txtemail").value;
        var s =md5(document.getElementById("txtsifre").value);

        const log = await fetch('./api/logincheck',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                uemail:e,
                upass:s
            })
        });
        const res = await log.json();
        let lng=res.map(r=>r.durum);
        if(lng=="1"){
            const id = res.map(r=>r.id);
            const ono =res.map(r=>r.ono);
            const uni=res.map(r=>r.uni);
            const sinif=res.map(r=>r.sinif);
            const em=res.map(r=>r.email);
            const sf=res.map(r=>r.sifre);
            const as = res.map(r=>r.adsoyad);
            const hh = res.map(r=>r.hoca);
            const dd=res.map(r=>r.durum);
            cookies.set("login","1",{expires:24*90});
            cookies.set("id",id,{expires:24*90});
            cookies.set("email",em,{expires:24*90});
            cookies.set("pass",sf,{expires:24*90});
            cookies.set("sinif",sinif,{expires:24*90});
            cookies.set("uni",uni,{expires:24*90});
            cookies.set("ono",ono,{expires:24*90});
            cookies.set("adsoyad",as,{expires:24*90});
            cookies.set("hoca",hh,{expires:24*90});
            cookies.set("durum",dd,{expires:24*90});
            setl(lng);

        }else if(lng=="0"){
            alert("Hesabınız henüz onaylanmadı. Bu onaylanma süreci en fazla 24 saat sürmektedir.");
        }else{
            alert("Giriş başarısız.");
        }

        return{
            props:{ls}
        }
    }
    function uyeolc() {
        window.location.href='/uyeol';
    }

}



