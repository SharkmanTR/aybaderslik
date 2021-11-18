import UstMenu from "../components/ustmenu";
import {PrismaClient} from '@prisma/client';
import styles from '../components/Default/konular.module.css';
import stylesDark from '../components/DefaultDark/konular.module.css';
import stylesSlateBlue from '../components/SlateBlue/konular.module.css';
import stylesDarkSlateBlue from '../components/DarkSlateBlue/konular.module.css';
import stylesWisteria from '../components/Wisteria/konular.module.css';
import stylesDarkWisteria from '../components/DarkWisteria/konular.module.css';
import stylesNar from '../components/Nar/konular.module.css';
import stylesDarkNar from '../components/DarkNar/konular.module.css';
import stylesNight from '../components/Night/konular.module.css';
import stylesDay from '../components/Day/konular.module.css';
import cookies from 'js-cookie';
import Head from 'next/head';
import { useEffect,useState } from "react";

var tema = cookies.get("tema")||"Default";
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

export default function DersDosyalari({konular4,konular3,konular2,konular1}){
    konular4 = konular4 || "";
    konular3 = konular3 || "";
    konular2 = konular2 ||"";
    konular1 = konular1 || ""
    const s= cookies.get("sinif");
    const u = cookies.get("uni");
    const l=cookies.get("log")||"0";
    const [t,sett]=useState(styles);
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
    })
    return(
        <div>
            <Head>
                <title>AYBA Derslik | Ders Dosyaları</title>
                <link rel="shourtcut icon" href={`/ico/${tema}.ico`}></link>
            </Head>
            <style jsx global>
            {`
            body{background-color: ${tc} ;}
            `}
            </style>
            <UstMenu
            pref={"dersdosyalari"}></UstMenu>
            <div>
                {s>="4" &&
                <div className={t.main} >
                    <div className={t.mid}>
                        <div className={t.sinif} onClick={sinifclick4}>
                            <p className={t.h1}>4. Sınıf Konuları</p>
                        </div>
                        <div  id="divkonu4" className={t.konu} style={{display:'none'}}>
                            <div className={t.sunum}>
                                {konular4.map(k4=>(
                                    <div key={k4.id} id={k4.id}>
                                        <a className={t.h2} href={"http://aybaderslik.click/dersdosyalari/"+k4.uni+"/"+k4.sinif+"/"+k4.ders+"/"+k4.id+".pdf"} download>{k4.konu}</a>
                                        
                                        <p className={t.h3}>{k4.ders}</p>
                                        <hr></hr>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                }
                {s>="3" &&
                <div className={t.main} >
                    <div className={t.mid}>
                        <div className={t.sinif} onClick={sinifclick3}>
                            <p className={t.h1}>3. Sınıf Konuları</p>
                        </div>
                        <div  id="divkonu3" className={t.konu} style={{display:'none'}}>
                            <div className={t.sunum}>
                                {konular3.map(k3=>(
                                    <div key={k3.id} id={k3.id}>
                                        <a  className={t.h2} href={"http://aybaderslik.click/dersdosyalari/"+k3.uni+"/"+k3.sinif+"/"+k3.ders+"/"+k3.id+".pdf"} download={k3.konu}>{k3.konu}</a>
                                        <p  className={t.h3}>{k3.ders}</p>
                                        <hr></hr>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                }
                {s>="2" &&
                <div className={t.main} >
                    <div className={t.mid}>
                        <div className={t.sinif} onClick={sinifclick2}>
                            <p className={t.h1}>2. Sınıf Konuları</p>
                        </div>
                        <div  id="divkonu2" className={t.konu} style={{display:'none'}}>
                            <div className={t.sunum}>
                                {konular2.map(k3=>(
                                    <div key={k3.id} id={k3.id}>
                                        <a  className={t.h2} href={"http://aybaderslik.click/dersdosyalari/"+k3.uni+"/"+k3.sinif+"/"+k3.ders+"/"+k3.id+".pdf"} download>{k3.konu}</a>
                                        <p  className={t.h3}>{k3.ders}</p>
                                        <hr></hr>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                }
                {s>="1" &&
                <div className={t.main} >
                    <div className={t.mid}>
                        <div className={t.sinif} onClick={sinifclick1}>
                            <p className={t.h1}>1. Sınıf Konuları</p>
                        </div>
                        <div  id="divkonu1" className={t.konu} style={{display:'none'}}>
                            <div className={t.sunum}>
                                {konular1.map(k3=>(
                                    <div key={k3.id} id={k3.id}>
                                        <a  className={t.h2} href={"http://aybaderslik.click/dersdosyalari/"+k3.uni+"/"+k3.sinif+"/"+k3.ders+"/"+k3.id+".pdf"} download>{k3.konu}</a>
                                        <p  className={t.h3}>{k3.ders}</p>
                                        <hr></hr>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>

    )
}
export async function getServerSideProps() {
    const prisma = new PrismaClient();
    const res4 = await prisma.aybaDersDosyalari.findMany(
        {
            where:{
                uni:cookies.get("uni"),
                sinif:"4"
            }
        }
    );
    const res3 = await prisma.aybaDersDosyalari.findMany({
        where:{
            uni:cookies.get("uni"),
            sinif:"3"
        }
    });
    const res2 = await prisma.aybaDersDosyalari.findMany({
        where:{
            uni:cookies.get("uni"),
            sinif:"2"
        }
    });
    const res1 = await prisma.aybaDersDosyalari.findMany({
        where:{
            uni:cookies.get("uni"),
            sinif:"1"
        }
    });
    const konular4= await res4;
    const konular3 = await res3;
    const konular2 = await res2;
    const konular1 = await res1;
    return{
        props:{
            konular4,
            konular3,
            konular2,
            konular1
        }
    }
}
function sinifclick4() {
    if(document.getElementById("divkonu4").style.display=="none"){
        document.getElementById("divkonu4").style.display='block';
    }else{
        document.getElementById("divkonu4").style.display='none';
    }
    
}
function sinifclick3() {
    if(document.getElementById("divkonu3").style.display=="none"){
        document.getElementById("divkonu3").style.display='block';
    }else{
        document.getElementById("divkonu3").style.display='none';
    }
    
}
function sinifclick2() {
    if(document.getElementById("divkonu2").style.display=="none"){
        document.getElementById("divkonu2").style.display='block';
    }else{
        document.getElementById("divkonu2").style.display='none';
    }
    
}
function sinifclick1() {
    if(document.getElementById("divkonu1").style.display=="none"){
        document.getElementById("divkonu1").style.display='block';
    }else{
        document.getElementById("divkonu1").style.display='none';
    }
    
}