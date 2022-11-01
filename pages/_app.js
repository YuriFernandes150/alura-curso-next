import '../styles/globals.css'
import GlobalStyle from '../src/theme/GlobalStyle'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;1,300;1,400&display=swap" rel="stylesheet" />
      <GlobalStyle />
      <Component {...pageProps} />
    </>

  )
}

export default MyApp;