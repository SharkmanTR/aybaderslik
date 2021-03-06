import styles from '../components/Default/profil.module.css';
import stylesDark from '../components/DefaultDark/profil.module.css';
import stylesSlateBlue from '../components/SlateBlue/profil.module.css';
import stylesDarkSlateBlue from '../components/DarkSlateBlue/profil.module.css';
import stylesWisteria from '../components/Wisteria/profil.module.css';
import stylesDarkWisteria from '../components/DarkWisteria/profil.module.css';
import stylesNar from '../components/Nar/profil.module.css';
import stylesDarkNar from '../components/DarkNar/profil.module.css';
import stylesNight from '../components/Night/profil.module.css';
import stylesDay from '../components/Day/profil.module.css';
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

export default function Profil({res}) {
    const[t,sett]=useState(styles);
    const l=cookies.get("login")||"0";
    const [ad,setad]=useState(cookies.get("adsoyad"));
    const [no,setno]=useState(cookies.get("ono"));
    const [snf,setsnf]=useState(cookies.get("sinif"));
    const [eml,seteml]=useState(cookies.get("email"));
    const [un,setuni]=useState(cookies.get("uni"));
    const [ab,setab]=useState("none");
    const [cont,setcont]=useState("none");
    useEffect(()=>{
        if(l=="0"){
            window.location.href="/girisyap";
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
        
    })
    return(
        <div className={t.main}>
            <style jsx global>
            {`
            body{background-color: ${tc} ;}
            #divpimg{background-image: url("/unilogo/${un}.png");}
            #divunimg{background-image: url("/unilogo/${un}.png");}
            `}
            </style>
            <Head>
                <title>AYBA Derslik | Profil</title>
                <link rel="shourtcut icon" href={`/ico/${tema}.ico`}></link>
            </Head>
            <UstMenu
            pref={"profil"}></UstMenu>
            <div className={t.container}>
                <div className={t.on}>
                    <div id="divunimg" className={t.unimg}>

                    </div>
                    <p className={t.unip}>????renci Kart??m</p>
                </div>
                <div className={t.arka}>
                    <p className={t.unip}><b>Ad-Soyad:</b><br></br>{ad}</p>
                    <p className={t.unip}><b>????renci Numaras??:</b><br></br>{no}</p>
                    <p className={t.unip}><b>S??nf??:</b><br></br>{snf}</p>
                    <p className={t.unip}><b>E-Posta:</b><br></br>{eml}</p>
                </div>
            </div>
            <div className={t.card} style={{marginTop:"10px"}}>
                <p className={t.h1} onClick={divabc} style={{cursor:"pointer"}}>Hikayemiz</p>
                <div id="divhakkimizda" style={{display:ab,textAlign:"justify"}}> 
                    <p className={t.h1} style={{fontWeight:"normal",textAlign:"justify"}}>AYBA Derslik, 2016 y??l??nda Deniz ARLI taraf??nda bir ????renci projesi olarak ba??lam???? ve 2021 y??l??nda AYBA Derslik ismini alarak
                    b??t??n beslenme ve diyetetik ????rencilerinin kullan??m??na sunulmu??tur. 2016 y??l??nda, sadece Adnan Menderes ??niversitesi ????rencilerinin kulland?????? yaz??l??m,
                    i??erisinde sadece ders dosyalar?? ve devams??zl??k takibini bar??nd??rmaktayd??. O zamanlar ismi BBL Derslik olan yaz??l??m, beslenme ve diyetetik e??itimindeki
                    bir problemi gidermek i??in ortaya ????km????t??. Beslenme ve diyetetik b??l??m?? ders notlar??n??n fotokopicilerde halka a????k ??ekilde bulunmas?? mesleki a????dan risk olu??turmaktayd??.
                    Bizlerin en ??nemli e??itim materyallerinden olan ders notlar??m??z??n beslenme ve diyetetik b??l??m??nden olmayan insanlara sat??lmas?? BBL Derslik&apos;i do??urdu.
                     2016-2018 y??llar?? aras??nda aktif bir ??ekilde kullan??ld??ktan sonra yaz??l??m?? kodlayan beslenme ve diyetetik ????rencisi Deniz ARLI&apos;n??n mezun olmas??yla birlikte kullan??mdan kalkt??.
                      2021 y??l??na gelindi??inde ise, i??erisinde qr kodla yoklama alma sistemi, hocalara diyet yaz??p g??nderme sistemi, ??rnek men??ler ve ??e??itli e??itim materyalleri 
                      eklendikten sonra AYBA Derslik ismiyle piyasaya s??r??ld??. Ba??larda yapay zeka destekli diyetisyen asisten?? olarak tasarlanan yaz??l??m daha sonra ????renci asisten?? olacak ??ekilde 
                      evrim ge??irdi. 2021 temmuz ay??nda haz??rlanmaya ba??lanan yaz??l??m a??ustos ay??nda tamamlanarak a????k beta test s??recine girdi. ??smini Ay??e Baysal&apos;dan alan sistem, ????renciler i??in
                     ucuz eri??ilebilen ve ????rencilerin verimliliklerini artt??rmay?? hedefleyen bir yaz??l??m olma misyonuyla beslenme ve diyetetik ????rencilerine faydal?? olma yolunde emin ad??mlarla ilerlemektedir.
                      Sistemin haz??rlanmas??nda eme??i ge??en Feyza Nur Kutlu, Gizem ??etinkaya ve Mahmut ??eri&apos;ye te??ekk??r ederiz.</p>
                    <div className={t.img}></div>
                    <p className={t.h2} style={{textAlign:"center",width:"100%"}}>Ayd??n Adnan Menderes ??niversitesi <br></br>Sa??l??k Bilimleri Fak??ltesi<br></br>Beslenme ve Diyetetik ????rencileri<br></br>BBL Derslik Tan??t??m??<br></br>2016</p>
                </div>
            </div>
            <div className={t.card} style={{marginTop:"10px"}}>
                <p className={t.h1} style={{cursor:"pointer"}} onClick={contc}>??leti??im</p>
                <div style={{display:cont}}>
                    <p className={t.h1} style={{cursor:"pointer"}} onClick={instac}>Instagram</p>
                    <p className={t.h1} style={{cursor:"pointer"}} onClick={wac}>Whatsapp</p>
                </div>
            </div>
        </div>
    )
    function divabc(){
        if(ab=="none"){
            setab("block");
        }else{
            setab("none");
        }
    }
    function contc() {
        if(cont=="none"){
            setcont("block");
        }else{
            setcont("none");
        }
    }
    function instac() {
        window.location.href="https://www.instagram.com/aybaderslik/";
    }
    function wac() {
        window.location.href="https://wa.me/905316714715";
    }
}
