import styles from '../components/Default/formuller.module.css';
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
}else if (tema=="Day"){
    tc="#EDF6F5";
}else {
    tc="#dadada";
  }
export default function Formuller(){
    const [t,sett]=useState(styles);
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
    },[])
    return(
        <div className={t.main} >
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
            pref={"formuller"}></UstMenu>
            <div className={t.mid}>
                <div className={t.formul}>
                    <div className={t.baslik}>
                        <p className={t.h1} onClick={faoclick}>FAO, WHO, UNU:2001</p>
                    </div>
                    <div id="divfao" style={{display:'none'}}>
                        <hr></hr>
                        <p className={t.h2}>Cinsiyet:</p>
                        <select id="faocins" className={t.option} onChange={faoc}>
                            <option value="e">Erkek</option>
                            <option value="k">Kadın</option>
                        </select>
                        <p className={t.h2}>Vücut ağırlığı:</p>
                        <input id="faokg" className={t.input} type="number" min="0" placeholder="Vücut ağırlığı (kg)" onChange={faoc} ></input>
                        <p className={t.h2}>Yaş:</p>
                        <input id="faoyas" className={t.input} type="number" min="0" placeholder="Yaş" onChange={faoc} />
                        <p className={t.h2}>Fiziksel aktivite düzeyi:</p>
                        <select id="faofa" className={t.option} onChange={faoc}>
                            <option value="1.0" >Yatan hasta</option>
                            <option value="1.1">Çok hafif aktivite</option>
                            <option value="1.2">Hafif aktivite</option>
                            <option value="1.5">Orta aktivite</option>
                            <option value="1.8">Yüksek aktivite</option>
                            <option value="2.2">Çok yüksek aktivite</option>
                        </select>
                        <p className={t.h2}>BMH:</p>
                        <p id="faobmh" className={t.h3}></p>
                        <p className={t.h2}>Enerji gereksinimi:</p>
                        <p id="faoage" className={t.h3}></p>
                        <hr/>
                        <p className={t.h2}>Erkek:</p>
                        <p className={t.h3}>0-3 Yaş: 59.5 x Ağırlık - 30.4</p>
                        <p className={t.h3}>4-10 Yaş: 22.7 x Ağırlık + 504.3</p>
                        <p className={t.h3}>11-18 Yaş: 17.7 x Ağırlık + 658.2</p>
                        <p className={t.h3}>19-30 Yaş: 15.1 x Ağırlık + 692.2</p>
                        <p className={t.h3}>31-60 Yaş: 11.5 x Ağırlık + 873.1</p>
                        <p className={t.h3}>+60 Yaş: 11.7 x Ağırlık + 587.7</p>
                        <p className={t.h2}>Kadın:</p>
                        <p className={t.h3}>0-3 Yaş: 58.3 x Ağırlık - 31.1</p>
                        <p className={t.h3}>4-10 Yaş: 20.3 x Ağırlık + 485.9</p>
                        <p className={t.h3}>11-18 Yaş: 13.4 x Ağırlık + 692.6</p>
                        <p className={t.h3}>19-30 Yaş: 14.8 x Ağırlık + 486.6</p>
                        <p className={t.h3}>31-60 Yaş: 8.1 x Ağırlık + 845.6</p>
                        <p className={t.h3}>+60 Yaş: 9.1 x Ağırlık + 658.5</p>
                    </div>
                </div>
                <div className={t.formul} style={{marginTop:"10px"}}>
                    <div className={t.baslik}>
                        <p className={t.h1} onClick={hbclick}>Harris-Benedict Formülü</p>
                    </div>
                    
                    <div id="divhb" style={{display:"none"}}>
                        <hr></hr>
                        <p className={t.h2}>Cinsiyet:</p>
                        <select id="hbcins" className={t.option} onChange={hbc}>
                            <option value="e">Erkek</option>
                            <option value="k">Kadın</option>
                        </select>
                        <p className={t.h2}>Boy(cm):</p>
                        <input id="hbboy" className={t.input} placeholder="Boy (cm)" type="number" min="0" onChange={hbc} />
                        <p className={t.h2}>Vücut ağırlığı:</p>
                        <input id="hbkg" className={t.input} type="number" min="0" placeholder="Vücut ağırlığı" onChange={hbc}></input>
                        <p className={t.h2}>Yaş:</p>
                        <input id="hbyas" className={t.input} type="number" min="0" placeholder="Yaş" onChange={hbc}></input>
                        <p className={t.h2}>Fiziksel aktivite düzeyi:</p>
                        <select id="hbfa" className={t.option} onChange={hbc}>
                            <option value="1.0" >Yatan hasta</option>
                            <option value="1.1">Çok hafif aktivite</option>
                            <option value="1.2">Hafif aktivite</option>
                            <option value="1.5">Orta aktivite</option>
                            <option value="1.8">Yüksek aktivite</option>
                            <option value="2.2">Çok yüksek aktivite</option>
                        </select>
                        <p className={t.h2}>BMH:</p>
                        <p id="hbbmh" className={t.h3}></p>
                        <p className={t.h2}>Enerji gereksinimi:</p>
                        <p id="hbage" className={t.h3}></p>
                        <hr></hr>
                        <p className={t.h2}>Erkek:</p>
                        <p className={t.h3}>66.5 + 13.7 x Ağırlık + 5.0 x Boy(cm) - 6.78 x Yaş</p>
                        <p className={t.h2}>Kadın:</p>
                        <p className={t.h3}>655.1 + 9.56 x Ağırlık + 1.85 x Boy(cm) - 4.68 x Yaş</p>
                    </div>
                </div>
                <div className={t.formul} style={{marginTop:"10px"}}>
                    <div className={t.baslik}>
                        <p className={t.h1} onClick={scclick}>Schofield Formülü</p>
                    </div>
                    <div id="divsc" style={{display:'none'}}>
                        <hr></hr>
                        <p className={t.h2}>Cinsiyet:</p>
                        <select id="sccins" className={t.option} onChange={scc}>
                            <option value="e">Erkek</option>
                            <option value="k">Kadın</option>
                        </select>
                        <p className={t.h2}>Vücut ağırlığı:</p>
                        <input id="sckg" className={t.input} min="15" type="number" placeholder="Vücut ağırlığı" onChange={scc}></input>
                        <p className={t.h2}>Yaş:</p>
                        <input id="scyas" className={t.input} type="number" placeholder="Yaş" min="15" onChange={scc}></input>
                        <p className={t.h2}>Fiziksel aktivite düzeyi:</p>
                        <select id="scfa" className={t.option} onChange={scc}>
                            <option value="1.0" >Yatan hasta</option>
                            <option value="1.1">Çok hafif aktivite</option>
                            <option value="1.2">Hafif aktivite</option>
                            <option value="1.5">Orta aktivite</option>
                            <option value="1.8">Yüksek aktivite</option>
                            <option value="2.2">Çok yüksek aktivite</option>
                        </select>
                        <p className={t.h2}>BMH:</p>
                        <p id="scbmh" className={t.h3}></p>
                        <p className={t.h2}>Enerji gereksinimi:</p>
                        <p id="scage" className={t.h3}></p>
                        <hr></hr>
                        <p className={t.h2}>Erkek:</p>
                        <p className={t.h3}>15-18 Yaş: 17.6 x Ağırlık + 656</p>
                        <p className={t.h3}>18-30 Yaş: 15.0 x Ağırlık + 690</p>
                        <p className={t.h3}>30-60 Yaş: 15.0 x Ağırlık + 690</p>
                        <p className={t.h3}>+60 Yaş: 11.7 x Ağırlık + 585</p>
                        <p className={t.h2}>Kadın:</p>
                        <p className={t.h3}>15-18 Yaş: 13.3 x Ağırlık + 690</p>
                        <p className={t.h3}>18-30 Yaş: 14.8 x Ağırlık + 485</p>
                        <p className={t.h3}>30-60 Yaş: 8.1 x Ağırlık + 842</p>
                        <p className={t.h3}>+60 Yaş: 9.0 x Ağırlık + 656</p>
                    </div>
                </div>
                <div className={t.formul} style={{marginTop:'10px'}}>
                    <div className={t.baslik}>
                        <p className={t.h1} onClick={mifclick}>Mifflin & St. Jeor Formülü</p>
                    </div>
                    <div id="divmif" style={{display:"none"}}>
                        <hr></hr>
                        <p className={t.h2}>Cinsiyet</p>
                        <select id="mifcins" className={t.option} onChange={mifc}>
                            <option value="e">Erkek</option>
                            <option value="k">Kadın</option>
                        </select>
                        <p className={t.h2}>Boy (cm):</p>
                        <input id="mifboy" className={t.input} type="number" placeholder="Boy (cm)" min="0" onChange={mifc}></input>
                        <p className={t.h2}>Vücut ağırlığı:</p>
                        <input id="mifkg" className={t.input} type="number" placeholder="Vücut ağırlığı" min="0" onChange={mifc}></input>
                        <p className={t.h2}>Yaş:</p> 
                        <input id="mifyas" className={t.input} type="number" placeholder="Yaş" min="0" onChange={mifc}></input>
                        <p className={t.h2}>Fiziksel aktivite düzeyi:</p>
                        <select id="miffa" className={t.option} onChange={mifc}>
                            <option value="1.0" >Yatan hasta</option>
                            <option value="1.1">Çok hafif aktivite</option>
                            <option value="1.2">Hafif aktivite</option>
                            <option value="1.5">Orta aktivite</option>
                            <option value="1.8">Yüksek aktivite</option>
                            <option value="2.2">Çok yüksek aktivite</option>
                        </select>
                        <p className={t.h2}>BMH:</p>
                        <p id="mifbmh" className={t.h3}></p>
                        <p className={t.h2}>Enerji gereksinimi:</p>
                        <p id="mifage" className={t.h3}></p>
                        <hr></hr>
                        <p className={t.h2}>Erkek:</p>
                        <p className={t.h3}>10 x Ağırlık + 6.25 x Boy(cm) - 5 x Yaş + 5</p>
                        <p className={t.h2}>Kadın:</p>
                        <p className={t.h3}>10 x Ağırlık + 6.25 x Boy(cm) - 5 x Yaş -161</p>
                    </div>
                </div>
                <div className={t.formul} style={{marginTop:'10px'}}>
                    <div className={t.baslik}>
                        <p className={t.h1} onClick={whoclick}> WHO Pratik Formül</p>
                    </div>
                    <div id="divwho" style={{display:'none'}}>
                        <hr></hr>
                        <p className={t.h2}>Cinsiyet:</p>
                        <select id="whocins" className={t.option} onChange={whoc}>
                            <option value="e">Erkek</option>
                            <option value="k">Kadın</option>
                        </select>
                        <p className={t.h2}>Vücut ağırlığı (kg):</p>
                        <input id="whokg" className={t.input} type="number" min="0" placeholder="Vücut ağırlığı" onChange={whoc}></input>
                        <p className={t.h2}>Fiziksel aktivite düzeyi:</p>
                        <select id="whofa" className={t.option} onChange={whoc}>
                            <option value="1.0" >Yatan hasta</option>
                            <option value="1.1">Çok hafif aktivite</option>
                            <option value="1.2">Hafif aktivite</option>
                            <option value="1.5">Orta aktivite</option>
                            <option value="1.8">Yüksek aktivite</option>
                            <option value="2.2">Çok yüksek aktivite</option>
                        </select>
                        <p className={t.h2}>BMH:</p>
                        <p id="whobmh" className={t.h3}></p>
                        <p className={t.h2}>Enerji gereksinimi:</p>
                        <p id="whoage" className={t.h3}></p>
                        <hr></hr>
                        <p className={t.h2}>Erkek:</p>
                        <p className={t.h3}>24 x Ağırlık x 1</p>
                        <p className={t.h2}>Kadın:</p>
                        <p className={t.h3}>24 x Ağırlık x 0.95</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
function faoclick(){
    if(document.getElementById("divfao").style.display=="none"){
        document.getElementById("divfao").style.display="block";
    }else{
        document.getElementById("divfao").style.display="none";
    }
}
function faoc(){
    let cins = document.getElementById("faocins").value;
    let kg = parseFloat(document.getElementById("faokg").value)||"0";
    let yas = document.getElementById("faoyas").value||"0";
    let fa = parseFloat(document.getElementById("faofa").value);
    var bmh;
    var age;
    if(cins=="e"){
        if(yas>0 && yas<=3){
            bmh=59.5*kg-30.4;
            age=fa*bmh;
            document.getElementById("faobmh").innerHTML=bmh.toFixed(2);
            document.getElementById("faoage").innerHTML=age.toFixed(2);
        }else if (yas>=4 && yas<=10){
            bmh=22.7*kg+504.3;
            age=fa*bmh;
            document.getElementById("faobmh").innerHTML=bmh.toFixed(2);
            document.getElementById("faoage").innerHTML=age.toFixed(2);
        }else if (yas>=11 && yas<=18){
            bmh=17.7*kg+658.2;
            age=fa*bmh;
            document.getElementById("faobmh").innerHTML=bmh.toFixed(2);
            document.getElementById("faoage").innerHTML=age.toFixed(2);
        }else if(yas>=19 && yas<=30){
            bmh=15.1*kg+692.2;
            age=fa*bmh;
            document.getElementById("faobmh").innerHTML=bmh.toFixed(2);
            document.getElementById("faoage").innerHTML=age.toFixed(2);
        }else if(yas>=31 && yas<=60){
            bmh=11.5*kg+873.1;
            age=fa*bmh;
            document.getElementById("faobmh").innerHTML=bmh.toFixed(2);
            document.getElementById("faoage").innerHTML=age.toFixed(2);
        }else if(yas>60){
            11.7*kg+587.7;
            age=fa*bmh;
            document.getElementById("faobmh").innerHTML=bmh.toFixed(2);
            document.getElementById("faoage").innerHTML=age.toFixed(2);
        }
    }else if (cins=="k"){
        if(yas>0 && yas<=3){
            bmh=58.3*kg-31.1;
            age=fa*bmh;
            document.getElementById("faobmh").innerHTML=bmh.toFixed(2);
            document.getElementById("faoage").innerHTML=age.toFixed(2);
        }else if (yas>=4 && yas<=10){
            bmh=20.3*kg+485.9;
            age=fa*bmh;
            document.getElementById("faobmh").innerHTML=bmh.toFixed(2);
            document.getElementById("faoage").innerHTML=age.toFixed(2);
        }else if (yas>=11 && yas<=18){
            bmh=13.4*kg+692.6;
            age=fa*bmh;
            document.getElementById("faobmh").innerHTML=bmh.toFixed(2);
            document.getElementById("faoage").innerHTML=age.toFixed(2);
        }else if(yas>=19 && yas<=30){
            bmh=14.8*kg+486.6;
            age=fa*bmh;
            document.getElementById("faobmh").innerHTML=bmh.toFixed(2);
            document.getElementById("faoage").innerHTML=age.toFixed(2);
        }else if(yas>=31 && yas<=60){
            bmh=8.1*kg+845.6;
            age=fa*bmh;
            document.getElementById("faobmh").innerHTML=bmh.toFixed(2);
            document.getElementById("faoage").innerHTML=age.toFixed(2);
        }else if(yas>60){
            9.1*kg+658.5;
            age=fa*bmh;
            document.getElementById("faobmh").innerHTML=bmh.toFixed(2);
            document.getElementById("faoage").innerHTML=age.toFixed(2);
        }
    }
}
function hbclick(){
    if(document.getElementById("divhb").style.display=="none"){
        document.getElementById("divhb").style.display="block";
    }else{
        document.getElementById("divhb").style.display="none";
    }
}
function hbc(){
    let cins = document.getElementById("hbcins").value;
    let boy = parseFloat(document.getElementById("hbboy").value);
    let kg = parseFloat(document.getElementById("hbkg").value);
    let yas = parseFloat(document.getElementById("hbyas").value);
    let fa = parseFloat(document.getElementById("hbfa").value);
    let age;
    let bmh;
    if(cins=="e"){
        bmh=66.5+(13.7*kg)+(5*boy)-(6.78*yas);
        age=bmh*fa;
        document.getElementById("hbbmh").innerHTML=bmh.toFixed(2);
        document.getElementById("hbage").innerHTML=age.toFixed(2);
    }else if (cins=="k"){
        bmh=655.1+(9.56*kg)+(1.85*boy)-(4.68*yas);
        age=fa*bmh;
        document.getElementById("hbbmh").innerHTML=bmh.toFixed(2);
        document.getElementById("hbage").innerHTML=age.toFixed(2);
    }
}
function scclick(){
    if(document.getElementById("divsc").style.display=="none"){
        document.getElementById("divsc").style.display="block";
    }else{
        document.getElementById("divsc").style.display="none";
    }
}
function scc(){
    let cins = document.getElementById("sccins").value;
    let kg = parseFloat(document.getElementById("sckg").value);
    let yas = parseFloat(document.getElementById("scyas").value);
    let fa = parseFloat(document.getElementById("scfa").value);
    let bmh;
    let age;
    if(cins=="e"){
        if(yas>=15 && yas<18){
            bmh=17.6*kg+656;
            age=bmh*fa;
            document.getElementById("scbmh").innerHTML=bmh.toFixed(2);
            document.getElementById("scage").innerHTML=age.toFixed(2);
        }else if(yas>=18 && yas<30){
            bmh=15*kg+690;
            age=bmh*fa;
            document.getElementById("scbmh").innerHTML=bmh.toFixed(2);
            document.getElementById("scage").innerHTML=age.toFixed(2);
        }else if(yas>=30 && yas<60){
            bmh=15*kg+690;
            age=bmh*fa;
            document.getElementById("scbmh").innerHTML=bmh.toFixed(2);
            document.getElementById("scage").innerHTML=age.toFixed(2);
        }else if(yas>=60){
            bmh=11.7*kg+585;
            age=bmh*fa;
            document.getElementById("scbmh").innerHTML=bmh.toFixed(2);
            document.getElementById("scage").innerHTML=age.toFixed(2);
        }else{
            document.getElementById("scbmh").innerHTML="0";
            document.getElementById("scage").innerHTML="0";
        }
    }else if (cins =="k"){
        if(yas>=15 && yas<18){
            bmh=13.3*kg+690;
            age=bmh*fa;
            document.getElementById("scbmh").innerHTML=bmh.toFixed(2);
            document.getElementById("scage").innerHTML=age.toFixed(2);
        }else if(yas>=18 && yas<30){
            bmh=14.8*kg+485;
            age=bmh*fa;
            document.getElementById("scbmh").innerHTML=bmh.toFixed(2);
            document.getElementById("scage").innerHTML=age.toFixed(2);
        }else if(yas>=30 && yas<60){
            bmh=8.1*kg+842;
            age=bmh*fa;
            document.getElementById("scbmh").innerHTML=bmh.toFixed(2);
            document.getElementById("scage").innerHTML=age.toFixed(2);
        }else if(yas>=60){
            bmh=9*kg+656;
            age=bmh*fa;
            document.getElementById("scbmh").innerHTML=bmh.toFixed(2);
            document.getElementById("scage").innerHTML=age.toFixed(2);
        }
    }
}
function mifclick(){
    if(document.getElementById("divmif").style.display=="none"){
        document.getElementById("divmif").style.display="block";
    }else{
        document.getElementById("divmif").style.display="none";
    }
}
function mifc(){
    let cins = document.getElementById("mifcins").value;
    let kg=parseFloat(document.getElementById("mifkg").value);
    let boy =parseFloat(document.getElementById("mifboy").value);
    let yas = parseFloat(document.getElementById("mifyas").value);
    let fa=parseFloat(document.getElementById("miffa").value);
    let bmh;
    let age;
    if(cins=="e"){
        bmh=(10*kg)+(6.25*boy)-(5*yas)+5;
        age=bmh*fa;
        document.getElementById("mifbmh").innerHTML=bmh.toFixed(2);
        document.getElementById("mifage").innerHTML=age.toFixed(2);
    }else if (cins=="k"){
        bmh=(10*kg)+(6.25*boy)-(5*yas)-161;
        age=bmh*fa;
        document.getElementById("mifbmh").innerHTML=bmh.toFixed(2);
        document.getElementById("mifage").innerHTML=age.toFixed(2);
    }
}
function whoclick(){
    if(document.getElementById("divwho").style.display=="none"){
        document.getElementById("divwho").style.display="block";
    }else{
        document.getElementById("divwho").style.display="none";
    }
}
function whoc(){
    let cins = document.getElementById("whocins").value;
    let kg=parseFloat(document.getElementById("whokg").value);
    let fa = parseFloat(document.getElementById("whofa").value);
    let bmh;
    let age;
    if(cins=="e"){
        bmh=24*kg*1;
        age=bmh*fa;
        document.getElementById("whobmh").innerHTML=bmh.toFixed(2);
        document.getElementById("whoage").innerHTML=age.toFixed(2);
    }else if(cins=="k"){
        bmh=24*kg*0.95;
        age=bmh*fa;
        document.getElementById("whobmh").innerHTML=bmh.toFixed(2);
        document.getElementById("whoage").innerHTML=age.toFixed(2);
    }
}