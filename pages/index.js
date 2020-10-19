import Head from 'next/head'
import styles from '../src/components/main.scss'

export default function Home() {
  return (
    <>
      <style jsx>{styles}</style>
      <div className="container">
        <Head>
          <title>Pokedex</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="main">
          <h1 className="title">
            Welcome to Pokedex
          </h1>
        </main>
      </div>
    </>
  )
}
