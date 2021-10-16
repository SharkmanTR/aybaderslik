import styles from '../components/Default/diyetgon.module.css';
import stylesDark from '../components/DefaultDark/diyetgon.module.css';
import stylesSlateBlue from '../components/SlateBlue/diyetgon.module.css';
import stylesDarkSlateBlue from '../components/DarkSlateBlue/diyetgon.module.css';
import stylesWisteria from '../components/Wisteria/diyetgon.module.css';
import stylesDarkWisteria from '../components/DarkWisteria/diyetgon.module.css';
import stylesNar from '../components/Nar/diyetgon.module.css';
import stylesDarkNar from '../components/DarkNar/diyetgon.module.css';
import stylesNight from '../components/Night/diyetgon.module.css';
import cookies from 'js-cookie';
import {useEffect, useState} from 'react';

let x="0";
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
}
export default function DiyetGonder({oguns,oguno,oguna,ogunr1,ogunr2,ogunr3}){
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
        }else {
            tc="#dadada";
        }
    })
    
    return(
        
        <div className={t.main}>
            <style jsx global>
                {`
                body{background-color: ${tc} ;}
                `}
            </style>
            <div className={t.divogun}>
                <p className={t.h1}>Sabah Öğünü</p>
                <hr></hr>
                <p className={t.h2} dangerouslySetInnerHTML={{__html:oguns}}></p>
            </div>
            <div className={t.divogun}>
                <p className={t.h1}>1. Ara Öğün</p>
                <hr></hr>
                <p className={t.h2} dangerouslySetInnerHTML={{__html:ogunr1}}></p>
            </div>
            <div className={t.divogun}>
                <p className={t.h1}>Öğle Öğünü</p>
                <hr></hr>
                <p className={t.h2} dangerouslySetInnerHTML={{__html:oguno}}></p>
            </div>
            <div className={t.divogun}>
                <p className={t.h1}>2. Ara Öğün</p>
                <hr></hr>
                <p className={t.h2} dangerouslySetInnerHTML={{__html:ogunr2}}></p>
            </div>
            <div className={t.divogun}>
                <p className={t.h1}>Akşam Öğünü</p>
                <hr></hr>
                <p className={t.h2} dangerouslySetInnerHTML={{__html:oguna}}></p>
            </div>
            <div className={t.divogun}>
                <p className={t.h1}>3. Ara Öğün</p>
                <hr></hr>
                <p className={t.h2} dangerouslySetInnerHTML={{__html:ogunr3}}></p>
            </div>
        </div>
    )
}