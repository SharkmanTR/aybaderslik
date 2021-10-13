import styles from '../components/Default/profil.module.css';
import stylesDark from '../components/DefaultDark/formuller.module.css';
import stylesSlateBlue from '../components/SlateBlue/formuller.module.css';
import stylesDarkSlateBlue from '../components/DarkSlateBlue/formuller.module.css';
import stylesWisteria from '../components/Wisteria/formuller.module.css';
import stylesDarkWisteria from '../components/DarkWisteria/formuller.module.css';
import stylesNar from '../components/Nar/formuller.module.css';
import stylesDarkNar from '../components/DarkNar/formuller.module.css';
import stylesNight from '../components/Night/formuller.module.css';
import stylesDay from '../components/Day/formuller.module.css';
import UstMenu from '../components/ustmenu';
import {PrismaClient} from '@prisma/client';
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
}

export default function Profil() {
    const[t,sett]=useState(styles);
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
    })
    return(
        <div className={t.main}>
            <style jsx global>
            {`
            body{background-color: ${tc} ;}
            `}
            </style>
            <UstMenu
            pref={"profil"}></UstMenu>
            <div className={t.card}>
                <div className={t.pimg}>

                </div>
                <div className={t.pinf}>
                    <p className={t.h2}>Ad-Soyad:</p>
                    <p className={t.h3}>Deniz ARLI</p>
                </div>
                <div className={t.pinf}>
                    <p className={t.h2}>Numara:</p>
                    <p className={t.h3}>1924200107</p>
                </div>
                <div className={t.pinf}>
                    <p className={t.h2}>Sınıf:</p>
                    <p className={t.h3}>6</p>
                </div>
                
            </div>
        </div>
    )
}
export async function getStaticProps() {
    
    return{
        props:{

        }
    }
}