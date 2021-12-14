import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import UstMenu from '../components/ustmenu';
import styles from '../components/Default/veritabani.module.css';
import stylesDark from '../components/DefaultDark/veritabani.module.css';
import stylesSlateBlue from '../components/SlateBlue/veritabani.module.css';
import stylesDarkSlateBlue from '../components/DarkSlateBlue/veritabani.module.css';
import stylesWisteria from '../components/Wisteria/veritabani.module.css';
import stylesDarkWisteria from '../components/DarkWisteria/veritabani.module.css';
import stylesNar from '../components/Nar/veritabani.module.css';
import stylesDarkNar from '../components/DarkNar/veritabani.module.css';
import stylesNight from '../components/Night/veritabani.module.css';
import stylesDay from '../components/Day/veritabani.module.css';
import Loading from '../components/loading';
import cookies from 'js-cookie';
import Head from 'next/head';

var tema = cookies.get("tema")||"Default";
let tc;
const l=cookies.get("log")||"0";
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

export default function VeriTabani({bes}){
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
    })
    const[load,setload]=useState("0");
    const [src,setsrc]=useState("0");
    const [src2,setsrc2]=useState("0");
    const[src3,setsrc3]=useState("0");
    const[bes2,setbes2]=useState([]);
    const [bes3,setbes3]=useState([]);
    const[bes4,setbes4]=useState([]);
    const [m,setmeasure]=useState(100);



    return(
        <div className={t.main}>
            <Head>
                <title>AYBA Derslik | Besin Veri Tabanı</title>
                <link rel="shourtcut icon" href={`/ico/${tema}.ico`}></link>
            </Head>
            <style jsx global>
            {`
            body{background-color: ${tc} ;}
            `}
            </style>
            <UstMenu pref={'veritabani'}></UstMenu>
            {load=="1"&&
            <Loading></Loading>
            }
            <div className={t.divfilter}>
                <div className={t.divfilter2} >
                    <select id='filtered' className={t.selectfilter} onChange={search}>
                        <option className={t.optionfilter} value="Foundation">Temel Besinler</option>
                        <option className={t.optionfilter} value="SR%20Legacy">Standart Referans Alıntıları</option>
                        <option className={t.optionfilter} value="Survey%20(FNDDS)">Ölçümlenen Besinler</option>
                        <option className={t.optionfilter} value="Branded">Markalı Yiyecekler</option>
                    </select>
                </div>
            </div>
            <div className={t.divsearch}>

                <div className={t.divsearch1}>
                    <input id='txtsearch' className={t.inputsearch} placeholder='Besin adı' onChange={srcchange}>
                        
                    </input>
                    <img className={t.imgsearch} src='/icons/ara.png' onClick={search}>
                    </img>
                </div>


                {src2=="1"&&
                    <div className={t.divsearch2}>
                        <div className={t.srclist}>
                            {bes3['foods'].map(b3=>(
                                <div className={t.divsrclist}>
                                    <p id={b3.fdcId} className={t.psrc} onClick={besinclick}>{b3.description}</p>
                                    <hr></hr>
                                </div>
                            ))}
                        </div>
                    </div>
                }
            </div>
            {src3=="1"&&
            <div className={t.mid} style={{float:'left'}} >
                <div className={t.baslik} style={{float:'left'}}>
                    <p className={t.p2}><b>Adı: </b>{bes4['description']}</p>
                    <p className={t.p2}><b>FDCID: </b>{bes4['fdcId']}</p>
                    <p className={t.p2}><b>Paylaşım Tarihi: </b>{bes4['publicationDate']}</p>
                    <p className={t.p2}><b>Kategori: </b>{bes4['foodCategory']['description']}</p>
                    <p className={t.p2}><b>Miktar: </b>
                        <input className={t.input2} type='number' value={m} onChange={measurechange}>
                        </input>
                         g
                    </p>
                    <hr></hr>
                    <div style={{float:'left',width:'100%'}}>
                        <p className={t.p2}>İçerik</p>
                        <hr></hr>
                        {bes4['foodNutrients'].map(x4=>(
                            <div className={t.row2}>
                                <div className={t.col2}>
                                    <p className={t.p2}>{x4['nutrient']['name']}</p>
                                </div>
                                <div className={t.col2}>
                                    <p className={t.p2}>{(m/100)*x4.amount||""} {x4['nutrient']['unitName']}</p>
                                </div>
                            </div>
                        ))}
                        <hr></hr>

                    </div>
                </div>
            </div>
            }
            {src=="1"&&
            <div className={t.mid}>
                <div className={t.sayfa}>
                                <div className={t.num}>
                                    <img className={t.imgnum} src="/icons/ileriimg.png" style={{transform:'rotate(180deg)'}} onClick={p1g}></img>
                                    <p id='pnum1' className={t.pnum}>1</p>
                                    <img src="/icons/ileriimg.png"  className={t.imgnum} onClick={p1i}></img>
                                </div>
                            </div>
                {bes2['foods'].map(b2=>(
                    <div>
                        <div className={t.baslik}>
                            <div className={t.baslik1}>
                                <p id={b2.fdcId} className={t.pbaslik} onClick={divclick2}>{b2.description}</p>
                            </div>
                            <div id={"divlist2"+b2.fdcId} className={t.list} style={{display:'none'}}>
                                <div className={t.row}>
                                    <div className={t.col}>
                                        <p className={t.p}>Bileşen</p>
                                    </div>
                                    <div className={t.col}>
                                        <p className={t.p}>Miktar</p>
                                    </div>
                                    <div className={t.col}>
                                        <p className={t.p}>Birim</p>
                                    </div>
                                </div>
                                {b2['foodNutrients'].map(z2=>(
                                    <div className={t.row}>
                                        <div className={t.col}>
                                            <p className={t.p}>{z2.nutrientName}</p>
                                        </div>
                                        <div className={t.col}>
                                            <p className={t.p}>{z2.value}</p>
                                        </div>
                                        <div className={t.col}>
                                            <p className={t.p}>{z2.unitName}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            }
            {src=="0"&&
                        <div className={t.mid}>
                            
                        {bes.map(b=>(
                            <div>
                                <div className={t.baslik}>
                                    <div className={t.baslik1}>
                                        <p id={b.fdcId} className={t.pbaslik} onClick={divclick}>{b.description}</p>
                                    </div>
            
                                    <div id={"divlist"+b.fdcId} className={t.list} style={{display:'none'}}>
                                        <div className={t.row}>
                                            <div className={t.col}>
                                                <p className={t.p}>Bileşen</p>
                                            </div>
                                            <div className={t.col}>
                                                <p className={t.p}>Miktar</p>
                                            </div>
                                            <div className={t.col}>
                                                <p className={t.p}>Birim</p>
                                            </div>
                                        </div>
                                        {b['foodNutrients'].map(z=>(
                                            <div className={t.row}>
                                                <div className={t.col}>
                                                    <p className={t.p}>{z.name}</p>
                                                </div>
                                                <div className={t.col}>
                                                    <p className={t.p}>{z.amount}</p>
                                                </div>
                                                <div className={t.col}>
                                                    <p className={t.p}>{z.unitName}</p>
                                                </div>
                                        </div>
                                        ))
            
                                        }
            
            
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
            }
            <div style={{width:"100%",float:'left'}}>
                <p className={t.p}>U.S. Department of Agriculture, Agricultural Research Service. FoodData Central, 2019. <a href='https://fdc.nal.usda.gov/'><b>fdc.nal.usda.gov</b></a></p>
            </div>
        </div>
    )
    function p1i() {
        let i = document.getElementById("pnum1").innerText;
        let x = parseInt(i);
        let xx= x+1;
        document.getElementById("pnum1").innerText=xx.toString();
        search();
    }
    function p1g() {
        let i = document.getElementById("pnum1").innerText;
        let x = parseInt(i);
        if(x!=1){
            let xx= x-1;
            document.getElementById("pnum1").innerText=xx.toString();
            search();
        }

    }
    function divclick(){
        var i =event.srcElement.id;
        if(document.getElementById('divlist'+i).style.display=="none"){
            document.getElementById('divlist'+i).style.display="block";
        }else{
            document.getElementById('divlist'+i).style.display="none";
        }
    }
    function divclick2() {
        var i =event.srcElement.id;
        if(document.getElementById('divlist2'+i).style.display=="none"){
            document.getElementById('divlist2'+i).style.display="block";
        }else{
            document.getElementById('divlist2'+i).style.display="none";
        }
    }
    async function besinclick() {
        setload("1");
        setsrc2("0");
        setsrc("2");
        const term= event.srcElement.id;
        const res = await fetch(`https://api.nal.usda.gov/fdc/v1/food/${term}?format=full&api_key=JL0GQs062g2fLRZBNJj9dsEeebbNe4dgscPGOMND`,{
            method:'GET',
            headers:{'Content-Type':'application/json'}
        });
        const bes4r= await res.json();
        setbes4(bes4r);
        setsrc3("1");
        setload("0");
    }
    async function search() {
        const term = document.getElementById('txtsearch').value;
        const type = document.getElementById("filtered").value;
        if(term!=""){
            setload("1");
            setsrc2("0");
            setsrc3("0");
            let s;
            try{
                s= document.getElementById("pnum1").innerText;
            }catch{
                s="1"
            }
            const res= await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${term}&pageNumber=${s}&dataType=${type}&pageSize=25&api_key=JL0GQs062g2fLRZBNJj9dsEeebbNe4dgscPGOMND`,{
                method:'GET',
                headers:{'Content-Type':'application/json'}
            });
            const bes2r = await res.json();
            setbes2(bes2r);
            setload("0");
            setsrc("1");
        }else{
            setsrc("0");
            
        }

    }
    async function srcchange() {

        const term = document.getElementById('txtsearch').value;
        const type=document.getElementById("filtered").value
        if(term!=""){
            const res = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${term}&dataType=${type}&pageSize=50&api_key=JL0GQs062g2fLRZBNJj9dsEeebbNe4dgscPGOMND`,{
                method:'GET',
                headers:{'Content-Type':'application/json'}
            });
            const bes3r = await res.json();
            setbes3(bes3r);
            setsrc2("1");
        }else{
            setsrc2("0");
        }

    }

    function measurechange() {
        let i = event.srcElement.value;
        setmeasure(parseInt(i));
    }

}
export async function getServerSideProps() {
    const randomNumber = Math.floor(Math.random() * 16);
    const res = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/list?pageSize=10&pageNumber=${randomNumber}&dataType=Foundation&api_key=JL0GQs062g2fLRZBNJj9dsEeebbNe4dgscPGOMND`,{
            method:'GET',
            headers:{'Content-Type':'application/json'}
        })
        const bes = await res.json();
        return{props:{bes}};
}
