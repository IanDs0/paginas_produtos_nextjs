import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useState,useEffect } from "react"

import Products from '../components/produtos'
import GTM from '../components/GTM'
import { useRouter } from 'next/router'
import Link from 'next/link';

import api from './api';

const inter = Inter({ subsets: ['latin'] })

export default function rotaProdutos() {

    const router = useRouter()

    const [busca, setBusca] = useState('')
    const [Procura, setProcura] = useState('')

    const [produtos,setProdutos] = useState([])

    const handleChange = event => {
        setProcura(event.target.value)
    };
    

    async function getProdutos (){

        const datat = await api.get(busca.replace(/ /g, '+'),{
        auth : {
            username: 'promosim',
            password: 'rvSxTWwtWRlokHD3mB01W1CPv'
        }
        });

        let teste = []
        teste = datat.data.product

        teste.map(
            (p)=> {
                let save = p
                return save
            }
        )
        teste = Produto(teste)
        setProdutos(teste)
    }

    function Produto (Produtos) {

        let save = Produtos.map( function(p){

            let salvar = p.offer.map(
                function (Produtos){
                    if(Produtos.storeName == "Magazine Luiza"){
                        let retorno ={
                        id: Produtos.id,
                        name: Produtos.name,
                        img: Produtos.imageURL,
                        saida: Produtos.url,
                        preco: Produtos.price,
                        }
                        return retorno;
                    }
                }
            )
            salvar = salvar.filter((element) => element !== undefined)
            return salvar
        }
        )
        save = save.flat(Infinity)
        save = save.filter((element) => element !== undefined)
        return save     
    }

    useEffect(() => {
        let parametros = router.query.produc

        if(parametros == undefined) {
            setBusca('')
            setProcura('')
            setProdutos([])
            router.push('/')
        }
        setBusca(parametros)
        setProdutos([])
        getProdutos(null)  
    }, [])

    return (
        <>
        
        <GTM Title={busca}/>

        <main className={styles.main}>

        <div className="mar"></div>

        <header className="p-2 text-bg-dark">
            <div className="container d-flex justify-content-center">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <img src="https://promosim.com.br/assets/logo/logo-branco-2000px-sem-fundo.png" height="50"/>
                </div>
            </div>
        </header>

        <div className="container">

            <h2 className={inter.className}>Melhores {busca}</h2>


            <div className="d-flex  w-100 ms-4 ">

                <form onSubmit={getProdutos} className="wi-80 d-lg-block">
                    <div className="input-group ">
                    
                        <input type="text" aria-label="Last name" className="form-control w-45" placeholder="Mais Promoções" onChange={handleChange}/>
                        <Link href={'/'+Procura}>
                            <button className="input-group-text bg-transparent" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-search">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </button>
                        </Link>

                    </div>

                </form>
                
            </div>


            <Products produtos={produtos}/>

            
        </div>

        <div className="mar"></div>
        </main>
        </>
    )
}
