import Nav from "./Nav"
import Footer from './Footer'

import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Rick and Morty</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <div className='container-fluid'>
                <main className='main container'>
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    )
}
export default Layout