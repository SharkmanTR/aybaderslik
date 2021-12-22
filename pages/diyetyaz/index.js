import styles from '../../components/Default/diyetyaz.module.css';
import stylesDark from '../../components/DefaultDark/diyetyaz.module.css';
import stylesSlateBlue from '../../components/SlateBlue/diyetyaz.module.css';
import stylesDarkSlateBlue from '../../components/DarkSlateBlue/diyetyaz.module.css';
import stylesWisteria from '../../components/Wisteria/diyetyaz.module.css';
import stylesDarkWisteria from '../../components/DarkWisteria/diyetyaz.module.css';
import stylesNar from '../../components/Nar/diyetyaz.module.css';
import stylesDarkNar from '../../components/DarkNar/diyetyaz.module.css';
import stylesNight from '../../components/Night/diyetyaz.module.css';
import stylesDay from '../../components/Day/diyetyaz.module.css';
import UstMenu from '../../components/ustmenu';
import cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import Loading from '../../components/loading';
import Head from 'next/head';

var tema = cookies.get("tema"||"Default");
const l = cookies.get("log")||"0";
let tc;
if(tema=="Default"){
tc="#dadada";
}else if (tema=="DefaultDark"){
tc="#1a1a1a";
}else if(tema=="SlateBlue"){
    tc="lightsteelblue";
}else if(tema=="DarkSlateBlue"){
    tc="darkslateblue";
}
else if (tema=="Wisteria"){
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
export default function DiyetYaz() {
    const [load,setload]=useState("0");
    const [t,sett]=useState(styles);
    useEffect(()=>{
        if(l=="0"){
            window.location.href("/girisyap")
        }
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
        else {
            tc="#dadada";
        }

    })
    return(
        <div>
            <Head>
                <title>AYBA Derslik | Diyet Yaz</title>
                <link rel="shourtcut icon" href={`/ico/${tema}.ico`}></link>
            </Head>
            <style jsx global>
            {`
            body{background-color: ${tc} ;}
            `}
            </style>
            <UstMenu
            pref={"diyetyaz"}></UstMenu>
            {load=="1"&&
            <Loading></Loading>
            }
            <div className={t.main}>
                <div className={t.container} onClick={normalclick}>
                    <p className={t.p1cont}>Normal Diyet</p>
                    <p className={t.p2cont}>Normal diyetler için tasarlanmış araç. %50-60 karbonhidrat, %10-20 protein, %20-30 yağ oranlarını referans almaktadır.</p>
                </div>
                <div className={t.container}>
                    <p className={t.p1cont}>Diyabet Diyeti</p>
                    <p className={t.p2cont}>(Yapım aşamasında)</p>
                </div>
                <div className={t.container}>
                    <p className={t.p1cont}>Sporcu Diyeti</p>
                    <p className={t.p2cont}>(Yapım aşamasında)</p>
                </div>
            </div>
        </div>
    )
}
function normalclick(){
    window.location.href="diyetyaz/normal";
}