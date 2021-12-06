import styles from '../components/Default/bulmaca.module.css';


export default function Bulmaca() {
    return(
        <div className={styles.main}>
            <p className={styles.p}>Satranç, kralların oyunu olarak bilinir. Satranç bilmenin sizin hayatınıza olumlu etkisi olacağını düüşündüğümüz için bu bulmacamız satrançla ilgili olacak.</p>
            <p className={styles.p}>Eğer bulmacanın yanıtını biliyorsan <a className={styles.a} href="https://www.instagram.com/aybaderslik/">@aybaderslik</a> Instagram adresine yazmayı unutma.</p>
            <img className={styles.img} src="/img/satranc.png"></img>
            <p className={styles.p}>Beyaz oynar ve mat eder. Cevabınızı notasyon kurallarına uygun şekilde bize mesaj olarak gönderebilirsiniz.</p>
        </div>
    )
}