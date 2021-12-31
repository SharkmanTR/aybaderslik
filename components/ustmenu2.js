import styles from '../components/Default/ustmenu2.module.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import cookies from 'js-cookie';

const tema = cookies.get("tema"||"Default");

export default function UstMenu2({pref}) {
    const [dtema,setdtema]=useState("none");
    const [dsolmenu,setdsol]=useState("block");
    const [divcikis,setdcikis]=useState("block");
    const [dprofil,setdprofil]=useState("block");
    const [dsearch,setdsearch]=useState("block");
    const [dlist,setdlist]=useState("none");
    const [query,setquery]=useState("");
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
    });
    return(
        <div className={t.main}>
            <div className={t.ustmenu}>
                <div id="divsolmenu" className={t.solmenu} style={{display:dsolmenu}}>
                    <div className={t.menu}>
                        <Link href="/"><Image className={t.img} width={"32px"} height={"32px"} src={"/icons/menu.png"} alt='AYBA Derslik' quality={100}></Image></Link>
                        <div className={t.hint}><Link  href="/"><a className={t.lnk}>AYBA Derslik</a></Link></div>
                    </div>
                    <div className={t.menu}>
                        <Link href="/diyetyaz"><Image className={t.img} width={"32px"} height={"32px"} src={"/icons/diyetyaz.png"} alt='AYBA Derslik' quality={100}></Image></Link>
                        <div className={t.hint}><Link  href="/diyetyaz"><a className={t.lnk}>Diyet Yaz</a></Link></div>
                    </div>
                    <div className={t.menu}>
                        <Link href="/ornekmenuler"><Image className={t.img} width={"32px"} height={"32px"} src={"/icons/fav0.png"} alt='AYBA Derslik' quality={100}></Image></Link>
                        <div className={t.hint}><Link  href="/ornekmenuler"><a className={t.lnk}>Örnek Menüler</a></Link></div>
                    </div>
                    <div className={t.menu}>
                        <Link href="/dersdosyalari"><Image className={t.img} width={"32px"} height={"32px"} src={"/icons/dersdosyalari.png"} alt='AYBA Derslik' quality={100}></Image></Link>
                        <div className={t.hint}><Link  href="/dersdosyalari"><a className={t.lnk}>Ders Dosyaları</a></Link></div>
                    </div>
                    <div className={t.menu}>
                        <Link href="/stajdefterim"><Image className={t.img} width={"32px"} height={"32px"} src={"/icons/stajdefteri.png"} alt='AYBA Derslik' quality={100}></Image></Link>
                        <div className={t.hint}><Link  href="/stajdefterim"><a className={t.lnk}>Staj Defterim</a></Link></div>
                    </div>
                    <div className={t.menu}>
                        <Link href="/degisimlistesi"><Image className={t.img} width={"32px"} height={"32px"} src={"/icons/degisim.png"} alt='AYBA Derslik' quality={100}></Image></Link>
                        <div className={t.hint}><Link  href="/degisimlistesi"><a className={t.lnk}>Değişim Listesi</a></Link></div>
                    </div>
                    <div className={t.menu}>
                        <Link href="/formuller"><Image className={t.img} width={"32px"} height={"32px"} src={"/icons/formuller.png"} alt='AYBA Derslik' quality={100}></Image></Link>
                        <div className={t.hint}><Link  href="/formuller"><a className={t.lnk}>Formüller</a></Link></div>
                    </div>
                    <div className={t.menu}>
                        <Link href="/veritabani"><Image className={t.img} width={"32px"} height={"32px"} src={"/icons/database.png"} alt='AYBA Derslik' quality={100}></Image></Link>
                        <div className={t.hint}><Link  href="/veritabani"><a className={t.lnk}>Besin Veri Tabanı</a></Link></div>
                    </div>
                </div>
                <div className={t.sagmenu} >
                    <div className={t.menu} style={{display:dlist}}>
                        <Image src={"/icons/akademik.png"} width={"32px"} height={"32px"}></Image>
                        <div className={t.hint}>
                            <a className={t.lnk} href={"https://scholar.google.com/scholar?q="+query}>Google Akademik</a>
                        </div>
                    </div>
                    <div className={t.menu} style={{display:dlist}}>
                        <Image src={"/icons/cochrane.png"} width={"32px"} height={"32px"}></Image>
                        <div className={t.hint}>
                            <a className={t.lnk} href={"https://www.cochranelibrary.com/search?p_p_id=scolarissearchresultsportlet_WAR_scolarissearchresults&p_p_lifecycle=0&_scolarissearchresultsportlet_WAR_scolarissearchresults_searchType=basic&_scolarissearchresultsportlet_WAR_scolarissearchresults_searchBy=1&_scolarissearchresultsportlet_WAR_scolarissearchresults_searchText="+query}>Cochrane Library</a>
                        </div>
                    </div>
                    <div className={t.menu} style={{display:dlist}}>
                        <Image src={"/icons/dergipark.png"} width={"32px"} height={"32px"}></Image>
                        <div className={t.hint}>
                            <a className={t.lnk} href={"https://dergipark.org.tr/tr/search?q="+query+"&section=articles"}>Dergi Park</a>
                        </div>
                    </div>
                    <div className={t.menu} style={{display:dlist}}>
                        <Image src={"/icons/ebscohost.png"} width={"32px"} height={"32px"}></Image>
                        <div className={t.hint}>
                            <a className={t.lnk} href={"https://www.ebsco.com/tr-tr/search?search="+query}>EbscoHost</a>
                        </div>
                    </div>
                    <div className={t.menu} style={{display:dlist}}>
                        <Image src={"/icons/pubmed.png"} width={"32px"} height={"32px"}></Image>
                        <div className={t.hint}>
                            <a className={t.lnk} href={"https://pubmed.ncbi.nlm.nih.gov/?term="+query}>PubMed</a>
                        </div>
                    </div>
                    <div className={t.menu} style={{display:dlist}}>
                        <Image src={"/icons/sciencedirect.png"} width={"32px"} height={"32px"}></Image>
                        <div className={t.hint}>
                            <a className={t.lnk} href={"https://www.sciencedirect.com/search?qs="+query}>Science Direct</a>
                        </div>
                    </div>
                    <div className={t.menu} style={{display:dlist}}>
                        <Image src={"/icons/taylorfrancis.png"} width={"32px"} height={"32px"}></Image>
                        <div className={t.hint}>
                            <a className={t.lnk} href={"https://www.tandfonline.com/action/doSearch?AllField="+query}>Taylor&Francis</a>
                        </div>
                    </div>
                    <div className={t.menu} style={{display:dlist}}>
                        <Image src={"/icons/uptodate.png"} width={"32px"} height={"32px"}></Image>
                        <div className={t.hint}>
                            <a className={t.lnk} href={"https://www.uptodate.com/contents/search?search="+query}>UpToDate</a>
                        </div>
                    </div>
                    <div id='contsearch' className={t.menu} style={{display:dsearch,float:"left"}}>
                        <Image className={t.img} width={"32px"} height={"32px"} src={"/icons/ara.png"} alt='AYBA Derslik' quality={100}></Image>
                        <div className={t.divsearch}>
                            <input id='inputsearch' className={t.input} placeholder='Arama Yap' onChange={searchc}></input>
                        </div>
                    </div>
                    <div className={t.menu} style={{display:dprofil}}>
                        <div className={t.hint2}><Link  href="/profil"><a className={t.lnk}>Profil</a></Link></div>
                        <Link href="/profil"><Image className={t.img} width={"32px"} height={"32px"} src={"/icons/profil.png"} alt='AYBA Derslik' quality={100}></Image></Link>
                    </div>
                    <div id='divtema' className={t.menu}>
                        <div style={{display:dtema}} className={t.divtema}>
                            <div className={t.temabtn2}>
                                İstediğin temayı seç
                            </div>
                            <div className={t.temabtn} style={{backgroundColor:'#333'}} onClick={tdefaultc}>
                                
                            </div>
                            <div className={t.temabtn} style={{backgroundColor:'#1a1a1a'}} onClick={tdefaultdarkc}>
                                
                            </div>
                            <div className={t.temabtn} style={{backgroundColor:'slateblue'}} onClick={tslatebluec}>
                                
                            </div>
                            <div className={t.temabtn} style={{backgroundColor:'darkslateblue'}} onClick={tdarkslatebluec}>
                                
                            </div>
                            <div className={t.temabtn} style={{backgroundColor:'#9b59b6'}} onClick={twisteriac}>
                                
                            </div>
                            <div className={t.temabtn} style={{backgroundColor:'#551868'}} onClick={tdarkwisteriac}>
                                
                            </div>
                            <div className={t.temabtn} style={{backgroundColor:'#C0392B'}} onClick={tnarc}>
                                
                            </div>
                            <div className={t.temabtn} style={{backgroundColor:'#8b0000'}} onClick={tdarknarc}>
                                
                            </div>
                            <div className={t.temabtn} style={{backgroundColor:'#A38E40'}} onClick={tnightc}>
                                
                            </div>
                            <div className={t.temabtn} style={{backgroundColor:'#21214b'}} onClick={tdayc}>
                                
                            </div>
                            <div className={t.temabtn} style={{backgroundColor:'transparent',border:"0"}} onClick={temacikis}>
                                X
                            </div>
                        </div>
                        <div className={t.hint2}><a className={t.lnk} onClick={temaclick}>Tema</a></div>
                        <Image className={t.img} width={"32px"} height={"32px"} src={"/icons/palet.png"} alt='AYBA Derslik' quality={100} onClick={temaclick}></Image>
                    </div>
                    <div className={t.menu} style={{display:divcikis}}>
                        <div className={t.hint2}><Link  href="/veritabani"><a className={t.lnk}>Çıkış Yap</a></Link></div>
                        <Link href="/veritabani"><Image className={t.img} width={"32px"} height={"32px"} src={"/icons/cikis.png"} alt='AYBA Derslik' quality={100}></Image></Link>
                    </div>
                </div>
            </div>
        </div>
    )
    function temaclick(){
        setdtema("block");
        setdsol("none");
        setdcikis("none");
        setdprofil("none");
        setdsearch("none");
    }  
    function temacikis(){
        setdtema("none");
        setdsol("block");
        setdcikis("block");
        setdprofil("block");
        setdsearch("block");    
    }
    function searchc(){
        let s = document.getElementById("inputsearch").value;
        document.getElementById("inputsearch").style.display="block";
        setquery(document.getElementById("inputsearch").value);
        if(s==""){
            setdtema("none");
            setdsol("block");
            setdcikis("block");
            setdprofil("block");
            setdsearch("block");
            document.getElementById("divtema").style.display="block";
            setdlist("none");
        }else{
            setdtema("none");
            setdsol("none");
            setdcikis("none");
            setdprofil("none");
            setdsearch("block");
            document.getElementById("divtema").style.display="none";
            setdlist("inline-block");
        }
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
}