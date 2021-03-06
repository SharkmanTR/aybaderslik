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
                <title>AYBA Derslik | De??i??im Listesi</title>
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
                    <p className={t.h1} onClick={sutclick}>S??t De??i??imi</p>
                    <div id="divsut" style={{display:"none"}}>
                        <div  className={t.row}>
                            <div className={t.col}>
                                <p className={t.h2}>Yiyecek Ad??</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Ortalama ??l????</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Miktar(g)</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>S??t</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 su barda????</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>200</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Yo??urt</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3/4 su barda???? (4 tepeleme yemek ka????????)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>150</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Ev yo??urdu</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 su barda????</p>
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
                                <p className={t.h3}>1.5 su barda????</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>300</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={t.baslik} style={{marginTop:'10px'}}>
                    <p className={t.h1} onClick={etclick}>Et De??i??imi</p>
                    <div id="divet" style={{display:"none"}}>
                        <div  className={t.row}>
                            <div className={t.col}>
                                <p className={t.h2}>Yiyecek Ad??</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Ortalama ??l????</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Miktar(g)</p>
                            </div>
                        </div>
                        <div  className={t.row}>
                            <div className={t.col}>
                                <p className={t.h2}>K??rm??z?? et, orta ya??l??</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>??i??</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Pi??mi??-??i??</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Ku??ba????</p>
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
                                <p className={t.h3}>K??yma</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 yemek ka????????</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20-30</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>K??fte</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 k??????k yumurta boyutunda</p>
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
                                <p className={t.h3}>1 avu?? i??i kadar</p>
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
                                <p className={t.h2}>??i??</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Pi??mi??-??i??</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Tavuk g??????s fleto</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1/4 k??????k boy</p>
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
                                <p className={t.h3}>1 k??????k boy</p>
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
                                <p className={t.h2}>Bal??klar, ??i??</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>??i??, br??t</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Br??t-net</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Levrek</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1/5 k??????k boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>30-55</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Alabal??k</p>
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
                                <p className={t.h3}>??ipura</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1/4 k??????k boy</p>
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
                                <p className={t.h3}>??stavrit</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>4 k??????k boy</p>
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
                                <p className={t.h3}>L??fer</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 yar??m parmak boyutunda</p>
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
                                <p className={t.h2}>??i??, br??t</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Net-br??t</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Yumurta(tavuk)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 k??????k boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>50-55</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Yumurta(b??ld??rc??n)</p>
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
                                <p className={t.h3}>Beyaz peynir(inek), tam ya??l??</p>
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
                                <p className={t.h3}>Koyun peyniri,tam ya??l??</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 yar??m parmak boyutunda</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>30</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Ka??ar peynir(taze/eski)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 yar??m parmak boyutunda</p>
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
                                <p className={t.h3}>3 yemek ka????????(tepeleme)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>50</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>????kelek</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>2 yemek ka????????</p>
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
                                <p className={t.h3}>3 yar??m parmak boyutunda</p>
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
                                <p className={t.h3}>3 yar??m parmak boyutunda</p>
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
                                <p className={t.h3}>3 yar??m parmak boyutunda</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>30</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>S??zme peynir</p>
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
                                <p className={t.h3}>1 yemek ka????????(tepeleme)</p>
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
                                <p className={t.h3}>3 yar??m parmak boyutunda</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>30</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>??rg?? peyniri</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 yar??m parmak boyutunda</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>30</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>??e??il peynir</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 yar??m parmak boyutunda</p>
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
                                <p className={t.h3}>3 yar??m parmak boyutunda</p>
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
                                <p className={t.h3}>2 yar??m parmak boyutunda</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <p className={t.h3}>*????kelek ve tavu??un ya?? miktar?? daha azd??r. Bal??klar??n ya?? miktar?? ise ??ok daha azd??r. </p>
                        </div>
                    </div>
                </div>
                <div className={t.baslik} style={{marginTop:"10px"}}>
                    <p className={t.h1} onClick={ekmclick}>Ekmek De??i??imi</p>
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
                                <p className={t.h3}>Beyaz, bu??day</p>
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
                                <p className={t.h3}>M??s??r</p>
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
                                <p className={t.h3}>??avdar/yulaf/tam bu??day/kepekli</p>
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
                                <p className={t.h3}>Lava??</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 k??????k boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>30</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Hamburger ekme??i (k??????k)</p>
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
                                <p className={t.h3}>Sandvi?? ekme??i (k??????k)</p>
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
                                <p className={t.h2}>Tah??llar</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Pi??mi?? (tepeleme)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>??i??</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Un (bu??day/m??s??r)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 yemek ka???????? (silme), ??i??</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Pirin?? pilav??*</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>2 yemek ka????????</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Bulgur pilav??*</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 yemek ka????????</p>
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
                                <p className={t.h3}>3 yemek ka????????</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Eri??te*</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 yemek ka????????</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Yarma (a??urelik bu??day)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 yemek ka????????</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>25</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h2}>??orbalar</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Pi??mi??</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>??i??</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Mercimek ??orbas??*</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 k??????k kase</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>25</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>??ehriye ??orbas??*</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 k??????k kase</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Pirin?? ??orbas??*</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 k??????k kase</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Tarhana ??orbas??*</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 k??????k kase</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Tarhana ??orbas??*</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 k??????k kase</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Un ??orbas??*</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 k??????k kase</p>
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
                                <p className={t.h2}>Pi??mi?? (tepeleme)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>??i??</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Nohut*</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 yemek ka????????</p>
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
                                <p className={t.h3}>3 yemek ka????????</p>
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
                                <p className={t.h3}>3 yemek ka????????</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>25</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Mercimek* (ye??il-k??rm??z??)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>2 yemek ka????????</p>
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
                                <p className={t.h3}>4 yemek ka????????</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>30</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Kuru b??r??lce*</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>2 yemek ka????????</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>35</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h2}>Di??er besinler</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}></p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>??i?? (net)</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Patates</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 k??????k boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>100</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Bezelye (i??)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>4 yemek ka???????? (??i??)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>125</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Bezelye (i??)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 yemek ka???????? (pi??mi??)</p>
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
                                <p className={t.h3}>Ko??an m??s??r</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 k??????k boy (b??t??n)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>90</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Ko??an m??s??r</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>4 yemek ka???????? (tane)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>90</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Patlam???? m??s??r (ya??s??z)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 su barda????</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>25</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Leblebi (sar??/beyaz)</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1/2 ??ay barda????</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>25</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Bisk??vi (tuzlu, diyet)</p>
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
                                <p className={t.h3}>??rmik</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>2 yemek ka????????</p>
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
                                <p className={t.h3}>2 yemek ka????????</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>B??reklik yufka</p>
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
                                <p className={t.h3}>1,5 b??y??k boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <p className={t.h3}>* Bu miktardaki yemekler 1 de??i??im ya?? (5 gram) i??erir</p>
                            <p className={t.h3}>** Kurubaklagiller daha ??ok (1 de??i??im~5 gram), kestane daha az (1 de??i??im~0,4 gram) protein i??erir</p>
                        </div>
                    </div>
                </div>
                <div className={t.baslik} style={{marginTop:"10px"}}>
                    <p className={t.h1} onClick={sebzeclick}>Sebze De??i??imi</p>
                    <div id="divseb" style={{display:"none"}} >
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h2}>Besin Ad??</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h2}>Ortalama ??l???? ??i?? br??t</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h2}>Br??t-net miktar (g)</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>K??rm??z?? turp*</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>1 orta boy (??i??)</p>
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
                                <p className={t.h3}>1 b??y??k boy (??i??)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>115-110</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Salatal??k/acur</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>2 orta boy (??i??)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>250-200</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Kuru so??an</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>1/2 orta boy (??i??)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>85-75</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Ye??il so??an</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>6 orta boy (??i??)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>140-125</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Ye??il sivri biber</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>8 b??y??k boy (??i??)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>145-125</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Dolmal??k biber</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>3 b??y??k boy (??i??)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>165-150</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>??arliston biber</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>5 b??y??k boy (??i??)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>190-175</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Asma yapra???? (??i??)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>8 b??y??k boy (??i??)</p>
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
                                <p className={t.h3}>2 yaprak (b??t??n) orta boy (??i??)-<br></br>5-6 yemek ka???????? (pi??mi??)</p>
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
                                <p className={t.h3}>3 su barda???? do??ranm???? (??i??)-<br></br>5-6 yemek ka???????? (pi??mi??)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>150-150<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>K??rm??z?? lahana</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>1 su barda???? do??ranm???? (??i??)-<br></br>5-6 yemek ka???????? (pi??mi??)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>80-80<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Br??ksel lahanas??**</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>5 b??y??k boy (??i??)-<br></br>5-6 yemek ka???????? (pi??mi??)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>125-125<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>P??rasa*</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>1 orta boy (??i??)-<br></br>5-6 yemek ka???????? (pi??mi??)</p>
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
                                <p className={t.h3}>1 b??y??k boy (??i??)<br></br>5-6 yemek ka???????? (pi??mi??)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>265-250<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Bal kaba???? (kabuksuz)*</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>1 orta boy kare dilim 8??i??)-<br></br>5-6 yemek ka???????? (pi??mi??)</p>
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
                                <p className={t.h3}>1/2 orta boy (??i??)-<br></br>5-6 yemek ka???????? (pi??mi??)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>170-100<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Havu??</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>2 k??????k boy (??i??)-<br></br>5-6 yemek ka???????? (pi??mi??)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>135-100<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Pancar k??rm??z??</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>3/4 k??????k boy (??i??)-<br></br>5-6 yemek ka???????? (pi??mi??)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>90-75<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>??algam</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>1 b??y??k boy (??i??)-<br></br>5-6 yemek ka???????? (pi??mi??)</p>
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
                                <p className={t.h3}>6 orta boy (??i??)-<br></br>5-6 yemek ka????????</p>
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
                                <p className={t.h3}>30 b??y??k boy (??i??)-<br></br>5-6 yemek ka???????? (pi??mi??)</p>
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
                                <p className={t.h3}>3 orta boy ??i??ek (??i??)-<br></br>5-6 yemek ka???????? (pi??mi??)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>150-150<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Paz??</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>13 yaprak orta boy (??i??)-<br></br>5-6 yemek ka???????? (pi??mi??)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>200-200<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Ebeg??meci</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>5 su barda???? do??ranm???? (??i??)-<br></br>5-6 yemek ka???????? (pi??mi??)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>100-100<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Mantar (k??lt??r)**</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>8 orta boy (??i??)-<br></br>5-6 yemek ka???????? (pi??mi??)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>225-225<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Yer elmas??**</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>2 orta boy (??i??)-<br></br>-5-6 yemek ka???????? (pi??mi??)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>190-150<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Taze b??r??lce**</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>8 orta boy (??i??)-<br></br>5-6 yemek ka???????? (pi??mi??)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>100-100<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Enginar (??anak)*</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>2 b??y??k boy (??i??)-<br></br>5-6 yemek ka???????? (pi??mi??)</p>
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
                                <p className={t.h3}>1 k??????k ba?? (??i??)-<br></br>5-6 yemek (pi??mi??)</p>
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
                                <p className={t.h3}>1 orta ba?? (??i??)- <br></br>5-6 yemek ka???????? (pi??mi??)</p>
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
                                <p className={t.h3}>5 orta boy (??i??)-<br></br>5-6 yemek ka???????? (pi??mi??)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>15-15<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <div className={t.col2}>
                                <p className={t.h3}>Kuru patl??can</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>6 orta boy (??i??)-<br></br>5-6 yemek ka???????? (pi??mi??)</p>
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
                                <p className={t.h3}>3 yemek ka???????? (??i??)-<br></br>5-6 yemek ka???????? (pi??mi??)</p>
                            </div>
                            <div className={t.col2}>
                                <p className={t.h3}>25-25<br></br>-</p>
                            </div>
                        </div>
                        <div className={t.row2}>
                            <p className={t.h3}>* Bal kaba????, p??rasa, turp, lahana ihmal edilebilecek kadar d??????k protein miktar??na sahiptir</p>
                            <p className={t.h3}>** Mantar, yer elmas??, b??r??lce, br??ksel lahanas??, brokoli, taze bakla, enginar??n protein miktarlar?? daha y??ksektir</p>
                            <p className={t.h3}>*** Semizotu ve ??spana????n protein miktarlar?? olduk??a y??ksektir</p>
                        </div>
                    </div>
                </div>
                <div className={t.baslik} style={{marginTop:"10px"}}>
                    <p className={t.h1} onClick={meyveclick}>Meyve De??i??imi</p>
                    <div id="divmey" style={{display:"none"}}>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h2}>Yiyecek ad??</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Ortalama ??l????, br??t</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Br??t-net miktar (g)</p>
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
                                <p className={t.h3}>2 parmak kal??nl??????nda 1 dilim</p>
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
                                <p className={t.h3}>1 k??????k boy</p>
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
                                <p className={t.h3}>1/2 b??y??k boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>140-110</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Babutsa (kakt??s meyvesi)</p>
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
                                <p className={t.h3}>B??????rtlen</p>
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
                                <p className={t.h3}>??ilek</p>
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
                                <p className={t.h3}>3/4 su barda???? kar??????k boy</p>
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
                                <p className={t.h3}>Erik, m??rd??m</p>
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
                                <p className={t.h3}>Erik, ye??il</p>
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
                                <p className={t.h3}>??ncir</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>2 k??????k boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>120-110</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Karayemi??</p>
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
                                <p className={t.h3}>1/8 boyun yar??s??</p>
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
                                <p className={t.h3}>1/8 k??????k boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>325-170</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Kay??s??</p>
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
                                <p className={t.h3}>11 b??y??k boy</p>
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
                                <p className={t.h3}>2 k??????k boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>125-110</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>K??z??lc??k</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 su barda????</p>
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
                                <p className={t.h3}>2 b??y??k boy</p>
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
                                <p className={t.h3}>1/3 b??y??k boy</p>
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
                                <p className={t.h3}>1 k??????k boy</p>
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
                                <p className={t.h3}>??eftali</p>
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
                                <p className={t.h3}>??z??m</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>25 kar??????k boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>100-100</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Vi??ne</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>35 kar??????k boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>150-125</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Trabzon hurmas??</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 k??????k boy</p>
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
                                <p className={t.h3}>1.5 su barda????</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>175-175</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Yeni d??nya</p>
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
                                <p className={t.h3}>2 k??????k boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>25-25</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Kuru kay??s??</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>4 k??????k boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>25-25</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Kuru ??z??m</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 yemek ka???????? (tepeleme)</p>
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
                                <p className={t.h3}>2 yemek ka???????? tepeleme</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20-20</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={t.baslik} style={{marginTop:"10px"}}>
                    <p className={t.h1} onClick={yagclick}>Ya?? De??i??imi</p>
                    <div id="divyag" style={{display:"none"}}>
                    <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h2}>Yiyecek ad??</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Ortalama ??l????</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Br??t-net miktar (g)</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>S??v?? ya??</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>1 tatl?? ka????????</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>5-5</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Siyah/ye??il zeytin</p>
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
                                <p className={t.h3}>1/4 k??????k boy</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>55-40</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={t.baslik} style={{marginTop:"10px"}}>
                    <p className={t.h1} onClick={ytohclick}>Ya??l?? Tohumlar De??i??imi</p>
                    <div id="divytoh" style={{display:"none"}}>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h2}>Yiyecek ad??</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Ortalama ??l????</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h2}>Br??t-net miktar (g)</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Ceviz</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>2 b??t??n boy</p>
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
                                <p className={t.h3}>Antep f??st??????*</p>
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
                                <p className={t.h3}>Kaju f??st??????*</p>
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
                                <p className={t.h3}>Yer f??st??????</p>
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
                                <p className={t.h3}>Ay ??ekirde??i*</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>3 yemek ka????????</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>20-10</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <div className={t.col}>
                                <p className={t.h3}>Kabak ??ekirde??i</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>2 yemek ka????????</p>
                            </div>
                            <div className={t.col}>
                                <p className={t.h3}>15-10</p>
                            </div>
                        </div>
                        <div className={t.row}>
                            <p className={t.h3}>* Kaju f??st??????, antep f??st?????? ve ay ??ekirde??i 2-3 gram karbonhidrat i??erir</p>
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
                                <p className={t.h2}>3 Yar??m Parmak Boyutunda</p>
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
                                <p className={t.h2}>2 Yar??m Parmak Boyutunda</p>
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
                <p className={t.h6}>De??i??im listesinin tan??m?? nedir? Ne i??e yarar?</p>
                <p className={t.h7}>De??i??im listeleri, besinlerin enerji ve besin ??gesi i??eriklerine g??re grupland??r??lmas?? ile olu??turulmu?? listelerdir. Bu gruplardan her hangi birinde yer alan besinler listede belirtilen miktarlarda olmak ??art??yla birbirleri yerine kullan??labilirler. Bu listeler beslenme program?? haz??rlayan ve uygulayan ki??ilere kolayl??k ve esneklik sa??lar.<br></br>
                Bu listelerdeki gruplarda bulunan besinlerin her ne kadar besin ??geleri a????s??ndan birbirinin yerine ge??ebilece??i kabul edilse de ??o??unlukla ayr?? ayr?? hesapland??????nda baz?? farkl??l??klar??n oldu??u bilinmelidir. Ancak burada ??nemli olan beslenme program??n??n hem haz??rlanmas??nda hem de uygulanmas??nda kolayl??????n sa??lanabilmesidir.</p>
                <p className={t.h6}>De??i??im listeleri kullan??l??rken nelere dikkat edilmeli?</p>
                <p className={t.h7}>De??i??im listeleri kullan??l??rken, ayn?? besin grubu i??erisinde yer alan besinlerin birbiri yerine kullan??m??na olanak sa??lanarak, beslenme programlar??n??n tekd??zeli??i ortadan kald??r??lmal??, bireylerin diyete uyumlar?? art??r??lmal??d??r. Bu nedenle, diyetisyenler taraf??ndan de??i??im listelerinde yer alan besinler ve birbiri yerine kullan??mlar?? hakk??nda hastalara/bireylere bireysel e??itimler verilerek, de??i??im listelerinin kullan??m??n??n tam anlam??yla anla????ld??????ndan emin olunmal??d??r.</p>
                <p className={t.h6}>1. S??t-Yo??urt Grubu De??i??im Listesi</p>
                <p className={t.h7}>Bu gruptaki besinler temel olarak 9 gram karbonhidrat, 6 gram protein, 6 gram ya?? i??eriklerine g??re s??n??fland??r??lm????t??r. ??lkemizde su bardaklar??n??n bir standard?? yoktur, 180 ml i??erenden 400 ml i??erene kadar ??e??itli b??y??kl??kte su bardaklar?? vard??r. Bu nedenle hastaya do??ru ??l????y?? anlatabilmek zordur. G??rsel materyal ile anlatmak bu zorlu??un giderilmesini sa??layabilir. Genellikle diyabetik hastalar i??in do??ru ??l???? ??nemlidir ve evlerinde tart?? cihazlar??n??n bulunmas?? do??ru ??l???? i??in yararl?? olabilir.
                 Ancak ??zellikle zay??flama diyetlerinde bu kadar hassas olmaya gerek yoktur. Ortalama ??l????lerin kullan??lmas?? yeterlidir. Yine de do??ru ??l????y?? g??rebilmeleri a????s??ndan bir defaya mahsus tart??m yap??lmas?? ve sonras??nda yakla????k bu miktarlar??n kullan??lmas?? ??nerilebilir. S??t de??i??im miktar??n??n 200ml al??nmas??n??n as??l nedeni, piyasada sat??lan kutu s??tlerinin genelinin 200ml olmas??d??r. Bu durum hastaya anlatma ve uygulama kolayl?????? sa??lar. De??i??im listesinde s??t i??in tam ya??l?? inek s??t?? temel al??nm????, inek s??t?? d??????nda ??neri yap??lacaksa
                  tablo alt??ndaki a????klama dikkate al??nmal??d??r. Manda s??t??n??n ya???? (1 de??i??imi ~14 g), koyun s??t??n??n proteini (1 de??i??imi ~12 g) ve ya???? (1 de??i??imi ~12 g) daha y??ksektir. Bu ??r??nler kullan??lmak istenirse, bu farkl??l??k diyetisyen taraf??ndan de??erlendirilip t??ketim sa??lanabilir. De??i??im listesinde yo??urt i??in tam ya??l?? inek s??t??nden yap??lm???? tam ya??l?? yo??urt temel al??nm????t??r. ??nek s??t??nden yap??lm???? yo??urt d??????nda ??neri yap??lacaksa tablo alt??ndaki a????klama dikkate al??nmal??d??r. De??i??im listesinde tam ya??l?? s??t ve yo??urt referans al??nd??????
                   i??in, e??er yar??m ya??l?? s??t ve yo??urt kullan??lmak isteniyorsa ya?? miktar?? 3 gram, ya??s??z s??t ve yo??urt kullan??lmak isteniyorsa ya?? miktar?? 0 gram olarak al??nmal??d??r. De??i??im listesinde ayran miktar?? i??in, yo??urdun yar?? yar??ya suland??r??ld?????? varsay??lm????t??r. Bu nedenle hastan??n kullan??m??na g??re diyetisyen ayran miktar??n?? ve ??l????s??n?? de??i??tirebilir. De??i??im listesinde bulunmayan kefir t??ketilmek istenirse 1 su barda???? (200ml) kefir 1 de??i??im olarak kabul edilebilir.</p>
                <p className={t.h6}>2. Et, Peynir, Yumurta Grubu De??i??im Listesi</p>
                <p className={t.h7}>Bu gruptaki besinler temel olarak 6 gram protein, 5 gram ya?? i??eriklerine g??re s??n??fland??r??lm????t??r. K??rm??z?? et, tavuk ve hindi ba??l?????? alt??ndaki besinlerin hem ??i?? miktarlar??n??n ortalama ??l????s?? hem de gram olarak ??i?? ve pi??mi?? miktarlar?? verilmi??tir. B??ylece bu besinlerin daha do??ru miktarlarda t??ketilmesi sa??lan??r. De??i??im listesinde bu grupta bulunan k??rm??z?? etler i??in orta ya??l?? ??r??nler referans olarak al??nm????t??r. Ancak, tavuk etinin ya?? miktar?? (1 de??i??imi ~ 3 g) ve hindi etinin ya?? miktar?? (1 de??i??imi ~ 1 g)
                 de??i??im listesinde belirtilenden daha azd??r. Bu ??r??nler kullan??lmak istenirse, bu farkl??l??k diyetisyen taraf??ndan de??erlendirilip t??ketim sa??lanabilir. Bal??klarda, k??l????kl??/kafal?? pi??irme ??ekli olabilece??i i??in ??i?? olarak net miktarlar??n yan??nda br??t miktarlar??n da olmas?? ??nemlidir. Asl??nda bal??klar??n ya?? miktarlar?? (1 de??i??imi ~ 1-2 g) de??i??im listesinde belirtilenden ??ok daha azd??r. Ayr??ca, konserve bal??klar??n t??ketilebilen miktarlar?? listedeki bal??klar??n net miktarlar?? ile ayn??d??r. Peynirin ortalama ??l????s??n??n anlat??lma zorlu??u bilinmektedir.
                  Bu nedenle parmak boyutunda verilen ortalama ??l????ler resim ??zerinde de g??sterilmi??tir. Ortalama ??l????s?? parmak boyutu olarak verilen hindi eti ve baz?? bal??k t??rleri (somon, l??fer ve sazan bal??????) i??in de bu resim kullan??labilir. B??ylece ortalama ??l????lerin daha iyi anla????lmas?? ve dolay??s??yla daha do??ru kullan??lmas?? sa??lan??r. Ayr??ca, ????kele??in ya?? miktar?? (1 de??i??imi ~ 2 g) de??i??im listesinde belirtilenden daha azd??r. ????kelek ??nerilmek istenirse, bu farkl??l??k diyetisyen taraf??ndan de??erlendirilip t??ketim sa??lanabilir. De??i??im listesinde tam ya??l??
                   peynirler referans al??nd?????? i??in, e??er yar??m ya??l?? peynir ??nerilmek isteniyorsa ya?? miktar?? 1 de??i??im i??in 3 gram, az ya??l?? ve ya??s??z peynir ??nerilmek isteniyorsa ya?? miktar?? 1 de??i??im i??in 2 gram olarak al??nmal??d??r. Yukar??da verilen bilgilere bak??ld??????nda et, peynir, yumurta grubu de??i??im listesinde bulunan baz?? besinlerin 1 de??i??imlerinin 5 g ya?? i??eri??ini tam olarak yans??tmad??????, genel olarak tavuk eti, hindi eti ve bal??k etlerinin ya?? i??eriklerinin daha d??????k (1 de??i??imi ~ 1-3 g) oldu??u g??r??lmektedir. Diyetisyenin bu durumu bilmesi ??nemlidir.
                    Her ne kadar ???gruplardan her hangi birinde yer alan besinler listede belirtilen miktarlarda olmak ??art??yla birbirleri yerine kullan??labilirler??? diye kabul edilse de bu grupta bunu demek ??ok do??ru olmaz. ????nk?? et ve peynir makro besin ??geleri y??n??nden birbirine benzer, ancak mikro besin ??geleri y??n??nden benzer de??ildir. Bu duruma ??rnekler verilebilir. Et, demir a????s??ndan ??nemli bir kaynak olurken s??t ve yo??urtta demir yok denecek kadar azd??r. S??t ve yo??urt, kalsiyum a????s??ndan ??nemli bir kaynak olurken etde kalsiyum yok denecek kadar azd??r. Bu nedenle
                     bu grubu kullan??rken etin ve s??t??n birbirinin yerine ge??medi??i ve ayr?? ayr?? kullan??lmas??n??n daha do??ru olaca???? bilinmelidir. Bu gruptan toplam kullan??lan de??i??imlerin hepsinin et veya hepsinin s??t ve yo??urt olarak kullan??lmamas??, bir k??sm??n??n et bir k??sm??n??n da s??t ve yo??urt olarak kullan??lmas?? ??nerilmelidir. Anne s??t??nden sonra ??rnek protein olarak tan??mlanan yumurta kaliteli protein i??ermesine ra??men genellikle ??zel durumlar d??????nda ??rnek men??ye yaz??lmamaktad??r. Ancak, diyetisyen ki??iye ??zel beslenme program?? haz??rlarken diyet ??nerilerine uygun ??ekilde, yumurtan??n et veya peynir yerine t??ketilmesini ??nerebilir.</p>
                <p className={t.h6}>3. Ekmek, Tah??l, Kurubaklagil Grubu De??i??im Listesi</p>
                <p className={t.h7}>Bu gruptaki besinler temel olarak 15g karbonhidrat, 2 g protein i??eriklerine g??re s??n??fland??r??lm????t??r Ekmek ??e??itlerinde karbonhidrat i??eriklerine g??re 1 de??i??im miktarlar??nda farkl??l??klar vard??r. Beyaz ekmek, hamburger ekmeklerinin 1 de??i??imi 25 g iken di??er ekmek t??rlerinde 30 g olarak belirlenmi??tir. Tah??llarda ortalama ??l???? miktarlar?? pi??mi?? tepeleme yemek ka???????? olarak verilmi??tir. Pirin?? pilav?? 2 yemek ka????????, di??erleri 3 yemek ka????????d??r. ??orbalarda ??l???? pi??mi?? olarak 1 k??????k kasedir. Kurubaklagillerde ortalama ??l???? pi??mi?? tepeleme 3 yemek ka???????? olarak belirlenmi??tir. Tah??llar, ??orbalar ve kurubaklagiller i??in verilen gram cinsinden miktarlar pi??mi?? ortalama ??l???? kar????l?????? olan miktarlard??r. Di??er besinler grubunda bulunan besinlerin miktarlar?? ??i?? net miktarlar?? g??stermektedir. Listede bulunan kurubaklagiller daha ??ok (1 de??i??imi ~ 5 g), kestane ihmal edilecek kadar az (1 de??i??imi ~ 0.4 g) protein i??erir. Bu durum diyetisyen taraf??ndan bilinmelidir. ??orba, pilav, makarna ve kurubaklagil yemeklerinin 1 de??i??im miktarlar??na 1 de??i??im ya?? (5 g) girmektedir. Bu ya?? miktar?? ??zellikle klinikte yatan hastalara diyet d??zenlenirken kullan??l??r. Yemeklerin i??ine giren ya?? miktar?? ??zellikle poliklinikte diyet verilirken daha az kullan??lma y??n??nde de??i??ebilir.</p>
                <p className={t.h6}>4. Meyve Grubu De??i??im Listesi</p>
                <p className={t.h7}>Bu gruptaki besinler temel olarak 15g karbonhidrat i??eriklerine g??re s??n??fland??r??lm????t??r. Meyveler t??ketilirken at??klar?? ayr??laca????ndan, meyvelerin br??t ve net a????rl??klar?? listede ayr?? ayr?? verilmi??tir. B??ylece iste??e g??re, meyve sat??n al??nd??????ndaki br??t miktarlar??n ortalama ??l????leri kullan??larak veya sat??n al??nd??ktan sonra meyvenin at??klar?? ayr??l??p net miktarlar?? evde tart?? cihaz?? varsa tart??larak t??ketilebilir. Taze s??k??lm???? meyve sular?? kullan??lmak istenirse de??i??imde bulunan meyve miktarlar?? dikkate al??nmal??d??r.</p>
                <p className={t.h6}>5. Sebze Grubu De??i??im Listesi</p>
                <p className={t.h7}>Bu gruptaki besinler temel olarak 6g karbonhidrat, 2 g protein i??eriklerine g??re s??n??fland??r??lm????t??r. Sebzeler kullan??l??rken at??klar?? ayr??laca????ndan, sebzelerin br??t ve net a????rl??klar?? listede ayr?? ayr?? verilmi??tir. B??ylece iste??e g??re, sebze sat??n al??nd??????ndaki br??t miktarlar??n ortalama ??l????leri de kullan??labilir veya sat??n al??nd??ktan sonra sebzenin at??klar?? ayr??l??p net miktarlar?? evde tart?? cihaz?? varsa tart??larak da kullan??labilir. Bunlar??n yan??nda pi??mi?? sebzelerin ortalama 5-6 yemek ka???????? miktarlar?? 1 de??i??im sebze olarak t??ketilebilir. Bal kaba????, p??rasa, turp, lahana ihmal edilecek kadar ??ok d??????k (1 de??i??imi yakla????k 0.3 g) protein miktar??na sahiptir. Mantar, yer elmas??, b??r??lce, br??ksel lahanas??, brokoli, taze bakla, enginar??n protein miktarlar?? daha y??ksektir (1 de??i??imi yakla????k 3-5 g). Semizotu ve ??spana????n protein miktarlar?? ise olduk??a y??ksektir (1 de??i??imi yakla????k 8-10 g). Bu durum diyetisyen taraf??ndan bilinmelidir. Tere, roka, nane, k??v??rc??k, marul, iceberg, maydanoz serbest olarak yenilebilir, ????nk?? yemeklerin i??erisinde veya salata olarak t??ketilen miktarlar?? azd??r, bu nedenle ihmal edilebilir. Listede yer alan di??er ??i?? yenilebilen sebzelerin t??ketilebilir miktarlar??n??n diyetisyene dan??????lmas?? ve bu do??rultuda t??ketilmesi uygundur. Taze sebze sular?? kullan??lmak istenirse de??i??imde bulunan sebze miktarlar?? dikkate al??nmal??d??r.</p>
                <p className={t.h6}>6. Ya?? Grubu De??i??im Listesi</p>
                <p className={t.h7}>Bu gruptaki besinler temel olarak 2 g protein, 5 g ya?? i??eriklerine g??re s??n??fland??r??lm????t??r. Ya??l?? tohumlar ve sert kabuklu yemi??lerin, ya?? grubunda bulunan yiyecekler ile benzer ??ekilde ya?? i??ermesi yan??nda protein de i??ermesi nedeniyle ayr?? bir de??i??im grubu olarak de??erlendirilmelidir. Ayr??ca ya?? de??i??iminden farkl?? olarak ya??l?? tohumlar ve sert kabuklu yemi??lerin proteinin yan??nda antioksidan ??zellikleri, posa, magnezyum, E vitamini gibi ??geler ve bir miktar karbonhidrat i??ermesi nedeniyle de ayr?? bir de??i??im olarak kullan??lmas?? daha do??rudur. Kaju f??st??????, antep f??st?????? ve ay ??ekirde??inin, ya?? i??eri??inin yan??nda 1 de??i??imi ~ 2-3 g karbonhidrat i??erir. Bu durum diyetisyen taraf??ndan bilinmelidir.</p>
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