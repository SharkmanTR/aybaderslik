import styles from '../components/Default/bulmaca.module.css';
import { useEffect, useState } from 'react';
import cookies from 'js-cookie';





export default function Bulmaca() {
    const [tc,settc]=useState("DarkGray");
    const [wr1b0,swr1b0]=useState(Math.floor(Math.random()*100));
    const [wr1b1,swr1b1]=useState(Math.floor(Math.random()*100));
    const [wr1b2,swr1b2]=useState(Math.floor(Math.random()*100));
    const [wr1b3,swr1b3]=useState(Math.floor(Math.random()*100));
    const [wr1b4,swr1b4]=useState(Math.floor(Math.random()*100));
    const [wr1b5,swr1b5]=useState(Math.floor(Math.random()*100));
    const [wr1b6,swr1b6]=useState(Math.floor(Math.random()*100));
    const [wr1b7,swr1b7]=useState(Math.floor(Math.random()*100));
    const [wr1b8,swr1b8]=useState(Math.floor(Math.random()*100));
    const [wr1b9,swr1b9]=useState(Math.floor(Math.random()*100));
    const [wr2b0,swr2b0]=useState(Math.floor(Math.random()*100));
    const [wr2b1,swr2b1]=useState(Math.floor(Math.random()*100));
    const [wr2b2,swr2b2]=useState(Math.floor(Math.random()*100));
    const [wr2b3,swr2b3]=useState(Math.floor(Math.random()*100));
    const [wr2b4,swr2b4]=useState(Math.floor(Math.random()*100));
    const [wr2b5,swr2b5]=useState(Math.floor(Math.random()*100));
    const [wr2b6,swr2b6]=useState(Math.floor(Math.random()*100));
    const [wr2b7,swr2b7]=useState(Math.floor(Math.random()*100));
    const [wr2b8,swr2b8]=useState(Math.floor(Math.random()*100));
    const [wr2b9,swr2b9]=useState(Math.floor(Math.random()*100));
    const [wr3b0,swr3b0]=useState(Math.floor(Math.random()*100));
    const [wr3b1,swr3b1]=useState(Math.floor(Math.random()*100));
    const [wr3b2,swr3b2]=useState(Math.floor(Math.random()*100));
    const [wr3b3,swr3b3]=useState(Math.floor(Math.random()*100));
    const [wr3b4,swr3b4]=useState(Math.floor(Math.random()*100));
    const [wr3b5,swr3b5]=useState(Math.floor(Math.random()*100));
    const [wr3b6,swr3b6]=useState(Math.floor(Math.random()*100));
    const [wr3b7,swr3b7]=useState(Math.floor(Math.random()*100));
    const [wr3b8,swr3b8]=useState(Math.floor(Math.random()*100));
    const [wr3b9,swr3b9]=useState(Math.floor(Math.random()*100));
    const [wr4b0,swr4b0]=useState(Math.floor(Math.random()*100));
    const [wr4b1,swr4b1]=useState(Math.floor(Math.random()*100));
    const [wr4b2,swr4b2]=useState(Math.floor(Math.random()*100));
    const [wr4b3,swr4b3]=useState(Math.floor(Math.random()*100));
    const [wr4b4,swr4b4]=useState(Math.floor(Math.random()*100));
    const [wr4b5,swr4b5]=useState(Math.floor(Math.random()*100));
    const [wr4b6,swr4b6]=useState(Math.floor(Math.random()*100));
    const [wr4b7,swr4b7]=useState(Math.floor(Math.random()*100));
    const [wr4b8,swr4b8]=useState(Math.floor(Math.random()*100));
    const [wr4b9,swr4b9]=useState(Math.floor(Math.random()*100));
    const [br1b0,sbr1b0]=useState(Math.floor(Math.random()*100));
    const [br1b1,sbr1b1]=useState(Math.floor(Math.random()*100));
    const [br1b2,sbr1b2]=useState(Math.floor(Math.random()*100));
    const [br1b3,sbr1b3]=useState(Math.floor(Math.random()*100));
    const [br1b4,sbr1b4]=useState(Math.floor(Math.random()*100));
    const [br1b5,sbr1b5]=useState(Math.floor(Math.random()*100));
    const [br1b6,sbr1b6]=useState(Math.floor(Math.random()*100));
    const [br1b7,sbr1b7]=useState(Math.floor(Math.random()*100));
    const [br1b8,sbr1b8]=useState(Math.floor(Math.random()*100));
    const [br1b9,sbr1b9]=useState(Math.floor(Math.random()*100));
    const [br2b0,sbr2b0]=useState(Math.floor(Math.random()*100));
    const [br2b1,sbr2b1]=useState(Math.floor(Math.random()*100));
    const [br2b2,sbr2b2]=useState(Math.floor(Math.random()*100));
    const [br2b3,sbr2b3]=useState(Math.floor(Math.random()*100));
    const [br2b4,sbr2b4]=useState(Math.floor(Math.random()*100));
    const [br2b5,sbr2b5]=useState(Math.floor(Math.random()*100));
    const [br2b6,sbr2b6]=useState(Math.floor(Math.random()*100));
    const [br2b7,sbr2b7]=useState(Math.floor(Math.random()*100));
    const [br2b8,sbr2b8]=useState(Math.floor(Math.random()*100));
    const [br2b9,sbr2b9]=useState(Math.floor(Math.random()*100));
    const [br3b0,sbr3b0]=useState(Math.floor(Math.random()*100));
    const [br3b1,sbr3b1]=useState(Math.floor(Math.random()*100));
    const [br3b2,sbr3b2]=useState(Math.floor(Math.random()*100));
    const [br3b3,sbr3b3]=useState(Math.floor(Math.random()*100));
    const [br3b4,sbr3b4]=useState(Math.floor(Math.random()*100));
    const [br3b5,sbr3b5]=useState(Math.floor(Math.random()*100));
    const [br3b6,sbr3b6]=useState(Math.floor(Math.random()*100));
    const [br3b7,sbr3b7]=useState(Math.floor(Math.random()*100));
    const [br3b8,sbr3b8]=useState(Math.floor(Math.random()*100));
    const [br3b9,sbr3b9]=useState(Math.floor(Math.random()*100));
    const [br4b0,sbr4b0]=useState(Math.floor(Math.random()*100));
    const [br4b1,sbr4b1]=useState(Math.floor(Math.random()*100));
    const [br4b2,sbr4b2]=useState(Math.floor(Math.random()*100));
    const [br4b3,sbr4b3]=useState(Math.floor(Math.random()*100));
    const [br4b4,sbr4b4]=useState(Math.floor(Math.random()*100));
    const [br4b5,sbr4b5]=useState(Math.floor(Math.random()*100));
    const [br4b6,sbr4b6]=useState(Math.floor(Math.random()*100));
    const [br4b7,sbr4b7]=useState(Math.floor(Math.random()*100));
    const [br4b8,sbr4b8]=useState(Math.floor(Math.random()*100));
    const [br4b9,sbr4b9]=useState(Math.floor(Math.random()*100));
    const [w1,sw1]=useState("0");
    const[w2,sw2]=useState("0");
    const[w3,sw3]=useState("0");
    const[w4,sw4]=useState("9");
    const[b1,sb1]=useState("0");
    const[b2,sb2]=useState("9");
    const[b3,sb3]=useState("0");
    const [b4,sb4]=useState("0");
    if(w1=="1" && w2=="9"&& w3=="3"&& w4=="0"){
        document.getElementById("divmidw").style.display="none";
        document.getElementById("divmids").style.display="none";
        document.getElementById("divmidb").style.display="block";
    }
    if(b1=="2"&&b2=="0"&&b3=="1",b4=="6"){
        document.getElementById("divmidw").style.display="none";
        document.getElementById("divmids").style.display="block";
        document.getElementById("divmidb").style.display="none";
        document.getElementById("txts").innerText="Bulmacayı çözdüğün için tebrik ederiz. Bu sayfanın fotoğrafını çekerek @aybaderslik instagram adresimize gönderirsen seviniriz."
    }
    return(
        <div className={styles.main}>
            <style jsx global>
            {`
            body{background-color: ${tc} ;}
            `}
            </style>
            <div id="divmidw" className={styles.midw}>
                <img className={styles.img} src="/img/leylek.png" ></img>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <button id="r1b0w" className={styles.btnw} onClick={r1b0wc}>{wr1b0}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r1b1w" className={styles.btnw} onClick={r1b1wc}>{wr1b1}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r1b2w" className={styles.btnw} onClick={r1b2wc}>{wr1b2}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r1b3w" className={styles.btnw} onClick={r1b3wc}>{wr1b3}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r1b4w" className={styles.btnw} onClick={r1b4wc}>{wr1b4}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r1b5w" className={styles.btnw} onClick={r1b5wc}>{wr1b5}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r1b6w" className={styles.btnw} onClick={r1b6wc}>{wr1b6}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r1b7w" className={styles.btnw} onClick={r1b7wc}>{wr1b7}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r1b8w" className={styles.btnw} onClick={r1b8wc}>{wr1b8}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r1b9w" className={styles.btnw} onClick={r1b9wc}>{wr1b9}</button>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <button id="r2b0w" className={styles.btnw} onClick={r2b0wc}>{wr2b0}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r2b1w" className={styles.btnw} onClick={r2b1wc}>{wr2b1}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r2b2w" className={styles.btnw} onClick={r2b2wc}>{wr2b2}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r2b3w" className={styles.btnw} onClick={r2b3wc}>{wr2b3}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r2b4w" className={styles.btnw} onClick={r2b4wc}>{wr2b4}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r2b5w" className={styles.btnw} onClick={r2b5wc}>{wr2b5}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r2b6w" className={styles.btnw} onClick={r2b6wc}>{wr2b6}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r2b7w" className={styles.btnw} onClick={r2b7wc}>{wr2b7}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r2b8w" className={styles.btnw} onClick={r2b8wc}>{wr2b8}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r2b9w" className={styles.btnw} onClick={r2b9wc}>{wr2b9}</button>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <button id="r3b0w" className={styles.btnw} onClick={r3b0wc}>{wr3b0}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r3b1w" className={styles.btnw} onClick={r3b1wc}>{wr3b1}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r3b2w" className={styles.btnw} onClick={r3b2wc}>{wr3b2}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r3b3w" className={styles.btnw} onClick={r3b3wc}>{wr3b3}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r3b4w" className={styles.btnw} onClick={r3b4wc}>{wr3b4}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r3b5w" className={styles.btnw} onClick={r3b5wc}>{wr3b5}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r3b6w" className={styles.btnw} onClick={r3b6wc}>{wr3b6}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r3b7w" className={styles.btnw} onClick={r3b7wc}>{wr3b7}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r3b8w" className={styles.btnw} onClick={r3b8wc}>{wr3b8}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r3b9w" className={styles.btnw} onClick={r3b9wc}>{wr3b9}</button>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <button id="r4b0w" className={styles.btnw} onClick={r4b0wc}>{wr4b0}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r4b1w" className={styles.btnw} onClick={r4b1wc}>{wr4b1}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r4b2w" className={styles.btnw} onClick={r4b2wc}>{wr4b2}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r4b3w" className={styles.btnw} onClick={r4b3wc}>{wr4b3}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r4b4w" className={styles.btnw} onClick={r4b4wc}>{wr4b4}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r4b5w" className={styles.btnw} onClick={r4b5wc}>{wr4b5}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r4b6w" className={styles.btnw} onClick={r4b6wc}>{wr4b6}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r4b7w" className={styles.btnw} onClick={r4b7wc}>{wr4b7}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r4b8w" className={styles.btnw} onClick={r4b8wc}>{wr4b8}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r4b9w" className={styles.btnw} onClick={r4b9wc}>{wr4b9}</button>
                    </div>
                </div>
            </div>
            <div id="divmidb" style={{display:"none"}} className={styles.midb}>
                <img className={styles.img} src="/img/baykus.png" ></img>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <button id="r1b0b" className={styles.btnb} onClick={r1b0bc}>{br1b0}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r1b1b" className={styles.btnb} onClick={r1b1bc}>{br1b1}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r1b2b" className={styles.btnb} onClick={r1b2bc}>{br1b2}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r1b3b" className={styles.btnb} onClick={r1b3bc}>{br1b3}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r1b4b" className={styles.btnb} onClick={r1b4bc}>{br1b4}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r1b5b" className={styles.btnb} onClick={r1b5bc}>{br1b5}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r1b6b" className={styles.btnb} onClick={r1b6bc}>{br1b6}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r1b7b" className={styles.btnb} onClick={r1b7bc}>{br1b7}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r1b8b" className={styles.btnb} onClick={r1b8bc}>{br1b8}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r1b9b" className={styles.btnb} onClick={r1b9bc}>{br1b9}</button>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <button id="r2b0b" className={styles.btnb} onClick={r2b0bc}>{br2b0}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r2b1b" className={styles.btnb} onClick={r2b1bc}>{br2b1}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r2b2b" className={styles.btnb} onClick={r2b2bc}>{br2b2}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r2b3b" className={styles.btnb} onClick={r2b3bc}>{br2b3}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r2b4b" className={styles.btnb} onClick={r2b4bc}>{br2b4}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r2b5b" className={styles.btnb} onClick={r2b5bc}>{br2b5}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r2b6b" className={styles.btnb} onClick={r2b6bc}>{br2b6}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r2b7b" className={styles.btnb} onClick={r2b7bc}>{br2b7}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r2b8b" className={styles.btnb} onClick={r2b8bc}>{br2b8}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r2b9b" className={styles.btnb} onClick={r2b9bc}>{br2b9}</button>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <button id="r3b0b" className={styles.btnb} onClick={r3b0bc}>{br3b0}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r3b1b" className={styles.btnb} onClick={r3b1bc}>{br3b1}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r3b2b" className={styles.btnb} onClick={r3b2bc}>{br3b2}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r3b3b" className={styles.btnb} onClick={r3b3bc}>{br3b3}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r3b4b" className={styles.btnb} onClick={r3b4bc}>{br3b4}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r3b5b" className={styles.btnb} onClick={r3b5bc}>{br3b5}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r3b6b" className={styles.btnb} onClick={r3b6bc}>{br3b6}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r3b7b" className={styles.btnb} onClick={r3b7bc}>{br3b7}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r3b8b" className={styles.btnb} onClick={r3b8bc}>{br3b8}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r3b9b" className={styles.btnb} onClick={r3b9bc}>{br3b9}</button>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <button id="r4b0b" className={styles.btnb} onClick={r4b0bc}>{br4b0}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r4b1b" className={styles.btnb} onClick={r4b1bc}>{br4b1}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r4b2b" className={styles.btnb} onClick={r4b2bc}>{br4b2}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r4b3b" className={styles.btnb} onClick={r4b3bc}>{br4b3}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r4b4b" className={styles.btnb} onClick={r4b4bc}>{br4b4}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r4b5b" className={styles.btnb} onClick={r4b5bc}>{br4b5}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r4b6b" className={styles.btnb} onClick={r4b6bc}>{br4b6}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r4b7b" className={styles.btnb} onClick={r4b7bc}>{br4b7}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r4b8b" className={styles.btnb} onClick={r4b8bc}>{br4b8}</button>
                    </div>
                    <div className={styles.col}>
                        <button id="r4b9b" className={styles.btnb} onClick={r4b9bc}>{br4b9}</button>
                    </div>
                </div>
            
            
            </div>
            <div id="divmids" style={{display:"none"}} className={styles.mids}>
                <p className={styles.h1}>Saygıyla Anıyoruz...</p>
                <p className={styles.h2} id="txts"> </p>
                <img src="/img/aysebaysal.jpg" className={styles.imgs}></img>
            
            </div>
        </div>
    )
    function r1b0wc() {
        sw1("0");
        swr1b0(Math.floor(Math.random()*100));
        swr1b1(Math.floor(Math.random()*100));
        swr1b2(Math.floor(Math.random()*100));
        swr1b3(Math.floor(Math.random()*100));
        swr1b4(Math.floor(Math.random()*100));
        swr1b5(Math.floor(Math.random()*100));
        swr1b6(Math.floor(Math.random()*100));
        swr1b7(Math.floor(Math.random()*100));
        swr1b8(Math.floor(Math.random()*100));
        swr1b9(Math.floor(Math.random()*100));
    }
    function r1b1wc() {
        sw1("1");
        swr1b0(Math.floor(Math.random()*100));
        swr1b1(Math.floor(Math.random()*100));
        swr1b2(Math.floor(Math.random()*100));
        swr1b3(Math.floor(Math.random()*100));
        swr1b4(Math.floor(Math.random()*100));
        swr1b5(Math.floor(Math.random()*100));
        swr1b6(Math.floor(Math.random()*100));
        swr1b7(Math.floor(Math.random()*100));
        swr1b8(Math.floor(Math.random()*100));
        swr1b9(Math.floor(Math.random()*100));
    }
    function r1b2wc() {
        sw1("2");
        swr1b0(Math.floor(Math.random()*100));
        swr1b1(Math.floor(Math.random()*100));
        swr1b2(Math.floor(Math.random()*100));
        swr1b3(Math.floor(Math.random()*100));
        swr1b4(Math.floor(Math.random()*100));
        swr1b5(Math.floor(Math.random()*100));
        swr1b6(Math.floor(Math.random()*100));
        swr1b7(Math.floor(Math.random()*100));
        swr1b8(Math.floor(Math.random()*100));
        swr1b9(Math.floor(Math.random()*100));
    }
    function r1b3wc() {
        sw1("3");
        swr1b0(Math.floor(Math.random()*100));
        swr1b1(Math.floor(Math.random()*100));
        swr1b2(Math.floor(Math.random()*100));
        swr1b3(Math.floor(Math.random()*100));
        swr1b4(Math.floor(Math.random()*100));
        swr1b5(Math.floor(Math.random()*100));
        swr1b6(Math.floor(Math.random()*100));
        swr1b7(Math.floor(Math.random()*100));
        swr1b8(Math.floor(Math.random()*100));
        swr1b9(Math.floor(Math.random()*100));
    }
    function r1b4wc() {
        sw1("4");
        swr1b0(Math.floor(Math.random()*100));
        swr1b1(Math.floor(Math.random()*100));
        swr1b2(Math.floor(Math.random()*100));
        swr1b3(Math.floor(Math.random()*100));
        swr1b4(Math.floor(Math.random()*100));
        swr1b5(Math.floor(Math.random()*100));
        swr1b6(Math.floor(Math.random()*100));
        swr1b7(Math.floor(Math.random()*100));
        swr1b8(Math.floor(Math.random()*100));
        swr1b9(Math.floor(Math.random()*100));
    }
    function r1b5wc() {
        sw1("5");
        swr1b0(Math.floor(Math.random()*100));
        swr1b1(Math.floor(Math.random()*100));
        swr1b2(Math.floor(Math.random()*100));
        swr1b3(Math.floor(Math.random()*100));
        swr1b4(Math.floor(Math.random()*100));
        swr1b5(Math.floor(Math.random()*100));
        swr1b6(Math.floor(Math.random()*100));
        swr1b7(Math.floor(Math.random()*100));
        swr1b8(Math.floor(Math.random()*100));
        swr1b9(Math.floor(Math.random()*100));
    }
    function r1b6wc() {
        sw1("6");
        swr1b0(Math.floor(Math.random()*100));
        swr1b1(Math.floor(Math.random()*100));
        swr1b2(Math.floor(Math.random()*100));
        swr1b3(Math.floor(Math.random()*100));
        swr1b4(Math.floor(Math.random()*100));
        swr1b5(Math.floor(Math.random()*100));
        swr1b6(Math.floor(Math.random()*100));
        swr1b7(Math.floor(Math.random()*100));
        swr1b8(Math.floor(Math.random()*100));
        swr1b9(Math.floor(Math.random()*100));
    }
    function r1b7wc() {
        sw1("7");
        swr1b0(Math.floor(Math.random()*100));
        swr1b1(Math.floor(Math.random()*100));
        swr1b2(Math.floor(Math.random()*100));
        swr1b3(Math.floor(Math.random()*100));
        swr1b4(Math.floor(Math.random()*100));
        swr1b5(Math.floor(Math.random()*100));
        swr1b6(Math.floor(Math.random()*100));
        swr1b7(Math.floor(Math.random()*100));
        swr1b8(Math.floor(Math.random()*100));
        swr1b9(Math.floor(Math.random()*100));
    }
    function r1b8wc() {
        sw1("8");
        swr1b0(Math.floor(Math.random()*100));
        swr1b1(Math.floor(Math.random()*100));
        swr1b2(Math.floor(Math.random()*100));
        swr1b3(Math.floor(Math.random()*100));
        swr1b4(Math.floor(Math.random()*100));
        swr1b5(Math.floor(Math.random()*100));
        swr1b6(Math.floor(Math.random()*100));
        swr1b7(Math.floor(Math.random()*100));
        swr1b8(Math.floor(Math.random()*100));
        swr1b9(Math.floor(Math.random()*100));
    }
    function r1b9wc() {
        sw1("9");
        swr1b0(Math.floor(Math.random()*100));
        swr1b1(Math.floor(Math.random()*100));
        swr1b2(Math.floor(Math.random()*100));
        swr1b3(Math.floor(Math.random()*100));
        swr1b4(Math.floor(Math.random()*100));
        swr1b5(Math.floor(Math.random()*100));
        swr1b6(Math.floor(Math.random()*100));
        swr1b7(Math.floor(Math.random()*100));
        swr1b8(Math.floor(Math.random()*100));
        swr1b9(Math.floor(Math.random()*100));
    }
    function r2b0wc() {
        sw2("0");
        swr2b0(Math.floor(Math.random()*100));
        swr2b1(Math.floor(Math.random()*100));
        swr2b2(Math.floor(Math.random()*100));
        swr2b3(Math.floor(Math.random()*100));
        swr2b4(Math.floor(Math.random()*100));
        swr2b5(Math.floor(Math.random()*100));
        swr2b6(Math.floor(Math.random()*100));
        swr2b7(Math.floor(Math.random()*100));
        swr2b8(Math.floor(Math.random()*100));
        swr2b9(Math.floor(Math.random()*100));
    }
    function r2b1wc() {
        sw2("1");
        swr2b0(Math.floor(Math.random()*100));
        swr2b1(Math.floor(Math.random()*100));
        swr2b2(Math.floor(Math.random()*100));
        swr2b3(Math.floor(Math.random()*100));
        swr2b4(Math.floor(Math.random()*100));
        swr2b5(Math.floor(Math.random()*100));
        swr2b6(Math.floor(Math.random()*100));
        swr2b7(Math.floor(Math.random()*100));
        swr2b8(Math.floor(Math.random()*100));
        swr2b9(Math.floor(Math.random()*100));
    }
    function r2b2wc() {
        sw2("2");
        swr2b0(Math.floor(Math.random()*100));
        swr2b1(Math.floor(Math.random()*100));
        swr2b2(Math.floor(Math.random()*100));
        swr2b3(Math.floor(Math.random()*100));
        swr2b4(Math.floor(Math.random()*100));
        swr2b5(Math.floor(Math.random()*100));
        swr2b6(Math.floor(Math.random()*100));
        swr2b7(Math.floor(Math.random()*100));
        swr2b8(Math.floor(Math.random()*100));
        swr2b9(Math.floor(Math.random()*100));
    }
    function r2b3wc() {
        sw2("3");
        swr2b0(Math.floor(Math.random()*100));
        swr2b1(Math.floor(Math.random()*100));
        swr2b2(Math.floor(Math.random()*100));
        swr2b3(Math.floor(Math.random()*100));
        swr2b4(Math.floor(Math.random()*100));
        swr2b5(Math.floor(Math.random()*100));
        swr2b6(Math.floor(Math.random()*100));
        swr2b7(Math.floor(Math.random()*100));
        swr2b8(Math.floor(Math.random()*100));
        swr2b9(Math.floor(Math.random()*100));
    }
    function r2b4wc() {
        sw2("4");
        swr2b0(Math.floor(Math.random()*100));
        swr2b1(Math.floor(Math.random()*100));
        swr2b2(Math.floor(Math.random()*100));
        swr2b3(Math.floor(Math.random()*100));
        swr2b4(Math.floor(Math.random()*100));
        swr2b5(Math.floor(Math.random()*100));
        swr2b6(Math.floor(Math.random()*100));
        swr2b7(Math.floor(Math.random()*100));
        swr2b8(Math.floor(Math.random()*100));
        swr2b9(Math.floor(Math.random()*100));
    }
    function r2b5wc() {
        sw2("5");
        swr2b0(Math.floor(Math.random()*100));
        swr2b1(Math.floor(Math.random()*100));
        swr2b2(Math.floor(Math.random()*100));
        swr2b3(Math.floor(Math.random()*100));
        swr2b4(Math.floor(Math.random()*100));
        swr2b5(Math.floor(Math.random()*100));
        swr2b6(Math.floor(Math.random()*100));
        swr2b7(Math.floor(Math.random()*100));
        swr2b8(Math.floor(Math.random()*100));
        swr2b9(Math.floor(Math.random()*100));
    }
    function r2b6wc() {
        sw2("6");
        swr2b0(Math.floor(Math.random()*100));
        swr2b1(Math.floor(Math.random()*100));
        swr2b2(Math.floor(Math.random()*100));
        swr2b3(Math.floor(Math.random()*100));
        swr2b4(Math.floor(Math.random()*100));
        swr2b5(Math.floor(Math.random()*100));
        swr2b6(Math.floor(Math.random()*100));
        swr2b7(Math.floor(Math.random()*100));
        swr2b8(Math.floor(Math.random()*100));
        swr2b9(Math.floor(Math.random()*100));
    }
    function r2b7wc() {
        sw2("7");
        swr2b0(Math.floor(Math.random()*100));
        swr2b1(Math.floor(Math.random()*100));
        swr2b2(Math.floor(Math.random()*100));
        swr2b3(Math.floor(Math.random()*100));
        swr2b4(Math.floor(Math.random()*100));
        swr2b5(Math.floor(Math.random()*100));
        swr2b6(Math.floor(Math.random()*100));
        swr2b7(Math.floor(Math.random()*100));
        swr2b8(Math.floor(Math.random()*100));
        swr2b9(Math.floor(Math.random()*100));
    }
    function r2b8wc() {
        sw2("8");
        swr2b0(Math.floor(Math.random()*100));
        swr2b1(Math.floor(Math.random()*100));
        swr2b2(Math.floor(Math.random()*100));
        swr2b3(Math.floor(Math.random()*100));
        swr2b4(Math.floor(Math.random()*100));
        swr2b5(Math.floor(Math.random()*100));
        swr2b6(Math.floor(Math.random()*100));
        swr2b7(Math.floor(Math.random()*100));
        swr2b8(Math.floor(Math.random()*100));
        swr2b9(Math.floor(Math.random()*100));
    }
    function r2b9wc() {
        sw2("9");
        swr2b0(Math.floor(Math.random()*100));
        swr2b1(Math.floor(Math.random()*100));
        swr2b2(Math.floor(Math.random()*100));
        swr2b3(Math.floor(Math.random()*100));
        swr2b4(Math.floor(Math.random()*100));
        swr2b5(Math.floor(Math.random()*100));
        swr2b6(Math.floor(Math.random()*100));
        swr2b7(Math.floor(Math.random()*100));
        swr2b8(Math.floor(Math.random()*100));
        swr2b9(Math.floor(Math.random()*100));
    }
    function r3b0wc() {
        sw3("0");
        swr3b0(Math.floor(Math.random()*100));
        swr3b1(Math.floor(Math.random()*100));
        swr3b2(Math.floor(Math.random()*100));
        swr3b3(Math.floor(Math.random()*100));
        swr3b4(Math.floor(Math.random()*100));
        swr3b5(Math.floor(Math.random()*100));
        swr3b6(Math.floor(Math.random()*100));
        swr3b7(Math.floor(Math.random()*100));
        swr3b8(Math.floor(Math.random()*100));
        swr3b9(Math.floor(Math.random()*100));
    }
    function r3b1wc() {
        sw3("1");
        swr3b0(Math.floor(Math.random()*100));
        swr3b1(Math.floor(Math.random()*100));
        swr3b2(Math.floor(Math.random()*100));
        swr3b3(Math.floor(Math.random()*100));
        swr3b4(Math.floor(Math.random()*100));
        swr3b5(Math.floor(Math.random()*100));
        swr3b6(Math.floor(Math.random()*100));
        swr3b7(Math.floor(Math.random()*100));
        swr3b8(Math.floor(Math.random()*100));
        swr3b9(Math.floor(Math.random()*100));
    }
    function r3b2wc() {
        sw3("2");
        swr3b0(Math.floor(Math.random()*100));
        swr3b1(Math.floor(Math.random()*100));
        swr3b2(Math.floor(Math.random()*100));
        swr3b3(Math.floor(Math.random()*100));
        swr3b4(Math.floor(Math.random()*100));
        swr3b5(Math.floor(Math.random()*100));
        swr3b6(Math.floor(Math.random()*100));
        swr3b7(Math.floor(Math.random()*100));
        swr3b8(Math.floor(Math.random()*100));
        swr3b9(Math.floor(Math.random()*100));
    }
    function r3b3wc() {
        sw3("3");
        swr3b0(Math.floor(Math.random()*100));
        swr3b1(Math.floor(Math.random()*100));
        swr3b2(Math.floor(Math.random()*100));
        swr3b3(Math.floor(Math.random()*100));
        swr3b4(Math.floor(Math.random()*100));
        swr3b5(Math.floor(Math.random()*100));
        swr3b6(Math.floor(Math.random()*100));
        swr3b7(Math.floor(Math.random()*100));
        swr3b8(Math.floor(Math.random()*100));
        swr3b9(Math.floor(Math.random()*100));
    }
    function r3b4wc() {
        sw3("4");
        swr3b0(Math.floor(Math.random()*100));
        swr3b1(Math.floor(Math.random()*100));
        swr3b2(Math.floor(Math.random()*100));
        swr3b3(Math.floor(Math.random()*100));
        swr3b4(Math.floor(Math.random()*100));
        swr3b5(Math.floor(Math.random()*100));
        swr3b6(Math.floor(Math.random()*100));
        swr3b7(Math.floor(Math.random()*100));
        swr3b8(Math.floor(Math.random()*100));
        swr3b9(Math.floor(Math.random()*100));
    }
    function r3b5wc() {
        sw3("5");
        swr3b0(Math.floor(Math.random()*100));
        swr3b1(Math.floor(Math.random()*100));
        swr3b2(Math.floor(Math.random()*100));
        swr3b3(Math.floor(Math.random()*100));
        swr3b4(Math.floor(Math.random()*100));
        swr3b5(Math.floor(Math.random()*100));
        swr3b6(Math.floor(Math.random()*100));
        swr3b7(Math.floor(Math.random()*100));
        swr3b8(Math.floor(Math.random()*100));
        swr3b9(Math.floor(Math.random()*100));
    }
    function r3b6wc() {
        sw3("6");
        swr3b0(Math.floor(Math.random()*100));
        swr3b1(Math.floor(Math.random()*100));
        swr3b2(Math.floor(Math.random()*100));
        swr3b3(Math.floor(Math.random()*100));
        swr3b4(Math.floor(Math.random()*100));
        swr3b5(Math.floor(Math.random()*100));
        swr3b6(Math.floor(Math.random()*100));
        swr3b7(Math.floor(Math.random()*100));
        swr3b8(Math.floor(Math.random()*100));
        swr3b9(Math.floor(Math.random()*100));
    }
    function r3b7wc() {
        sw3("7");
        swr3b0(Math.floor(Math.random()*100));
        swr3b1(Math.floor(Math.random()*100));
        swr3b2(Math.floor(Math.random()*100));
        swr3b3(Math.floor(Math.random()*100));
        swr3b4(Math.floor(Math.random()*100));
        swr3b5(Math.floor(Math.random()*100));
        swr3b6(Math.floor(Math.random()*100));
        swr3b7(Math.floor(Math.random()*100));
        swr3b8(Math.floor(Math.random()*100));
        swr3b9(Math.floor(Math.random()*100));
    }
    function r3b8wc() {
        sw3("8");
        swr3b0(Math.floor(Math.random()*100));
        swr3b1(Math.floor(Math.random()*100));
        swr3b2(Math.floor(Math.random()*100));
        swr3b3(Math.floor(Math.random()*100));
        swr3b4(Math.floor(Math.random()*100));
        swr3b5(Math.floor(Math.random()*100));
        swr3b6(Math.floor(Math.random()*100));
        swr3b7(Math.floor(Math.random()*100));
        swr3b8(Math.floor(Math.random()*100));
        swr3b9(Math.floor(Math.random()*100));
    }
    function r3b9wc() {
        sw3("9");
        swr3b0(Math.floor(Math.random()*100));
        swr3b1(Math.floor(Math.random()*100));
        swr3b2(Math.floor(Math.random()*100));
        swr3b3(Math.floor(Math.random()*100));
        swr3b4(Math.floor(Math.random()*100));
        swr3b5(Math.floor(Math.random()*100));
        swr3b6(Math.floor(Math.random()*100));
        swr3b7(Math.floor(Math.random()*100));
        swr3b8(Math.floor(Math.random()*100));
        swr3b9(Math.floor(Math.random()*100));
    }
    function r4b0wc() {
        sw4("0");
        swr4b0(Math.floor(Math.random()*100));
        swr4b1(Math.floor(Math.random()*100));
        swr4b2(Math.floor(Math.random()*100));
        swr4b3(Math.floor(Math.random()*100));
        swr4b4(Math.floor(Math.random()*100));
        swr4b5(Math.floor(Math.random()*100));
        swr4b6(Math.floor(Math.random()*100));
        swr4b7(Math.floor(Math.random()*100));
        swr4b8(Math.floor(Math.random()*100));
        swr4b9(Math.floor(Math.random()*100));
    }
    function r4b1wc() {
        sw4("1");
        swr4b0(Math.floor(Math.random()*100));
        swr4b1(Math.floor(Math.random()*100));
        swr4b2(Math.floor(Math.random()*100));
        swr4b3(Math.floor(Math.random()*100));
        swr4b4(Math.floor(Math.random()*100));
        swr4b5(Math.floor(Math.random()*100));
        swr4b6(Math.floor(Math.random()*100));
        swr4b7(Math.floor(Math.random()*100));
        swr4b8(Math.floor(Math.random()*100));
        swr4b9(Math.floor(Math.random()*100));
    }
    function r4b2wc() {
        sw4("2");
        swr4b0(Math.floor(Math.random()*100));
        swr4b1(Math.floor(Math.random()*100));
        swr4b2(Math.floor(Math.random()*100));
        swr4b3(Math.floor(Math.random()*100));
        swr4b4(Math.floor(Math.random()*100));
        swr4b5(Math.floor(Math.random()*100));
        swr4b6(Math.floor(Math.random()*100));
        swr4b7(Math.floor(Math.random()*100));
        swr4b8(Math.floor(Math.random()*100));
        swr4b9(Math.floor(Math.random()*100));
    }
    function r4b3wc() {
        sw4("3");
        swr4b0(Math.floor(Math.random()*100));
        swr4b1(Math.floor(Math.random()*100));
        swr4b2(Math.floor(Math.random()*100));
        swr4b3(Math.floor(Math.random()*100));
        swr4b4(Math.floor(Math.random()*100));
        swr4b5(Math.floor(Math.random()*100));
        swr4b6(Math.floor(Math.random()*100));
        swr4b7(Math.floor(Math.random()*100));
        swr4b8(Math.floor(Math.random()*100));
        swr4b9(Math.floor(Math.random()*100));
    }
    function r4b4wc() {
        sw4("4");
        swr4b0(Math.floor(Math.random()*100));
        swr4b1(Math.floor(Math.random()*100));
        swr4b2(Math.floor(Math.random()*100));
        swr4b3(Math.floor(Math.random()*100));
        swr4b4(Math.floor(Math.random()*100));
        swr4b5(Math.floor(Math.random()*100));
        swr4b6(Math.floor(Math.random()*100));
        swr4b7(Math.floor(Math.random()*100));
        swr4b8(Math.floor(Math.random()*100));
        swr4b9(Math.floor(Math.random()*100));
    }
    function r4b5wc() {
        sw4("5");
        swr4b0(Math.floor(Math.random()*100));
        swr4b1(Math.floor(Math.random()*100));
        swr4b2(Math.floor(Math.random()*100));
        swr4b3(Math.floor(Math.random()*100));
        swr4b4(Math.floor(Math.random()*100));
        swr4b5(Math.floor(Math.random()*100));
        swr4b6(Math.floor(Math.random()*100));
        swr4b7(Math.floor(Math.random()*100));
        swr4b8(Math.floor(Math.random()*100));
        swr4b9(Math.floor(Math.random()*100));
    }
    function r4b6wc() {
        sw4("6");
        swr4b0(Math.floor(Math.random()*100));
        swr4b1(Math.floor(Math.random()*100));
        swr4b2(Math.floor(Math.random()*100));
        swr4b3(Math.floor(Math.random()*100));
        swr4b4(Math.floor(Math.random()*100));
        swr4b5(Math.floor(Math.random()*100));
        swr4b6(Math.floor(Math.random()*100));
        swr4b7(Math.floor(Math.random()*100));
        swr4b8(Math.floor(Math.random()*100));
        swr4b9(Math.floor(Math.random()*100));
    }
    function r4b7wc() {
        sw4("7");
        swr4b0(Math.floor(Math.random()*100));
        swr4b1(Math.floor(Math.random()*100));
        swr4b2(Math.floor(Math.random()*100));
        swr4b3(Math.floor(Math.random()*100));
        swr4b4(Math.floor(Math.random()*100));
        swr4b5(Math.floor(Math.random()*100));
        swr4b6(Math.floor(Math.random()*100));
        swr4b7(Math.floor(Math.random()*100));
        swr4b8(Math.floor(Math.random()*100));
        swr4b9(Math.floor(Math.random()*100));
    }
    function r4b8wc() {
        sw4("8");
        swr4b0(Math.floor(Math.random()*100));
        swr4b1(Math.floor(Math.random()*100));
        swr4b2(Math.floor(Math.random()*100));
        swr4b3(Math.floor(Math.random()*100));
        swr4b4(Math.floor(Math.random()*100));
        swr4b5(Math.floor(Math.random()*100));
        swr4b6(Math.floor(Math.random()*100));
        swr4b7(Math.floor(Math.random()*100));
        swr4b8(Math.floor(Math.random()*100));
        swr4b9(Math.floor(Math.random()*100));
    }
    function r4b9wc() {
        sw4("9");
        swr4b0(Math.floor(Math.random()*100));
        swr4b1(Math.floor(Math.random()*100));
        swr4b2(Math.floor(Math.random()*100));
        swr4b3(Math.floor(Math.random()*100));
        swr4b4(Math.floor(Math.random()*100));
        swr4b5(Math.floor(Math.random()*100));
        swr4b6(Math.floor(Math.random()*100));
        swr4b7(Math.floor(Math.random()*100));
        swr4b8(Math.floor(Math.random()*100));
        swr4b9(Math.floor(Math.random()*100));
    }


    function r1b0bc() {
        sb1("0");
        sbr1b0(Math.floor(Math.random()*100));
        sbr1b1(Math.floor(Math.random()*100));
        sbr1b2(Math.floor(Math.random()*100));
        sbr1b3(Math.floor(Math.random()*100));
        sbr1b4(Math.floor(Math.random()*100));
        sbr1b5(Math.floor(Math.random()*100));
        sbr1b6(Math.floor(Math.random()*100));
        sbr1b7(Math.floor(Math.random()*100));
        sbr1b8(Math.floor(Math.random()*100));
        sbr1b9(Math.floor(Math.random()*100));
    }
    function r1b1bc() {
        sb1("1");
        sbr1b0(Math.floor(Math.random()*100));
        sbr1b1(Math.floor(Math.random()*100));
        sbr1b2(Math.floor(Math.random()*100));
        sbr1b3(Math.floor(Math.random()*100));
        sbr1b4(Math.floor(Math.random()*100));
        sbr1b5(Math.floor(Math.random()*100));
        sbr1b6(Math.floor(Math.random()*100));
        sbr1b7(Math.floor(Math.random()*100));
        sbr1b8(Math.floor(Math.random()*100));
        sbr1b9(Math.floor(Math.random()*100));
    }
    function r1b2bc() {
        sb1("2");
        sbr1b0(Math.floor(Math.random()*100));
        sbr1b1(Math.floor(Math.random()*100));
        sbr1b2(Math.floor(Math.random()*100));
        sbr1b3(Math.floor(Math.random()*100));
        sbr1b4(Math.floor(Math.random()*100));
        sbr1b5(Math.floor(Math.random()*100));
        sbr1b6(Math.floor(Math.random()*100));
        sbr1b7(Math.floor(Math.random()*100));
        sbr1b8(Math.floor(Math.random()*100));
        sbr1b9(Math.floor(Math.random()*100));
    }
    function r1b3bc() {
        sb1("3");
        sbr1b0(Math.floor(Math.random()*100));
        sbr1b1(Math.floor(Math.random()*100));
        sbr1b2(Math.floor(Math.random()*100));
        sbr1b3(Math.floor(Math.random()*100));
        sbr1b4(Math.floor(Math.random()*100));
        sbr1b5(Math.floor(Math.random()*100));
        sbr1b6(Math.floor(Math.random()*100));
        sbr1b7(Math.floor(Math.random()*100));
        sbr1b8(Math.floor(Math.random()*100));
        sbr1b9(Math.floor(Math.random()*100));
    }
    function r1b4bc() {
        sb1("4");
        sbr1b0(Math.floor(Math.random()*100));
        sbr1b1(Math.floor(Math.random()*100));
        sbr1b2(Math.floor(Math.random()*100));
        sbr1b3(Math.floor(Math.random()*100));
        sbr1b4(Math.floor(Math.random()*100));
        sbr1b5(Math.floor(Math.random()*100));
        sbr1b6(Math.floor(Math.random()*100));
        sbr1b7(Math.floor(Math.random()*100));
        sbr1b8(Math.floor(Math.random()*100));
        sbr1b9(Math.floor(Math.random()*100));
    }
    function r1b5bc() {
        sb1("5");
        sbr1b0(Math.floor(Math.random()*100));
        sbr1b1(Math.floor(Math.random()*100));
        sbr1b2(Math.floor(Math.random()*100));
        sbr1b3(Math.floor(Math.random()*100));
        sbr1b4(Math.floor(Math.random()*100));
        sbr1b5(Math.floor(Math.random()*100));
        sbr1b6(Math.floor(Math.random()*100));
        sbr1b7(Math.floor(Math.random()*100));
        sbr1b8(Math.floor(Math.random()*100));
        sbr1b9(Math.floor(Math.random()*100));
    }
    function r1b6bc() {
        sb1("6");
        sbr1b0(Math.floor(Math.random()*100));
        sbr1b1(Math.floor(Math.random()*100));
        sbr1b2(Math.floor(Math.random()*100));
        sbr1b3(Math.floor(Math.random()*100));
        sbr1b4(Math.floor(Math.random()*100));
        sbr1b5(Math.floor(Math.random()*100));
        sbr1b6(Math.floor(Math.random()*100));
        sbr1b7(Math.floor(Math.random()*100));
        sbr1b8(Math.floor(Math.random()*100));
        sbr1b9(Math.floor(Math.random()*100));
    }
    function r1b7bc() {
        sb1("7");
        sbr1b0(Math.floor(Math.random()*100));
        sbr1b1(Math.floor(Math.random()*100));
        sbr1b2(Math.floor(Math.random()*100));
        sbr1b3(Math.floor(Math.random()*100));
        sbr1b4(Math.floor(Math.random()*100));
        sbr1b5(Math.floor(Math.random()*100));
        sbr1b6(Math.floor(Math.random()*100));
        sbr1b7(Math.floor(Math.random()*100));
        sbr1b8(Math.floor(Math.random()*100));
        sbr1b9(Math.floor(Math.random()*100));
    }
    function r1b8bc() {
        sb1("8");
        sbr1b0(Math.floor(Math.random()*100));
        sbr1b1(Math.floor(Math.random()*100));
        sbr1b2(Math.floor(Math.random()*100));
        sbr1b3(Math.floor(Math.random()*100));
        sbr1b4(Math.floor(Math.random()*100));
        sbr1b5(Math.floor(Math.random()*100));
        sbr1b6(Math.floor(Math.random()*100));
        sbr1b7(Math.floor(Math.random()*100));
        sbr1b8(Math.floor(Math.random()*100));
        sbr1b9(Math.floor(Math.random()*100));
    }
    function r1b9bc() {
        sb1("9");
        sbr1b0(Math.floor(Math.random()*100));
        sbr1b1(Math.floor(Math.random()*100));
        sbr1b2(Math.floor(Math.random()*100));
        sbr1b3(Math.floor(Math.random()*100));
        sbr1b4(Math.floor(Math.random()*100));
        sbr1b5(Math.floor(Math.random()*100));
        sbr1b6(Math.floor(Math.random()*100));
        sbr1b7(Math.floor(Math.random()*100));
        sbr1b8(Math.floor(Math.random()*100));
        sbr1b9(Math.floor(Math.random()*100));
    }
    function r2b0bc() {
        sb2("0");
        sbr2b0(Math.floor(Math.random()*100));
        sbr2b1(Math.floor(Math.random()*100));
        sbr2b2(Math.floor(Math.random()*100));
        sbr2b3(Math.floor(Math.random()*100));
        sbr2b4(Math.floor(Math.random()*100));
        sbr2b5(Math.floor(Math.random()*100));
        sbr2b6(Math.floor(Math.random()*100));
        sbr2b7(Math.floor(Math.random()*100));
        sbr2b8(Math.floor(Math.random()*100));
        sbr2b9(Math.floor(Math.random()*100));
    }
    function r2b1bc() {
        sb2("1");
        sbr2b0(Math.floor(Math.random()*100));
        sbr2b1(Math.floor(Math.random()*100));
        sbr2b2(Math.floor(Math.random()*100));
        sbr2b3(Math.floor(Math.random()*100));
        sbr2b4(Math.floor(Math.random()*100));
        sbr2b5(Math.floor(Math.random()*100));
        sbr2b6(Math.floor(Math.random()*100));
        sbr2b7(Math.floor(Math.random()*100));
        sbr2b8(Math.floor(Math.random()*100));
        sbr2b9(Math.floor(Math.random()*100));
    }
    function r2b2bc() {
        sb2("2");
        sbr2b0(Math.floor(Math.random()*100));
        sbr2b1(Math.floor(Math.random()*100));
        sbr2b2(Math.floor(Math.random()*100));
        sbr2b3(Math.floor(Math.random()*100));
        sbr2b4(Math.floor(Math.random()*100));
        sbr2b5(Math.floor(Math.random()*100));
        sbr2b6(Math.floor(Math.random()*100));
        sbr2b7(Math.floor(Math.random()*100));
        sbr2b8(Math.floor(Math.random()*100));
        sbr2b9(Math.floor(Math.random()*100));
    }
    function r2b3bc() {
        sb2("3");
        sbr2b0(Math.floor(Math.random()*100));
        sbr2b1(Math.floor(Math.random()*100));
        sbr2b2(Math.floor(Math.random()*100));
        sbr2b3(Math.floor(Math.random()*100));
        sbr2b4(Math.floor(Math.random()*100));
        sbr2b5(Math.floor(Math.random()*100));
        sbr2b6(Math.floor(Math.random()*100));
        sbr2b7(Math.floor(Math.random()*100));
        sbr2b8(Math.floor(Math.random()*100));
        sbr2b9(Math.floor(Math.random()*100));
    }
    function r2b4bc() {
        sb2("4");
        sbr2b0(Math.floor(Math.random()*100));
        sbr2b1(Math.floor(Math.random()*100));
        sbr2b2(Math.floor(Math.random()*100));
        sbr2b3(Math.floor(Math.random()*100));
        sbr2b4(Math.floor(Math.random()*100));
        sbr2b5(Math.floor(Math.random()*100));
        sbr2b6(Math.floor(Math.random()*100));
        sbr2b7(Math.floor(Math.random()*100));
        sbr2b8(Math.floor(Math.random()*100));
        sbr2b9(Math.floor(Math.random()*100));
    }
    function r2b5bc() {
        sb2("5");
        sbr2b0(Math.floor(Math.random()*100));
        sbr2b1(Math.floor(Math.random()*100));
        sbr2b2(Math.floor(Math.random()*100));
        sbr2b3(Math.floor(Math.random()*100));
        sbr2b4(Math.floor(Math.random()*100));
        sbr2b5(Math.floor(Math.random()*100));
        sbr2b6(Math.floor(Math.random()*100));
        sbr2b7(Math.floor(Math.random()*100));
        sbr2b8(Math.floor(Math.random()*100));
        sbr2b9(Math.floor(Math.random()*100));
    }
    function r2b6bc() {
        sb2("6");
        sbr2b0(Math.floor(Math.random()*100));
        sbr2b1(Math.floor(Math.random()*100));
        sbr2b2(Math.floor(Math.random()*100));
        sbr2b3(Math.floor(Math.random()*100));
        sbr2b4(Math.floor(Math.random()*100));
        sbr2b5(Math.floor(Math.random()*100));
        sbr2b6(Math.floor(Math.random()*100));
        sbr2b7(Math.floor(Math.random()*100));
        sbr2b8(Math.floor(Math.random()*100));
        sbr2b9(Math.floor(Math.random()*100));
    }
    function r2b7bc() {
        sb2("7");
        sbr2b0(Math.floor(Math.random()*100));
        sbr2b1(Math.floor(Math.random()*100));
        sbr2b2(Math.floor(Math.random()*100));
        sbr2b3(Math.floor(Math.random()*100));
        sbr2b4(Math.floor(Math.random()*100));
        sbr2b5(Math.floor(Math.random()*100));
        sbr2b6(Math.floor(Math.random()*100));
        sbr2b7(Math.floor(Math.random()*100));
        sbr2b8(Math.floor(Math.random()*100));
        sbr2b9(Math.floor(Math.random()*100));
    }
    function r2b8bc() {
        sb2("8");
        sbr2b0(Math.floor(Math.random()*100));
        sbr2b1(Math.floor(Math.random()*100));
        sbr2b2(Math.floor(Math.random()*100));
        sbr2b3(Math.floor(Math.random()*100));
        sbr2b4(Math.floor(Math.random()*100));
        sbr2b5(Math.floor(Math.random()*100));
        sbr2b6(Math.floor(Math.random()*100));
        sbr2b7(Math.floor(Math.random()*100));
        sbr2b8(Math.floor(Math.random()*100));
        sbr2b9(Math.floor(Math.random()*100));
    }
    function r2b9bc() {
        sb2("9");
        sbr2b0(Math.floor(Math.random()*100));
        sbr2b1(Math.floor(Math.random()*100));
        sbr2b2(Math.floor(Math.random()*100));
        sbr2b3(Math.floor(Math.random()*100));
        sbr2b4(Math.floor(Math.random()*100));
        sbr2b5(Math.floor(Math.random()*100));
        sbr2b6(Math.floor(Math.random()*100));
        sbr2b7(Math.floor(Math.random()*100));
        sbr2b8(Math.floor(Math.random()*100));
        sbr2b9(Math.floor(Math.random()*100));
    }
    function r3b0bc() {
        sb3("0");
        sbr3b0(Math.floor(Math.random()*100));
        sbr3b1(Math.floor(Math.random()*100));
        sbr3b2(Math.floor(Math.random()*100));
        sbr3b3(Math.floor(Math.random()*100));
        sbr3b4(Math.floor(Math.random()*100));
        sbr3b5(Math.floor(Math.random()*100));
        sbr3b6(Math.floor(Math.random()*100));
        sbr3b7(Math.floor(Math.random()*100));
        sbr3b8(Math.floor(Math.random()*100));
        sbr3b9(Math.floor(Math.random()*100));
    }
    function r3b1bc() {
        sb3("1");
        sbr3b0(Math.floor(Math.random()*100));
        sbr3b1(Math.floor(Math.random()*100));
        sbr3b2(Math.floor(Math.random()*100));
        sbr3b3(Math.floor(Math.random()*100));
        sbr3b4(Math.floor(Math.random()*100));
        sbr3b5(Math.floor(Math.random()*100));
        sbr3b6(Math.floor(Math.random()*100));
        sbr3b7(Math.floor(Math.random()*100));
        sbr3b8(Math.floor(Math.random()*100));
        sbr3b9(Math.floor(Math.random()*100));
    }
    function r3b2bc() {
        sb3("2");
        sbr3b0(Math.floor(Math.random()*100));
        sbr3b1(Math.floor(Math.random()*100));
        sbr3b2(Math.floor(Math.random()*100));
        sbr3b3(Math.floor(Math.random()*100));
        sbr3b4(Math.floor(Math.random()*100));
        sbr3b5(Math.floor(Math.random()*100));
        sbr3b6(Math.floor(Math.random()*100));
        sbr3b7(Math.floor(Math.random()*100));
        sbr3b8(Math.floor(Math.random()*100));
        sbr3b9(Math.floor(Math.random()*100));
    }
    function r3b3bc() {
        sb3("3");
        sbr3b0(Math.floor(Math.random()*100));
        sbr3b1(Math.floor(Math.random()*100));
        sbr3b2(Math.floor(Math.random()*100));
        sbr3b3(Math.floor(Math.random()*100));
        sbr3b4(Math.floor(Math.random()*100));
        sbr3b5(Math.floor(Math.random()*100));
        sbr3b6(Math.floor(Math.random()*100));
        sbr3b7(Math.floor(Math.random()*100));
        sbr3b8(Math.floor(Math.random()*100));
        sbr3b9(Math.floor(Math.random()*100));
    }
    function r3b4bc() {
        sb3("4");
        sbr3b0(Math.floor(Math.random()*100));
        sbr3b1(Math.floor(Math.random()*100));
        sbr3b2(Math.floor(Math.random()*100));
        sbr3b3(Math.floor(Math.random()*100));
        sbr3b4(Math.floor(Math.random()*100));
        sbr3b5(Math.floor(Math.random()*100));
        sbr3b6(Math.floor(Math.random()*100));
        sbr3b7(Math.floor(Math.random()*100));
        sbr3b8(Math.floor(Math.random()*100));
        sbr3b9(Math.floor(Math.random()*100));
    }
    function r3b5bc() {
        sb3("5");
        sbr3b0(Math.floor(Math.random()*100));
        sbr3b1(Math.floor(Math.random()*100));
        sbr3b2(Math.floor(Math.random()*100));
        sbr3b3(Math.floor(Math.random()*100));
        sbr3b4(Math.floor(Math.random()*100));
        sbr3b5(Math.floor(Math.random()*100));
        sbr3b6(Math.floor(Math.random()*100));
        sbr3b7(Math.floor(Math.random()*100));
        sbr3b8(Math.floor(Math.random()*100));
        sbr3b9(Math.floor(Math.random()*100));
    }
    function r3b6bc() {
        sb3("6");
        sbr3b0(Math.floor(Math.random()*100));
        sbr3b1(Math.floor(Math.random()*100));
        sbr3b2(Math.floor(Math.random()*100));
        sbr3b3(Math.floor(Math.random()*100));
        sbr3b4(Math.floor(Math.random()*100));
        sbr3b5(Math.floor(Math.random()*100));
        sbr3b6(Math.floor(Math.random()*100));
        sbr3b7(Math.floor(Math.random()*100));
        sbr3b8(Math.floor(Math.random()*100));
        sbr3b9(Math.floor(Math.random()*100));
    }
    function r3b7bc() {
        sb3("7");
        sbr3b0(Math.floor(Math.random()*100));
        sbr3b1(Math.floor(Math.random()*100));
        sbr3b2(Math.floor(Math.random()*100));
        sbr3b3(Math.floor(Math.random()*100));
        sbr3b4(Math.floor(Math.random()*100));
        sbr3b5(Math.floor(Math.random()*100));
        sbr3b6(Math.floor(Math.random()*100));
        sbr3b7(Math.floor(Math.random()*100));
        sbr3b8(Math.floor(Math.random()*100));
        sbr3b9(Math.floor(Math.random()*100));
    }
    function r3b8bc() {
        sb3("8");
        sbr3b0(Math.floor(Math.random()*100));
        sbr3b1(Math.floor(Math.random()*100));
        sbr3b2(Math.floor(Math.random()*100));
        sbr3b3(Math.floor(Math.random()*100));
        sbr3b4(Math.floor(Math.random()*100));
        sbr3b5(Math.floor(Math.random()*100));
        sbr3b6(Math.floor(Math.random()*100));
        sbr3b7(Math.floor(Math.random()*100));
        sbr3b8(Math.floor(Math.random()*100));
        sbr3b9(Math.floor(Math.random()*100));
    }
    function r3b9bc() {
        sb3("9");
        sbr3b0(Math.floor(Math.random()*100));
        sbr3b1(Math.floor(Math.random()*100));
        sbr3b2(Math.floor(Math.random()*100));
        sbr3b3(Math.floor(Math.random()*100));
        sbr3b4(Math.floor(Math.random()*100));
        sbr3b5(Math.floor(Math.random()*100));
        sbr3b6(Math.floor(Math.random()*100));
        sbr3b7(Math.floor(Math.random()*100));
        sbr3b8(Math.floor(Math.random()*100));
        sbr3b9(Math.floor(Math.random()*100));
    }
    function r4b0bc() {
        sb4("0");
        sbr4b0(Math.floor(Math.random()*100));
        sbr4b1(Math.floor(Math.random()*100));
        sbr4b2(Math.floor(Math.random()*100));
        sbr4b3(Math.floor(Math.random()*100));
        sbr4b4(Math.floor(Math.random()*100));
        sbr4b5(Math.floor(Math.random()*100));
        sbr4b6(Math.floor(Math.random()*100));
        sbr4b7(Math.floor(Math.random()*100));
        sbr4b8(Math.floor(Math.random()*100));
        sbr4b9(Math.floor(Math.random()*100));
    }
    function r4b1bc() {
        sb4("1");
        sbr4b0(Math.floor(Math.random()*100));
        sbr4b1(Math.floor(Math.random()*100));
        sbr4b2(Math.floor(Math.random()*100));
        sbr4b3(Math.floor(Math.random()*100));
        sbr4b4(Math.floor(Math.random()*100));
        sbr4b5(Math.floor(Math.random()*100));
        sbr4b6(Math.floor(Math.random()*100));
        sbr4b7(Math.floor(Math.random()*100));
        sbr4b8(Math.floor(Math.random()*100));
        sbr4b9(Math.floor(Math.random()*100));
    }
    function r4b2bc() {
        sb4("2");
        sbr4b0(Math.floor(Math.random()*100));
        sbr4b1(Math.floor(Math.random()*100));
        sbr4b2(Math.floor(Math.random()*100));
        sbr4b3(Math.floor(Math.random()*100));
        sbr4b4(Math.floor(Math.random()*100));
        sbr4b5(Math.floor(Math.random()*100));
        sbr4b6(Math.floor(Math.random()*100));
        sbr4b7(Math.floor(Math.random()*100));
        sbr4b8(Math.floor(Math.random()*100));
        sbr4b9(Math.floor(Math.random()*100));
    }
    function r4b3bc() {
        sb4("3");
        sbr4b0(Math.floor(Math.random()*100));
        sbr4b1(Math.floor(Math.random()*100));
        sbr4b2(Math.floor(Math.random()*100));
        sbr4b3(Math.floor(Math.random()*100));
        sbr4b4(Math.floor(Math.random()*100));
        sbr4b5(Math.floor(Math.random()*100));
        sbr4b6(Math.floor(Math.random()*100));
        sbr4b7(Math.floor(Math.random()*100));
        sbr4b8(Math.floor(Math.random()*100));
        sbr4b9(Math.floor(Math.random()*100));
    }
    function r4b4bc() {
        sb4("4");
        sbr4b0(Math.floor(Math.random()*100));
        sbr4b1(Math.floor(Math.random()*100));
        sbr4b2(Math.floor(Math.random()*100));
        sbr4b3(Math.floor(Math.random()*100));
        sbr4b4(Math.floor(Math.random()*100));
        sbr4b5(Math.floor(Math.random()*100));
        sbr4b6(Math.floor(Math.random()*100));
        sbr4b7(Math.floor(Math.random()*100));
        sbr4b8(Math.floor(Math.random()*100));
        sbr4b9(Math.floor(Math.random()*100));
    }
    function r4b5bc() {
        sb4("5");
        sbr4b0(Math.floor(Math.random()*100));
        sbr4b1(Math.floor(Math.random()*100));
        sbr4b2(Math.floor(Math.random()*100));
        sbr4b3(Math.floor(Math.random()*100));
        sbr4b4(Math.floor(Math.random()*100));
        sbr4b5(Math.floor(Math.random()*100));
        sbr4b6(Math.floor(Math.random()*100));
        sbr4b7(Math.floor(Math.random()*100));
        sbr4b8(Math.floor(Math.random()*100));
        sbr4b9(Math.floor(Math.random()*100));
    }
    function r4b6bc() {
        sb4("6");
        sbr4b0(Math.floor(Math.random()*100));
        sbr4b1(Math.floor(Math.random()*100));
        sbr4b2(Math.floor(Math.random()*100));
        sbr4b3(Math.floor(Math.random()*100));
        sbr4b4(Math.floor(Math.random()*100));
        sbr4b5(Math.floor(Math.random()*100));
        sbr4b6(Math.floor(Math.random()*100));
        sbr4b7(Math.floor(Math.random()*100));
        sbr4b8(Math.floor(Math.random()*100));
        sbr4b9(Math.floor(Math.random()*100));
    }
    function r4b7bc() {
        sb4("7");
        sbr4b0(Math.floor(Math.random()*100));
        sbr4b1(Math.floor(Math.random()*100));
        sbr4b2(Math.floor(Math.random()*100));
        sbr4b3(Math.floor(Math.random()*100));
        sbr4b4(Math.floor(Math.random()*100));
        sbr4b5(Math.floor(Math.random()*100));
        sbr4b6(Math.floor(Math.random()*100));
        sbr4b7(Math.floor(Math.random()*100));
        sbr4b8(Math.floor(Math.random()*100));
        sbr4b9(Math.floor(Math.random()*100));
    }
    function r4b8bc() {
        sb4("8");
        sbr4b0(Math.floor(Math.random()*100));
        sbr4b1(Math.floor(Math.random()*100));
        sbr4b2(Math.floor(Math.random()*100));
        sbr4b3(Math.floor(Math.random()*100));
        sbr4b4(Math.floor(Math.random()*100));
        sbr4b5(Math.floor(Math.random()*100));
        sbr4b6(Math.floor(Math.random()*100));
        sbr4b7(Math.floor(Math.random()*100));
        sbr4b8(Math.floor(Math.random()*100));
        sbr4b9(Math.floor(Math.random()*100));
    }
    function r4b9bc() {
        sb4("9");
        sbr4b0(Math.floor(Math.random()*100));
        sbr4b1(Math.floor(Math.random()*100));
        sbr4b2(Math.floor(Math.random()*100));
        sbr4b3(Math.floor(Math.random()*100));
        sbr4b4(Math.floor(Math.random()*100));
        sbr4b5(Math.floor(Math.random()*100));
        sbr4b6(Math.floor(Math.random()*100));
        sbr4b7(Math.floor(Math.random()*100));
        sbr4b8(Math.floor(Math.random()*100));
        sbr4b9(Math.floor(Math.random()*100));
    }
}