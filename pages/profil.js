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
                    <p className={t.unip}>Öğrenci Kartım</p>
                </div>
                <div className={t.arka}>
                    <p className={t.unip}><b>Ad-Soyad:</b><br></br>{ad}</p>
                    <p className={t.unip}><b>Öğrenci Numarası:</b><br></br>{no}</p>
                    <p className={t.unip}><b>Sınfı:</b><br></br>{snf}</p>
                    <p className={t.unip}><b>E-Posta:</b><br></br>{eml}</p>
                </div>
            </div>
            <div className={t.card} style={{marginTop:"10px"}}>
                <p className={t.h1} onClick={divabc} style={{cursor:"pointer"}}>Hikayemiz</p>
                <div id="divhakkimizda" style={{display:ab,textAlign:"justify"}}> 
                    <p className={t.h1} style={{fontWeight:"normal",textAlign:"justify"}}>AYBA Derslik, 2016 yılında Deniz ARLI tarafında bir öğrenci projesi olarak başlamış ve 2021 yılında AYBA Derslik ismini alarak
                    bütün beslenme ve diyetetik öğrencilerinin kullanımına sunulmuştur. 2016 yılında, sadece Adnan Menderes Üniversitesi öğrencilerinin kullandığı yazılım,
                    içerisinde sadece ders dosyaları ve devamsızlık takibini barındırmaktaydı. O zamanlar ismi BBL Derslik olan yazılım, beslenme ve diyetetik eğitimindeki
                    bir problemi gidermek için ortaya çıkmıştı. Beslenme ve diyetetik bölümü ders notlarının fotokopicilerde halka açık şekilde bulunması mesleki açıdan risk oluşturmaktaydı.
                    Bizlerin en önemli eğitim materyallerinden olan ders notlarımızın beslenme ve diyetetik bölümünden olmayan insanlara satılması BBL Derslik&apos;i doğurdu.
                     2016-2018 yılları arasında aktif bir şekilde kullanıldıktan sonra yazılımı kodlayan beslenme ve diyetetik öğrencisi Deniz ARLI&apos;nın mezun olmasıyla birlikte kullanımdan kalktı.
                      2021 yılına gelindiğinde ise, içerisinde qr kodla yoklama alma sistemi, hocalara diyet yazıp gönderme sistemi, örnek menüler ve çeşitli eğitim materyalleri 
                      eklendikten sonra AYBA Derslik ismiyle piyasaya sürüldü. Başlarda yapay zeka destekli diyetisyen asistenı olarak tasarlanan yazılım daha sonra öğrenci asistenı olacak şekilde 
                      evrim geçirdi. 2021 temmuz ayında hazırlanmaya başlanan yazılım ağustos ayında tamamlanarak açık beta test sürecine girdi. İsmini Ayşe Baysal&apos;dan alan sistem, öğrenciler için
                     ucuz erişilebilen ve öğrencilerin verimliliklerini arttırmayı hedefleyen bir yazılım olma misyonuyla beslenme ve diyetetik öğrencilerine faydalı olma yolunde emin adımlarla ilerlemektedir.
                      Sistemin hazırlanmasında emeği geçen Feyza Nur Kutlu, Gizem Çetinkaya ve Mahmut Çeri&apos;ye teşekkür ederiz.</p>
                    <div className={t.img}></div>
                    <p className={t.h2} style={{textAlign:"center",width:"100%"}}>Aydın Adnan Menderes Üniversitesi <br></br>Sağlık Bilimleri Fakültesi<br></br>Beslenme ve Diyetetik Öğrencileri<br></br>BBL Derslik Tanıtımı<br></br>2016</p>
                </div>
            </div>
            <div className={t.card} style={{marginTop:"10px"}}>
                <p className={t.h1} style={{cursor:"pointer"}} onClick={contc}>İletişim</p>
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
