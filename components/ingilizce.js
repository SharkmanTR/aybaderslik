import styles from '../components/Default/ingilizce.module.css';
import stylesDark from '../components/DefaultDark/ingilizce.module.css';
import stylesSlateBlue from '../components/SlateBlue/ingilizce.module.css';
import stylesDarkSlateBlue from '../components/DarkSlateBlue/ingilizce.module.css';
import stylesWisteria from '../components/Wisteria/ingilizce.module.css';
import stylesDarkWisteria from '../components/DarkWisteria/ingilizce.module.css';
import stylesNar from '../components/Nar/ingilizce.module.css';
import stylesDarkNar from '../components/DarkNar/ingilizce.module.css';
import stylesNight from '../components/Night/ingilizce.module.css';
import stylesDay from '../components/Day/ingilizce.module.css';
import cookies from 'js-cookie';
import { useEffect, useState } from 'react';


const db =[
  { id:"1", k:"Abandon (fiil)", a:"Terk etmek, bırakmak, vazgeçmek", oc:"Many doctors have abandoned this drug because of its side effects."},
  { id:"2", k:"Abate (fiil)", a:"Azaltmak, azalmak, hafifletmek, yatıştırmak", oc:"Are these treatments useful for abating oxidative stress and inflammation?"},
  { id:"3", k:"Atypical (sıfat)", a:"Tipik olmayan, değişik, alışılmamış, atipikal", oc:"These atypical agents, unlike the typical pathogens, often cause extrapulmonary manifestations."},
  { id:"4", k:"Abide by (fiil)", a:"-e uymak, bağlı kalmak", oc:"This publication requires authors to abide by the following guidelines."},
  { id:"5", k:"Ability (isim)", a:"Yetenek, beceri", oc:"We will investigate the effects of extracts on free radical reaction, lipid oxidation and nitrite scavenging ability."},
  { id:"6", k:"Abolish (fiil)", a:"Ortadan kaldırmak, son vermek", oc:"One of the cardinal goals of postoperative pain management is to reduce or abolish pain with minimum or no side effects."},
  { id:"7", k:"Abort (fiil)", a:"Düşük yapmak, düşürmek (bebeği)", oc:"Certain drugs may cause the fetus to abort."},
  { id:"8", k:"Abrasion (isim)", a:"Sıyrık, abrazyon", oc:"He had a small abrasion on her forehead."},
  { id:"9", k:"Abrupt (sıfat)", a:"Ani, beklenmedik", oc:"In horses, abrupt changes from high-fiber (HF) to high-starch (HS) diets can affect the cecal and colonic microbiota."},
  { id:"10", k:"Absolutely (zarf)", a:"Kesinlikle, kesin olarak, tümüyle", oc:"Effective preventive and therapeutic strategies are absolutely required to block this serious public health concern."},
  { id:"11", k:"Absorption (isim)", a:"Emilim", oc:"One of the important factors that reduce vitamin storage is overweight and obesity, especially in combination with old age, when all absorption processes are reduced."},
  { id:"12", k:"Abstain from (fiil)", a:"-den uzak durmak, kaçınmak, sakınmak", oc:"The primary aim was to determine the effectiveness of these concepts in increasing women’s intentions to abstain from alcohol during pregnancy."},
  { id:"13", k:"Abundance (isim)", a:"Bolluk, çokluk", oc:"Abiotic conditions are important considerations in the species sorting process,which ultimately determines the distribution and abundance of species."},
  { id:"14", k:"Abuse (fiil, isim)", a:"İstismar etmek, suistimal etmek, istismar, suistimal", oc:"Child abuse is an adverse life experience with significant physical and psychological effects."},
  { id:"15", k:"Accelerate (fiil)", a:"Hızlanmak, hızlandırmak", oc:"Several interventions can be used to accelerate bone formation after tooth extraction."},
  { id:"16", k:"Accept (fiil)", a:"Kabul etmek", oc:"The percentage of participants who were willing to accept a kidney transplant was 67.3%."},
  { id:"17", k:"Access (isim)", a:"Giriş, erişme, erişim", oc:"Disparities in food access and the resulting inequities in food security are persistent problems in cities across the United States."},
  { id:"18", k:"Acclaim (fiil/isim)", a:"Övmek, övgü", oc:"African Economic Research Consortium (AERC) has increasingly received global acclaim for its quality products and services and is ranked highly among global development think tanks."},
  { id:"19", k:"Accommodation (isim)", a:"Konaklama, kalacak yer", oc:"The Sydney Local Health District (SLHD) had established an accommodation service for community members who were required to isolate or quarantine due to COVID-19 in February 2020."},
  { id:"20", k:"Accompany (fiil)", a:"Eşlik etmek, refakat etmek", oc:"With the exception of pediatric or incapacitated patients, we advise the visitor/guardian not to accompany the patient after check-in at the facility during the preoperative stage."},
  { id:"21", k:"Badly (zarf)", a:"Kötü bir biçimde, ağır bir biçimde, feci bir biçimde", oc:"She was badly injured in a car accident."},
  { id:"22", k:"Baffle (fiil)", a:"Şaşırtmak, şaşkına çevirmek", oc:"After being diagnosed with Alzheimer nearly 15 years ago, she continues to baffle doctors as she battles the disease."},
  { id:"23", k:"Ban (fiil / isim)", a:"Yasaklamak, yasak", oc:"In this research, we analyze the effect of this smoking ban on the outcomes of their pregnancies."},
  { id:"24", k:"Basically (zarf)", a:"Temelde, esas olarak", oc:"The symptoms of both diseases are basically the same."},
  { id:"25", k:"Battle (fiil / isim)", a:"Savaşmak, mücadele etmek, savaş, mücadele", oc:"However, during and after the battle of COVID-19, countries must take more serious steps to strengthen and improve their healthcare system capacity in order to be well-prepared for such crises in the future."},
  { id:"26", k:"Call for (fiil)", a:"Çağrıda bulunmak, gerektirmek, istemek", oc:"UN health agency calls for “discipline” as highly infectious Delta variant races through region."},
  { id:"27", k:"Call off (fiil)", a:"İptal etmek", oc:"She had to call of her travel because of the illness."},
  { id:"28", k:"Candidate (isim)", a:"Aday", oc:"Nine candidate vaccines are currently being supported by Coalition for Epidemic Preparedness Innovations (CEPI); eight of which are currently in clinical trials."},
  { id:"29", k:"Capable (of) (sıfat)", a:"Yetenekli, muktedir", oc:"Systems must be capable of providing older person-centred and integrated care."},
  { id:"30", k:"Cardiovascular (sıfat)", a:"Kalp ve damarlarla ilgili, kardiovasküler", oc:"Excess dietary sodium intake increases blood pressure and consequently increases the risk of cardiovascular diseases."}
];
var tema = cookies.get("tema"||"Default");


export default function Ingilizce(){
    const [k1,kset]=useState(db[Math.floor(Math.random()*30)].k);
    const [a1,aset]=useState(db[Math.floor(Math.random()*30)].a);
    const [oc1,ocset]=useState(db[Math.floor(Math.random()*30)].oc);
    
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
    },[])
    return(
        <div className={t.main} onClick={clickrandom}>
            <p className={t.h1}>{k1}</p>
            <p className={t.h1}>{a1}</p>
            <p className={t.h1}>{oc1}</p>
        </div>
    )
    function clickrandom(){
        let x = Math.floor(Math.random()*30);
        db.forEach(function(i){
            if(x==i["id"]){
                kset(i["k"]);
                aset(i["a"]);
                ocset(i["oc"]);
            }
        })
    }
};
