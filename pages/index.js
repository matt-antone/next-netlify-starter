import Head from 'next/head'
import Footer from '@components/Footer'
import Hero from '@components/Hero'
import Header from '@components/Header'
export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Hero/>
      <div className="container mx-auto">
        <main>
          <p className="description">
            Get started by editing <code>pages/index.js</code>
          </p>
        </main>
      </div>
      <Footer />
    </>
  )
}
