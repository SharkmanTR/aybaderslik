
import styles from '../components/Default/search.module.css';
import stylesDark from '../components/DefaultDark/search.module.css';
import stylesSlateBlue from '../components/SlateBlue/search.module.css';
import stylesDarkSlateBlue from '../components/DarkSlateBlue/search.module.css';
import stylesWisteria from '../components/Wisteria/search.module.css';
import stylesDarkWisteria from '../components/DarkWisteria/search.module.css';
import stylesNar from '../components/Nar/search.module.css';
import stylesDarkNar from '../components/DarkNar/search.module.css';
import stylesNight from '../components/Night/search.module.css';
import stylesDay from '../components/Day/search.module.css';
import cookies from 'js-cookie';
import { useEffect, useState } from 'react';

var tema = cookies.get("tema"||"Default");


export default function Search(){

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
        }
        else if (tema=="DarkWisteria"){
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
        <div className={t.dd}>

            
            <input id="txtsrc" className={t.input} placeholder="Aramak İstediğiniz Kelimeyi Giriniz" onKeyPress={srckey}/>

            <img src='/icons/ara.png' className={t.btnsrc} onClick={dbvis}>
                
            </img>
            <div id="divdb" style={{display:'none'}} className={t.db}>

                <button className={t.btn} onClick={google}>
                    Google Akademik
                </button>
                
                <button className={t.btn} onClick={cochrane}>
                    Cochrane Library
                </button >
                <button className={t.btn} onClick={dergipark}>
                    DergiPARK
                </button>
                <button className={t.btn} onClick={ebsco}>
                    EbscoHost
                </button>
                <button className={t.btn} onClick={pubmed}>
                    PubMed
                </button>
                <button className={t.btn} onClick={sd}>
                    ScienceDirect
                </button>
                <button className={t.btn} onClick={tf}>
                    Taylor & Francis
                </button>
                <button className={t.btn} onClick={utd}>
                    UpToDate
                </button>
            </div>
        </div>
    )   
    function dbvis(){
        if(document.getElementById("divdb").style.display==='none'){
            document.getElementById("divdb").style.display='block';
        }else{
            document.getElementById("divdb").style.display='none';
        }
    }
    function google(){
        let query=document.getElementById("txtsrc").value;
        window.location.href="https://scholar.google.com/scholar?q="+query
    }
    function cochrane(){
        let query=document.getElementById("txtsrc").value;
        window.location.href="https://www.cochranelibrary.com/search?p_p_id=scolarissearchresultsportlet_WAR_scolarissearchresults&p_p_lifecycle=0&_scolarissearchresultsportlet_WAR_scolarissearchresults_searchType=basic&_scolarissearchresultsportlet_WAR_scolarissearchresults_searchBy=1&_scolarissearchresultsportlet_WAR_scolarissearchresults_searchText="+query;
    }
    function dergipark(){
        let query=document.getElementById("txtsrc").value;
        window.location.href="https://dergipark.org.tr/tr/search?q="+query+"&section=articles";
    }
    function ebsco(){
        let query=document.getElementById("txtsrc").value;
        window.location.href="https://www.ebsco.com/tr-tr/search?search="+query;
    }
    function pubmed(){
        let query=document.getElementById("txtsrc").value;
        window.location.href="https://pubmed.ncbi.nlm.nih.gov/?term="+query;
    }
    function sd(){
        let query=document.getElementById("txtsrc").value;
        window.location.href="https://www.sciencedirect.com/search?qs="+query;
    }
    function tf(){
        let query=document.getElementById("txtsrc").value;
        window.location.href="https://www.tandfonline.com/action/doSearch?AllField="+query;
    }
    function utd(){
        let query=document.getElementById("txtsrc").value;
        window.location.href="https://www.uptodate.com/contents/search?search="+query;
    }
    function srckey (e){
        if(e.key==='Enter'){
            document.getElementById("divdb").style.display='block';
        }
    }
}