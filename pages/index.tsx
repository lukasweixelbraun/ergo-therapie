import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import About from './about'
import Contact from './contact'
import InterestingFacts from './interesting_facts'
import Rota from './rota'
import SpecilaziedFields from './specialized_fields'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta charSet="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title>Waldviertel Therapie | Madlen Weixelbraun & Daniel Welser</title>
        <meta name="description"
          content="Ich bin freiberufliche Ergotherapeutin im Bezirk Gmünd. Ich arbeite vor allem mit Kindern, Säuglingen und PatientInnen mit orthopädischen, rheumatologischen und handchirurgischen Krankheitsbildern." />
        <meta name="keywords"
          content="Waldviertel Therapie, Waldviertel, Therapie, Madlen Weixelbraun, Madlen, Weixelbraun, Daniel Welser, Daniel, Welser, Ergotherapie, Ergotherapeutin, Physiotherapie, Physiotherapeut, w4tel-therapie, w4tel" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="author" content="Lukas Weixelbraun" />

        <meta property="og:title" content="Waldviertel Therapie | Madlen Weixelbraun & Daniel Welser" />
        <meta property="og:image" content="https://www.w4tel-therapie.at/media" />
        <meta property="og:url" content="https://www.w4tel-therapie.at/" />
        <meta property="og:site_name" content="Waldviertel Therapie" />
        <meta property="og:description"
          content="In der Ergotherapie wird die Handlungsfähigkeit durch eine Verbesserung der sensomotorischen Fähigkeiten, der kognitiven Fähigkeiten und der sozial-emotionalen Fähigkeiten erweitert. Ergotherapeut*innen erfassen das Kind in seiner gesamten Lebenssituation und stimmen die Behandlung auf diese ab." />

        <link rel="icon" href="/favicon.ico" />

        <link type="text/css" href="https://raw.githack.com/lukasweixelbraun/responsive-navbar/main/min/navbar.css"
          rel="stylesheet" />
        <script src="https://raw.githack.com/lukasweixelbraun/responsive-navbar/main/script/navbar.js"></script>

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://unpkg.com/shards-ui@latest/dist/css/shards.min.css"></link>
      </Head>

      <a className="skip-nav-link" href="#content">Zum Inhalt springen</a>

      <nav className="nav light">
        <div className="container">
          <div className="logo">
            <a href="#home">Your Logo</a>
          </div>
          <div id="nav-list" className="main-list">
            <ul className="nav-links">
              <li><a href="#about-me">Über mich</a></li>
              <li><a href="#special-fields">Fachbereiche</a></li>
              <li><a href="#rota">Rota® Therapie</a></li>
              <li><a href="#good-to-know">Wissenswertes</a></li>
              <li><a href="#contact">Kontakt</a></li>
            </ul>
          </div>
          <span className="nav-menu">
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
      </nav>

      <header id="home" className="masthead">
        <div className="container position-relative px-5 px-lg-6">
          <div className="row gx-5 gx-lg-6 justify-content-center">
            <div className="col-md-12 col-lg-12 col-xl-10">
              <div className="site-heading">
                <h1>Ergotherapie im Waldviertel</h1>
                <span className="subheading">„Das höchste Ziel der Ergotherapie ist handlungsfähig zu sein – und dieser Grund
                  bewegt mich, Ergotherapie als meine Berufung anzusehen.“</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>

        <About></About>

        <SpecilaziedFields></SpecilaziedFields>

        <Rota></Rota>

        <InterestingFacts></InterestingFacts>

        <Contact></Contact>

      </main>

      <footer className={styles.footer}>
        Copyright{' '}
        <span className={styles.logo}>
          &copy; Waldviertel Therapie 2021
        </span>
      </footer>
    </div>
  )
}

export default Home
