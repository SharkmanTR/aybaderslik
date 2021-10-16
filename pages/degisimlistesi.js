import styles from '../components/Default/degisimlistesi.module.css';
import stylesDark from '../components/DefaultDark/degisimlistesi.module.css';
import stylesSlateBlue from '../components/SlateBlue/degisimlistesi.module.css';
import stylesDarkSlateBlue from '../components/DarkSlateBlue/degisimlistesi.module.css';
import stylesWisteria from '../components/Wisteria/degisimlistesi.module.css';
import stylesDarkWisteria from '../components/DarkWisteria/degisimlistesi.module.css';
import stylesNar from '../components/Nar/degisimlistesi.module.css';
import stylesDarkNar from '../components/DarkNar/degisimlistesi.module.css';
import stylesNight from '../components/Night/degisimlistesi.module.css';
import stylesDay from '../components/Day/degisimlistesi.module.css';
import UstMenu from '../components/ustmenu';
import Image from 'next/image';
import cookies from 'js-cookie';
import Head from 'next/head'
import { useEffect, useState } from 'react';

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

export default function DegisimListesi(){
    const l = cookies.get("login")||"0";
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
        else {
            tc="#dadada";
        }
        if(l=="0"){
            window.location.href("/girisyap")
        }
    })
    return(
        <div className={t.main}>
            <Head>
                <title>AYBA Derslik</title>
                <link rel="shourtcut icon" href={`/ico/${tema}.ico`}></link>
            </Head>
            <style jsx global>
            {`
            body{background-color: ${tc} ;}
            `}
            </style>
            <UstMenu
            pref={"degisimlistesi"}></UstMenu>
            <div className={t.divdegisim}>
                <div className={t.baslik}>
                    <p className={t.h1} onClick={sutclick}>Süt Değişimi</p>
                    <div id="divsut" style={{display:"none"}}>
                        <div  className={t.row}>
                            <div className={t.col}>
                                <p className={t.h2}>Yiyecek Adı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Ortalama Ölçü</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Miktar(g)</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Süt</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 su bardağı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>200</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Yoğurt</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3/4 su bardağı (4 tepeleme yemek kaşığı)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>150</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Ev yoğurdu</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 su bardağı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>200</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Ayran</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1.5 su bardağı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>300</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={t.baslik} style={{marginTop:'10px'}}>
                    <p className={t.h1} onClick={etclick}>Et Değişimi</p>
                    <div id="divet" style={{display:"none"}}>
                        <div  className={t.row}>
                            <div className={t.col}>
                                <p className={t.h2}>Yiyecek Adı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Ortalama Ölçü</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Miktar(g)</p>
                            </div>
                        </div>
                        <div  className={t.row}>
                            <div className={t.col}>
                                <p className={t.h2}>Kırmızı et, orta yağlı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Çiğ</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Pişmiş-çiğ</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Kuşbaşı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 orta boyutta</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20-30</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Kıyma</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 yemek kaşığı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20-30</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Köfte</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 küçük yumurta boyutunda</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>30-40</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Biftek</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 avuç içi kadar</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20-30</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h2}>Tavuk, hindi</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Çiğ</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Pişmiş-çiğ</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Tavuk göğüs fleto</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1/4 küçük boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20-30</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Tavuk baget, kemiksiz</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 küçük boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20-30</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Hindi eti (derisiz), kemiksiz</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 parmak boyutunda</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20-30</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h2}>Balıklar, çiğ</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Çiğ, brüt</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Brüt-net</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Levrek</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1/5 küçük boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>30-55</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Alabalık</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1/6 orta boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>30-45</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Çipura</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1/4 küçük boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>30-60</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Somon</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>2 parmak boyutunda</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>30-40</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>İstavrit</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>4 küçük boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>30-60</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Mezgit</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 orta boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>40-100</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Lüfer</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 yarım parmak boyutunda</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>30-40</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Sazan</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>2 parmak boyutunda</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>40-55</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Hamsi</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>5 orta boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>30-45</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h2}>Yumurta</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Çiğ, brüt</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Net-brüt</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Yumurta(tavuk)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 küçük boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>50-55</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Yumurta(bıldırcın)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>5 adet</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>50-75</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h2}>Peynirler</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Net</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Net</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Beyaz peynir(inek), tam yağlı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>2 parmak boyutunda</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>40</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Koyun peyniri,tam yağlı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 yarım parmak boyutunda</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>30</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Kaşar peynir(taze/eski)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 yarım parmak boyutunda</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>30</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Lor peyniri</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 yemek kaşığı(tepeleme)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>50</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Çökelek</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>2 yemek kaşığı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>25</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Ezine peyniri</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 yarım parmak boyutunda</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>30</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Tulum peyniri</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 yarım parmak boyutunda</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>30</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Dil peyniri</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 yarım parmak boyutunda</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>30</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Süzme peynir</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>2 parmak boyutunda</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>40</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Krem peynir</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 yemek kaşığı(tepeleme)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>45</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Hellim peyniri</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 yarım parmak boyutunda</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>30</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Örgü peyniri</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 yarım parmak boyutunda</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>30</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Çeçil peynir</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 yarım parmak boyutunda</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>30</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Cheddar peyniri</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 yarım parmak boyutunda</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>30</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Gravyer peyniri</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>2 yarım parmak boyutunda</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <p className={t.h3}>*Çökelek ve tavuğun yağ miktarı daha azdır. Balıkların yağ miktarı ise çok daha azdır. </p>
                        </div>
                    </div>
                </div>
                <div className={t.baslik} style={{marginTop:"10px"}}>
                    <p className={t.h1} onClick={ekmclick}>Ekmek Değişimi</p>
                    <div id="divekm" style={{display:"none"}}>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h2}>Ekmekler</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Net</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Net</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Beyaz, buğday</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 ince dilim</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>25</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Mısır</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 ince dilim</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>25</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Çavdar/yulaf/tam buğday/kepekli</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 ince dilim</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>30</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Bazlama</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1/5 orta boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>30</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Lavaş</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 küçük boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>30</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Hamburger ekmeği (küçük)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1/2 adet</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>25</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Sandviç ekmeği (küçük)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1/3 adet</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>25</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h2}>Tahıllar</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Pişmiş (tepeleme)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Çiğ</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Un (buğday/mısır)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 yemek kaşığı (silme), çiğ</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Pirinç pilavı*</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>2 yemek kaşığı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Bulgur pilavı*</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 yemek kaşığı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Makarna*</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 yemek kaşığı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Erişte*</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 yemek kaşığı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Yarma (aşurelik buğday)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 yemek kaşığı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>25</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h2}>Çorbalar</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Pişmiş</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Çiğ</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Mercimek çorbası*</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 küçük kase</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>25</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Şehriye çorbası*</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 küçük kase</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Pirinç çorbası*</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 küçük kase</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Tarhana çorbası*</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 küçük kase</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Tarhana çorbası*</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 küçük kase</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Un çorbası*</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 küçük kase</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h2}>Kurubaklagiller</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Pişmiş (tepeleme)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Çiğ</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Nohut*</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 yemek kaşığı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>25</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Kuru fasulye*</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 yemek kaşığı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>25</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Barbunya*</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 yemek kaşığı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>25</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Mercimek* (yeşil-kırmızı)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>2 yemek kaşığı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>25</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Kuru bakla*</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>4 yemek kaşığı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>30</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Kuru börülce*</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>2 yemek kaşığı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>35</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h2}>Diğer besinler</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}></p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Çiğ (net)</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Patates</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 küçük boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>100</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Bezelye (iç)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>4 yemek kaşığı (çiğ)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>125</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Bezelye (iç)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 yemek kaşığı (pişmiş)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>-</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Kestane**</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>4 orta boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>40</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Koçan mısır</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 küçük boy (bütün)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>90</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Koçan mısır</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>4 yemek kaşığı (tane)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>90</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Patlamış mısır (yağsız)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 su bardağı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>25</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Leblebi (sarı/beyaz)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1/2 çay bardağı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>25</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Bisküvi (tuzlu, diyet)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>4 adet</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>25</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>İrmik</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>2 yemek kaşığı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Yulaf ezmesi</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>2 yemek kaşığı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Böreklik yufka</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1/6 adet</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>25</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Galeta</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1,5 büyük boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <p className={t.h3}>* Bu miktardaki yemekler 1 değişim yağ (5 gram) içerir</p>
                            <p className={t.h3}>** Kurubaklagiller daha çok (1 değişim~5 gram), kestane daha az (1 değişim~0,4 gram) protein içerir</p>
                        </div>
                    </div>
                </div>
                <div className={t.baslik} style={{marginTop:"10px"}}>
                    <p className={t.h1} onClick={sebzeclick}>Sebze Değişimi</p>
                    <div id="divseb" style={{display:"none"}} >
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h2}>Besin Adı</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h2}>Ortalama ölçü çiğ brüt</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h2}>Brüt-net miktar (g)</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Kırmızı turp*</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>1 orta boy (çiğ)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>170-150</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Siyah turp*</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>1 büyük boy (çiğ)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>115-110</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Salatalık/acur</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>2 orta boy (çiğ)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>250-200</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Kuru soğan</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>1/2 orta boy (çiğ)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>85-75</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Yeşil soğan</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>6 orta boy (çiğ)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>140-125</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Yeşil sivri biber</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>8 büyük boy (çiğ)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>145-125</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Dolmalık biber</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>3 büyük boy (çiğ)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>165-150</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Çarliston biber</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>5 büyük boy (çiğ)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>190-175</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Asma yaprağı (çiğ)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>8 büyük boy (çiğ)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>35-35</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Kara lahana*</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>2 yaprak (bütün) orta boy (çiğ)-<br></br>5-6 yemek kaşığı (pişmiş)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>60-60</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Beyaz lahana</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>3 su bardağı doğranmış (çiğ)-<br></br>5-6 yemek kaşığı (pişmiş)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>150-150<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Kırmızı lahana</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>1 su bardağı doğranmış (çiğ)-<br></br>5-6 yemek kaşığı (pişmiş)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>80-80<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Brüksel lahanası**</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>5 büyük boy (çiğ)-<br></br>5-6 yemek kaşığı (pişmiş)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>125-125<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Pırasa*</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>1 orta boy (çiğ)-<br></br>5-6 yemek kaşığı (pişmiş)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>120-100<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Taze kabak</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>1 büyük boy (çiğ)<br></br>5-6 yemek kaşığı (pişmiş)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>265-250<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Bal kabağı (kabuksuz)*</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>1 orta boy kare dilim 8çiğ)-<br></br>5-6 yemek kaşığı (pişmiş)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>75-75<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Kereviz</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>1/2 orta boy (çiğ)-<br></br>5-6 yemek kaşığı (pişmiş)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>170-100<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Havuç</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>2 küçük boy (çiğ)-<br></br>5-6 yemek kaşığı (pişmiş)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>135-100<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Pancar kırmızı</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>3/4 küçük boy (çiğ)-<br></br>5-6 yemek kaşığı (pişmiş)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>90-75<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Şalgam</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>1 büyük boy (çiğ)-<br></br>5-6 yemek kaşığı (pişmiş)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>90-75<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Taze fasulye</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>6 orta boy (çiğ)-<br></br>5-6 yemek kaşığı</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>85-85<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Bamya</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>30 büyük boy (çiğ)-<br></br>5-6 yemek kaşığı (pişmiş)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>95-80<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Karnabahar</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>3 orta boy çiçek (çiğ)-<br></br>5-6 yemek kaşığı (pişmiş)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>150-150<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Pazı</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>13 yaprak orta boy (çiğ)-<br></br>5-6 yemek kaşığı (pişmiş)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>200-200<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Ebegümeci</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>5 su bardağı doğranmış (çiğ)-<br></br>5-6 yemek kaşığı (pişmiş)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>100-100<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Mantar (kültür)**</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>8 orta boy (çiğ)-<br></br>5-6 yemek kaşığı (pişmiş)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>225-225<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Yer elması**</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>2 orta boy (çiğ)-<br></br>-5-6 yemek kaşığı (pişmiş)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>190-150<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Taze börülce**</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>8 orta boy (çiğ)-<br></br>5-6 yemek kaşığı (pişmiş)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>100-100<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Enginar (çanak)*</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>2 büyük boy (çiğ)-<br></br>5-6 yemek kaşığı (pişmiş)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>225-225<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Semizotu***</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>1 küçük bağ (çiğ)-<br></br>5-6 yemek (pişmiş)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>340-300<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Ispanak***</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>1 orta bağ (çiğ)- <br></br>5-6 yemek kaşığı (pişmiş)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>225-200<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Kuru biber</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>5 orta boy (çiğ)-<br></br>5-6 yemek kaşığı (pişmiş)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>15-15<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Kuru patlıcan</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>6 orta boy (çiğ)-<br></br>5-6 yemek kaşığı (pişmiş)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>20-20<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Kuru bamya</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>3 yemek kaşığı (çiğ)-<br></br>5-6 yemek kaşığı (pişmiş)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>25-25<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <p className={t.h3}>* Bal kabağı, pırasa, turp, lahana ihmal edilebilecek kadar düşük protein miktarına sahiptir</p>
                            <p className={t.h3}>** Mantar, yer elması, börülce, brüksel lahanası, brokoli, taze bakla, enginarın protein miktarları daha yüksektir</p>
                            <p className={t.h3}>*** Semizotu ve ıspanağın protein miktarları oldukça yüksektir</p>
                        </div>
                    </div>
                </div>
                <div className={t.baslik} style={{marginTop:"10px"}}>
                    <p className={t.h1} onClick={meyveclick}>Meyve Değişimi</p>
                    <div id="divmey" style={{display:"none"}}>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h2}>Yiyecek adı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Ortalama ölçü, brüt</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Brüt-net miktar (g)</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Ahududu</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>35 orta boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>200-200</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Ananas</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>2 parmak kalınlığında 1 dilim</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>300-160</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Armut</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 küçük boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>140-125</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Ayva</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1/2 büyük boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>140-110</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Babutsa (kaktüs meyvesi)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>2 orta boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>250-160</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Böğürtlen</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>35 orta boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>210-210</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Çilek</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>18 orta boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>305-300</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Dut</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3/4 su bardağı karışık boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>115-115</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Elma</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 orta boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>130-120</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Erik, mürdüm</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 orta boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>115-110</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Erik, yeşil</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>7 orta boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>140-130</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Greyfurt</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 orta boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>230-175</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>İncir</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>2 küçük boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>120-110</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Karayemiş</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>23 orta boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>110-100</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Karpuz</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1/8 boyun yarısı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>330-220</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Kavun</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1/8 küçük boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>325-170</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Kayısı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>7 orta boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>190-175</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Kiraz</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>11 büyük boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>120-110</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Kivi</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>2 küçük boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>125-110</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Kızılcık</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 su bardağı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>200-100</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Limon</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>2 büyük boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>250-200</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Mandalina</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>2 orta boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>175-140</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Mango</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1/3 büyük boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>145-120</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Muz</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 küçük boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>140-85</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Portakal</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 orta boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>180-140</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Şeftali</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 orta boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>220-185</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Üzüm</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>25 karışık boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>100-100</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Vişne</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>35 karışık boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>150-125</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Trabzon hurması</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 küçük boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>120-100</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Yaban mersini</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1.5 su bardağı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>175-175</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Yeni dünya</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>7 orta boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>160-120</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Kuru erik</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 orta boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>25-25</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Kuru incir</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>2 küçük boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>25-25</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Kuru kayısı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>4 küçük boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>25-25</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Kuru üzüm</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 yemek kaşığı (tepeleme)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20-20</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Kuru hurma</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 orta boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>25-25</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Kuru dut</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>2 yemek kaşığı tepeleme</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20-20</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={t.baslik} style={{marginTop:"10px"}}>
                    <p className={t.h1} onClick={yagclick}>Yağ Değişimi</p>
                    <div id="divyag" style={{display:"none"}}>
                    <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h2}>Yiyecek adı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Ortalama ölçü</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Brüt-net miktar (g)</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Sıvı yağ</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 tatlı kaşığı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>5-5</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Siyah/yeşil zeytin</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>10 orta boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>40-35</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Avokado</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1/4 küçük boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>55-40</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={t.baslik} style={{marginTop:"10px"}}>
                    <p className={t.h1} onClick={ytohclick}>Yağlı Tohumlar Değişimi</p>
                    <div id="divytoh" style={{display:"none"}}>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h2}>Yiyecek adı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Ortalama ölçü</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Brüt-net miktar (g)</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Ceviz</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>2 bütün boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20-10</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Badem</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>10 orta boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20-10</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Antep fıstığı*</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>15 orta boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20-10</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Kaju fıstığı*</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>7 orta boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>10-10</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Yer fıstığı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>13 orta boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>10-10</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Ay çekirdeği*</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 yemek kaşığı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20-10</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Kabak çekirdeği</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>2 yemek kaşığı</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>15-10</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <p className={t.h3}>* Kaju fıstığı, antep fıstığı ve ay çekirdeği 2-3 gram karbonhidrat içerir</p>
                        </div>
                    </div>     
                </div>
            </div>
            <div className={t.divgenel}>
                <div className={t.divparmak}>
                    <div className={t.row3}>
                        <div className={t.col3}>
                            <div className={t.baslik2}>
                                <p className={t.h2}>3 Parmak Boyutunda</p>
                            </div>
                            <div className={t.img}>
                                <Image className={t.img2} src="/img/3parmak.png" width={'136px'} height={'298px'} alt="img">

                                </Image>
                            </div>
                        </div>
                        <div className={t.col3}>
                            <div className={t.baslik2}>
                                <p className={t.h2}>3 Yarım Parmak Boyutunda</p>
                            </div>
                            <div className={t.img}>
                                <Image src="/img/3yarimparmak.png" width={'136px'} height={'298px'} alt="img">

                                </Image>
                            </div>
                        </div>
                        <div className={t.col3}>
                            <div className={t.baslik2}>
                                <p className={t.h2}>2 Parmak Boyutunda</p>
                            </div>
                            <div className={t.img}>
                                <Image src="/img/2parmak.png" width={'136px'} height={'298px'} alt="img">

                                </Image>
                            </div>
                        </div>
                        <div className={t.col3}>
                            <div className={t.baslik2}>
                                <p className={t.h2}>2 Yarım Parmak Boyutunda</p>
                            </div>
                            <div className={t.img}>
                                <Image src="/img/2yarimparmak.png" width={'136px'} height={'298px'} alt="img">

                                </Image>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={t.divdoc}>
                <p className={t.h6}>Değişim listesinin tanımı nedir? Ne işe yarar?</p>
                <p className={t.h7}>Değişim listeleri, besinlerin enerji ve besin ögesi içeriklerine göre gruplandırılması ile oluşturulmuş listelerdir. Bu gruplardan her hangi birinde yer alan besinler listede belirtilen miktarlarda olmak şartıyla birbirleri yerine kullanılabilirler. Bu listeler beslenme programı hazırlayan ve uygulayan kişilere kolaylık ve esneklik sağlar.<br></br>
                Bu listelerdeki gruplarda bulunan besinlerin her ne kadar besin ögeleri açısından birbirinin yerine geçebileceği kabul edilse de çoğunlukla ayrı ayrı hesaplandığında bazı farklılıkların olduğu bilinmelidir. Ancak burada önemli olan beslenme programının hem hazırlanmasında hem de uygulanmasında kolaylığın sağlanabilmesidir.</p>
                <p className={t.h6}>Değişim listeleri kullanılırken nelere dikkat edilmeli?</p>
                <p className={t.h7}>Değişim listeleri kullanılırken, aynı besin grubu içerisinde yer alan besinlerin birbiri yerine kullanımına olanak sağlanarak, beslenme programlarının tekdüzeliği ortadan kaldırılmalı, bireylerin diyete uyumları artırılmalıdır. Bu nedenle, diyetisyenler tarafından değişim listelerinde yer alan besinler ve birbiri yerine kullanımları hakkında hastalara/bireylere bireysel eğitimler verilerek, değişim listelerinin kullanımının tam anlamıyla anlaşıldığından emin olunmalıdır.</p>
                <p className={t.h6}>1. Süt-Yoğurt Grubu Değişim Listesi</p>
                <p className={t.h7}>Bu gruptaki besinler temel olarak 9 gram karbonhidrat, 6 gram protein, 6 gram yağ içeriklerine göre sınıflandırılmıştır. Ülkemizde su bardaklarının bir standardı yoktur, 180 ml içerenden 400 ml içerene kadar çeşitli büyüklükte su bardakları vardır. Bu nedenle hastaya doğru ölçüyü anlatabilmek zordur. Görsel materyal ile anlatmak bu zorluğun giderilmesini sağlayabilir. Genellikle diyabetik hastalar için doğru ölçü önemlidir ve evlerinde tartı cihazlarının bulunması doğru ölçü için yararlı olabilir.
                 Ancak özellikle zayıflama diyetlerinde bu kadar hassas olmaya gerek yoktur. Ortalama ölçülerin kullanılması yeterlidir. Yine de doğru ölçüyü görebilmeleri açısından bir defaya mahsus tartım yapılması ve sonrasında yaklaşık bu miktarların kullanılması önerilebilir. Süt değişim miktarının 200ml alınmasının asıl nedeni, piyasada satılan kutu sütlerinin genelinin 200ml olmasıdır. Bu durum hastaya anlatma ve uygulama kolaylığı sağlar. Değişim listesinde süt için tam yağlı inek sütü temel alınmış, inek sütü dışında öneri yapılacaksa
                  tablo altındaki açıklama dikkate alınmalıdır. Manda sütünün yağı (1 değişimi ~14 g), koyun sütünün proteini (1 değişimi ~12 g) ve yağı (1 değişimi ~12 g) daha yüksektir. Bu ürünler kullanılmak istenirse, bu farklılık diyetisyen tarafından değerlendirilip tüketim sağlanabilir. Değişim listesinde yoğurt için tam yağlı inek sütünden yapılmış tam yağlı yoğurt temel alınmıştır. İnek sütünden yapılmış yoğurt dışında öneri yapılacaksa tablo altındaki açıklama dikkate alınmalıdır. Değişim listesinde tam yağlı süt ve yoğurt referans alındığı
                   için, eğer yarım yağlı süt ve yoğurt kullanılmak isteniyorsa yağ miktarı 3 gram, yağsız süt ve yoğurt kullanılmak isteniyorsa yağ miktarı 0 gram olarak alınmalıdır. Değişim listesinde ayran miktarı için, yoğurdun yarı yarıya sulandırıldığı varsayılmıştır. Bu nedenle hastanın kullanımına göre diyetisyen ayran miktarını ve ölçüsünü değiştirebilir. Değişim listesinde bulunmayan kefir tüketilmek istenirse 1 su bardağı (200ml) kefir 1 değişim olarak kabul edilebilir.</p>
                <p className={t.h6}>2. Et, Peynir, Yumurta Grubu Değişim Listesi</p>
                <p className={t.h7}>Bu gruptaki besinler temel olarak 6 gram protein, 5 gram yağ içeriklerine göre sınıflandırılmıştır. Kırmızı et, tavuk ve hindi başlığı altındaki besinlerin hem çiğ miktarlarının ortalama ölçüsü hem de gram olarak çiğ ve pişmiş miktarları verilmiştir. Böylece bu besinlerin daha doğru miktarlarda tüketilmesi sağlanır. Değişim listesinde bu grupta bulunan kırmızı etler için orta yağlı ürünler referans olarak alınmıştır. Ancak, tavuk etinin yağ miktarı (1 değişimi ~ 3 g) ve hindi etinin yağ miktarı (1 değişimi ~ 1 g)
                 değişim listesinde belirtilenden daha azdır. Bu ürünler kullanılmak istenirse, bu farklılık diyetisyen tarafından değerlendirilip tüketim sağlanabilir. Balıklarda, kılçıklı/kafalı pişirme şekli olabileceği için çiğ olarak net miktarların yanında brüt miktarların da olması önemlidir. Aslında balıkların yağ miktarları (1 değişimi ~ 1-2 g) değişim listesinde belirtilenden çok daha azdır. Ayrıca, konserve balıkların tüketilebilen miktarları listedeki balıkların net miktarları ile aynıdır. Peynirin ortalama ölçüsünün anlatılma zorluğu bilinmektedir.
                  Bu nedenle parmak boyutunda verilen ortalama ölçüler resim üzerinde de gösterilmiştir. Ortalama ölçüsü parmak boyutu olarak verilen hindi eti ve bazı balık türleri (somon, lüfer ve sazan balığı) için de bu resim kullanılabilir. Böylece ortalama ölçülerin daha iyi anlaşılması ve dolayısıyla daha doğru kullanılması sağlanır. Ayrıca, çökeleğin yağ miktarı (1 değişimi ~ 2 g) değişim listesinde belirtilenden daha azdır. Çökelek önerilmek istenirse, bu farklılık diyetisyen tarafından değerlendirilip tüketim sağlanabilir. Değişim listesinde tam yağlı
                   peynirler referans alındığı için, eğer yarım yağlı peynir önerilmek isteniyorsa yağ miktarı 1 değişim için 3 gram, az yağlı ve yağsız peynir önerilmek isteniyorsa yağ miktarı 1 değişim için 2 gram olarak alınmalıdır. Yukarıda verilen bilgilere bakıldığında et, peynir, yumurta grubu değişim listesinde bulunan bazı besinlerin 1 değişimlerinin 5 g yağ içeriğini tam olarak yansıtmadığı, genel olarak tavuk eti, hindi eti ve balık etlerinin yağ içeriklerinin daha düşük (1 değişimi ~ 1-3 g) olduğu görülmektedir. Diyetisyenin bu durumu bilmesi önemlidir.
                    Her ne kadar “gruplardan her hangi birinde yer alan besinler listede belirtilen miktarlarda olmak şartıyla birbirleri yerine kullanılabilirler” diye kabul edilse de bu grupta bunu demek çok doğru olmaz. Çünkü et ve peynir makro besin ögeleri yönünden birbirine benzer, ancak mikro besin ögeleri yönünden benzer değildir. Bu duruma örnekler verilebilir. Et, demir açısından önemli bir kaynak olurken süt ve yoğurtta demir yok denecek kadar azdır. Süt ve yoğurt, kalsiyum açısından önemli bir kaynak olurken etde kalsiyum yok denecek kadar azdır. Bu nedenle
                     bu grubu kullanırken etin ve sütün birbirinin yerine geçmediği ve ayrı ayrı kullanılmasının daha doğru olacağı bilinmelidir. Bu gruptan toplam kullanılan değişimlerin hepsinin et veya hepsinin süt ve yoğurt olarak kullanılmaması, bir kısmının et bir kısmının da süt ve yoğurt olarak kullanılması önerilmelidir. Anne sütünden sonra örnek protein olarak tanımlanan yumurta kaliteli protein içermesine rağmen genellikle özel durumlar dışında örnek menüye yazılmamaktadır. Ancak, diyetisyen kişiye özel beslenme programı hazırlarken diyet önerilerine uygun şekilde, yumurtanın et veya peynir yerine tüketilmesini önerebilir.</p>
                <p className={t.h6}>3. Ekmek, Tahıl, Kurubaklagil Grubu Değişim Listesi</p>
                <p className={t.h7}>Bu gruptaki besinler temel olarak 15g karbonhidrat, 2 g protein içeriklerine göre sınıflandırılmıştır Ekmek çeşitlerinde karbonhidrat içeriklerine göre 1 değişim miktarlarında farklılıklar vardır. Beyaz ekmek, hamburger ekmeklerinin 1 değişimi 25 g iken diğer ekmek türlerinde 30 g olarak belirlenmiştir. Tahıllarda ortalama ölçü miktarları pişmiş tepeleme yemek kaşığı olarak verilmiştir. Pirinç pilavı 2 yemek kaşığı, diğerleri 3 yemek kaşığıdır. Çorbalarda ölçü pişmiş olarak 1 küçük kasedir. Kurubaklagillerde ortalama ölçü pişmiş tepeleme 3 yemek kaşığı olarak belirlenmiştir. Tahıllar, çorbalar ve kurubaklagiller için verilen gram cinsinden miktarlar pişmiş ortalama ölçü karşılığı olan miktarlardır. Diğer besinler grubunda bulunan besinlerin miktarları çiğ net miktarları göstermektedir. Listede bulunan kurubaklagiller daha çok (1 değişimi ~ 5 g), kestane ihmal edilecek kadar az (1 değişimi ~ 0.4 g) protein içerir. Bu durum diyetisyen tarafından bilinmelidir. Çorba, pilav, makarna ve kurubaklagil yemeklerinin 1 değişim miktarlarına 1 değişim yağ (5 g) girmektedir. Bu yağ miktarı özellikle klinikte yatan hastalara diyet düzenlenirken kullanılır. Yemeklerin içine giren yağ miktarı özellikle poliklinikte diyet verilirken daha az kullanılma yönünde değişebilir.</p>
                <p className={t.h6}>4. Meyve Grubu Değişim Listesi</p>
                <p className={t.h7}>Bu gruptaki besinler temel olarak 15g karbonhidrat içeriklerine göre sınıflandırılmıştır. Meyveler tüketilirken atıkları ayrılacağından, meyvelerin brüt ve net ağırlıkları listede ayrı ayrı verilmiştir. Böylece isteğe göre, meyve satın alındığındaki brüt miktarların ortalama ölçüleri kullanılarak veya satın alındıktan sonra meyvenin atıkları ayrılıp net miktarları evde tartı cihazı varsa tartılarak tüketilebilir. Taze sıkılmış meyve suları kullanılmak istenirse değişimde bulunan meyve miktarları dikkate alınmalıdır.</p>
                <p className={t.h6}>5. Sebze Grubu Değişim Listesi</p>
                <p className={t.h7}>Bu gruptaki besinler temel olarak 6g karbonhidrat, 2 g protein içeriklerine göre sınıflandırılmıştır. Sebzeler kullanılırken atıkları ayrılacağından, sebzelerin brüt ve net ağırlıkları listede ayrı ayrı verilmiştir. Böylece isteğe göre, sebze satın alındığındaki brüt miktarların ortalama ölçüleri de kullanılabilir veya satın alındıktan sonra sebzenin atıkları ayrılıp net miktarları evde tartı cihazı varsa tartılarak da kullanılabilir. Bunların yanında pişmiş sebzelerin ortalama 5-6 yemek kaşığı miktarları 1 değişim sebze olarak tüketilebilir. Bal kabağı, pırasa, turp, lahana ihmal edilecek kadar çok düşük (1 değişimi yaklaşık 0.3 g) protein miktarına sahiptir. Mantar, yer elması, börülce, brüksel lahanası, brokoli, taze bakla, enginarın protein miktarları daha yüksektir (1 değişimi yaklaşık 3-5 g). Semizotu ve ıspanağın protein miktarları ise oldukça yüksektir (1 değişimi yaklaşık 8-10 g). Bu durum diyetisyen tarafından bilinmelidir. Tere, roka, nane, kıvırcık, marul, iceberg, maydanoz serbest olarak yenilebilir, çünkü yemeklerin içerisinde veya salata olarak tüketilen miktarları azdır, bu nedenle ihmal edilebilir. Listede yer alan diğer çiğ yenilebilen sebzelerin tüketilebilir miktarlarının diyetisyene danışılması ve bu doğrultuda tüketilmesi uygundur. Taze sebze suları kullanılmak istenirse değişimde bulunan sebze miktarları dikkate alınmalıdır.</p>
                <p className={t.h6}>6. Yağ Grubu Değişim Listesi</p>
                <p className={t.h7}>Bu gruptaki besinler temel olarak 2 g protein, 5 g yağ içeriklerine göre sınıflandırılmıştır. Yağlı tohumlar ve sert kabuklu yemişlerin, yağ grubunda bulunan yiyecekler ile benzer şekilde yağ içermesi yanında protein de içermesi nedeniyle ayrı bir değişim grubu olarak değerlendirilmelidir. Ayrıca yağ değişiminden farklı olarak yağlı tohumlar ve sert kabuklu yemişlerin proteinin yanında antioksidan özellikleri, posa, magnezyum, E vitamini gibi ögeler ve bir miktar karbonhidrat içermesi nedeniyle de ayrı bir değişim olarak kullanılması daha doğrudur. Kaju fıstığı, antep fıstığı ve ay çekirdeğinin, yağ içeriğinin yanında 1 değişimi ~ 2-3 g karbonhidrat içerir. Bu durum diyetisyen tarafından bilinmelidir.</p>
            </div>
        </div>
    )

};

function sutclick(){
    if(document.getElementById("divsut").style.display=="none"){
        document.getElementById("divsut").style.display="block";
    }else{
        document.getElementById("divsut").style.display="none";
    }
}
function etclick(){
    if(document.getElementById("divet").style.display=="none"){
        document.getElementById("divet").style.display="block";
    }else{
        document.getElementById("divet").style.display="none";
    }
}
function ekmclick(){
    if(document.getElementById("divekm").style.display=="none"){
        document.getElementById("divekm").style.display="block";
    }else{
        document.getElementById("divekm").style.display="none";
    }
}
function sebzeclick(){
    if(document.getElementById("divseb").style.display=="none"){
        document.getElementById("divseb").style.display="block";
    }else{
        document.getElementById("divseb").style.display="none";
    }
}
function meyveclick(){
    if(document.getElementById("divmey").style.display=="none"){
        document.getElementById("divmey").style.display="block";
    }else{
        document.getElementById("divmey").style.display="none";
    }
}
function yagclick(){
    if(document.getElementById("divyag").style.display=="none"){
        document.getElementById("divyag").style.display="block";
    }else{
        document.getElementById("divyag").style.display="none";
    }
}
function ytohclick(){
    if(document.getElementById("divytoh").style.display=="none"){
        document.getElementById("divytoh").style.display="block";
    }else{
        document.getElementById("divytoh").style.display="none";
    }
}