import Head from 'next/head'
import styles from './styles.scss'

const AppWrapper = ({ children }) => (
  <>
    <Head>
      <title>Pokedex</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      h1 { margin: 0 }

      a {
        color: inherit;
        text-decoration: none;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
    <style jsx>{styles}</style>
    <div className="container">
      {children}
    </div>
  </>
);

export default AppWrapper
