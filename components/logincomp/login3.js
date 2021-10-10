import styles from '../logincomp/login.module.css';
import cookies from 'js-cookie'

export default function Login() {
    return(
        <div className={styles.mainr}>
            <p className={styles.h1}>Üzgünüz</p>
            <p className={styles.h3}>Maalesef giriş bilgilerin eşleşmedi. Lütfen tekrar dene.</p>
            <button className={styles.btn3} onClick={btngclick}>Giriş Sayfasına Git</button>
        </div>
    )
}
export function btngclick() {
    window.location.href='/girisyap';
}