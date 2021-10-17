import Search from '/components/search.js'
import styles from '../components/Default/ustmenu.module.css';
import stylesDark from '../components/DefaultDark/ustmenu.module.css';
import stylesSlateBlue from '../components/SlateBlue/ustmenu.module.css';
import stylesDarkSlateBlue from '../components/DarkSlateBlue/ustmenu.module.css';
import stylesWisteria from '../components/Wisteria/ustmenu.module.css';
import stylesDarkWisteria from '../components/DarkWisteria/ustmenu.module.css';
import stylesNar from '../components/Nar/ustmenu.module.css';
import stylesDarkNar from '../components/DarkNar/ustmenu.module.css';
import stylesNight from '../components/Night/ustmenu.module.css';
import stylesDay from '../components/Day/ustmenu.module.css';
import React from 'react';
import Image from 'next/image';
import cookies from 'js-cookie';
import { useEffect, useState } from 'react';

const tema = cookies.get("tema"||"Default");

export default function UstMenu({pref}){
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
    },[]);
    const [lk,setlk]=useState("");
    useEffect(()=>{
        if(lk!=""){
            window.location.href=lk;
        }
    },[])

    return(

        <div className={t.ustmenu}>

            <img className={t.mainmenu} onClick={aybaclick} src='/icons/menu.png'/>
            <div id="menu" className={t.menu} style={{display:"none",paddingRight:'10px'}}>
                <div className={t.menuitem}>
                    <Image src="/icons/home.png" width={'32px'} height={'32px'} alt="" onClick={fanasayfa}>

                    </Image>
                    <button className={t.menubtn} onClick={fanasayfa}>
                        AYBA Derslik
                    </button>
                </div>
                <div className={t.menuitem}>
                    <Image src="/icons/diyetyaz.png" width={'32px'} height={'32px'} alt="" onClick={fdiyetyaz}>

                    </Image>
                    <button className={t.menubtn} onClick={fdiyetyaz} >
                        Diyet Yaz
                    </button>
                </div>
                <div className={t.menuitem}>
                    <Image src="/icons/fav0.png" width={'32px'} height={'32px'} alt="" onClick={fornek}></Image>
                    <button className={t.menubtn} onClick={fornek}>Örnek Menüler</button>
                </div>
                <div className={t.menuitem}>
                    <Image src="/icons/dersdosyalari.png" width={'32px'} height={'32px'} onClick={fdersdosyalari} alt="">
                    
                    </Image>
                    <button className={t.menubtn} onClick={fdersdosyalari}>
                        Ders Dosyaları
                    </button>
                </div>
                <div className={t.menuitem}>
                    <Image src="/icons/stajdefteri.png" width={'32px'} height={'32px'} alt="" onClick={fstajdefteri}>

                    </Image>
                    <button className={t.menubtn} onClick={fstajdefteri}>Staj Defterim</button>
                </div>

                <div className={t.menuitem}>
                    <Image src="/icons/degisim.png" width={'32px'} height={'32px'} alt="" onClick={fdegisimlistesi}>
                    
                    </Image>
                    <button className={t.menubtn} onClick={fdegisimlistesi}>
                        Değişimler
                    </button >
                </div>
                <div className={t.menuitem}>
                    <Image src="/icons/formuller.png" width={'32px'} height={'32px'} alt="" onClick={fformuller}>
                    
                    </Image>
                    <button className={t.menubtn} onClick={fformuller}>
                        Formüller
                    </button >
                </div>
                <div className={t.menuitem}>
                    <Image src="/icons/devamsizlik.png" width={'32px'} height={'32px'} alt="">
                    
                    </Image>
                    <button className={t.menubtn}>
                        Devamsızlık
                    </button >
                </div>
                <hr style={{borderColor:'darkgray',borderWidth:'1px'}}></hr>
                <div className={t.menuitem}>
                    <Image src="/icons/profil.png" width={'32px'} height={'32px'} alt="" onClick={btnprofilc}>
                    
                    </Image>
                    <button className={t.menubtn} onClick={btnprofilc}>
                        Profil
                    </button >
                </div>
                <div className={t.menuitem}>
                    <Image src="/icons/cikis.png" width={'32px'} height={'32px'} onClick={btncikisclick} alt="">
                    
                    </Image>
                    <button className={t.menubtn} onClick={btncikisclick}>
                        Çıkış Yap
                    </button >
                </div>
            </div>
            <Search></Search>
            <img src='/icons/palet.png' className={t.palet} onClick={temaclick}/>
            <div id="menutema" className={t.temamenu} style={{display:'none'}}>
                <div className={t.menuitem} onClick={tdefaultc}>
                    <div className={t.clr} style={{background:'#333'}}>

                    </div>
                    <button className={t.temabtn}>
                        AYBA Siyahı
                    </button >
                </div>
                <div className={t.menuitem} onClick={tdefaultdarkc}>
                    <div className={t.clr} style={{background:'#1a1a1a'}}>

                    </div>
                    <button className={t.temabtn}>
                        Koyu AYBA Siyahı
                    </button >
                </div>
                <div className={t.menuitem} onClick={tslatebluec}>
                    <div className={t.clr} style={{background:'slateblue'}}>

                    </div>
                    <button className={t.temabtn}>
                        Barut Mavisi
                    </button >
                </div>
                <div className={t.menuitem} onClick={tdarkslatebluec}>
                    <div className={t.clr} style={{background:'darkslateblue'}}>

                    </div>
                    <button className={t.temabtn}>
                        Koyu Barut Mavisi
                    </button >
                </div>
                <div className={t.menuitem} onClick={twisteriac}>
                    <div className={t.clr} style={{background:'#9b59b6'}}>

                    </div>
                    <button className={t.temabtn}>
                        Visterya
                    </button >
                </div>
                <div className={t.menuitem} onClick={tdarkwisteriac}>
                    <div className={t.clr} style={{background:'#551868'}}>

                    </div>
                    <button className={t.temabtn}>
                        Koyu Visterya
                    </button >
                </div>
                <div className={t.menuitem} onClick={tnarc}>
                    <div className={t.clr} style={{background:'#C0392B'}}>

                    </div>
                    <button className={t.temabtn}>
                        Nar
                    </button >
                </div>
                <div className={t.menuitem} onClick={tdarknarc}>
                    <div className={t.clr} style={{background:'#8b0000'}}>

                    </div>
                    <button className={t.temabtn}>
                        Koyu Nar
                    </button >
                </div>
                <div className={t.menuitem} onClick={tdayc} >
                    <div className={t.clr} style={{background:'#A38E40'}}>

                    </div>
                    <button className={t.temabtn}>
                        Gündüz
                    </button >
                </div>
                <div className={t.menuitem} onClick={tnightc}>
                    <div className={t.clr} style={{background:'#21214b'}}>

                    </div>
                    <button className={t.temabtn}>
                        Gece
                    </button >
                </div>
            </div>
        </div>
    )
    function aybaclick(){
        if(document.getElementById("menu").style.display==='none'){
            document.getElementById("menu").style.display="block";
        }else{
            document.getElementById("menu").style.display="none";
        }
        document.getElementById("menutema").style.display='none';
    }
    function temaclick(){
        if(document.getElementById("menutema").style.display==='none'){
            document.getElementById("menutema").style.display='block';
        }else{
            document.getElementById("menutema").style.display='none';
        }
        document.getElementById("menu").style.display="none";
    }
    function fanasayfa() {
        setlk("/");
    }
    function fdersdosyalari(){
        window.location.href='/dersdosyalari';
    }
    function btncikisclick(){
        cookies.set("login","0",{expires:24*90});
        cookies.set("durum","0",{expires:24*90});
        window.location.href='/girisyap';
    }
    function fdiyetyaz(){
        window.location.href='/diyetyaz';
    }
    function fornek(){
        window.location.href='/ornekmenuler';
    }
    function fdegisimlistesi(){
        window.location.href='/degisimlistesi';
    }
    function fformuller(){
        window.location.href='/formuller';
    }
    function fstajdefteri(){
        window.location.href='/stajdefterim';
    }
    function tdefaultc(){
        cookies.set("tema","Default",{expires:24*90});
        window.location.href="/"+pref;
    }
    function tdefaultdarkc(){
        cookies.set("tema","DefaultDark",{expires:24*90});
        window.location.href="/"+pref;
    }
    function tslatebluec(){
        cookies.set("tema","SlateBlue",{expires:24*90});
        window.location.href="/"+pref;
    }
    function tdarkslatebluec(){
        cookies.set("tema","DarkSlateBlue",{expires:24*90});
        window.location.href="/"+pref;
    }
    function twisteriac(){
        cookies.set("tema","Wisteria",{expires:24*90});
        window.location.href="/"+pref;
    }
    function tdarkwisteriac(){
        cookies.set("tema","DarkWisteria",{expires:24*90});
        window.location.href="/"+pref;
    }
    function tnarc(){
        cookies.set("tema","Nar",{expires:24*90});
        window.location.href="/"+pref;
    }
    function tdarknarc(){
        cookies.set("tema","DarkNar",{expires:24*90});
        window.location.href="/"+pref;
    }
    function tnightc(){
        cookies.set("tema","Night",{expires:24*90});
        window.location.href="/"+pref;
    }
    function tdayc(){
        cookies.set("tema","Day",{expires:24*90});
        window.location.href="/"+pref;
    }
    function btnprofilc() {
        window.location.href='/profil'        
    }
}