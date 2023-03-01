import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from "react"
import { useRouter } from 'next/router';
import Link from 'next/link'

import Products from '../components/produtos'
import TopBar from '../components/topbar'
import SEO from '../components/headLocal'

import api from '../src/api';

export default function Home() {

  const router = useRouter();

  const [busca,setBusca] = useState('Home')


  const handleChange = event => {
    setProcura(event.target.value)
  };


  return (
    <>
      
      <SEO Title={busca}/>

      <TopBar/>

      <h2>Melhores {busca}</h2>

      <Link href="/">Home</Link>
      <Link href="/casa">Casa</Link>
      <Link href="/casa/banheiro">Banheiro</Link>

    </>
  )
}
