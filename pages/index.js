import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from "react"
import { useRouter } from 'next/router';
import Link from 'next/link';

import Products from '../components/produtos'
import GTM from '../components/GTM'

import api from '../src/api';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter();

  const [busca,setBusca] = useState('Home')
  const [Procura, setProcura] = useState('');

  const [produtos,setProdutos] = useState([])

  const handleChange = event => {
    setProcura(event.target.value)
  };
  

  function getProdutos (event){
    event.preventDefault();
    router.push('/'+Procura);
  }
  
  useEffect(() => {
    
    router.push('/iphone');
}, [])

  return (
    <>
      
      <GTM Title={busca}/>

      <main className={styles.main}>

      <header className="p-2 text-bg-dark">
          <div className="container d-flex justify-content-center">
              <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                  <img src="https://promosim.com.br/assets/logo/logo-branco-2000px-sem-fundo.png" height="50"/>
              </div>
          </div>
      </header>

      <div className="container">

          <h2 className="text-center mar">Melhores {busca}</h2>


          <div className="d-flex  w-100 ms-4 ">

              <Link href={'/'+Procura}>
              <form onSubmit={getProdutos} className="wi-80 d-lg-block">
                  <div className="input-group ">
                  
                      <input type="text" aria-label="Last name" className="form-control w-45" placeholder="Mais Promoções" onChange={handleChange}/>
                        <button className="input-group-text bg-transparent" type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-search">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </button>

                  </div>

              </form>
              </Link>
              
          </div>


          <Products produtos={produtos}/>

          
      </div>

      <div className="mar"></div>
      </main>
    </>
  )
}
