import styles from '../components/Default/dergi.module.css';
import stylesDark from '../components/DefaultDark/dergi.module.css';
import stylesSlateBlue from '../components/SlateBlue/dergi.module.css';
import stylesDarkSlateBlue from '../components/DarkSlateBlue/dergi.module.css';
import stylesWisteria from '../components/Wisteria/dergi.module.css';
import stylesDarkWisteria from '../components/DarkWisteria/dergi.module.css';
import stylesNar from '../components/Nar/dergi.module.css';
import stylesDarkNar from '../components/DarkNar/dergi.module.css';
import stylesNight from '../components/Night/dergi.module.css';
import stylesDay from '../components/Day/dergi.module.css';
import UstMenu from '../components/ustmenu';
import cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import Head from 'next/head';

var tema = cookies.get("tema"||"Default");
let tc;
if(tema=="Default"){
    tc="#dadada";
}else if (tema=="DefaultDark"){
    tc="#1a1a1a";
}else if (tema=="SlateBlue"){
    tc="lightsteelblue";
}else if(tema=="DarkSlateBlue"){
    tc="darkslateblue";
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

export default function DiyetsTalks() {
    const [t,sett]=useState(styles);
    const [s,sets]=useState(2);
    const l = cookies.get("login")||"0";
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
            window.location.href="/girisyap";
        }
    })
    return(
        <div>
            <Head>
                <title>AYBA Derslik | Diets Talks</title>
                <link rel="shourtcut icon" href={`/ico/${tema}.ico`}></link>
            </Head>
            <style jsx global>
            {`
            body{background-color: ${tc} ;}
            `}
            </style>
            <UstMenu
            pref={"DietsTalks"}>

            </UstMenu>
            <div className={t.main}>
                <img src={`/dergi/${s}.png`} alt="" className={t.img}></img>
                <img src="/icons/flip.png" alt="" className={t.lftbtn} onClick={geric}></img>
                <img  src="/icons/flip.png" alt="" className={t.rgtbtn} onClick={ileric}></img>
            </div>

            <button className={t.btn}>PDF Olarak İndir</button>
        </div>
    )
    function geric() {
        if(s!=2){
            sets(s-1);
        }
    }
    function ileric() {
        if(s!=18){
            sets(s+1);
        }
    }
}