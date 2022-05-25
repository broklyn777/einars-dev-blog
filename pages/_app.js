// import { MDXProvider } from '@mdx-js/react'
import '../styles/globals.css'
import Nav from '../components/Nav'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="container max-w-5xl mx-auto px-3 ">

        <Head>

        </Head>

        <Nav />

        <Component {...pageProps} />

      </div>
    </>
  )
}

export default MyApp
