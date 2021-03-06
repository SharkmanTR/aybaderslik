import styles from '../../components/Default/diyetyaz.module.css';
import stylesDark from '../../components/DefaultDark/diyetyaz.module.css';
import stylesSlateBlue from '../../components/SlateBlue/diyetyaz.module.css';
import stylesDarkSlateBlue from '../../components/DarkSlateBlue/diyetyaz.module.css';
import stylesWisteria from '../../components/Wisteria/diyetyaz.module.css';
import stylesDarkWisteria from '../../components/DarkWisteria/diyetyaz.module.css';
import stylesNar from '../../components/Nar/diyetyaz.module.css';
import stylesDarkNar from '../../components/DarkNar/diyetyaz.module.css';
import stylesNight from '../../components/Night/diyetyaz.module.css';
import stylesDay from '../../components/Day/diyetyaz.module.css';
import UstMenu from '../../components/ustmenu';
import {PrismaClient} from '@prisma/client';
import cookies from 'js-cookie';
import DiyetGonder from '../diyetgon';
import { useState, useEffect } from 'react';
import Loading from '../../components/loading';
import Head from 'next/head';
import { DiyetGonFS } from '../../utils/diyetgonfs';
import { DefGonFS } from '../../utils/defgonfs';
import { initializeApp } from "firebase/app";
import {getFirestore,collection,query, where,limit, getDocs} from "firebase/firestore";


var tema = cookies.get("tema"||"Default");
var hh=cookies.get("hoca")||"0";
const l = cookies.get("login")||"0";
let tc;
if(tema=="Default"){
tc="#dadada";
}else if (tema=="DefaultDark"){
tc="#1a1a1a";
}else if(tema=="SlateBlue"){
    tc="lightsteelblue";
}else if(tema=="DarkSlateBlue"){
    tc="darkslateblue";
}
else if (tema=="Wisteria"){
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
export default function NormalDiyet(){
    const [ddg,setddg]=useState("0");
    const [osabah,setsabah]=useState();
    const [oara1,setara1]=useState();
    const [oogle,setogle]=useState();
    const [oara2,setara2]=useState();
    const [oaksam,setaksam]=useState();
    const [oara3,setara3]=useState();
    const [xsut,setsut]=useState();
    const [xyysut,setyysut]=useState();
    const [xyssut,setyssut]=useState();
    const [xet,setet]=useState();
    const [xekm,setekm]=useState();
    const [xkbak,setkbak]=useState();
    const [xseb,setseb]=useState();
    const [xmey,setmey]=useState();
    const [xyag,setyag]=useState();
    const [xytoh,setytoh]=useState();
    const [load,setload]=useState("0");
    const [t,sett]=useState(styles);
    const [dm,setdm]=useState("1");
    const [rm,setrm]=useState("red")
    const [htry,setht]=useState(false);
    const [hocalar,sethocalar]=useState([]);
    useEffect(()=>{
        if(l=="0"){
            window.location.href='/girisyap';
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
        if(htry==false){
            hocaget();
        }
    })
    return(
        <div>
            <Head>
                <title>AYBA Derslik | Diyet Yaz</title>
                <link rel="shourtcut icon" href={`/ico/${tema}.ico`}></link>
            </Head>
            <style jsx global>
            {`
            body{background-color: ${tc} ;}
            `}
            </style>
            <UstMenu
            pref={"diyetyaz/normal"}></UstMenu>
            {load=="1"&&
            <Loading></Loading>
            }
            <div id="divres">

                {ddg!="0"&&
                <DiyetGonder
                oguns={osabah}
                ogunr1={oara1}
                oguno={oogle}
                ogunr2={oara2}
                oguna={oaksam}
                ogunr3={oara3}
                qsut={xsut}
                qyysut={xyysut}
                qyssut={xyssut}
                qet={xet}
                qekm={xekm}
                qkbak={xkbak}
                qseb={xseb}
                qmey={xmey}
                qyag={xyag}
                qytoh={xytoh}></DiyetGonder>
                }
            </div>
            <div className={t.main} >
                <div className={t.sec}>
                    <p className={t.p}>Form??l:</p>
                    <select id='hesapfor' className={t.select3} onChange={hesap2}>
                        <option className={t.option3} value='pratik'>WHO Pratik Form??l</option>
                        <option className={t.option3} value='hb'>Harris-Benedict Form??l??</option>
                    </select>
                </div>
                <div className={t.sec}>
                    <p className={t.p}>Cinsiyet: 
                    </p>
                    <select id='hesapcins' className={t.select3} onChange={hesap2}>
                        <option className={t.option3} value="e">
                            Erkek
                        </option>
                        <option className={t.option3} value="k">
                            Kad??n
                        </option>
                    </select>
                </div>
                <div className={t.sec}>
                    <input id='hesapboy' className={t.inputsec} type="number" min="0" placeholder='Boy (cm)' onChange={hesap2}></input>
                    <input id='hesapkilo' className={t.inputsec} type="number" min="0" placeholder='Kilo (kg)' onChange={hesap2}></input>
                    <input id='hesapyas' className={t.inputsec} type="number" min="0" placeholder='Ya?? (y??l)' onChange={hesap2}></input>
                </div>
                <div className={t.sec}>
                    <input id='hesapfa' className={t.inputsec} type="number" min="0" placeholder="Fiziksel Aktivite" onChange={hesap2}></input>
                    <input id='hesapbmh' className={t.inputsec} type="number" min="0" placeholder='BMH' onChange={fhesap2}></input>
                    <input id='hesapage' className={t.inputsec} type="number" min="0" placeholder='Enerji Gereksinimi' onChange={hesap3}></input>
                </div>
                <div className={t.sec2} style={{marginBottom:'20px'}}>
                    <div className={t.divmetre} style={{marginLeft:'10px',width:`${dm}%`,backgroundColor:`${rm}`}}>
                    <p className={t.pmetre}>{dm}%</p>
                    </div>
                </div>
            </div>

            <div className={t.main}>
            {hh=="1" &&
            <div>
                <button className={t.btn} style={{width:'100%'}} onClick={diyetlerc}>????rencilerin Diyetleri</button>
            </div>
            }
                <div className={t.divhesap}>
                    <p className={t.h1}>Hesaplama</p>
                    <hr/>
                    <div className={t.row}>
                        <div className={t.col}>
                            <p className={t.h2}>Grup</p>
                        </div>
                        <div className={t.col}>
                            <p className={t.h2}>De??i??im</p>
                        </div>
                        <div className={t.col}>
                            <p className={t.h2}>CHO</p>
                        </div>
                        <div className={t.col}>
                            <p className={t.h2}>PRO</p>
                        </div>
                        <div className={t.col}>
                            <p className={t.h2}>YA??</p>
                        </div>
                    </div>
                    <div className={t.row}>
                        <div className={t.col}>
                            <p className={t.h2}>S??t</p>
                        </div>
                        <div className={t.col}>
                            <input id="inputsut" min="0" className={t.input} defaultValue="0" type="number" onChange={fhesapla}></input>
                        </div>
                        <div className={t.col}>
                            <p id="sutc" className={t.h2}>0</p>
                        </div>
                        <div className={t.col}>
                            <p id="sutp" className={t.h2}>0</p>
                        </div>
                        <div className={t.col}>
                            <p id="suty" className={t.h2}>0</p>
                        </div>
                    </div>
                    <div className={t.row}>
                        <div className={t.col}>
                            <p className={t.h2}>Yar??m Ya??l?? S??t</p>
                        </div>
                        <div className={t.col}>
                            <input id="inputyysut" min="0" className={t.input} defaultValue="0" type="number" onChange={fhesapla}></input>
                        </div>
                        <div className={t.col}>
                            <p id="yysutc" className={t.h2}>0</p>
                        </div>
                        <div className={t.col}>
                            <p id="yysutp" className={t.h2}>0</p>
                        </div>
                        <div className={t.col}>
                            <p id="yysuty" className={t.h2}>0</p>
                        </div>
                    </div>
                    <div className={t.row}>
                        <div className={t.col}>
                            <p className={t.h2}>Ya??s??z S??t</p>
                        </div>
                        <div className={t.col}>
                            <input id="inputyssut" min="0" className={t.input} defaultValue="0" type="number" onChange={fhesapla}></input>
                        </div>
                        <div className={t.col}>
                            <p id="yssutc" className={t.h2}>0</p>
                        </div>
                        <div className={t.col}>
                            <p id="yssutp" className={t.h2}>0</p>
                        </div>
                        <div className={t.col}>
                            <p className={t.h2}>0</p>
                        </div>
                    </div>
                    <div className={t.row}>
                        <div className={t.col}>
                            <p className={t.h2}>Et</p>
                        </div>
                        <div className={t.col}>
                            <input id="inputet" min="0" className={t.input} defaultValue="0" type="number" onChange={fhesapla}></input>
                        </div>
                        <div className={t.col}>
                            <p className={t.h2}>0</p>
                        </div>
                        <div className={t.col}>
                            <p id="etp" className={t.h2}>0</p>
                        </div>
                        <div className={t.col}>
                            <p id="ety" className={t.h2}>0</p>
                        </div>
                    </div>
                    <div className={t.row}>
                        <div className={t.col}>
                            <p className={t.h2}>EYG</p>
                        </div>
                        <div className={t.col}>
                            <input id="inputekm" min="0" className={t.input} defaultValue="0" type="number" onChange={fhesapla}></input>
                        </div>
                        <div className={t.col}>
                            <p id="ekmc" className={t.h2}>0</p>
                        </div>
                        <div className={t.col}>
                            <p id="ekmp" className={t.h2}>0</p>
                        </div>
                        <div className={t.col}>
                            <p className={t.h2}>0</p>
                        </div>
                    </div>
                    <div className={t.row}>
                        <div className={t.col}>
                            <p className={t.h2}>K.Bak.</p>
                        </div>
                        <div className={t.col}>
                            <input id="inputkbak" min="0" className={t.input} defaultValue="0" type="number" onChange={fhesapla}></input>
                        </div>
                        <div className={t.col}>
                            <p id="kbakc" className={t.h2}>0</p>
                        </div>
                        <div className={t.col}>
                            <p id="kbakp" className={t.h2}>0</p>
                        </div>
                        <div className={t.col}>
                            <p className={t.h2}>0</p>
                        </div>
                    </div>
                    <div className={t.row}>
                        <div className={t.col}>
                            <p className={t.h2}>Sebze</p>
                        </div>
                        <div className={t.col}>
                            <input id="inputsebze" min="0" className={t.input} defaultValue="0" type="number" onChange={fhesapla}></input>
                        </div>
                        <div className={t.col}>
                            <p id="sebc" className={t.h2}>0</p>
                        </div>
                        <div className={t.col}>
                            <p id="sebp" className={t.h2}>0</p>
                        </div>
                        <div className={t.col}>
                            <p className={t.h2}>0</p>
                        </div>
                    </div>
                    <div className={t.row}>
                        <div className={t.col}>
                            <p className={t.h2}>Meyve</p>
                        </div>
                        <div className={t.col}>
                            <input id="inputmeyve" min="0" className={t.input} defaultValue="0" type="number" onChange={fhesapla}></input>
                        </div>
                        <div className={t.col}>
                            <p id="meyc" className={t.h2}>0</p>
                        </div>
                        <div className={t.col}>
                            <p className={t.h2}>0</p>
                        </div>
                        <div className={t.col}>
                            <p className={t.h2}>0</p>
                        </div>
                    </div>
                    <div className={t.row}>
                        <div className={t.col}>
                            <p className={t.h2}>Ya??</p>
                        </div>
                        <div className={t.col}>
                            <input id="inputyag" min="0" className={t.input} defaultValue="0" type="number" onChange={fhesapla}></input>
                        </div>
                        <div className={t.col}>
                            <p className={t.h2}>0</p>
                        </div>
                        <div className={t.col}>
                            <p className={t.h2}>0</p>
                        </div>
                        <div className={t.col}>
                            <p id="yagy" className={t.h2}>0</p>
                        </div>
                    </div>
                    <div className={t.row}>
                        <div className={t.col}>
                            <p className={t.h2}>Ya??l?? Tohumlar</p>
                        </div>
                        <div className={t.col}>
                            <input id="inputytoh" min="0" className={t.input} defaultValue="0" type="number" onChange={fhesapla}></input>
                        </div>
                        <div className={t.col}>
                            <p className={t.h2}>0</p>
                        </div>
                        <div className={t.col}>
                            <p id="ytohp" className={t.h2}>0</p>
                        </div>
                        <div className={t.col}>
                            <p id="ytohy" className={t.h2}>0</p>
                        </div>
                    </div>
                    <div className={t.row}>
                        <div className={t.col}>
                            <p className={t.h2}>Ekler</p>
                        </div>
                        <div className={t.col}>
                            
                        </div>
                        <div className={t.col}>
                            <input id="inputekcho" min="0" className={t.input} defaultValue="0" type="number" onChange={fhesapla}></input>
                        </div>
                        <div className={t.col}>
                            <input id="inputekpro" min="0" className={t.input} defaultValue="0" type="number" onChange={fhesapla}></input>
                        </div>
                        <div className={t.col}>
                            <input id="inputekyag" min="0" className={t.input} defaultValue="0" type="number" onChange={fhesapla}></input>
                        </div>
                    </div>
                    <div className={t.row}>
                        <div className={t.col}>
                            <p className={t.h2}>Toplam (g)</p>
                        </div>
                        <div className={t.col}>
                            
                        </div>
                        <div className={t.col}>
                            <p id="tchog" className={t.h2}>0 g</p>
                        </div>
                        <div className={t.col}>
                            <p id="tprog" className={t.h2}>0 g</p>
                        </div>
                        <div className={t.col}>
                            <p id="tyagg" className={t.h2}>0 g</p>
                        </div>
                    </div>
                    <div className={t.row}>
                        <div className={t.col}>
                            <p className={t.h2}>Toplam (kcal)</p>
                        </div>
                        <div className={t.col}>
                            <p id="tkcal" className={t.h2}>0 kcal</p>
                        </div>
                        <div className={t.col}>
                            <p id="tchok" className={t.h2}>0 kcal</p>
                        </div>
                        <div className={t.col}>
                            <p id="tprok" className={t.h2}>0 kcal</p>
                        </div>
                        <div className={t.col}>
                            <p id="tyagk" className={t.h2}>0 kcal</p>
                        </div>
                    </div>
                    <div className={t.row}>
                        <div className={t.col}>
                            <p className={t.h2}>Toplam (%)</p>
                        </div>
                        <div className={t.col}>
                            
                        </div>
                        <div className={t.col}>
                            <p id="yuzc" className={t.h2}>0</p>
                        </div>
                        <div className={t.col}>
                            <p id="yuzp" className={t.h2}>0</p>
                        </div>
                        <div className={t.col}>
                            <p id="yuzy" className={t.h2}>0</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={t.main}>
                <button className={t.btn} onClick={stilc1}>E??itici Stil</button>
                <button className={t.btn} onClick={stilc2}>??zg??r Stil</button>
            </div>
            <div id="divstil2" style={{display:'none'}} className={t.main}>
                <p className={t.h1}>Men?? Yazma</p>
                <hr></hr>
                <p className={t.h1}>Sabah ??????n??</p>
                <hr></hr>
                <textarea id="inputs2sabah" className={t.inputmenu} placeholder="Sabah ??????n??n?? giriniz"/>
                <hr></hr>
                <p className={t.h1}>Ara ??????n 1</p>
                <hr></hr>
                <textarea id="inputs2ara1" className={t.inputmenu} placeholder="1. ara ??????n?? giriniz"></textarea>
                <hr></hr>
                <p className={t.h1}>????le ??????n??</p>
                <hr></hr>
                <textarea id="inputs2ogle" className={t.inputmenu} placeholder="????le ??????n??n?? giriniz"></textarea>
                <hr></hr>
                <p className={t.h1}>Ara ??????n 2</p>
                <hr></hr>
                <textarea id="inputs2ara2" className={t.inputmenu} placeholder="2. ara ??????n?? giriniz"></textarea>
                <hr></hr>
                <p className={t.h1}>Ak??am ??????n??</p>
                <hr></hr>
                <textarea id="inputs2aksam" className={t.inputmenu} placeholder="Ak??am ??????n??n?? giriniz"></textarea>
                <hr></hr>
                <p className={t.h1}>Ara ??????n 3</p>
                <textarea id="inputs2ara3" className={t.inputmenu} placeholder="3. ara ??????n?? giriniz"></textarea>
                <hr></hr>
            </div>
            <div id="divstil1" className={t.main}>
                <p className={t.h1}>Men?? Yazma</p>
                <hr/>
                <p className={t.h1}>Sabah ??????n??</p>
                <hr></hr>
                <div className={t.divmenu}>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="s1g" className={t.select} onChange={s1gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="s1x" className={t.input} type="number" min="0" defaultValue="0" onChange={s1gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="s1" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="s2g" className={t.select} onChange={s2gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="s2x" className={t.input} type="number" min="0" defaultValue="0" onChange={s2gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="s2" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="s3g" className={t.select} onChange={s3gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="s3x" className={t.input} type="number" min="0" defaultValue="0" onChange={s3gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="s3" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="s4g" className={t.select} onChange={s4gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="s4x" className={t.input} type="number" min="0" defaultValue="0" onChange={s4gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="s4" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="s5g" className={t.select} onChange={s5gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="s5x" className={t.input} type="number" min="0" defaultValue="0" onChange={s5gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="s5" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="s6g" className={t.select} onChange={s6gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="s6x" className={t.input} type="number" min="0" defaultValue="0" onChange={s6gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="s6" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="s7g" className={t.select} onChange={s7gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="s7x" className={t.input} type="number" min="0" defaultValue="0" onChange={s7gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="s7" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="s8g" className={t.select} onChange={s8gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="s8x" className={t.input} type="number" min="0" defaultValue="0" onChange={s8gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="s8" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="s9g" className={t.select} onChange={s9gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="s9x" className={t.input} type="number" min="0" defaultValue="0" onChange={s9gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="s9" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="s10g" className={t.select} onChange={s10gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="s10x" className={t.input} type="number" min="0" defaultValue="0" onChange={s10gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="s10" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                </div>
                
                <hr></hr>
                <p className={t.h1}>Ara ??????n 1</p>
                <hr></hr>
                <div className={t.divmenu}>
                <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="r1g" className={t.select} onChange={r1gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="r1x" className={t.input} type="number" min="0" defaultValue="0" onChange={r1gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="r1" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="r2g" className={t.select} onChange={r2gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="r2x" className={t.input} type="number" min="0" defaultValue="0" onChange={r2gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="r2" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="r3g" className={t.select} onChange={r3gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="r3x" className={t.input} type="number" min="0" defaultValue="0" onChange={r3gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="r3" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="r4g" className={t.select} onChange={r4gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="r4x" className={t.input} type="number" min="0" defaultValue="0" onChange={r4gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="r4" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="r5g" className={t.select} onChange={r5gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="r5x" className={t.input} type="number" min="0" defaultValue="0" onChange={r5gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="r5" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                </div>
            
                <hr></hr>
                <p className={t.h1}>????le ??????n??</p>
                <hr></hr>
                <div className={t.divmenu}>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="o1g" className={t.select} onChange={o1gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="o1x" className={t.input} type="number" min="0" defaultValue="0" onChange={o1gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="o1" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="o2g" className={t.select} onChange={o2gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="o2x" className={t.input} type="number" min="0" defaultValue="0" onChange={o2gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="o2" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="o3g" className={t.select} onChange={o3gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="o3x" className={t.input} type="number" min="0" defaultValue="0" onChange={o3gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="o3" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="o4g" className={t.select} onChange={o4gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="o4x" className={t.input} type="number" min="0" defaultValue="0" onChange={o4gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="o4" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="o5g" className={t.select} onChange={o5gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="o5x" className={t.input} type="number" min="0" defaultValue="0" onChange={o5gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="o5" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="o6g" className={t.select} onChange={o6gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="o6x" className={t.input} type="number" min="0" defaultValue="0" onChange={o6gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="o6" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="o7g" className={t.select} onChange={o7gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="o7x" className={t.input} type="number" min="0" defaultValue="0" onChange={o7gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="o7" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="o8g" className={t.select} onChange={o8gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="o8x" className={t.input} type="number" min="0" defaultValue="0" onChange={o8gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="o8" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="o9g" className={t.select} onChange={o9gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="o9x" className={t.input} type="number" min="0" defaultValue="0" onChange={o9gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="o9" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="o10g" className={t.select} onChange={o10gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="o10x" className={t.input} type="number" min="0" defaultValue="0" onChange={o10gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="o10" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <p className={t.h1}>Ara ??????n 2</p>
                <hr></hr>
                <div className={t.divmenu}>
                <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="r6g" className={t.select} onChange={r6gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="r6x" className={t.input} type="number" min="0" defaultValue="0" onChange={r6gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="r6" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="r7g" className={t.select} onChange={r7gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="r7x" className={t.input} type="number" min="0" defaultValue="0" onChange={r7gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="r7" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="r8g" className={t.select} onChange={r8gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="r8x" className={t.input} type="number" min="0" defaultValue="0" onChange={r8gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="r8" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="r9g" className={t.select} onChange={r9gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="r9x" className={t.input} type="number" min="0" defaultValue="0" onChange={r9gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="r9" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="r10g" className={t.select} onChange={r10gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="r10x" className={t.input} type="number" min="0" defaultValue="0" onChange={r10gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="r10" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <p className={t.h1}>Ak??am ??????n??</p>
                <hr></hr>
                <div className={t.divmenu}>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="a1g" className={t.select} onChange={a1gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="a1x" className={t.input} type="number" min="0" defaultValue="0" onChange={a1gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="a1" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="a2g" className={t.select} onChange={a2gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="a2x" className={t.input} type="number" min="0" defaultValue="0" onChange={a2gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="a2" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="a3g" className={t.select} onChange={a3gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="a3x" className={t.input} type="number" min="0" defaultValue="0" onChange={a3gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="a3" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="a4g" className={t.select} onChange={a4gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="a4x" className={t.input} type="number" min="0" defaultValue="0" onChange={a4gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="a4" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="a5g" className={t.select} onChange={a5gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="a5x" className={t.input} type="number" min="0" defaultValue="0" onChange={a5gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="a5" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="a6g" className={t.select} onChange={a6gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="a6x" className={t.input} type="number" min="0" defaultValue="0" onChange={a6gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="a6" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="a7g" className={t.select} onChange={a7gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="a7x" className={t.input} type="number" min="0" defaultValue="0" onChange={a7gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="a7" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="a8g" className={t.select} onChange={a8gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="a8x" className={t.input} type="number" min="0" defaultValue="0" onChange={a8gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="a8" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="a9g" className={t.select} onChange={a9gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="a9x" className={t.input} type="number" min="0" defaultValue="0" onChange={a9gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="a9" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="a10g" className={t.select} onChange={a10gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="a10x" className={t.input} type="number" min="0" defaultValue="0" onChange={a10gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="a10" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <p className={t.h1}>Ara ??????n 3</p>
                <hr></hr>
                <div className={t.divmenu}>
                <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="r11g" className={t.select} onChange={r11gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="r11x" className={t.input} type="number" min="0" defaultValue="0" onChange={r11gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="r11" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="r12g" className={t.select} onChange={r12gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="r12x" className={t.input} type="number" min="0" defaultValue="0" onChange={r12gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="r12" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="r13g" className={t.select} onChange={r13gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="r13x" className={t.input} type="number" min="0" defaultValue="0" onChange={r13gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="r13" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="r14g" className={t.select} onChange={r14gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="r14x" className={t.input} type="number" min="0" defaultValue="0" onChange={r14gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="r14" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                    <div className={t.row2}>
                        <div className={t.col1}>
                            <select id="r15g" className={t.select} onChange={r15gc}>
                                <option key="1" className={t.option}  value="x"/>
                                <option key="2" className={t.option} value="sut">S??t</option>
                                <option key="3" className={t.option} value="et">Et</option>
                                <option key="4" className={t.option} value="ekm">EYG</option>
                                <option key="5" className={t.option} value="seb">Sebze</option>
                                <option key="6" className={t.option} value="mey">Meyve</option>
                                <option key="7" className={t.option} value="yag">Ya??</option>
                            </select>
                        </div>
                        <div className={t.col2}>
                            <input id="r15x" className={t.input} type="number" min="0" defaultValue="0" onChange={r15gc} />
                        </div>
                        <div className={t.col3} >
                            <select id="r15" className={t.select}>
                                
                            </select>
                        </div>
                    </div>
                </div>
                <hr></hr>
            </div>
            <div className={t.main}>
                <p className={t.h1}>Diyeti Nereye G??ndermek ??stedi??inizi Se??iniz</p>
                <hr></hr>
                <div className={t.divgon}>
                    <button className={t.btn2} onClick={hocgonc}>Hocaya G??nder</button>
                    <button className={t.btn2} onClick={defgonc}>Staj Defterime Ekle</button>
                </div>
            </div>
            <div id="divdytgon" className={t.main} style={{display:'none'}}>
                <p className={t.h1}>Diyeti G??nder</p>
                <hr></hr>
                <div className={t.divgon}>
                    <div className={t.row}>
                        <p className={t.h4}>Diyeti g??ndermek istedi??iniz ki??iyi se??iniz</p>
                        <select id="hocalar" className={t.select2}>
                            {hocalar.map(h=>(
                                <option key={h.id} className={t.option} value={h.id}>
                                    {h.adsoyad}
                                </option>
                            ))}
                        </select>
                        <button id="btngonder" className={t.btn2} onClick={btngonderc}>G??nder</button>
                    </div>
                </div>
            </div>
            <div id="divdefgon" className={t.main} style={{display:'none'}}>
                <p className={t.h1}>Staj Defterime Ekle</p>
                <hr></hr>
                <div className={t.divgon}>
                    <div className={t.row}>
                        <input id="inputva" className={t.input2} placeholder="Vaka Ad?? (Sadece ad?? ve soyad??n??n ba?? harflerini giriniz)"></input>
                        <textarea id="inputhast" className={t.inputmenu2} placeholder="Hastal??klar"></textarea>
                        <textarea id="inputilac" className={t.inputmenu2} placeholder="??la??lar"></textarea>
                        <textarea id="inputbul" className={t.inputmenu2} placeholder="Bulgular"></textarea>
                        <input id="inputser" className={t.input2} placeholder="Vakan??n servisi"></input>
                        <textarea id="inputinfo2" className={t.inputmenu2} placeholder="Vaka ile alakal?? bilgiler"></textarea>
                        <button id="btndefgon" className={t.btn2} onClick={btndefgonc}>Staj Defterime Ekle</button>
                    </div>
                </div>
            </div>

        </div>
    )
    async function btngonderc(){
        const sutd=document.getElementById("inputsut").value;
        const yysutd=document.getElementById("inputyysut").value;
        const yssutd=document.getElementById("inputyssut").value;
        const etd=document.getElementById("inputet").value;
        const ekmd=document.getElementById("inputekm").value;
        const kbakd=document.getElementById("inputkbak").value;
        const sebd=document.getElementById("inputsebze").value;
        const meyd=document.getElementById("inputmeyve").value;
        const yagd=document.getElementById("inputyag").value;
        const ytohd=document.getElementById("inputytoh").value;
        setsut(sutd);
        setyysut(yysutd);
        setyssut(yssutd);
        setet(etd);
        setekm(ekmd);
        setkbak(kbakd);
        setseb(sebd);
        setmey(meyd);
        setyag(yagd);
        setytoh(ytohd);


        const gramcho =document.getElementById("tchog").innerText;
        const grompro=document.getElementById("tprog").innerText;
        const gramyag=document.getElementById("tyagg").innerText;
        const topcal=document.getElementById("tkcal").innerText;
        const calcho=document.getElementById("tchok").innerText;
        const calpro=document.getElementById("tprok").innerText;
        const calyag=document.getElementById("tyagk").innerText;
        const yuzcho=document.getElementById("yuzc").innerText;
        const yuzpro=document.getElementById("yuzp").innerText;
        const yuzyag=document.getElementById("yuzy").innerText;



        const s1 = document.getElementById("s1").value;
        const s2 = document.getElementById("s2").value;
        const s3 = document.getElementById("s3").value;
        const s4 = document.getElementById("s4").value;
        const s5 = document.getElementById("s5").value;
        const s6 = document.getElementById("s6").value;
        const s7 = document.getElementById("s7").value;
        const s8 = document.getElementById("s8").value;
        const s9 = document.getElementById("s9").value;
        const s10 = document.getElementById("s10").value;
        const o1 = document.getElementById("o1").value;
        const o2 = document.getElementById("o2").value;
        const o3 = document.getElementById("o3").value;
        const o4 = document.getElementById("o4").value;
        const o5 = document.getElementById("o5").value;
        const o6 = document.getElementById("o6").value;
        const o7 = document.getElementById("o7").value;
        const o8 = document.getElementById("o8").value;
        const o9 = document.getElementById("o9").value;
        const o10 = document.getElementById("o10").value;
        const a1 = document.getElementById("a1").value;
        const a2 = document.getElementById("a2").value;
        const a3 = document.getElementById("a3").value;
        const a4 = document.getElementById("a4").value;
        const a5 = document.getElementById("a5").value;
        const a6 = document.getElementById("a6").value;
        const a7 = document.getElementById("a7").value;
        const a8 = document.getElementById("a8").value;
        const a9 = document.getElementById("a9").value;
        const a10 = document.getElementById("a10").value;
        const r1=document.getElementById("r1").value;
        const r2=document.getElementById("r2").value;
        const r3=document.getElementById("r3").value;
        const r4=document.getElementById("r4").value;
        const r5=document.getElementById("r5").value;
        const r6=document.getElementById("r6").value;
        const r7=document.getElementById("r7").value;
        const r8=document.getElementById("r8").value;
        const r9=document.getElementById("r9").value;
        const r10=document.getElementById("r10").value;
        const r11=document.getElementById("r11").value;
        const r12=document.getElementById("r12").value;
        const r13=document.getElementById("r13").value;
        const r14=document.getElementById("r14").value;
        const r15=document.getElementById("r15").value;
        setddg("1");
        let sabaho="";
        if(document.getElementById("divstil2").style.display=="block"){
            sabaho=document.getElementById("inputs2sabah").value;
        }else{
            if(s1!=""){sabaho=s1+"<br>"};
            if(s2!=""){sabaho=sabaho+s2+"<br>"};
            if(s3!=""){sabaho=sabaho+s3+"<br>"};
            if(s4!=""){sabaho=sabaho+s4+"<br>"};
            if(s5!=""){sabaho=sabaho+s5+"<br>"};
            if(s6!=""){sabaho=sabaho+s6+"<br>"};
            if(s7!=""){sabaho=sabaho+s7+"<br>"};
            if(s8!=""){sabaho=sabaho+s8+"<br>"};
            if(s9!=""){sabaho=sabaho+s9+"<br>"};
            if(s10!=""){sabaho=sabaho+s10};
        }
        setsabah(sabaho);
        let ara1o="";
        if(document.getElementById("divstil2").style.display=="block"){
            ara1o=document.getElementById("inputs2ara1").value;
        }else{
            if(r1!=""){ara1o=r1+"<br>"};
            if(r2!=""){ara1o=ara1o+r2+"<br>"};
            if(r3!=""){ara1o=ara1o+r3+"<br>"};
            if(r4!=""){ara1o=ara1o+r4+"<br>"};
            if(r5!=""){ara1o=ara1o+r5+"<br>"};
        }
        setara1(ara1o);
        let ogleo=""
        if(document.getElementById("divstil2").style.display=="block"){
            ogleo=document.getElementById("inputs2ogle").value;
        }else{
            if(o1!=""){ogleo=o1+"<br>"};
            if(o2!=""){ogleo=ogleo+o2+"<br>"};
            if(o3!=""){ogleo=ogleo+o3+"<br>"};
            if(o4!=""){ogleo=ogleo+o4+"<br>"};
            if(o5!=""){ogleo=ogleo+o5+"<br>"};
            if(o6!=""){ogleo=ogleo+o6+"<br>"};
            if(o7!=""){ogleo=ogleo+o7+"<br>"};
            if(o8!=""){ogleo=ogleo+o8+"<br>"};
            if(o9!=""){ogleo=ogleo+o9+"<br>"};
            if(o10!=""){ogleo=ogleo+o10};
        }
        setogle(ogleo);
        let ara2o="";
        if(document.getElementById("divstil2").style.display=="block"){
            ara2o=document.getElementById("inputs2ara2").value;
        }else{
            if(r6!=""){ara2o=r6+"<br>"};
            if(r7!=""){ara2o=ara2o+r7+"<br>"};
            if(r8!=""){ara2o=ara2o+r8+"<br>"};
            if(r9!=""){ara2o=ara2o+r9+"<br>"};
            if(r10!=""){ara2o=ara2o+r10+"<br>"};
        }
        setara2(ara2o);
        let aksamo=""
        if(document.getElementById("divstil2").style.display=="block"){
            aksamo=document.getElementById("inputs2aksam").value;
        }else{
            if(a1!=""){aksamo=a1+"<br>"};
            if(a2!=""){aksamo=aksamo+a2+"<br>"};
            if(a3!=""){aksamo=aksamo+a3+"<br>"};
            if(a4!=""){aksamo=aksamo+a4+"<br>"};
            if(a5!=""){aksamo=aksamo+a5+"<br>"};
            if(a6!=""){aksamo=aksamo+a6+"<br>"};
            if(a7!=""){aksamo=aksamo+a7+"<br>"};
            if(a8!=""){aksamo=aksamo+a8+"<br>"};
            if(a9!=""){aksamo=aksamo+a9+"<br>"};
            if(a10!=""){aksamo=aksamo+a10};
        }
        setaksam(aksamo);
        let ara3o="";
        if(document.getElementById("divstil2").style.display=="block"){
            ara3o=document.getElementById("inputs2ara3").value;
        }else{
            if(r11!=""){ara3o=r11+"<br>"};
            if(r12!=""){ara3o=ara3o+r12+"<br>"};
            if(r13!=""){ara3o=ara3o+r13+"<br>"};
            if(r14!=""){ara3o=ara3o+r14+"<br>"};
            if(r15!=""){ara3o=ara3o+r15+"<br>"};
        }
        setara3(ara3o);
        setload("1");
        DiyetGonFS({
            uni:cookies.get("uni"),
            adsoyad:cookies.get("adsoyad"),
            hoca:document.getElementById("hocalar").value,
            dsut:document.getElementById("inputsut").value,
            dyysut:document.getElementById("inputyysut").value,
            dyssut:document.getElementById("inputyssut").value,
            det:document.getElementById("inputet").value,
            dekm:document.getElementById("inputekm").value,
            dkbak:document.getElementById("inputkbak").value,
            dseb:document.getElementById("inputsebze").value,
            dmey:document.getElementById("inputmeyve").value,
            dyag:document.getElementById("inputyag").value,
            dytoh:document.getElementById("inputytoh").value,
            ekcho:document.getElementById("inputekcho").value,
            ekpro:document.getElementById("inputekpro").value,
            ekyag:document.getElementById("inputekyag").value,
            gcho:document.getElementById("tchog").innerText,
            gpro:document.getElementById("tprog").innerText,
            gyag:document.getElementById("tyagg").innerText,
            topkcal:document.getElementById("tkcal").innerText,
            kcho:document.getElementById("tchok").innerText,
            kpro:document.getElementById("tprok").innerText,
            kyag:document.getElementById("tyagk").innerText,
            ycho:document.getElementById("yuzc").innerText,
            ypro:document.getElementById("yuzp").innerText,
            yyag:document.getElementById("yuzy").innerText,
            dm:dm.toString(),
            osabah:sabaho,
            oara1:ara1o,
            oogle:ogleo,
            oara2:ara2o,
            oaksam:aksamo,
            oara3:ara3o
        })
        setload("0");
        window.scrollTo(0,0);
    }
    async function btngonderc1(){
        const sutd=document.getElementById("inputsut").value;
        const yysutd=document.getElementById("inputyysut").value;
        const yssutd=document.getElementById("inputyssut").value;
        const etd=document.getElementById("inputet").value;
        const ekmd=document.getElementById("inputekm").value;
        const kbakd=document.getElementById("inputkbak").value;
        const sebd=document.getElementById("inputsebze").value;
        const meyd=document.getElementById("inputmeyve").value;
        const yagd=document.getElementById("inputyag").value;
        const ytohd=document.getElementById("inputytoh").value;
        setsut(sutd);
        setyysut(yysutd);
        setyssut(yssutd);
        setet(etd);
        setekm(ekmd);
        setkbak(kbakd);
        setseb(sebd);
        setmey(meyd);
        setyag(yagd);
        setytoh(ytohd);


        const gramcho =document.getElementById("tchog").innerText;
        const grompro=document.getElementById("tprog").innerText;
        const gramyag=document.getElementById("tyagg").innerText;
        const topcal=document.getElementById("tkcal").innerText;
        const calcho=document.getElementById("tchok").innerText;
        const calpro=document.getElementById("tprok").innerText;
        const calyag=document.getElementById("tyagk").innerText;
        const yuzcho=document.getElementById("yuzc").innerText;
        const yuzpro=document.getElementById("yuzp").innerText;
        const yuzyag=document.getElementById("yuzy").innerText;



        const s1 = document.getElementById("s1").value;
        const s2 = document.getElementById("s2").value;
        const s3 = document.getElementById("s3").value;
        const s4 = document.getElementById("s4").value;
        const s5 = document.getElementById("s5").value;
        const s6 = document.getElementById("s6").value;
        const s7 = document.getElementById("s7").value;
        const s8 = document.getElementById("s8").value;
        const s9 = document.getElementById("s9").value;
        const s10 = document.getElementById("s10").value;
        const o1 = document.getElementById("o1").value;
        const o2 = document.getElementById("o2").value;
        const o3 = document.getElementById("o3").value;
        const o4 = document.getElementById("o4").value;
        const o5 = document.getElementById("o5").value;
        const o6 = document.getElementById("o6").value;
        const o7 = document.getElementById("o7").value;
        const o8 = document.getElementById("o8").value;
        const o9 = document.getElementById("o9").value;
        const o10 = document.getElementById("o10").value;
        const a1 = document.getElementById("a1").value;
        const a2 = document.getElementById("a2").value;
        const a3 = document.getElementById("a3").value;
        const a4 = document.getElementById("a4").value;
        const a5 = document.getElementById("a5").value;
        const a6 = document.getElementById("a6").value;
        const a7 = document.getElementById("a7").value;
        const a8 = document.getElementById("a8").value;
        const a9 = document.getElementById("a9").value;
        const a10 = document.getElementById("a10").value;
        const r1=document.getElementById("r1").value;
        const r2=document.getElementById("r2").value;
        const r3=document.getElementById("r3").value;
        const r4=document.getElementById("r4").value;
        const r5=document.getElementById("r5").value;
        const r6=document.getElementById("r6").value;
        const r7=document.getElementById("r7").value;
        const r8=document.getElementById("r8").value;
        const r9=document.getElementById("r9").value;
        const r10=document.getElementById("r10").value;
        const r11=document.getElementById("r11").value;
        const r12=document.getElementById("r12").value;
        const r13=document.getElementById("r13").value;
        const r14=document.getElementById("r14").value;
        const r15=document.getElementById("r15").value;
        setddg("1");
        let sabaho="";
        if(document.getElementById("divstil2").style.display=="block"){
            sabaho=document.getElementById("inputs2sabah").value;
        }else{
            if(s1!=""){sabaho=s1+"<br>"};
            if(s2!=""){sabaho=sabaho+s2+"<br>"};
            if(s3!=""){sabaho=sabaho+s3+"<br>"};
            if(s4!=""){sabaho=sabaho+s4+"<br>"};
            if(s5!=""){sabaho=sabaho+s5+"<br>"};
            if(s6!=""){sabaho=sabaho+s6+"<br>"};
            if(s7!=""){sabaho=sabaho+s7+"<br>"};
            if(s8!=""){sabaho=sabaho+s8+"<br>"};
            if(s9!=""){sabaho=sabaho+s9+"<br>"};
            if(s10!=""){sabaho=sabaho+s10};
        }
        setsabah(sabaho);
        let ara1o="";
        if(document.getElementById("divstil2").style.display=="block"){
            ara1o=document.getElementById("inputs2ara1").value;
        }else{
            if(r1!=""){ara1o=r1+"<br>"};
            if(r2!=""){ara1o=ara1o+r2+"<br>"};
            if(r3!=""){ara1o=ara1o+r3+"<br>"};
            if(r4!=""){ara1o=ara1o+r4+"<br>"};
            if(r5!=""){ara1o=ara1o+r5+"<br>"};
        }
        setara1(ara1o);
        let ogleo=""
        if(document.getElementById("divstil2").style.display=="block"){
            ogleo=document.getElementById("inputs2ogle").value;
        }else{
            if(o1!=""){ogleo=o1+"<br>"};
            if(o2!=""){ogleo=ogleo+o2+"<br>"};
            if(o3!=""){ogleo=ogleo+o3+"<br>"};
            if(o4!=""){ogleo=ogleo+o4+"<br>"};
            if(o5!=""){ogleo=ogleo+o5+"<br>"};
            if(o6!=""){ogleo=ogleo+o6+"<br>"};
            if(o7!=""){ogleo=ogleo+o7+"<br>"};
            if(o8!=""){ogleo=ogleo+o8+"<br>"};
            if(o9!=""){ogleo=ogleo+o9+"<br>"};
            if(o10!=""){ogleo=ogleo+o10};
        }
        setogle(ogleo);
        let ara2o="";
        if(document.getElementById("divstil2").style.display=="block"){
            ara2o=document.getElementById("inputs2ara2").value;
        }else{
            if(r6!=""){ara2o=r6+"<br>"};
            if(r7!=""){ara2o=ara2o+r7+"<br>"};
            if(r8!=""){ara2o=ara2o+r8+"<br>"};
            if(r9!=""){ara2o=ara2o+r9+"<br>"};
            if(r10!=""){ara2o=ara2o+r10+"<br>"};
        }
        setara2(ara2o);
        let aksamo=""
        if(document.getElementById("divstil2").style.display=="block"){
            aksamo=document.getElementById("inputs2aksam").value;
        }else{
            if(a1!=""){aksamo=a1+"<br>"};
            if(a2!=""){aksamo=aksamo+a2+"<br>"};
            if(a3!=""){aksamo=aksamo+a3+"<br>"};
            if(a4!=""){aksamo=aksamo+a4+"<br>"};
            if(a5!=""){aksamo=aksamo+a5+"<br>"};
            if(a6!=""){aksamo=aksamo+a6+"<br>"};
            if(a7!=""){aksamo=aksamo+a7+"<br>"};
            if(a8!=""){aksamo=aksamo+a8+"<br>"};
            if(a9!=""){aksamo=aksamo+a9+"<br>"};
            if(a10!=""){aksamo=aksamo+a10};
        }
        setaksam(aksamo);
        let ara3o="";
        if(document.getElementById("divstil2").style.display=="block"){
            ara3o=document.getElementById("inputs2ara3").value;
        }else{
            if(r11!=""){ara3o=r11+"<br>"};
            if(r12!=""){ara3o=ara3o+r12+"<br>"};
            if(r13!=""){ara3o=ara3o+r13+"<br>"};
            if(r14!=""){ara3o=ara3o+r14+"<br>"};
            if(r15!=""){ara3o=ara3o+r15+"<br>"};
        }
        setara3(ara3o);
        setload("1");
        const gon = await fetch('../api/diyetgon',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                uni1:cookies.get("uni"),
                adsoyad1:cookies.get("adsoyad"),
                hoca1:document.getElementById("hocalar").value,
                dsut1:document.getElementById("inputsut").value,
                dyysut1:document.getElementById("inputyysut").value,
                dyssut1:document.getElementById("inputyssut").value,
                det1:document.getElementById("inputet").value,
                dekm1:document.getElementById("inputekm").value,
                dkbak1:document.getElementById("inputkbak").value,
                dseb1:document.getElementById("inputsebze").value,
                dmey1:document.getElementById("inputmeyve").value,
                dyag1:document.getElementById("inputyag").value,
                dytoh1:document.getElementById("inputytoh").value,
                ekcho1:document.getElementById("inputekcho").value,
                ekpro1:document.getElementById("inputekpro").value,
                ekyag1:document.getElementById("inputekyag").value,
                gcho1:document.getElementById("tchog").innerText,
                gpro1:document.getElementById("tprog").innerText,
                gyag1:document.getElementById("tyagg").innerText,
                topkcal1:document.getElementById("tkcal").innerText,
                kcho1:document.getElementById("tchok").innerText,
                kpro1:document.getElementById("tprok").innerText,
                kyag1:document.getElementById("tyagk").innerText,
                ycho1:document.getElementById("yuzc").innerText,
                ypro1:document.getElementById("yuzp").innerText,
                yyag1:document.getElementById("yuzy").innerText,
                dm1:dm.toString(),
                osabah1:sabaho,
                oara11:ara1o,
                oogle1:ogleo,
                oara21:ara2o,
                oaksam1:aksamo,
                oara31:ara3o
            })

        });
        const yan = await gon.json();
        setload("0");
        alert(yan["id"]+" numaral?? diyetiniz ba??ar??yla g??nderilmi??tir.")
        window.scrollTo(0,0);
    }
    async function btndefgonc(req,res){
        const sutd=document.getElementById("inputsut").value;
        const yysutd=document.getElementById("inputyysut").value;
        const yssutd=document.getElementById("inputyssut").value;
        const etd=document.getElementById("inputet").value;
        const ekmd=document.getElementById("inputekm").value;
        const kbakd=document.getElementById("inputkbak").value;
        const sebd=document.getElementById("inputsebze").value;
        const meyd=document.getElementById("inputmeyve").value;
        const yagd=document.getElementById("inputyag").value;
        const ytohd=document.getElementById("inputytoh").value;
        setsut(sutd);
        setyysut(yysutd);
        setyssut(yssutd);
        setet(etd);
        setekm(ekmd);
        setkbak(kbakd);
        setseb(sebd);
        setmey(meyd);
        setyag(yagd);
        setytoh(ytohd);


        const gramcho =document.getElementById("tchog").innerText;
        const grompro=document.getElementById("tprog").innerText;
        const gramyag=document.getElementById("tyagg").innerText;
        const topcal=document.getElementById("tkcal").innerText;
        const calcho=document.getElementById("tchok").innerText;
        const calpro=document.getElementById("tprok").innerText;
        const calyag=document.getElementById("tyagk").innerText;
        const yuzcho=document.getElementById("yuzc").innerText;
        const yuzpro=document.getElementById("yuzp").innerText;
        const yuzyag=document.getElementById("yuzy").innerText;



        const s1 = document.getElementById("s1").value;
        const s2 = document.getElementById("s2").value;
        const s3 = document.getElementById("s3").value;
        const s4 = document.getElementById("s4").value;
        const s5 = document.getElementById("s5").value;
        const s6 = document.getElementById("s6").value;
        const s7 = document.getElementById("s7").value;
        const s8 = document.getElementById("s8").value;
        const s9 = document.getElementById("s9").value;
        const s10 = document.getElementById("s10").value;
        const o1 = document.getElementById("o1").value;
        const o2 = document.getElementById("o2").value;
        const o3 = document.getElementById("o3").value;
        const o4 = document.getElementById("o4").value;
        const o5 = document.getElementById("o5").value;
        const o6 = document.getElementById("o6").value;
        const o7 = document.getElementById("o7").value;
        const o8 = document.getElementById("o8").value;
        const o9 = document.getElementById("o9").value;
        const o10 = document.getElementById("o10").value;
        const a1 = document.getElementById("a1").value;
        const a2 = document.getElementById("a2").value;
        const a3 = document.getElementById("a3").value;
        const a4 = document.getElementById("a4").value;
        const a5 = document.getElementById("a5").value;
        const a6 = document.getElementById("a6").value;
        const a7 = document.getElementById("a7").value;
        const a8 = document.getElementById("a8").value;
        const a9 = document.getElementById("a9").value;
        const a10 = document.getElementById("a10").value;
        const r1=document.getElementById("r1").value;
        const r2=document.getElementById("r2").value;
        const r3=document.getElementById("r3").value;
        const r4=document.getElementById("r4").value;
        const r5=document.getElementById("r5").value;
        const r6=document.getElementById("r6").value;
        const r7=document.getElementById("r7").value;
        const r8=document.getElementById("r8").value;
        const r9=document.getElementById("r9").value;
        const r10=document.getElementById("r10").value;
        const r11=document.getElementById("r11").value;
        const r12=document.getElementById("r12").value;
        const r13=document.getElementById("r13").value;
        const r14=document.getElementById("r14").value;
        const r15=document.getElementById("r15").value;
        setddg("1");
        let sabaho="";
        if(document.getElementById("divstil2").style.display=="block"){
            sabaho=document.getElementById("inputs2sabah").value;
        }else{
            if(s1!=""){sabaho=s1+"<br>"};
            if(s2!=""){sabaho=sabaho+s2+"<br>"};
            if(s3!=""){sabaho=sabaho+s3+"<br>"};
            if(s4!=""){sabaho=sabaho+s4+"<br>"};
            if(s5!=""){sabaho=sabaho+s5+"<br>"};
            if(s6!=""){sabaho=sabaho+s6+"<br>"};
            if(s7!=""){sabaho=sabaho+s7+"<br>"};
            if(s8!=""){sabaho=sabaho+s8+"<br>"};
            if(s9!=""){sabaho=sabaho+s9+"<br>"};
            if(s10!=""){sabaho=sabaho+s10};
        }
        setsabah(sabaho);
        let ara1o="";
        if(document.getElementById("divstil2").style.display=="block"){
            ara1o=document.getElementById("inputs2ara1").value;
        }else{
            if(r1!=""){ara1o=r1+"<br>"};
            if(r2!=""){ara1o=ara1o+r2+"<br>"};
            if(r3!=""){ara1o=ara1o+r3+"<br>"};
            if(r4!=""){ara1o=ara1o+r4+"<br>"};
            if(r5!=""){ara1o=ara1o+r5+"<br>"};
        }
        setara1(ara1o);
        let ogleo=""
        if(document.getElementById("divstil2").style.display=="block"){
            ogleo=document.getElementById("inputs2ogle").value;
        }else{
            if(o1!=""){ogleo=o1+"<br>"};
            if(o2!=""){ogleo=ogleo+o2+"<br>"};
            if(o3!=""){ogleo=ogleo+o3+"<br>"};
            if(o4!=""){ogleo=ogleo+o4+"<br>"};
            if(o5!=""){ogleo=ogleo+o5+"<br>"};
            if(o6!=""){ogleo=ogleo+o6+"<br>"};
            if(o7!=""){ogleo=ogleo+o7+"<br>"};
            if(o8!=""){ogleo=ogleo+o8+"<br>"};
            if(o9!=""){ogleo=ogleo+o9+"<br>"};
            if(o10!=""){ogleo=ogleo+o10};
        }
        setogle(ogleo);
        let ara2o="";
        if(document.getElementById("divstil2").style.display=="block"){
            ara2o=document.getElementById("inputs2ara2").value;
        }else{
            if(r6!=""){ara2o=r6+"<br>"};
            if(r7!=""){ara2o=ara2o+r7+"<br>"};
            if(r8!=""){ara2o=ara2o+r8+"<br>"};
            if(r9!=""){ara2o=ara2o+r9+"<br>"};
            if(r10!=""){ara2o=ara2o+r10+"<br>"};
        }
        setara2(ara2o);
        let aksamo=""
        if(document.getElementById("divstil2").style.display=="block"){
            aksamo=document.getElementById("inputs2aksam").value;
        }else{
            if(a1!=""){aksamo=a1+"<br>"};
            if(a2!=""){aksamo=aksamo+a2+"<br>"};
            if(a3!=""){aksamo=aksamo+a3+"<br>"};
            if(a4!=""){aksamo=aksamo+a4+"<br>"};
            if(a5!=""){aksamo=aksamo+a5+"<br>"};
            if(a6!=""){aksamo=aksamo+a6+"<br>"};
            if(a7!=""){aksamo=aksamo+a7+"<br>"};
            if(a8!=""){aksamo=aksamo+a8+"<br>"};
            if(a9!=""){aksamo=aksamo+a9+"<br>"};
            if(a10!=""){aksamo=aksamo+a10};
        }
        setaksam(aksamo);
        let ara3o="";
        if(document.getElementById("divstil2").style.display=="block"){
            ara3o=document.getElementById("inputs2ara3").value;
        }else{
            if(r11!=""){ara3o=r11+"<br>"};
            if(r12!=""){ara3o=ara3o+r12+"<br>"};
            if(r13!=""){ara3o=ara3o+r13+"<br>"};
            if(r14!=""){ara3o=ara3o+r14+"<br>"};
            if(r15!=""){ara3o=ara3o+r15+"<br>"};
        }
        setara3(ara3o);
        setload("1");
        DefGonFS({
            ono:cookies.get("ono"),
            uni:cookies.get("uni"),
            adsoyad:cookies.get("adsoyad"),
            dsut:document.getElementById("inputsut").value,
            dyysut:document.getElementById("inputyysut").value,
            dyssut:document.getElementById("inputyssut").value,
            det:document.getElementById("inputet").value,
            dekm:document.getElementById("inputekm").value,
            dkbak:document.getElementById("inputkbak").value,
            dseb:document.getElementById("inputsebze").value,
            dmey:document.getElementById("inputmeyve").value,
            dyag:document.getElementById("inputyag").value,
            dytoh:document.getElementById("inputytoh").value,
            ekcho:document.getElementById("inputekcho").value,
            ekpro:document.getElementById("inputekpro").value,
            ekyag:document.getElementById("inputekyag").value,
            gcho:document.getElementById("tchog").innerText,
            gpro:document.getElementById("tprog").innerText,
            gyag:document.getElementById("tyagg").innerText,
            topkcal:document.getElementById("tkcal").innerText,
            kcho:document.getElementById("tchok").innerText,
            kpro:document.getElementById("tprok").innerText,
            kyag:document.getElementById("tyagk").innerText,
            ycho:document.getElementById("yuzc").innerText,
            ypro:document.getElementById("yuzp").innerText,
            yyag:document.getElementById("yuzy").innerText,
            osabah:sabaho,
            oara1:ara1o,
            oogle:ogleo,
            oara2:ara2o,
            oaksam:aksamo,
            oara3:ara3o,
            dm:dm.toString(),
            vakaadi:document.getElementById("inputva").value,
            hastaliklar:document.getElementById("inputhast").value,
            ilaclar:document.getElementById("inputhast").value,
            bulgular:document.getElementById("inputbul").value,
            servis:document.getElementById("inputser").value,
            info:document.getElementById("inputinfo2").value
        })
        setload("0");
        window.scrollTo(0,0);
    }
    async function btndefgonc1(req,res){
        const sutd=document.getElementById("inputsut").value;
        const yysutd=document.getElementById("inputyysut").value;
        const yssutd=document.getElementById("inputyssut").value;
        const etd=document.getElementById("inputet").value;
        const ekmd=document.getElementById("inputekm").value;
        const kbakd=document.getElementById("inputkbak").value;
        const sebd=document.getElementById("inputsebze").value;
        const meyd=document.getElementById("inputmeyve").value;
        const yagd=document.getElementById("inputyag").value;
        const ytohd=document.getElementById("inputytoh").value;
        setsut(sutd);
        setyysut(yysutd);
        setyssut(yssutd);
        setet(etd);
        setekm(ekmd);
        setkbak(kbakd);
        setseb(sebd);
        setmey(meyd);
        setyag(yagd);
        setytoh(ytohd);


        const gramcho =document.getElementById("tchog").innerText;
        const grompro=document.getElementById("tprog").innerText;
        const gramyag=document.getElementById("tyagg").innerText;
        const topcal=document.getElementById("tkcal").innerText;
        const calcho=document.getElementById("tchok").innerText;
        const calpro=document.getElementById("tprok").innerText;
        const calyag=document.getElementById("tyagk").innerText;
        const yuzcho=document.getElementById("yuzc").innerText;
        const yuzpro=document.getElementById("yuzp").innerText;
        const yuzyag=document.getElementById("yuzy").innerText;



        const s1 = document.getElementById("s1").value;
        const s2 = document.getElementById("s2").value;
        const s3 = document.getElementById("s3").value;
        const s4 = document.getElementById("s4").value;
        const s5 = document.getElementById("s5").value;
        const s6 = document.getElementById("s6").value;
        const s7 = document.getElementById("s7").value;
        const s8 = document.getElementById("s8").value;
        const s9 = document.getElementById("s9").value;
        const s10 = document.getElementById("s10").value;
        const o1 = document.getElementById("o1").value;
        const o2 = document.getElementById("o2").value;
        const o3 = document.getElementById("o3").value;
        const o4 = document.getElementById("o4").value;
        const o5 = document.getElementById("o5").value;
        const o6 = document.getElementById("o6").value;
        const o7 = document.getElementById("o7").value;
        const o8 = document.getElementById("o8").value;
        const o9 = document.getElementById("o9").value;
        const o10 = document.getElementById("o10").value;
        const a1 = document.getElementById("a1").value;
        const a2 = document.getElementById("a2").value;
        const a3 = document.getElementById("a3").value;
        const a4 = document.getElementById("a4").value;
        const a5 = document.getElementById("a5").value;
        const a6 = document.getElementById("a6").value;
        const a7 = document.getElementById("a7").value;
        const a8 = document.getElementById("a8").value;
        const a9 = document.getElementById("a9").value;
        const a10 = document.getElementById("a10").value;
        const r1=document.getElementById("r1").value;
        const r2=document.getElementById("r2").value;
        const r3=document.getElementById("r3").value;
        const r4=document.getElementById("r4").value;
        const r5=document.getElementById("r5").value;
        const r6=document.getElementById("r6").value;
        const r7=document.getElementById("r7").value;
        const r8=document.getElementById("r8").value;
        const r9=document.getElementById("r9").value;
        const r10=document.getElementById("r10").value;
        const r11=document.getElementById("r11").value;
        const r12=document.getElementById("r12").value;
        const r13=document.getElementById("r13").value;
        const r14=document.getElementById("r14").value;
        const r15=document.getElementById("r15").value;
        setddg("1");
        let sabaho="";
        if(document.getElementById("divstil2").style.display=="block"){
            sabaho=document.getElementById("inputs2sabah").value;
        }else{
            if(s1!=""){sabaho=s1+"<br>"};
            if(s2!=""){sabaho=sabaho+s2+"<br>"};
            if(s3!=""){sabaho=sabaho+s3+"<br>"};
            if(s4!=""){sabaho=sabaho+s4+"<br>"};
            if(s5!=""){sabaho=sabaho+s5+"<br>"};
            if(s6!=""){sabaho=sabaho+s6+"<br>"};
            if(s7!=""){sabaho=sabaho+s7+"<br>"};
            if(s8!=""){sabaho=sabaho+s8+"<br>"};
            if(s9!=""){sabaho=sabaho+s9+"<br>"};
            if(s10!=""){sabaho=sabaho+s10};
        }
        setsabah(sabaho);
        let ara1o="";
        if(document.getElementById("divstil2").style.display=="block"){
            ara1o=document.getElementById("inputs2ara1").value;
        }else{
            if(r1!=""){ara1o=r1+"<br>"};
            if(r2!=""){ara1o=ara1o+r2+"<br>"};
            if(r3!=""){ara1o=ara1o+r3+"<br>"};
            if(r4!=""){ara1o=ara1o+r4+"<br>"};
            if(r5!=""){ara1o=ara1o+r5+"<br>"};
        }
        setara1(ara1o);
        let ogleo=""
        if(document.getElementById("divstil2").style.display=="block"){
            ogleo=document.getElementById("inputs2ogle").value;
        }else{
            if(o1!=""){ogleo=o1+"<br>"};
            if(o2!=""){ogleo=ogleo+o2+"<br>"};
            if(o3!=""){ogleo=ogleo+o3+"<br>"};
            if(o4!=""){ogleo=ogleo+o4+"<br>"};
            if(o5!=""){ogleo=ogleo+o5+"<br>"};
            if(o6!=""){ogleo=ogleo+o6+"<br>"};
            if(o7!=""){ogleo=ogleo+o7+"<br>"};
            if(o8!=""){ogleo=ogleo+o8+"<br>"};
            if(o9!=""){ogleo=ogleo+o9+"<br>"};
            if(o10!=""){ogleo=ogleo+o10};
        }
        setogle(ogleo);
        let ara2o="";
        if(document.getElementById("divstil2").style.display=="block"){
            ara2o=document.getElementById("inputs2ara2").value;
        }else{
            if(r6!=""){ara2o=r6+"<br>"};
            if(r7!=""){ara2o=ara2o+r7+"<br>"};
            if(r8!=""){ara2o=ara2o+r8+"<br>"};
            if(r9!=""){ara2o=ara2o+r9+"<br>"};
            if(r10!=""){ara2o=ara2o+r10+"<br>"};
        }
        setara2(ara2o);
        let aksamo=""
        if(document.getElementById("divstil2").style.display=="block"){
            aksamo=document.getElementById("inputs2aksam").value;
        }else{
            if(a1!=""){aksamo=a1+"<br>"};
            if(a2!=""){aksamo=aksamo+a2+"<br>"};
            if(a3!=""){aksamo=aksamo+a3+"<br>"};
            if(a4!=""){aksamo=aksamo+a4+"<br>"};
            if(a5!=""){aksamo=aksamo+a5+"<br>"};
            if(a6!=""){aksamo=aksamo+a6+"<br>"};
            if(a7!=""){aksamo=aksamo+a7+"<br>"};
            if(a8!=""){aksamo=aksamo+a8+"<br>"};
            if(a9!=""){aksamo=aksamo+a9+"<br>"};
            if(a10!=""){aksamo=aksamo+a10};
        }
        setaksam(aksamo);
        let ara3o="";
        if(document.getElementById("divstil2").style.display=="block"){
            ara3o=document.getElementById("inputs2ara3").value;
        }else{
            if(r11!=""){ara3o=r11+"<br>"};
            if(r12!=""){ara3o=ara3o+r12+"<br>"};
            if(r13!=""){ara3o=ara3o+r13+"<br>"};
            if(r14!=""){ara3o=ara3o+r14+"<br>"};
            if(r15!=""){ara3o=ara3o+r15+"<br>"};
        }
        setara3(ara3o);
        setload("1");
        const gon = await fetch('../api/defgon',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                ono1:cookies.get("ono"),
                uni1:cookies.get("uni"),
                adsoyad1:cookies.get("adsoyad"),
                dsut1:document.getElementById("inputsut").value,
                dyysut1:document.getElementById("inputyysut").value,
                dyssut1:document.getElementById("inputyssut").value,
                det1:document.getElementById("inputet").value,
                dekm1:document.getElementById("inputekm").value,
                dkbak1:document.getElementById("inputkbak").value,
                dseb1:document.getElementById("inputsebze").value,
                dmey1:document.getElementById("inputmeyve").value,
                dyag1:document.getElementById("inputyag").value,
                dytoh1:document.getElementById("inputytoh").value,
                ekcho1:document.getElementById("inputekcho").value,
                ekpro1:document.getElementById("inputekpro").value,
                ekyag1:document.getElementById("inputekyag").value,
                gcho1:document.getElementById("tchog").innerText,
                gpro1:document.getElementById("tprog").innerText,
                gyag1:document.getElementById("tyagg").innerText,
                topkcal1:document.getElementById("tkcal").innerText,
                kcho1:document.getElementById("tchok").innerText,
                kpro1:document.getElementById("tprok").innerText,
                kyag1:document.getElementById("tyagk").innerText,
                ycho1:document.getElementById("yuzc").innerText,
                ypro1:document.getElementById("yuzp").innerText,
                yyag1:document.getElementById("yuzy").innerText,
                osabah1:sabaho,
                oara11:ara1o,
                oogle1:ogleo,
                oara21:ara2o,
                oaksam1:aksamo,
                oara31:ara3o,
                dm1:dm.toString(),
                vakaadi1:document.getElementById("inputva").value,
                hastaliklar1:document.getElementById("inputhast").value,
                ilaclar1:document.getElementById("inputhast").value,
                bulgular1:document.getElementById("inputbul").value,
                servis1:document.getElementById("inputser").value,
                info1:document.getElementById("inputinfo2").value
            })

        });
        const yan = await gon.json();
        setload("0");
        alert(yan["id"]+ " numaral?? diyetiniz staj defterinize kaydedilmi??tir.");
        window.scrollTo(0,0);
    }
    function s1gc(){
        const s=document.getElementById("s1");
        const sg = document.getElementById("s1g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("s1x").value=="0" || document.getElementById("s1x").value==""){
            document.getElementById("s1x").value="1";
        }
        const sx = parseFloat(document.getElementById("s1x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function s2gc(){
        const s=document.getElementById("s2");
        const sg = document.getElementById("s2g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("s2x").value=="0" || document.getElementById("s2x").value==""){
            document.getElementById("s2x").value="1";
        }
        const sx = parseFloat(document.getElementById("s2x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    
    function s3gc(){
        const s=document.getElementById("s3");
        const sg = document.getElementById("s3g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("s3x").value=="0" || document.getElementById("s3x").value==""){
            document.getElementById("s3x").value="1";
        }
        const sx = parseFloat(document.getElementById("s3x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function s4gc(){
        const s=document.getElementById("s4");
        const sg = document.getElementById("s4g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("s4x").value=="0" || document.getElementById("s4x").value==""){
            document.getElementById("s4x").value="1";
        }
        const sx = parseFloat(document.getElementById("s4x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function s5gc(){
        const s=document.getElementById("s5");
        const sg = document.getElementById("s5g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("s5x").value=="0" || document.getElementById("s5x").value==""){
            document.getElementById("s5x").value="1";
        }
        const sx = parseFloat(document.getElementById("s5x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function s6gc(){
        const s=document.getElementById("s6");
        const sg = document.getElementById("s6g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("s6x").value=="0" || document.getElementById("s6x").value==""){
            document.getElementById("s6x").value="1";
        }
        const sx = parseFloat(document.getElementById("s6x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function s7gc(){
        const s=document.getElementById("s7");
        const sg = document.getElementById("s7g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("s7x").value=="0" || document.getElementById("s7x").value==""){
            document.getElementById("s7x").value="1";
        }
        const sx = parseFloat(document.getElementById("s7x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function s8gc(){
        const s=document.getElementById("s8");
        const sg = document.getElementById("s8g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("s8x").value=="0" || document.getElementById("s8x").value==""){
            document.getElementById("s8x").value="1";
        }
        const sx = parseFloat(document.getElementById("s8x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function s9gc(){
        const s=document.getElementById("s9");
        const sg = document.getElementById("s9g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("s9x").value=="0" || document.getElementById("s9x").value==""){
            document.getElementById("s9x").value="1";
        }
        const sx = parseFloat(document.getElementById("s9x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function s10gc(){
        const s=document.getElementById("s10");
        const sg = document.getElementById("s10g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("s10x").value=="0" || document.getElementById("s10x").value==""){
            document.getElementById("s10x").value="1";
        }
        const sx = parseFloat(document.getElementById("s10x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function r6gc(){
        const s=document.getElementById("r6");
        const sg = document.getElementById("r6g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("r6x").value=="0" || document.getElementById("r6x").value==""){
            document.getElementById("r6x").value="1";
        }
        const sx = parseFloat(document.getElementById("r6x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function r7gc(){
        const s=document.getElementById("r7");
        const sg = document.getElementById("r7g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("r7x").value=="0" || document.getElementById("r7x").value==""){
            document.getElementById("r7x").value="1";
        }
        const sx = parseFloat(document.getElementById("r7x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function r8gc(){
        const s=document.getElementById("r8");
        const sg = document.getElementById("r8g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("r8x").value=="0" || document.getElementById("r8x").value==""){
            document.getElementById("r8x").value="1";
        }
        const sx = parseFloat(document.getElementById("r8x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function r9gc(){
        const s=document.getElementById("r9");
        const sg = document.getElementById("r9g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("r9x").value=="0" || document.getElementById("r9x").value==""){
            document.getElementById("r9x").value="1";
        }
        const sx = parseFloat(document.getElementById("r9x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function r10gc(){
        const s=document.getElementById("r10");
        const sg = document.getElementById("r10g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("r10x").value=="0" || document.getElementById("r10x").value==""){
            document.getElementById("r10x").value="1";
        }
        const sx = parseFloat(document.getElementById("r10x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function r1gc(){
        const s=document.getElementById("r1");
        const sg = document.getElementById("r1g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("r1x").value=="0" || document.getElementById("r1x").value==""){
            document.getElementById("r1x").value="1";
        }
        const sx = parseFloat(document.getElementById("r1x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function r2gc(){
        const s=document.getElementById("r2");
        const sg = document.getElementById("r2g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("r2x").value=="0" || document.getElementById("r2x").value==""){
            document.getElementById("r2x").value="1";
        }
        const sx = parseFloat(document.getElementById("r2x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    
    function r3gc(){
        const s=document.getElementById("r3");
        const sg = document.getElementById("r3g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("r3x").value=="0" || document.getElementById("r3x").value==""){
            document.getElementById("r3x").value="1";
        }
        const sx = parseFloat(document.getElementById("r3x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function r4gc(){
        const s=document.getElementById("r4");
        const sg = document.getElementById("r4g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("r4x").value=="0" || document.getElementById("r4x").value==""){
            document.getElementById("r4x").value="1";
        }
        const sx = parseFloat(document.getElementById("r4x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function r5gc(){
        const s=document.getElementById("r5");
        const sg = document.getElementById("r5g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("r5x").value=="0" || document.getElementById("r5x").value==""){
            document.getElementById("r5x").value="1";
        }
        const sx = parseFloat(document.getElementById("r5x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function o1gc(){
        const s=document.getElementById("o1");
        const sg = document.getElementById("o1g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("o1x").value=="0" || document.getElementById("o1x").value==""){
            document.getElementById("o1x").value="1";
        }
        const sx = parseFloat(document.getElementById("o1x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function o2gc(){
        const s=document.getElementById("o2");
        const sg = document.getElementById("o2g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("o2x").value=="0" || document.getElementById("o2x").value==""){
            document.getElementById("o2x").value="1";
        }
        const sx = parseFloat(document.getElementById("o2x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    
    function o3gc(){
        const s=document.getElementById("o3");
        const sg = document.getElementById("o3g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("o3x").value=="0" || document.getElementById("o3x").value==""){
            document.getElementById("o3x").value="1";
        }
        const sx = parseFloat(document.getElementById("o3x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function o4gc(){
        const s=document.getElementById("o4");
        const sg = document.getElementById("o4g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("o4x").value=="0" || document.getElementById("o4x").value==""){
            document.getElementById("o4x").value="1";
        }
        const sx = parseFloat(document.getElementById("o4x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function o5gc(){
        const s=document.getElementById("o5");
        const sg = document.getElementById("o5g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("o5x").value=="0" || document.getElementById("o5x").value==""){
            document.getElementById("o5x").value="1";
        }
        const sx = parseFloat(document.getElementById("o5x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function o6gc(){
        const s=document.getElementById("o6");
        const sg = document.getElementById("o6g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("o6x").value=="0" || document.getElementById("o6x").value==""){
            document.getElementById("o6x").value="1";
        }
        const sx = parseFloat(document.getElementById("o6x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function o7gc(){
        const s=document.getElementById("o7");
        const sg = document.getElementById("o7g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("o7x").value=="0" || document.getElementById("o7x").value==""){
            document.getElementById("o7x").value="1";
        }
        const sx = parseFloat(document.getElementById("o7x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function o8gc(){
        const s=document.getElementById("o8");
        const sg = document.getElementById("o8g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("o8x").value=="0" || document.getElementById("o8x").value==""){
            document.getElementById("o8x").value="1";
        }
        const sx = parseFloat(document.getElementById("o8x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function o9gc(){
        const s=document.getElementById("o9");
        const sg = document.getElementById("o9g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("o9x").value=="0" || document.getElementById("o9x").value==""){
            document.getElementById("o9x").value="1";
        }
        const sx = parseFloat(document.getElementById("o9x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function o10gc(){
        const s=document.getElementById("o10");
        const sg = document.getElementById("o10g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("o10x").value=="0" || document.getElementById("o10x").value==""){
            document.getElementById("o10x").value="1";
        }
        const sx = parseFloat(document.getElementById("o10x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function a1gc(){
        const s=document.getElementById("a1");
        const sg = document.getElementById("a1g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("a1x").value=="0" || document.getElementById("a1x").value==""){
            document.getElementById("a1x").value="1";
        }
        const sx = parseFloat(document.getElementById("a1x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function a2gc(){
        const s=document.getElementById("a2");
        const sg = document.getElementById("a2g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("a2x").value=="0" || document.getElementById("a2x").value==""){
            document.getElementById("a2x").value="1";
        }
        const sx = parseFloat(document.getElementById("a2x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    
    function a3gc(){
        const s=document.getElementById("a3");
        const sg = document.getElementById("a3g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("a3x").value=="0" || document.getElementById("a3x").value==""){
            document.getElementById("a3x").value="1";
        }
        const sx = parseFloat(document.getElementById("a3x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function a4gc(){
        const s=document.getElementById("a4");
        const sg = document.getElementById("a4g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("a4x").value=="0" || document.getElementById("a4x").value==""){
            document.getElementById("a4x").value="1";
        }
        const sx = parseFloat(document.getElementById("a4x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function a5gc(){
        const s=document.getElementById("a5");
        const sg = document.getElementById("a5g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("a5x").value=="0" || document.getElementById("a5x").value==""){
            document.getElementById("a5x").value="1";
        }
        const sx = parseFloat(document.getElementById("a5x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function a6gc(){
        const s=document.getElementById("a6");
        const sg = document.getElementById("a6g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("a6x").value=="0" || document.getElementById("a6x").value==""){
            document.getElementById("a6x").value="1";
        }
        const sx = parseFloat(document.getElementById("a6x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function a7gc(){
        const s=document.getElementById("a7");
        const sg = document.getElementById("a7g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("a7x").value=="0" || document.getElementById("a7x").value==""){
            document.getElementById("a7x").value="1";
        }
        const sx = parseFloat(document.getElementById("a7x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function a8gc(){
        const s=document.getElementById("a8");
        const sg = document.getElementById("a8g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("a8x").value=="0" || document.getElementById("a8x").value==""){
            document.getElementById("a8x").value="1";
        }
        const sx = parseFloat(document.getElementById("a8x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function a9gc(){
        const s=document.getElementById("a9");
        const sg = document.getElementById("a9g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("a9x").value=="0" || document.getElementById("a9x").value==""){
            document.getElementById("a9x").value="1";
        }
        const sx = parseFloat(document.getElementById("a9x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function a10gc(){
        const s=document.getElementById("a10");
        const sg = document.getElementById("a10g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("a10x").value=="0" || document.getElementById("a10x").value==""){
            document.getElementById("a10x").value="1";
        }
        const sx = parseFloat(document.getElementById("a10x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function r11gc(){
        const s=document.getElementById("r11");
        const sg = document.getElementById("r11g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("r11x").value=="0" || document.getElementById("r11x").value==""){
            document.getElementById("r11x").value="1";
        }
        const sx = parseFloat(document.getElementById("r11x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function r12gc(){
        const s=document.getElementById("r12");
        const sg = document.getElementById("r12g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("r12x").value=="0" || document.getElementById("r12x").value==""){
            document.getElementById("r12x").value="1";
        }
        const sx = parseFloat(document.getElementById("r12x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    
    function r13gc(){
        const s=document.getElementById("r13");
        const sg = document.getElementById("r13g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("r13x").value=="0" || document.getElementById("r13x").value==""){
            document.getElementById("r13x").value="1";
        }
        const sx = parseFloat(document.getElementById("r13x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function r14gc(){
        const s=document.getElementById("r14");
        const sg = document.getElementById("r14g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("r14x").value=="0" || document.getElementById("r14x").value==""){
            document.getElementById("r14x").value="1";
        }
        const sx = parseFloat(document.getElementById("r14x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function r15gc(){
        const s=document.getElementById("r15");
        const sg = document.getElementById("r15g").value;
        while (s.firstChild){
            s.removeChild(s.firstChild);
    
        }
        
        if(document.getElementById("r15x").value=="0" || document.getElementById("r15x").value==""){
            document.getElementById("r15x").value="1";
        }
        const sx = parseFloat(document.getElementById("r15x").value);
        xdegisimler.forEach(function(i){
            if(sg==i["grup"]){
                var x = document.createElement('option');
                x.className=t.option;
                x.innerText=i["q"]*sx+" "+i["ad"];
                x.value=x.innerText;
                x.key=i["id"];
                s.appendChild(x);
            }
    
        })
    }
    function hesap2() {
        let cins;
        let formul;
        let boy 
        let kilo;
        let yas;
        let fa;
        let bmh;
        let age;
        cins=document.getElementById('hesapcins').value;
        formul=document.getElementById('hesapfor').value;
        boy=document.getElementById('hesapboy').value;
        kilo=document.getElementById('hesapkilo').value;
        yas=document.getElementById('hesapyas').value;
        if(document.getElementById("hesapfa").value==""){
            fa=1;
        }else{
            fa=document.getElementById('hesapfa').value;
        }

        bmh=document.getElementById('hesapbmh').value;
        age=document.getElementById('hesapage').value;
        let bki=(kilo/((boy/100)*(boy/100)));
        let obki = bki;
        let oga = kilo;
        if(yas<25){
            if(bki<19){
                obki=bki+2
                oga=obki*((boy/100)*(boy/100));
            }else if(bki>=19 && bki<=24){
                obki=bki;
                oga=kilo;
            }else if(bki>24){
                obki=bki-4;
                oga=obki*((boy/100)*(boy/100));

            }else{
                oga=kilo;
            }
        }else if(yas>=25 && yas<35){
            if(bki<20){
                obki=bki+2
                oga=obki*((boy/100)*(boy/100));
            }else if(bki>=20 && bki<=25){
                obki=bki;
                oga=kilo;
            }else if(bki>25){
                obki=bki-4;
                oga=obki*((boy/100)*(boy/100));

            }else{
                oga=kilo;
            }
        }else if(yas>=35 && yas<45){
            if(bki<21){
                obki=bki+2
                oga=obki*((boy/100)*(boy/100));
            }else if(bki>=21 && bki<=26){
                obki=bki;
                oga=kilo;
            }else if(bki>26){
                obki=bki-4;
                oga=obki*((boy/100)*(boy/100));

            }else{
                oga=kilo;
            }
        }else if(yas>=45 && yas<55){
            if(bki<22){
                obki=bki+2
                oga=obki*((boy/100)*(boy/100));
            }else if(bki>=22 && bki<=27){
                obki=bki;
                oga=kilo;
            }else if(bki>27){
                obki=bki-4;
                oga=obki*((boy/100)*(boy/100));

            }else{
                oga=kilo;
            }
        }else if(yas>=55 && yas<=65){
            if(bki<23){
                obki=bki+2
                oga=obki*((boy/100)*(boy/100));
            }else if(bki>=23 && bki<=28){
                obki=bki;
                oga=kilo;
            }else if(bki>28){
                obki=bki-4;
                oga=obki*((boy/100)*(boy/100));

            }else{
                oga=kilo;
            }
        }else if(yas>65){
            if(bki<24){
                obki=bki+2
                oga=obki*((boy/100)*(boy/100));
            }else if(bki>=24 && bki<=29){
                obki=bki;
                oga=kilo;
            }else if(bki>29){
                obki=bki-4;
                oga=obki*((boy/100)*(boy/100));

            }else{
                oga=kilo;
            }
        }else{
            oga=kilo;
        }
        if(formul=="pratik"){
            if(cins=="e"){
                bmh=24*oga;
            }else{
                bmh=24*oga*0.95;
            }
        }else if(formul="hb"){
            if(cins=="e"){
                bmh=66.5+(13.7*oga)+(5.0*boy)-(6.78*yas);
            }else if (cins=="k"){
                bmh=655.1+(9.56*oga)+(1.85*boy)-(4.68*yas);
            }
        }
        age=bmh*fa;
        document.getElementById("hesapbmh").value=bmh.toFixed(2);
        document.getElementById("hesapage").value=age.toFixed(2);
        fmetre();
    }
    function fhesap2(){
        let bmh=document.getElementById('hesapbmh').value;
        let fa = document.getElementById("hesapfa").value;
        let age= bmh*fa;
        document.getElementById("hesapage").value=age;
        fmetre();

    }
    function hesap3(){
        fmetre();
    }
    function fmetre() {
        let age = document.getElementById("hesapage").value;
        let kcal = document.getElementById("tkcal").innerText;
        let ycho = document.getElementById("yuzc").innerText;
        let ypro = document.getElementById("yuzp").innerText;
        let yyag = document.getElementById("yuzy").innerText;
        ycho = ycho.replace("%","");
        ypro=ypro.replace("%","");
        yyag=yyag.replace("%","");
        let deger;
        let farkkal;
        let farkcho;
        let farkpro;
        let farkyag;
        farkkal=Math.abs(parseInt(kcal)-parseInt(age));
        if(kcal==0 || age==0){
            deger=0;
        }else{
            if(farkkal<=50){
                deger=70-(farkkal*0.2);
            }else{
                deger=10;
            }
        }
        if(ycho<50 || ycho >60){
            deger=deger+1;
        }else{
            farkcho=Math.abs(parseInt(ycho)-55);
            deger=deger+(10-farkcho);
        }
        if(ypro<10 || ypro>20){
            deger=deger+1;
        }else{
            farkpro=Math.abs(parseInt(ypro)-15);
            deger=deger+(10-farkpro);
        }
        if(yyag<20 || yyag>30){
            deger=deger+1;
        }else{
            farkyag=Math.abs(parseInt(yyag)-25);
            deger=deger+(10-farkyag);
        }
        setdm(deger);
        if(deger<45){
            setrm("red");
        }else if(deger>=45 && deger<75){
            setrm("orange");
        }else if(deger>=75){
            setrm("green");
        }
    }
    function hocgonc(){
        document.getElementById("divdefgon").style.display="none";
        document.getElementById("divdytgon").style.display="block";
    }
    function defgonc(){
        document.getElementById("divdefgon").style.display="block";
        document.getElementById("divdytgon").style.display="none";
    }
    function fhesapla(){
        let dsut;
        if(document.getElementById("inputsut").value=="NaN"){
            dsut=0;
        }else{
            dsut=parseFloat(document.getElementById("inputsut").value);
        }
        const dyysut=parseFloat(document.getElementById("inputyysut").value);
        const dyssut=parseFloat(document.getElementById("inputyssut").value);
        const det=parseFloat(document.getElementById("inputet").value);
        const dekm=parseFloat(document.getElementById("inputekm").value);
        const dkbak=parseFloat(document.getElementById("inputkbak").value);
        const dseb=parseFloat(document.getElementById("inputsebze").value);
        const dmey=parseFloat(document.getElementById("inputmeyve").value);
        const dyag=parseFloat(document.getElementById("inputyag").value);
        const dytoh=parseFloat(document.getElementById("inputytoh").value);
        const sutc=dsut*9;
        const sutp=dsut*6;
        const suty=dsut*6;
        document.getElementById("sutc").innerText=sutc.toString();
        document.getElementById("sutp").innerText=sutp.toString();
        document.getElementById("suty").innerText=suty.toString();
        if(document.getElementById("sutc").innerText=="NaN"){
            document.getElementById("sutc").innerText="0";
            document.getElementById("sutp").innerText="0";
            document.getElementById("suty").innerText="0";
        }
        const yysutc=dyysut*9;
        const yysutp=dyysut*6;
        const yysuty=dyysut*3;
        document.getElementById("yysutc").innerText=yysutc.toString();
        document.getElementById("yysutp").innerText=yysutp.toString();
        document.getElementById("yysuty").innerText=yysuty.toString();
        if(document.getElementById("yysutc").innerText=="NaN"){
            document.getElementById("yysutc").innerText="0";
            document.getElementById("yysutp").innerText="0";
            document.getElementById("yysuty").innerText="0";
        }
        const yssutc=dyssut*9;
        const yssutp=dyssut*6;
        document.getElementById("yssutc").innerText=yssutc.toString();
        document.getElementById("yssutp").innerText=yssutp.toString();
        if(document.getElementById("yssutc").innerText=="NaN"){
            document.getElementById("yssutc").innerText="0";
            document.getElementById("yssutp").innerText="0";
        }
        const etp=det*6;
        const ety=det*5;
        document.getElementById("etp").innerText=etp.toString();
        document.getElementById("ety").innerText=ety.toString();
        if(document.getElementById("etp").innerText=="NaN"){
            document.getElementById("etp").innerText="0";
            document.getElementById("ety").innerText="0";
        }
        const ekmc=dekm*15;
        const ekmp=dekm*2;
        document.getElementById("ekmc").innerText=ekmc.toString();
        document.getElementById("ekmp").innerText=ekmp.toString();
        if(document.getElementById("ekmc").innerText=="NaN"){
            document.getElementById("ekmc").innerText="0";
            document.getElementById("ekmp").innerText="0";
        }
        const kbakc=dkbak*15;
        const kbakp=dkbak*5;
        document.getElementById("kbakc").innerText=kbakc.toString();
        document.getElementById("kbakp").innerText=kbakp.toString();
        if(document.getElementById("kbakc").innerText=="NaN"){
            document.getElementById("kbakc").innerText="0";
            document.getElementById("kbakp").innerText="0";
        }
        const sebc=dseb*6;
        const sebp=dseb*2;
        document.getElementById("sebc").innerText=sebc.toString();
        document.getElementById("sebp").innerText=sebp.toString();
        if(document.getElementById("sebc").innerText=="NaN"){
            document.getElementById("sebc").innerText="0";
            document.getElementById("sebp").innerText="0";
        }
        const meyc=dmey*15;
        document.getElementById("meyc").innerText=meyc.toString();
        if(document.getElementById("meyc").innerText=="NaN"){
            document.getElementById("meyc").innerText="0";
        }
        const yagy=dyag*5;
        document.getElementById("yagy").innerText=yagy.toString();
        if(document.getElementById("yagy").innerText=="NaN"){
            document.getElementById("yagy").innerText="0";
        }
        const ytohp=dytoh*2;
        const ytohy=dytoh*5;
        document.getElementById("ytohp").innerText=ytohp.toString();
        document.getElementById("ytohy").innerText=ytohy.toString();
        if(document.getElementById("ytohp").innerText=="NaN"){
            document.getElementById("ytohp").innerText="0";
            document.getElementById("ytohy").innerText="0";
        }
        if(document.getElementById("inputekcho").value==""){
            document.getElementById("inputekcho").value="0";
        }
        if(document.getElementById("inputekpro").value==""){
            document.getElementById("inputekpro").value="0";
        }
        if(document.getElementById("inputekyag").value==""){
            document.getElementById("inputekyag").value="0";
        }
        const csut = parseFloat(document.getElementById("sutc").innerText);
        const cyysut=parseFloat(document.getElementById("yysutc").innerText);
        const cyssut=parseFloat(document.getElementById("yssutc").innerText);
        const cekm=parseFloat(document.getElementById("ekmc").innerText);
        const ckbak=parseFloat(document.getElementById("kbakc").innerText);
        const cseb=parseFloat(document.getElementById("sebc").innerText);
        const cmey=parseFloat(document.getElementById("meyc").innerText);
        const cek=parseFloat(document.getElementById("inputekcho").value);
        const tchog=csut+cyysut+cyssut+cekm+ckbak+cseb+cmey+cek;
        document.getElementById("tchog").innerText=tchog.toString()+" g";
        const psut=parseFloat(document.getElementById("sutp").innerText);
        const pyysut=parseFloat(document.getElementById("yysutp").innerText);
        const pyssut=parseFloat(document.getElementById("yssutp").innerText);
        const pet=parseFloat(document.getElementById("etp").innerText);
        const pekm=parseFloat(document.getElementById("ekmp").innerText);
        const pkbak=parseFloat(document.getElementById("kbakp").innerText);
        const pseb=parseFloat(document.getElementById("sebp").innerText);
        const pytoh=parseFloat(document.getElementById("ytohp").innerText);
        const pek=parseFloat(document.getElementById("inputekpro").value);
        const tprog=psut+pyysut+pyssut+pet+pekm+pkbak+pseb+pytoh+pek;
        document.getElementById("tprog").innerText=tprog.toString()+" g";
        const ysut=parseFloat(document.getElementById("suty").innerText);
        const yyysut=parseFloat(document.getElementById("yysuty").innerText);
        const yet=parseFloat(document.getElementById("ety").innerText);
        const yyag=parseFloat(document.getElementById("yagy").innerText);
        const yytoh=parseFloat(document.getElementById("ytohy").innerText);
        const yek=parseFloat(document.getElementById("inputekyag").value);
        const tyagg=ysut+yyysut+yet+yyag+yytoh+yek;
        document.getElementById("tyagg").innerText=tyagg.toString()+" g"
        const tchok=tchog*4;
        const tprok=tprog*4;
        const tyagk=tyagg*9;
        const tkcal=tchok+tprok+tyagk;
        document.getElementById("tkcal").innerText=tkcal.toString()+" kcal";
        document.getElementById("tchok").innerText=tchok.toString()+" kcal"
        document.getElementById("tprok").innerText=tprok.toString()+" kcal";
        document.getElementById("tyagk").innerText=tyagk.toString()+" kcal";
        const yuzc=(tchok/tkcal)*100;
        const yuzp=(tprok/tkcal)*100;
        const yuzy=(tyagk/tkcal)*100;
        document.getElementById("yuzc").innerText="%"+yuzc.toFixed(2).toString();
        document.getElementById("yuzp").innerText="%"+yuzp.toFixed(2).toString();
        document.getElementById("yuzy").innerText="%"+yuzy.toFixed(2).toString();
        fmetre();
    }
    async function hocaget(){
        setload("1");
        const firebaseConfig = {
            apiKey: "AIzaSyDFD4w7KuEv3ym_Y8Hlij1PDzNL0hqJWzc",
            authDomain: "aybaderslikdb.firebaseapp.com",
            projectId: "aybaderslikdb",
            storageBucket: "aybaderslikdb.appspot.com",
            messagingSenderId: "187871617678",
            appId: "1:187871617678:web:13ca7665558e15f4875fdf",
            measurementId: "G-QEVZ3W3G2Q"
        };
        
        const app=initializeApp(firebaseConfig);
        const db = getFirestore(app);

        const userRef = collection(db,"users");
        const q = query(userRef,where("hoca","==","1"))
        const uss = await getDocs(q);
        const dat = uss.docs.map(doc=>doc.data());
        const hc = uss.docs.map((doc=>{
            return({
                "id":doc.id,
                "adsoyad":doc.data().adsoyad
            })
        }))
        console.log(hc);
        sethocalar(hc);
        setht(true);
        setload("0");
    }
    async function hocaget1(){
        setload("1");
        const hoc=await fetch("../api/hocaget",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                xuni:cookies.get("uni")
            })
        });
        const hc= await hoc.json();
        setht(true);
        sethocalar(hc);
        setload("0");
    }
}



function stilc1(){
    const s1 =document.getElementById("divstil1");
    const s2 =document.getElementById("divstil2");
    s1.style.display="block";
    s2.style.display="none";
}
function stilc2(){
    const s1 =document.getElementById("divstil1");
    const s2 =document.getElementById("divstil2");
    s1.style.display="none";
    s2.style.display="block";
}
function diyetlerc(){
    window.location.href='/diyetler'
}
var xdegisimler =[
    { id:'1', grup:'sut', q:'1', ad:'su barda???? s??t'},
  { id:'2', grup:'sut', q:'1.5', ad:'su barda???? ayran'},
  { id:'3', grup:'sut', q:'4', ad:'tepeleme yemek ka???????? ev yo??urdu'},
  { id:'4', grup:'sut', q:'1', ad:'su barda???? yo??urt'},
  { id:'5', grup:'et', q:'3', ad:'orta boyutta ku??ba????'},
  { id:'6', grup:'et', q:'1', ad:'yemek ka???????? k??yma'},
  { id:'7', grup:'et', q:'1', ad:'k??????k yumurta boyutunda k??fte'},
  { id:'8', grup:'et', q:'1', ad:'avu?? i??i kadar biftek'},
  { id:'9', grup:'et', q:'0.25', ad:'k??????k boy tavuk g??????s fleto'},
  { id:'10', grup:'et', q:'1', ad:'k??????k boy kemiksiz tavuk baget'},
  { id:'11', grup:'et', q:'3', ad:'parmak boyutunda hindi eti (derisiz), kemiksiz'},
  { id:'12', grup:'et', q:'0.2', ad:'k??????k boy levrek'},
  { id:'13', grup:'et', q:'0.16', ad:'orta boy alabal??k'},
  { id:'14', grup:'et', q:'0.25', ad:'k??????k boy ??ipura'},
  { id:'15', grup:'et', q:'2', ad:'parmak boyutunda somon'},
  { id:'16', grup:'et', q:'4', ad:'k??????k boy istavrit'},
  { id:'17', grup:'et', q:'3', ad:'yar??m parmak boyutunda l??fer'},
  { id:'18', grup:'et', q:'2', ad:'parmak boyutunda sazan'},
  { id:'19', grup:'et', q:'5', ad:'orta boy hamsi'},
  { id:'20', grup:'et', q:'1', ad:'k??????k boy yumurta (tavuk)'},
  { id:'21', grup:'et', q:'5', ad:'adet yumurta (b??ld??rc??n)'},
  { id:'22', grup:'et', q:'2', ad:'parmak boyutunda beyaz peynir'},
  { id:'23', grup:'et', q:'3', ad:'yar??m parmak boyutunda koyun peynir'},
  { id:'24', grup:'et', q:'2', ad:'parmak boyutunda ke??i peyniri'},
  { id:'25', grup:'et', q:'3', ad:'yar??m parmak boyutunda ka??ar peyniri'},
  { id:'26', grup:'et', q:'3', ad:'yemek ka???????? lor peyniri (tepeleme)'},
  { id:'27', grup:'et', q:'2', ad:'yemek ka???????? ????kelek'},
  { id:'28', grup:'et', q:'3', ad:'yar??m parmak boyutunda ezine peyniri'},
  { id:'29', grup:'et', q:'3', ad:'yar??m parmak boyutunda tulum peyniri'},
  { id:'30', grup:'et', q:'3', ad:'yar??m parmak boyutunda dil peyniri'},
  { id:'31', grup:'et', q:'2', ad:'parmak boyutunda s??zme peynir'},
  { id:'32', grup:'et', q:'1', ad:'yemek ka???????? krem peynir (tepeleme)'},
  { id:'33', grup:'et', q:'3', ad:'yar??m parmak boyutunda hellim peyniri'},
  { id:'34', grup:'et', q:'3', ad:'yar??m parmak boyutunda ??rg?? peyniri'},
  { id:'35', grup:'et', q:'3', ad:'yar??m parmak boyutunda ??e??il peyniri'},
  { id:'36', grup:'et', q:'3', ad:'yar??m parmak boyutunda cheddar payniri'},
  { id:'37', grup:'et', q:'2', ad:'yar??m parmak boyutunda gravyer peyniri'},
  { id:'38', grup:'ekm', q:'1', ad:'ince dilim beyaz ekmek'},
  { id:'39', grup:'ekm', q:'1', ad:'ince dilim m??s??r ekme??i'},
  { id:'40', grup:'ekm', q:'1', ad:'ince dilim ??avdar ekme??i'},
  { id:'41', grup:'ekm', q:'1', ad:'ince dilim yulaf ekme??i'},
  { id:'42', grup:'ekm', q:'1', ad:'ince dilim tam bu??day ekme??i'},
  { id:'43', grup:'ekm', q:'1', ad:'ince dilim kepekli ekmek'},
  { id:'44', grup:'ekm', q:'0.20', ad:'orta boy bazlama'},
  { id:'45', grup:'ekm', q:'1', ad:'k??????k boy lava??'},
  { id:'46', grup:'ekm', q:'0.5', ad:'adet hamburger ekme??i (k??????k)'},
  { id:'47', grup:'ekm', q:'0.33', ad:'Sandvi?? ekme??i (k??????k)'},
  { id:'48', grup:'ekm', q:'3', ad:'yemek ka???????? un (silme), ??i??'},
  { id:'49', grup:'ekm', q:'2', ad:'yemek ka???????? pirin?? pilav??'},
  { id:'50', grup:'ekm', q:'3', ad:'yemek ka???????? bulgur pilav??'},
  { id:'51', grup:'ekm', q:'3', ad:'yemek ka???????? makarna'},
  { id:'52', grup:'ekm', q:'3', ad:'yemek ka???????? eri??te'},
  { id:'53', grup:'ekm', q:'3', ad:'yemek ka???????? eri??te'},
  { id:'54', grup:'ekm', q:'3', ad:'yemek ka???????? yarma (a??urelik bu??day)'},
  { id:'55', grup:'ekm', q:'1', ad:'k??????k kase mercimek ??orbas??'},
  { id:'56', grup:'ekm', q:'1', ad:'k??????k kase ??ehriye ??orbas??'},
  { id:'57', grup:'ekm', q:'1', ad:'k??????k kase pirin?? ??orbas??'},
  { id:'58', grup:'ekm', q:'1', ad:'k??????k kase tarhana ??orbas??'},
  { id:'59', grup:'ekm', q:'1', ad:'k??????k kase un ??orbas??'},
  { id:'60', grup:'ekm', q:'3', ad:'yemek ka???????? nohut'},
  { id:'61', grup:'ekm', q:'3', ad:'yemek ka???????? kuru fasulye'},
  { id:'62', grup:'ekm', q:'3', ad:'yemek ka???????? barbunya'},
  { id:'63', grup:'ekm', q:'2', ad:'yemek ka???????? mercimek (k??rm??z??/ye??il)'},
  { id:'64', grup:'ekm', q:'4', ad:'yemek ka???????? kuru bakla'},
  { id:'65', grup:'ekm', q:'2', ad:'yemek ka???????? kuru b??r??lce'},
  { id:'66', grup:'ekm', q:'1', ad:'k??????k boy patates'},
  { id:'67', grup:'ekm', q:'4', ad:'yemek ka???????? bezelye (??i??)'},
  { id:'68', grup:'ekm', q:'3', ad:'yemek ka???????? bezeyle (pi??mi??)'},
  { id:'69', grup:'ekm', q:'4', ad:'orta boy kestane'},
  { id:'70', grup:'ekm', q:'1', ad:'k??????k boy ko??an m??s??r (b??t??n)'},
  { id:'71', grup:'ekm', q:'4', ad:'yemek ka???????? m??s??r (tane)'},
  { id:'72', grup:'ekm', q:'3', ad:'su barda???? patlam???? m??s??r (ya??s??z)'},
  { id:'73', grup:'ekm', q:'0.5', ad:'??ay barda???? leblebi (sar??/beyaz)'},
  { id:'74', grup:'ekm', q:'4', ad:'bisk??vi (tuzlu/diyet)'},
  { id:'75', grup:'ekm', q:'2', ad:'yemek ka???????? irmik'},
  { id:'76', grup:'ekm', q:'3', ad:'yemek ka???????? tah??l/m??s??r gevre??i (sade)'},
  { id:'77', grup:'ekm', q:'2', ad:'yemek ka???????? yulaf ezmesi'},
  { id:'78', grup:'ekm', q:'0.16', ad:'adet b??reklik yufka'},
  { id:'79', grup:'ekm', q:'1.5', ad:'b??y??k boy galeta'},
  { id:'80', grup:'mey', q:'35', ad:'orta boy ahududu'},
  { id:'81', grup:'mey', q:'2', ad:'parmak kal??nl??????nda 1 dilim ananas'},
  { id:'82', grup:'mey', q:'1', ad:'k??????k boy armut'},
  { id:'83', grup:'mey', q:'0.5', ad:'b??y??k boy ayva'},
  { id:'84', grup:'mey', q:'1', ad:'orta boy babutsa (Kakt??s meyvesi)'},
  { id:'85', grup:'mey', q:'35', ad:'orta boy b??????rtlen'},
  { id:'86', grup:'mey', q:'18', ad:'orta boy ??ilek'},
  { id:'87', grup:'mey', q:'0.75', ad:'su barda???? kar??????k boy dut'},
  { id:'88', grup:'mey', q:'1', ad:'orta boy elma'},
  { id:'89', grup:'mey', q:'3', ad:'orta boy m??rd??m eri??i'},
  { id:'90', grup:'mey', q:'7', ad:'orta boy ye??il erik'},
  { id:'91', grup:'mey', q:'1', ad:'orta boy greyfurt'},
  { id:'92', grup:'mey', q:'2', ad:'k??????k boy incir'},
  { id:'93', grup:'mey', q:'23', ad:'orta boy karayemi??'},
  { id:'94', grup:'mey', q:'0.125', ad:'orta boyun yar??s?? karpuz'},
  { id:'95', grup:'mey', q:'0.125', ad:'k??????k boy kavun'},
  { id:'96', grup:'mey', q:'7', ad:'orta boy kay??s??'},
  { id:'97', grup:'mey', q:'11', ad:'b??y??k boy kiraz'},
  { id:'98', grup:'mey', q:'2', ad:'k??????k boy kivi'},
  { id:'99', grup:'mey', q:'1', ad:'su barda???? k??z??lc??k'},
  { id:'100', grup:'mey', q:'2', ad:'b??y??k boy limon'},
  { id:'101', grup:'mey', q:'2', ad:'orta boy mandalina'},
  { id:'102', grup:'mey', q:'0.33', ad:'b??y??k boy mango'},
  { id:'103', grup:'mey', q:'1', ad:'k??????k boy muz'},
  { id:'104', grup:'mey', q:'1', ad:'orta boy nar'},
  { id:'105', grup:'mey', q:'1', ad:'orta boy partakal'},
  { id:'106', grup:'mey', q:'1', ad:'orta boy ??eftali'},
  { id:'107', grup:'mey', q:'25', ad:'kar??????k boy ??z??m'},
  { id:'108', grup:'mey', q:'35', ad:'kar??????k boy vi??ne'},
  { id:'109', grup:'mey', q:'1', ad:'k??????k boy trabzon hurmas??'},
  { id:'110', grup:'mey', q:'1.5', ad:'su barda???? yaban mersini'},
  { id:'111', grup:'mey', q:'7', ad:'orta boy yeni d??nya'},
  { id:'112', grup:'mey', q:'3', ad:'orta boy kuru erik'},
  { id:'113', grup:'mey', q:'2', ad:'k??????k boy kuru incir'},
  { id:'114', grup:'mey', q:'4', ad:'k??????k boy kuru kay??s??'},
  { id:'115', grup:'mey', q:'1', ad:'yemek ka???????? kuru ??z??m (tepeleme)'},
  { id:'116', grup:'mey', q:'3', ad:'orta boy kuru hurma'},
  { id:'117', grup:'mey', q:'2', ad:'yemek ka???????? kuru dut (tepeleme)'},
  { id:'118', grup:'seb', q:'1', ad:'orta boy k??rm??z?? turp (??i??)'},
  { id:'119', grup:'seb', q:'1', ad:'b??y??k boy siyah turp (??i??)'},
  { id:'120', grup:'seb', q:'2', ad:'orta boy salatal??k/acur (??i??)'},
  { id:'121', grup:'seb', q:'1', ad:'b??y??k boy domates (??i??)'},
  { id:'122', grup:'seb', q:'0.5', ad:'orta boy kuru so??an (??i??)'},
  { id:'123', grup:'seb', q:'6', ad:'orta boy ye??il so??an (??i??)'},
  { id:'124', grup:'seb', q:'8', ad:'b??y??k boy ye??il sivri biber (??i??)'},
  { id:'125', grup:'seb', q:'3', ad:'b??y??k boy dolmal??k biber (??i??)'},
  { id:'126', grup:'seb', q:'5', ad:'b??y??k boy ??arliston biber (??i??)'},
  { id:'127', grup:'seb', q:'8', ad:'b??y??k boy asma yapra???? (??i??)'},
  { id:'128', grup:'seb', q:'2', ad:'yaprak (b??t??n) orta boy kara lahana (??i??)'},
  { id:'129', grup:'seb', q:'6', ad:'yemek ka???????? kara lahana (pi??mi??)'},
  { id:'130', grup:'seb', q:'3', ad:'su barda???? do??ranm???? beyaz lahana (??i??)'},
  { id:'131', grup:'seb', q:'6', ad:'yemek ka???????? beyaz lahana (pi??mi??)', },
  { id:'132', grup:'seb', q:'1', ad:'su barda???? do??ranm???? k??rm??z?? lahana (??i??)', },
  { id:'133', grup:'seb', q:'6', ad:'yemek ka???????? k??rm??z?? lahana (pi??mi??)', },
  { id:'134', grup:'seb', q:'5', ad:'b??y??k boy br??ksel lahanas?? (??i??)', },
  { id:'135', grup:'seb', q:'6', ad:'yemek ka???????? br??ksel lahanas?? (pi??mi??)'},
  { id:'136', grup:'seb', q:'1', ad:'orta boy p??rasa (??i??)', },
  { id:'137', grup:'seb', q:'6', ad:'yemek ka???????? p??rasa (pi??mi??)', },
  { id:'138', grup:'seb', q:'1', ad:'b??y??k boy taze kabak (??i??)', },
  { id:'139', grup:'seb', q:'6', ad:'yemek ka???????? taze kabak (pi??mi??)', },
  { id:'140', grup:'seb', q:'1', ad:'orta kare dilim bal kaba???? (kabuksuz), (??i??)', },
  { id:'141', grup:'seb', q:'6', ad:'yemek ka???????? bal kaba???? (kabuksuz), (pi??mi??)', },
  { id:'142', grup:'seb', q:'0.5', ad:'orta boy kereviz (??i??)', },
  { id:'143', grup:'seb', q:'6', ad:'yemek ka???????? kereviz (pi??mi??)', },
  { id:'144', grup:'seb', q:'2', ad:'k??????k boy havu?? (??i??)', },
  { id:'145', grup:'seb', q:'6', ad:'yemek ka???????? havu?? (pi??mi??)', },
  { id:'146', grup:'seb', q:'0.25', ad:'k??????k boy k??rm??z?? pancar (??i??)', },
  { id:'147', grup:'seb', q:'6', ad:'yemek ka???????? k??rm??z?? pancar (pi??mi??)', },
  { id:'148', grup:'seb', q:'1', ad:'b??y??k boy ??algam (??i??)', },
  { id:'149', grup:'seb', q:'6', ad:'yemek ka???????? ??algam (pi??mi??)', },
  { id:'150', grup:'seb', q:'1', ad:'b??y??k boy patl??can (??i??)', },
  { id:'151', grup:'seb', q:'6', ad:'yemek ka???????? patl??can (pi??mi??)', },
  { id:'152', grup:'seb', q:'6', ad:'orta boy taze fasulye (??i??)', },
  { id:'153', grup:'seb', q:'5', ad:'yemek ka???????? taze fasulye (pi??mi??)', },
  { id:'154', grup:'seb', q:'30', ad:'b??y??k boy bamya (??i??)', },
  { id:'155', grup:'seb', q:'6', ad:'yemek ka???????? bamya (pi??mi??)', },
  { id:'156', grup:'seb', q:'3', ad:'orta boy ??i??ek karnabahar (??i??)', },
  { id:'157', grup:'seb', q:'6', ad:'yemek ka???????? karnabahar (pi??mi??)', },
  { id:'158', grup:'seb', q:'13', ad:'yaprak orta boy paz?? (??i??)', },
  { id:'159', grup:'seb', q:'6', ad:'yemek ka???????? paz?? (pi??mi??)', },
  { id:'160', grup:'seb', q:'5', ad:'su barda???? do??ranm???? ebeg??meci (??i??)', },
  { id:'161', grup:'seb', q:'6', ad:'yemek ka???????? ebeg??meci (pi??mi??)', },
  { id:'162', grup:'seb', q:'8', ad:'orta boy mantar (k??lt??r), (??i??)', },
  { id:'163', grup:'seb', q:'6', ad:'yemek ka???????? mantar (k??lt??r), (pi??mi??)', },
  { id:'164', grup:'seb', q:'2', ad:'orta boy yer elmas?? (??i??)', },
  { id:'165', grup:'seb', q:'6', ad:'yemek ka???????? yer elmas?? (pi??mi??)', },
  { id:'166', grup:'seb', q:'8', ad:'orta boy taze b??r??lce (??i??)', },
  { id:'167', grup:'seb', q:'6', ad:'yemek ka???????? taze b??r??lce (pi??mi??)', },
  { id:'168', grup:'seb', q:'7', ad:'kar??????k boy ??i??ek brokoli (??i??)', },
  { id:'169', grup:'seb', q:'6', ad:'yemek ka???????? brokoli (pi??mi??)', },
  { id:'170', grup:'seb', q:'16', ad:'b??y??k boy taze bakla (??i??)', },
  { id:'171', grup:'seb', q:'6', ad:'yemek ka???????? taze bakla (pi??mi??)', },
  { id:'172', grup:'seb', q:'2', ad:'b??y??k boy enginar (??anak), (??i??)', },
  { id:'173', grup:'seb', q:'6', ad:'yemek ka???????? enginar (??anak), (pi??mi??)', },
  { id:'174', grup:'seb', q:'1', ad:'k??????k ba?? semizotu (??i??)', },
  { id:'175', grup:'seb', q:'6', ad:'yemek ka???????? semizotuz (pi??mi??)', },
  { id:'176', grup:'seb', q:'1', ad:'orta ba?? ??spanak (??i??)', },
  { id:'177', grup:'seb', q:'6', ad:'yemek ka???????? ??spanak (pi??mi??)', },
  { id:'178', grup:'seb', q:'5', ad:'orta boy kuru biber (??i??)', },
  { id:'179', grup:'seb', q:'6', ad:'yemek ka???????? kuru biber (pi??mi??)', },
  { id:'180', grup:'seb', q:'6', ad:'orta boy kuru patl??can (??i??)', },
  { id:'181', grup:'seb', q:'6', ad:'yemek ka???????? kuru patl??can (pi??mi??)', },
  { id:'182', grup:'seb', q:'3', ad:'yemek ka???????? kuru bamya (??i??)', },
  { id:'183', grup:'seb', q:'6', ad:'yemek ka???????? kuru bamya (pi??mi??)', },
  { id:'184', grup:'yag', q:'1', ad:'tatl?? ka???????? s??v?? ya??', },
  { id:'185', grup:'yag', q:'10', ad:'orta boy siyah/ye??il zeytin', },
  { id:'186', grup:'yag', q:'0.25', ad:'k??????k boy avakado', },
  { id:'187', grup:'yag', q:'2', ad:'b??t??n orta boy ceviz', },
  { id:'188', grup:'yag', q:'10', ad:'orta boy badem', },
  { id:'189', grup:'yag', q:'15', ad:'orta boy antep f??st??????', },
  { id:'190', grup:'yag', q:'7', ad:'orta boy kaju f??st??????', },
  { id:'191', grup:'yag', q:'13', ad:'orta boy yer f??st??????', },
  { id:'192', grup:'yag', q:'3', ad:'yemek ka???????? ay ??ekirde??i', },
  { id:'193', grup:'yag', q:'2', ad:'yemek ka???????? kabak ??ekirde??i', },
];