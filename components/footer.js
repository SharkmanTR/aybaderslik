import styles from '../components/Default/footer.module.css';

export default function Footer() {
    return(
        <div className={styles.main}>
            <div className={styles.mid}>
                <p className={styles.txt} style={{width:"100%"}}>AYBA Derslik Copyright 2021</p>
            </div>
            <div className={styles.mid}>
                <p className={styles.lnk} style={{cursor:'default'}}>
                    <img src="icons/info.png" className={styles.img}></img>
                    İletişim
                </p>
                <p className={styles.txt}>|</p>
                <p className={styles.lnk} onClick={wpclick}>
                    <img src="/icons/whatsapp.png" className={styles.img}></img>
                    Whatsapp
                </p>
                <p className={styles.txt}>|</p>
                <p className={styles.lnk} onClick={instaclick}>
                    <img src="/icons/send.png" className={styles.img}></img>
                    Instagram
                </p>

            </div>

        </div>
    )
    function instaclick() {
        window.location.href="https://www.instagram.com/aybaderslik"
    }
    function wpclick() {
        window.location.href="https://wa.me/905316714715"
    }
}