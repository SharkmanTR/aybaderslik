import styles from '../logincomp/login.module.css';
import cookies from 'js-cookie'

export default function Login() {
    const isim = cookies.get('adsoyad');
    return(
        <div className={styles.maing}>
            <p className={styles.h1}>Hoşgeldin</p>
            <p className={styles.h2}>{isim}</p>
            <p className={styles.h3}>Bizi tercih ettiğin için teşekkür ederiz. Derslerinde başarılar dileriz.</p>
            <button className={styles.btn1} onClick={btngclick}>Hemen Kullanmaya Başla</button>
        </div>
    )
}
export function btngclick() {
    window.location.href='/';
}