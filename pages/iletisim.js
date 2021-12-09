import styles from "../components/Default/iletisim.module.css"

export default function Iletisim() {
    return(
        <div className={styles.main}>
            <div className={styles.col}>
                <button className={styles.btn1} onClick={waclick}>
                    Whatsapp
                </button>
            </div>
            <div className={styles.col}>
                <button className={styles.btn2} onClick={instaclick}>
                    Instagram
                </button>
            </div>
        </div>
    )
    function waclick() {
        window.location.href="https://wa.me/905316714715"
    }
    function instaclick() {
        window.location.href="https://www.instagram.com/aybaderslik"
    }
}