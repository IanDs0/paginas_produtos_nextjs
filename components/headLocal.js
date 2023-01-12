import Head from 'next/head'
import Script from 'next/script'

function IndexPage({ Title }) {
  return (
    <Head>

        <title>{Title} em Promoções com Descontos incriveis</title>

        <link rel="stylesheet" href="https://freshcart.codescandy.com/assets/css/theme.min.css"/>

        <link rel="icon" href="https://promosim.com.br/assets/promosim-favicon.png"/>
    </Head>
  )
}

export default IndexPage
