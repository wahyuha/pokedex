import Head from 'next/head'

export default function Home() {
  return (
    <>
      <div className="container">
        <Head>
          <title>Pokedex</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="main">
          <h1 className="title">
            Halaman detail pokemon
          </h1>
        </main>
      </div>
    </>
  )
}
