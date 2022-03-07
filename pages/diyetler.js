import { PrismaClient } from "@prisma/client";
import cookies from 'js-cookie';
import styles from '../components/Default/diyetler.module.css';
import stylesDark from '../components/DefaultDark/diyetler.module.css';
import stylesSlateBlue from '../components/SlateBlue/diyetler.module.css';
import stylesDarkSlateBlue from '../components/DarkSlateBlue/diyetler.module.css';
import stylesWisteria from '../components/Wisteria/diyetler.module.css';
import stylesDarkWisteria from '../components/DarkWisteria/diyetler.module.css';
import stylesNar from '../components/Nar/diyetler.module.css';
import stylesDarkNar from '../components/DarkNar/diyetler.module.css';
import stylesNight from '../components/Night/diyetler.module.css';
import stylesDay from '../components/Day/diyetler.module.css';
import UstMenu from '../components/ustmenu';
import moment from 'moment';
import { useEffect, useState} from "react";
import Loading from "../components/loading";
import Head from 'next/head';
import { initializeApp } from "firebase/app";
import {getFirestore,collection,query, where,limit, getDocs, doc} from "firebase/firestore";
import { DiyetFavFS } from "../utils/diyetfavfs";

var tema = cookies.get("tema"||"Default");
let tc;
if(tema=="Default"){
    tc="#dadada";
}else if (tema=="DefaultDark"){
    tc="#1a1a1a";
}else if (tema=="SlateBlue"){
    tc="lightsteelblue";
}else if(tema=="DarkSlateBlue"){
    tc="darkslateblue"
}else if (tema=="Wisteria"){
    tc="#f6eafa";
}else if (tema=="DarkWisteria"){
    tc="#551868 ";
}else if (tema=="Nar"){
    tc="#FFBABA";
}else if (tema=="DarkNar"){
    tc="#8b0000";
}else if (tema=="Night"){
    tc="#1a1a1a";
}else if (tema=="Day"){
    tc="#EDF6F5";
}else {
    tc="#dadada";
  }
export default function Diyetler(){

    const [t,sett]=useState(styles);
    const [dyt,dddset]=useState([]);
    const l = cookies.get("login")||"0";
    const [load,setload]=useState("0");
    const [dytget,setdytget]=useState(false);
    useEffect(()=>{
        if(tema=="Default"){
            sett(styles);
        }else if(tema=="DefaultDark"){
            sett(stylesDark);
        }else if (tema=="SlateBlue"){
            sett(stylesSlateBlue);
        }else if (tema=="DarkSlateBlue"){
            sett(stylesDarkSlateBlue);
        }else if (tema=="Wisteria"){
            sett(stylesWisteria);
        }else if (tema=="DarkWisteria"){
            sett(stylesDarkWisteria);
        }else if (tema=="Nar"){
            sett(stylesNar);
        }else if (tema=="DarkNar"){
            sett(stylesDarkNar);
        }else if (tema=="Night"){
            sett(stylesNight);
        }else if (tema=="Day"){
            sett(stylesDay);
        }
        if(l=="0"){
            window.location.href="/girisyap"
        }
        if(!dytget){
            dosget();
        }
    })
    return(
        <div className={t.main}>
            <Head>
                <title>AYBA Derslik | Diyetler</title>
                <link rel="shourtcut icon" href={`/ico/${tema}.ico`}></link>
            </Head>
            <style jsx global>
                {`
                body{background-color: ${tc} ;}
                `}
            </style>
            <UstMenu
            pref={"diyetler"}>

            </UstMenu>
            {load=="1"&&
            <Loading></Loading>
            }
            {dyt.map(d=>(
                <div key={d.id}>
                    <div className={t.mid} >
            <div className={t.diyet} id={d.id} >
                <div className={t.fav}>
                    <div className={t.favicon}>
                        <img className={t.icon} id={"favimg"+d.id} src={"/icons/fav"+d.fav+".png"} onClick={clickfavicon}>

                        </img>
                    </div>
                    <input id={"inputfavimg"+d.id} className={t.favinput} placeholder="Diyet açıklaması..." style={{display:"none"}}>
                        
                    </input>
                    <button id={"btnfavimg"+d.id} value={d.id} className={t.favbtn} style={{display:"none"}} onClick={btnfav}>Kaydet</button>
                </div>
                <div id={d.id} className={t.baslik} onClick={divclick} >
                    <p id={d.id} className={t.h1}>{d.adsoyad+"-"+d.id}</p>
                </div>
                <hr></hr>
                <div id={d.id} className={t.divdeg} onClick={divclick}>
                    <p id={d.id} className={t.h2}>{d.topkcal+"-"+d.ycho+" CHO-"+d.ypro+" PRO-"+ d.yyag+" YAĞ"}</p>
                </div>
                <div className={t.divdeg}>
                    {d.metre<45 &&
                        <div id={"divmetre"+d.id} className={t.divmetre} style={{width:`${d.metre}%`,backgroundColor:'red'}}>
                            %{d.metre}
                        </div>
                    }
                    {d.metre>=45 && d.metre<75 &&
                        <div id={"divmetre"+d.id} className={t.divmetre} style={{width:`${d.metre}%`,backgroundColor:'orange'}}>
                            %{d.metre}
                        </div>
                    }
                    {d.metre>=75 &&
                        <div id={"divmetre"+d.id} className={t.divmetre} style={{width:`${d.metre}%`,backgroundColor:'green'}}>
                            %{d.metre}
                        </div>
                    }
                </div>
                <div id={'divdet'+d.id} className={t.det} style={{display:"none"}}>
                    <div className={t.row1}>
                        <div className={t.col1}>
                            <p className={t.h3}>Süt</p>
                        </div>
                        <div className={t.col1}>
                            <p className={t.h3}>Y. Yağlı Süt</p>
                        </div>
                        <div className={t.col1}>
                            <p className={t.h3}>Yağsız Süt</p>
                        </div>
                        <div className={t.col1}>
                            <p className={t.h3}>Et</p>
                        </div>
                        <div className={t.col1}>
                            <p className={t.h3}>EYG</p>
                        </div>
                        
                    </div>
                    <div className={t.row1}>
                        <div className={t.col1}>
                            <p className={t.h3}>{d.dsut||"0"}</p>
                        </div>
                        <div className={t.col1}>
                            <p className={t.h3}>{d.dyyssut||"0"}</p>
                        </div>
                        <div className={t.col1}>
                            <p className={t.h3}>{d.dyssut||"0"}</p>
                        </div>
                        <div className={t.col1}>
                            <p className={t.h3}>{d.det||"0"}</p>
                        </div>
                        <div className={t.col1}>
                            <p className={t.h3}>{d.dekm||"0"}</p>
                        </div>
                    </div>
                    
                    <div className={t.row1} style={{marginTop:"10px"}}>
                        <div className={t.col1}>
                            <p className={t.h3}>K.bak.</p>
                        </div>
                        <div className={t.col1}>
                            <p className={t.h3}>Sebze</p>
                        </div>
                        <div className={t.col1}>
                            <p className={t.h3}>Meyve</p>
                        </div>
                        <div className={t.col1}>
                            <p className={t.h3}>Yağ</p>
                        </div>
                        <div className={t.col1}>
                            <p className={t.h3}>Y. Tohumlar</p>
                        </div>
                    </div>
                    <div className={t.row1}>
                        <div className={t.col1}>
                            <p className={t.h3}>{d.dkbak||"0"}</p>
                        </div>
                        <div className={t.col1}>
                            <p className={t.h3}>{d.dseb||"0"}</p>
                        </div>
                        <div className={t.col1}>
                            <p className={t.h3}>{d.dmey||"0"}</p>
                        </div>
                        <div className={t.col1}>
                            <p className={t.h3}>{d.dyag||"0"}</p>
                        </div>
                        <div className={t.col1}>
                            <p className={t.h3}>{d.dytoh||"0"}</p>
                        </div>
                    </div>
                    <div className={t.row1} style={{marginTop:"10px"}}>
                        <div className={t.col1}>
                            <p className={t.h3}>Ek CHO</p>
                        </div>
                        <div className={t.col1}>
                            <p className={t.h3}>Ek PRO</p>
                        </div>
                        <div className={t.col1}>
                            <p className={t.h3}>Ek YAG</p>
                        </div>
                    </div>
                    <div className={t.row1}>
                        <div className={t.col1}>
                            <p className={t.h3}>{d.ekcho+" gr"||"0 gr"}</p>
                        </div>
                        <div className={t.col1}>
                            <p className={t.h3}>{d.ekpro+" gr"||"0 gr"}</p>
                        </div>
                        <div className={t.col1}>
                            <p className={t.h3}>{d.ekyag+" gr"||"0 gr"}</p>
                        </div>
                    </div>
                    <div className={t.row1} style={{marginTop:"10px"}}>
                        <div className={t.col2}>
                            <p className={t.h3}>#</p>
                        </div>
                        <div className={t.col2}>
                            <p className={t.h3}>CHO</p>
                        </div>
                        <div className={t.col2}>
                            <p className={t.h3}>PRO</p>
                        </div>
                        <div className={t.col2}>
                            <p className={t.h3}>YAĞ</p>
                        </div>
                    </div>
                    <div className={t.row1} >
                        <div className={t.col2}>
                            <p className={t.h3}>{d.topkcal||"0 kcal"}</p>
                        </div>
                        <div className={t.col2}>
                            <p className={t.h3}>{d.kcho||"0 kcal"}</p>
                        </div>
                        <div className={t.col2}>
                            <p className={t.h3}>{d.kpro||"0 kcal"}</p>
                        </div>
                        <div className={t.col2}>
                            <p className={t.h3}>{d.kyag||"0 kcal"}</p>
                        </div>
                    </div>
                    <div className={t.row1} >
                        <div className={t.col2}>
                            <p className={t.h3}>%100</p>
                        </div>
                        <div className={t.col2}>
                            <p className={t.h3}>{d.ycho||"%0"}</p>
                        </div>
                        <div className={t.col2}>
                            <p className={t.h3}>{d.ypro||"%0"}</p>
                        </div>
                        <div className={t.col2}>
                            <p className={t.h3}>{d.yyag||"%0"}</p>
                        </div>
                    </div>
                    <div className={t.row1} >
                        <div className={t.col2}>
                            <p className={t.h3}></p>
                        </div>
                        <div className={t.col2}>
                            <p className={t.h3}>{d.gcho||"0 gr"}</p>
                        </div>
                        <div className={t.col2}>
                            <p className={t.h3}>{d.gpro||"0 gr"}</p>
                        </div>
                        <div className={t.col2}>
                            <p className={t.h3}>{d.gyag||"0 gr"}</p>
                        </div>
                    </div>
                    <div className={t.row2} style={{marginTop:"10px"}}>
                        <div className={t.col3}>
                            <p className={t.h4}>Sabah Öğünü</p>
                        </div>
                        <div className={t.col3}>
                            <p className={t.h5} dangerouslySetInnerHTML={{__html:d.osabah||""}}></p>
                        </div>
                        <div className={t.col3} style={{marginTop:"5px"}}>
                            <p className={t.h4}>1. Ara Öğün</p>
                        </div>
                        <div className={t.col3}>
                            <p className={t.h5} dangerouslySetInnerHTML={{__html:d.oara1||""}}></p>
                        </div>
                        <div className={t.col3} style={{marginTop:"5px"}}>
                            <p className={t.h4}>Öğle Öğünü</p>
                        </div>
                        <div className={t.col3}>
                            <p className={t.h5} dangerouslySetInnerHTML={{__html:d.oogle||""}}></p>
                        </div>
                        <div className={t.col3} style={{marginTop:"5px"}}>
                            <p className={t.h4}>2. Ara Öğün</p>
                        </div>
                        <div className={t.col3}>
                            <p className={t.h5} dangerouslySetInnerHTML={{__html:d.oara2||""}}></p>
                        </div>
                        <div className={t.col3} style={{marginTop:"5px"}}>
                            <p className={t.h4}>Akşam Öğünü</p>
                        </div>
                        <div className={t.col3}>
                            <p className={t.h5} dangerouslySetInnerHTML={{__html:d.oaksam||""}}></p>
                        </div>
                        <div className={t.col3} style={{marginTop:"5px"}}>
                            <p className={t.h4}>3. Ara Öğün</p>
                        </div>
                        <div className={t.col3}>
                            <p className={t.h5} dangerouslySetInnerHTML={{__html:d.oara3||""}}></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                </div>

            ))}
        </div>
    );
    async function dosget(){
        setload("1")
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
        const diyRef=collection(db,"diyetler");
        const q =query(diyRef,where("uni","==",cookies.get("uni")),where("hoca","==",cookies.get("id")),where("gun","==",moment().format('DD')),where("ay","==",moment().format("MM")),where("yil","==",moment().format("YYYY")))
        const dss = await getDocs(q);
        const dat =dss.docs.map((doc)=>{
            return(
                {
                    "id":doc.id,
                    "fav":doc.data().fav,
                    "adsoyad":doc.data().adsoyad,
                    "topkcal":doc.data().topkcal,
                    "ycho":doc.data().ycho,
                    "ypro":doc.data().ypro,
                    "yyag":doc.data().yyag,
                    "metre":doc.data().metre,
                    "dsut":doc.data().dsut,
                    "dyysut":doc.data().dyysut,
                    "dyssut":doc.data().dyssut,
                    "det":doc.data().det,
                    "dekm":doc.data().dekm,
                    "dkbak":doc.data().dkbak,
                    "dseb":doc.data().dseb,
                    "dmey":doc.data().dmey,
                    "dyag":doc.data().dyag,
                    "dytoh":doc.data().dytoh,
                    "ekcho":doc.data().ekcho,
                    "ekpro":doc.data().ekpro,
                    "ekyag":doc.data().ekyag,
                    "kcho":doc.data().kcho,
                    "kpro":doc.data().kpro,
                    "kyag":doc.data().kyag,
                    "ycho":doc.data().ycho,
                    "ypro":doc.data().ypro,
                    "yyag":doc.data().yyag,
                    "osabah":doc.data().osabah,
                    "oara1":doc.data().oara1,
                    "oogle":doc.data().oogle,
                    "oara2":doc.data().oara2,
                    "oaksam":doc.data().oaksam,
                    "oara3":doc.data().oara3
                }
            )
        });
        console.log(dat);
        setdytget(true);
        dddset(dat);
        setload("0");
    }
    async function dosget1() {
        const dos = await fetch('./api/diyetler',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                xuni:cookies.get("uni"),
                xhoca:cookies.get("id")
            })
        })
        const dyt2 = await dos.json();
        dddset(dyt2);
        return{
            props:{dyt2}
        }
    
    }
    async function btnfav(){
        var id = event.srcElement.value;
        var info = document.getElementById("inputfavimg"+id).value;
        setload("1");
        DiyetFavFS({id,info})
        document.getElementById("inputfavimg"+id).style.display="none";
        document.getElementById("btnfavimg"+id).style.display="none";
        setload("0")
    }
    async function btnfav1(){
        setload("1");
        var i = event.srcElement.value;
        const res = fetch('./api/diyetfav',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                uinfo:document.getElementById("inputfavimg"+i).value,
                uid:i
            })
        });
        document.getElementById("inputfavimg"+i).style.display="none";
        document.getElementById("btnfavimg"+i).style.display="none";
        setload("0");
    }
}

function divclick(){
    var i =event.srcElement.id;
    if(document.getElementById('divdet'+i).style.display=="none"){
        document.getElementById('divdet'+i).style.display="block";
    }else{
        document.getElementById('divdet'+i).style.display="none";
    }
}
function clickfavicon(){
    var i =event.srcElement.id;
    if(document.getElementById("input"+i).style.display=="none"){
        document.getElementById("input"+i).style.display="block";
        document.getElementById("btn"+i).style.display="block";
    }else{
        document.getElementById("input"+i).style.display="none";
        document.getElementById("btn"+i).style.display="none";
    }
}
