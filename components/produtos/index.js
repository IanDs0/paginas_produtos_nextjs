import { useRouter } from 'next/router'
import Link from 'next/link';

import Button from '.././Botao'

import styles from './style.module.css';

function Produtos({ product }) {

    const router = useRouter()

    function redirect() {      
        // router.push(`${product.link}`);
        router.push(`${product.id}`);
    } 

    return (
        <div className={styles.produto}>
            
            <span className={styles.desconto}>{product.desconto}% OFF</span>

            <img src={product.image}/>

            <h3>{product.name}</h3>
            
            <div className={styles.precos}>
                <span className={styles.atual}>{product.preco.atual}</span>
                <span className={styles.antigo}><i>{product.preco.antigo}</i></span>
                <span className={styles.vezes}>ou {product.preco.vezes}</span>
            </div>
            
            <Button onClick={redirect} children={product.name} variant="primaria"/>
        </div>
    )
}

export default Produtos