import styles from '../components/Default/loading.module.css';
export default function Loading(){
    return(
        <div className={styles.main} >
            <div className={styles.mid}>
                <div className={styles.ldsring}><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
    )
}