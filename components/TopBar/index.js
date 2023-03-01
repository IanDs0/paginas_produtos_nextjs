import Link from 'next/link'

import styles from './style.module.css'

export default function TopBar() {
    return (
        <div className={styles.main}>
            <ul className={styles.topbar}>
                <Link 
                    className={styles.link} 
                    href="/"
                >
                    Home
                </Link>
                
                <Link 
                    className={styles.link} 
                    href="/Pagina1"
                >
                    Pagina 1
                </Link>

                <Link 
                    className={styles.link} 
                    href="/Pagina2"
                >
                    Pagina 2
                </Link>

                <Link 
                    className={styles.link} 
                    href="/sobre"
                >
                    Sobre
                </Link>
            </ul>
        </div>
    )
}