import styles from '../logincomp/login.module.css';
import cookies from 'js-cookie'

export default function Login() {
    const isim = cookies.get('adsoyad');
    return(
        <div className={styles.mainy}>
            <p className={styles.h1}>Hoşgeldin</p>
            <p className={styles.h2}>{isim}</p>
            <p className={styles.h3}>Hesabın henüz inceleme aşamasında. Sistemi kullanmaya başlamadan önce beslenme ve diyetetik öğrencisi olup olmadığını kontrol
            etmemiz gerekiyor. Bu işlem en fazla 24 saat sürecektir.</p>
            <button className={styles.btn2} onClick={btngclick}>Giriş Sayfasına Git</button>
        </div>
    )
}
export function btngclick() {
    window.location.href='/girisyap';
}