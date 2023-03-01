import { Inter } from '@next/font/google'
import { useState,useEffect } from "react"
import { useRouter } from 'next/router'
import Link from 'next/link'

import Products from '../../components/produtos'
import TopBar from '../../components/topbar'
import SEO from '../../components/headLocal'

import api from '../../src/api';

const inter = Inter({ subsets: ['latin'] })


export async function getStaticProps(context) {

    const busca = context.params.category

    let product = busca
    
    return {
        props: {
            busca: busca,
            product: product
        },
        revalidate: 60
    }
}

export async function getStaticPaths (){
    
    const path = []

    return {
        paths: path,
        fallback: 'blocking'
    }
}

export default function rotaProdutos( props ) {

    const router = useRouter()

    const [Procura, setProcura] = useState('')

    const product = {
        name: "GOOGLE",
        link: "https://google.com",
        image: "https://static.natura.com/cdn/ff/VfVuc8ShUHjEgK3zKEdD2tEE5WkmU54OzaXXPSF5QI8/1677212685/public/products/76420_1_37.jpg",  
        desconto: 30,
        preco:{
            atual: "R$ 229,00",
            antigo: "R$ 144,90", 
            vezes: "4x de R$ 36,23", 
        }
    }

    const handleChange = event => {
        setProcura(event.target.value)
    };
    
    useEffect(() => {
        setProcura('')
    }, [])

    return (
        <>
        
            <SEO Title={props.product}/>

            <TopBar/>

            <h2>{props.product}</h2>

            <Link href="/">Home</Link>
            <Link href="/casa">Casa</Link>
            <Link href="/casa/banheiro">Banheiro</Link>

            <Products product={product}/>

        </>
    )
}
