import cookies from 'js-cookie'
import styles from '/components/Default/login.module.css'
import LoginG from '../../components/logincomp/login1.js'
import LoginY from '../../components/logincomp/login2.js'
import {PrismaClient} from '@prisma/client'

var md5 = require('md5');



export default function GirisYap(){
    const l = cookies.get('login');
    const d =cookies.get('durum');
    return(
        <div>
            {l=="1" && d=="1" &&
            <LoginG></LoginG>
            
            }
            {l=="1" && d=="0"&&
                <LoginY></LoginY>
            }
            {l=="0"&&
                <div className={styles.login}>
                    <input id="txtemail" type="email" placeholder="E-posta:" className={styles.inputlgn} />
                    <input id="txtsifre" type="password" placeholder="Şifre:" className={styles.inputlgn} />
                    <button className={styles.btnlogin} onClick={btngirisclick}>
                        Giriş Yap
                    </button>
                </div>
            
            }

        </div>
    )

}

export function btngirisclick(){
    let e = document.getElementById("txtemail").value;
    let s =document.getElementById("txtsifre").value;
    s=md5(s);
    window.location.href='/girisyap/'+e+"/"+s;
}

