import Head from 'next/head'

function IndexPage({ Title }) {
  return (
    <Head>

        <title>{Title} em Promoções com Descontos incriveis</title>

        {/* <!-- Google Tag Manager --> */}
        {/* <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TF2WKQK');</script> */}

        {/* <!-- End Google Tag Manager --><!-- Google Tag Manager (noscript) --> */}

        {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TF2WKQK"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> */}

        {/* <link rel="stylesheet" href="theme.min.css"/> */}
        
        <link rel="icon" href="https://promosim.com.br/assets/promosim-favicon.png"/>
    </Head>
  )
}

export default IndexPage
