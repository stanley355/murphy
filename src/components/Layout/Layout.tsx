import React from 'react';
import Head from 'next/head';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout = ({ children }: any) => {

  return (
    <div className="">
      <Head>
        {/* <!-- Google Tag Manager --> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PB9J9XR');
        `}}
        />
        {/* <!-- End Google Tag Manager --> */}
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PB9J9XR"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;
