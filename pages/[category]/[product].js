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

    const busca =  context.params.category + ' => ' + context.params.product

    return {
        props: {
            busca: busca,
            product: busca
        },
        revalidate: 360
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

        </>
    )
}
