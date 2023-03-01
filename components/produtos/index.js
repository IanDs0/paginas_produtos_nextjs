import Link from 'next/link';

import styles from './style.module.css';

function Produtos({ product }) {

    const link = product.link

    return (
        <div className={styles.produto}>
            <h1>Produtos</h1>
            <Link href={link}>Home</Link>
        </div>
    )
}

export default Produtos