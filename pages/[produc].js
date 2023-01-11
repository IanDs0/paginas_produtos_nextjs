import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'
import { useState,useEffect } from "react"

import Products from '../components/produtos'
import GTM from '../components/GTM'
import { useRouter } from 'next/router'
import Link from 'next/link';

import api from '../src/api';

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps(context) {

    let busca = context.query.produc
    
    function Produto (Produtos) {

        let save = Produtos.map( function(p){

            let salvar = p.offer.map(
                function (Produtos){
                    // if(Produtos.storeName == "Magazine Luiza"){
                        let retorno ={
                        id: Produtos.id,
                        name: Produtos.name,
                        img: Produtos.imageURL,
                        saida: Produtos.url,
                        preco: Produtos.price,
                        }
                        return retorno;
                    // }
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

    const datat = await api.get(busca.replace(/ /g, '+'),{
        auth : {
            username: 'promosim',
            password: 'rvSxTWwtWRlokHD3mB01W1CPv'
        }
        });

    let product = []
    product = datat.data.product

    product.map(
        (p)=> {
            let save = p
            return save
        }
    )
    product = Produto(product)
    
    return {
        props: {
            busca: busca,
            product: product
        }
    }
}

export async function getStaticPath(){
    
    const path = [
        {
            params:{
                produc: 'Notebook'
            }
        },
        {
            params:{
                produc: 'Smart tv'
            }
        },
        {
            params:{
                produc: 'Geladeira'
            }
        },
        {
            params:{
                produc: 'Smartphone'
            }
        },
        {
            params:{
                produc: 'Tv'
            }
        },
        {
            params:{
                produc: 'Notebook'
            }
        },
    ]

    return {
        paths: path,
        fallback: 'blocking'
    }
}

export default function rotaProdutos( props ) {

    const router = useRouter()

    const [busca, setBusca] = useState('')
    const [Procura, setProcura] = useState('')

    const [produtos,setProdutos] = useState([])

    const handleChange = event => {
        setProcura(event.target.value)
    };
    

    useEffect(() => {
        setBusca(props.busca)
        setProcura('')
        setProdutos(props.product)
    }, [])

    function getProdutos (event){
        setProdutos([])
        router.push('/'+Procura);
    }

    return (
        <>
        
        <GTM Title={busca}/>

        <main>

        <header className="p-2 text-bg-dark" >
            <div className="container d-flex justify-content-center">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <img src="https://promosim.com.br/assets/logo/logo-branco-2000px-sem-fundo.png" height="50"/>
                </div>
            </div>
        </header>

        <div className="container">

            <h2 className="text-center mar">Melhores {busca}</h2>


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
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5CVX4HP" height="0" width="0" ></iframe></noscript>
        </main>
        </>
    )
}
