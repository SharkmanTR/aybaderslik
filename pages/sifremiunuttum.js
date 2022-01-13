import Loading from '../components/loading';
import styles from '../components/Default/sifremiunuttum.module.css';
import {useState, useEffect} from 'react';
import cookies from 'js-cookie';
import Head from 'next/head';


var md5 = require('md5');

export default function SifremiUnuttum() {
    const [lvl,setlvl]=useState("1");
    const [load,setload]=useState("0");
    const [usid,setuid]=useState(0);
    const l = cookies.get('log');
    useEffect(()=>{
        if(l=="x"){

        }else if(l=="0"){

        }else if(l=="1"){
            window.location.href='/';
        }else if(l=="3"){

        }
        if(lvl=="1"){
            document.getElementById("ust1").style.backgroundColor="yellow";
            document.getElementById("ustp1").style.color="black";
            document.getElementById("ust1").style.borderBottomColor="green";
            document.getElementById("ust1").style.borderBottomWidth="5px";
            document.getElementById("ust1").style.borderBottomStyle="solid";
            document.getElementById("ust2").style.border="0";
            document.getElementById("ustp2").style.color="black";
            document.getElementById("ust2").style.backgroundColor="white";
        }else if(lvl=="2"){
            document.getElementById('ust1').style.backgroundColor="green";
            document.getElementById('ustp1').style.color="white";
            document.getElementById("ust2").style.backgroundColor="yellow";
            document.getElementById("ustp2").style.color="black";
            document.getElementById("ust2").style.borderBottomColor="green";
            document.getElementById("ust2").style.borderBottomWidth="5px";
            document.getElementById("ust2").style.borderBottomStyle="solid";
            document.getElementById("ust3").style.border="0";
            document.getElementById("ust3").style.backgroundColor="white";
            document.getElementById("ustp3").style.color="black";
        }else if(lvl=="3"){
            document.getElementById("ust2").style.backgroundColor="green";
            document.getElementById("ustp2").style.color="white";
            document.getElementById("ust3").style.backgroundColor="yellow";
            document.getElementById("ust3").style.borderBottomColor="green";
            document.getElementById("ust3").style.borderBottomWidth="5px";
            document.getElementById("ust3").style.borderBottomStyle="solid";
        }else if(lvl=="4"){
            document.getElementById("ust3").style.backgroundColor="green";
            document.getElementById("ustp3").style.color="white";
        }
    }
    
    )
    return(
        <div>
            {load=="1"&&
                <div>
                    <Loading></Loading>
                </div>
            }
            <Head>
                <title>AYBA Derslik | Şifre Kurtarma</title>
                <link rel="shourtcut icon" href={`/ico/Default.ico`}></link>
            </Head>
            <div className={styles.main}>
                <div className={styles.mid}>
                    <div className={styles.ust}>
                        <div id='ust1' className={styles.col} style={{borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"}}>
                            <p id='ustp1' className={styles.p}>1. Aşama</p>
                        </div>
                        <div id='ust2' className={styles.col}>
                            <p id='ustp2' className={styles.p}>2. Aşama</p>
                        </div>
                        <div id='ust3' className={styles.col} style={{borderTopRightRadius:"10px",borderBottomRightRadius:"10px"}}>
                            <p id='ustp3' className={styles.p}>3. Aşama</p>
                        </div>
                    </div>
                    {lvl=="1"&&
                    <div className={styles.asama}>
                        <input id='txtemail' className={styles.input} type="email" placeholder='E-mail adresiniz'></input>
                        <p id="alert1" className={styles.p} style={{color:'red',display:'none'}}>Böyle bir kullanıcı bulunamadı.</p>
                        <button className={styles.btn} onClick={geri1click}>Geri</button>
                        <button className={styles.btn} onClick={ileri1click}>İleri</button>
                    </div>
                    }
                    {lvl=="2"&&
                    <div className={styles.asama}>
                        <input id="txttc" className={styles.input} type="number" placeholder='TC kimlik numaranız'></input>
                        <p id="alert2" className={styles.p} style={{color:'red',display:'none'}}>Bilgileriniz uyuşmamaktadır.</p>
                        <button className={styles.btn} onClick={geri2click}>Geri</button>
                        <button className={styles.btn} onClick={ileri2click}>İleri</button>
                    </div>
                    }
                    {lvl=="3"&&
                    <div className={styles.asama}>
                        <input id='txtsifre' className={styles.input} placeholder='Yeni şifreniz' type="password"></input>
                        <input id="txtsifre2" className={styles.input} placeholder='Şifrenizi tekrar giriniz' type="password"></input>
                        <p id="alert3" className={styles.p} style={{color:'red',display:'none'}}>Şifre güncelleme başarısız. Lütfen daha sonra tekrar deneyiniz.</p>
                        <button className={styles.btn} onClick={geri3click}>Geri</button>
                        <button className={styles.btn} onClick={ileri3click}>Kaydet</button>
                    </div>
                    }
                    {lvl=="4"&&
                    <div className={styles.asama}>
                        <p className={styles.p}>Şifreniz başarıyla güncellenmiştir.</p>
                        <button className={styles.btn2} onClick={btngiris}>Giriş Yap</button>
                    </div>
                    }
                </div>
            </div>
        </div>
        
    )
    function geri1click() {
        window.location.href="girisyap";
    }
    function geri2click(){
        setlvl("1");
    }
    function geri3click(){
        setlvl("2");
    }
    async function ileri1click(){
        setload("1");
        var e = document.getElementById("txtemail").value;
        const ec = await fetch('./api/sifreunuttum1',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                uemail:e
            })
        });
        const res = await ec.json();
        console.log(res);
        setuid(res.map(r=>r.id));
        if(res.map(r=>r.id)==""){
            document.getElementById("alert1").style.display="block";
        }else{
            setlvl("2");
        }
        setload("0");

    }
    async function ileri2click(){
        setload("1");
        var t =document.getElementById("txttc").value;
        const tc = await fetch('./api/sifreunuttum2',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                uid:usid,
                utc:t
            })
        });
        const res1 = await tc.json();
        if(res1.map(r=>r.id)==""){
            document.getElementById("alert2").style.display="block";
        }else{
            setlvl("3");
        }
        setload("0");    
    }
    async function ileri3click(){
        var s = document.getElementById("txtsifre").value;
        var s2 = document.getElementById("txtsifre2").value;
        if(s2==s){
            setload("1");
            const pu = await fetch('./api/sifreunuttum3',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    uid:usid,
                    usifre:md5(s)
                })
            });
            const res2 = await pu.json();
            if(res2["id"]==""){
                document.getElementById("alert2").style.display="block";
            }else{
                setlvl("4");
            }
            setload("0");
        }else{
            alert("Girilen şifreler uyuşmuyor. Şifrelerinizi tekrar giriniz.")
        }
        
    }
    function btngiris(){
        window.location.href="/girisyap";
    }
}