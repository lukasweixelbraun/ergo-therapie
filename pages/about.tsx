import { NextPage } from "next";
import Image from 'next/image'
import styles from '../styles/About.module.scss'

const About: NextPage = () => {
  return (
    <div id="about-me" className="page full-page row gx-4 gx-lg-5 justify-content-center">
      <div className="col-md-10 col-lg-9 col-xl-8">
        <div className="container">

          <div className="generic-block">
            <div className="left">
              <h2 className="headline">Über mich</h2>

              <p className="txt-about-me">Mein Name ist Madlen Weixelbraun und ich bin <b>Vertragstherapeutin</b> im Bezirk Horn und Gmünd. <br />
                <br />
                Ich arbeite vor allem mit Kindern, Säuglingen und PatientInnen mit orthopädischen, rheumatischen,
                handchirurgischen und neurologischen Krankheitsbildern.
              </p>
            </div>

            <div className="right">
              <picture>
                <source srcSet="/rendered/aboutMe.webp" type="image/webp" />
                <source srcSet="/rendered/aboutMe.jpg" type="image/jpeg" /> 
                <img src="/rendered/aboutMe.jpg" alt="About me Portrait" loading="lazy" height={675} />
              </picture>
            </div>
          </div>
          
          <div className="werdegang-container mt-5">
            <h3 className="heading">Beruflicher Werdegang</h3>
            <table>
              <tbody>
                <tr>
                  <td className="year"><b>2022</b></td>
                  <td>Kassenvertrag im Bezirk Horn (ÖGK, SVS & BVAEB)</td>
                </tr>
                <tr>
                  <td className="year"><b>2021 - 2022</b></td>
                  <td>Moorheilbad Harbach</td>
                </tr>
                <tr>
                  <td className="year"><b>2018 - 2021</b></td>
                  <td>Pychosomatisches Zentrum Waldviertel - Rehabilitationsklinik für Psychische Gesundheit</td>
                </tr>
                <tr>
                  <td className="year"><b>2018 - 2020</b></td>
                  <td>Master Studium &quot;Angewandte Gesundheitswissenschaften&ldquo; an der IMC FH Krems</td>
                </tr>
                <tr>
                  <td className="year"><b>2019</b></td>
                  <td>Start in die Freiberuflichkeit</td>
                </tr>
                <tr>
                  <td className="year"><b>2015 - 2018</b></td>
                  <td>Ergotherapie Studium an der IMC FH Krems</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="fortbildung-container mt-5">
            <h3 className="heading">Fortbildungen</h3>
            <table>
              <tbody>
                <tr>
                  <td className="year"><b>2021 / 2022</b></td>
                  <td>Rota Therapie Säuglingskurs Aufbau</td>
                </tr>
                <tr>
                  <td className="year"><b>2021</b></td>
                  <td>Rota Therapie</td>
                </tr>
                <tr>
                  <td className="year"><b>2021</b></td>
                  <td>Handtherapie Grund- und Aufbaukurs</td>
                </tr>
                <tr>
                  <td className="year"><b>2020</b></td>
                  <td>Spiraldynamik Lehrgang Basic Med</td>
                </tr>
                <tr>
                  <td className="year"><b>2017</b></td>
                  <td>K-Taping Therapie Kurs</td>
                </tr>
              </tbody>
            </table>
          </div>
          
        </div>
      </div>
    
      <div id="therapy" className="page therapy-page row fill-row">
        <div className="container">
          <h3 className="heading">Ergotherapeutische Maßnahmen</h3>
        </div>
        
        <div id="therapyCarousel" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#therapyCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Feinmotoriktraining"></button>
            <button type="button" data-bs-target="#therapyCarousel" data-bs-slide-to="1" aria-label="Maßnahmen zur Verbesserung der Beweglichkeit"></button>
            <button type="button" data-bs-target="#therapyCarousel" data-bs-slide-to="2" aria-label="Narbenbehandlung"></button>
            <button type="button" data-bs-target="#therapyCarousel" data-bs-slide-to="3" aria-label="Krafttraining"></button>
            <button type="button" data-bs-target="#therapyCarousel" data-bs-slide-to="4" aria-label="Sensibilitätstraining"></button>
            <button type="button" data-bs-target="#therapyCarousel" data-bs-slide-to="5" aria-label="Rotatherapie"></button>
          </div>

          <div className="carousel-inner">

            <div className="carousel-item active" data-bs-interval="6000">
              <div className="therapy-item">
                <div className="card mb-3 therapy-card">
                  <picture>
                    <source srcSet="/rendered/feinmotorik.webp" type="image/webp" />
                    <source srcSet="/rendered/feinmotorik.jpg" type="image/jpeg" /> 
                    <img src="/rendered/feinmotorik.jpg" alt="Feinmotoriktraining" loading="lazy" height={420} />
                  </picture>
                  
                  <div className="card-body">
                    <h5 className="card-title center">Feinmotoriktraining</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="6000">
              <div className="therapy-item">
                <div className="card mb-3 therapy-card">
                  <picture>
                    <source srcSet="/rendered/beweglichkeit.webp" type="image/webp" />
                    <source srcSet="/rendered/beweglichkeit.jpg" type="image/jpeg" /> 
                    <img src="/rendered/beweglichkeit.jpg" alt="Maßnahmen zur Verbesserung der Beweglichkeit" loading="lazy" height={420} />
                  </picture>

                  <div className="card-body">
                    <h5 className="card-title center">Maßnahmen zur Verbesserung der Beweglichkeit</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="6000">
              <div className="therapy-item">
                <div className="card mb-3 therapy-card">
                  <picture>
                    <source srcSet="/rendered/narbe.webp" type="image/webp" />
                    <source srcSet="/rendered/narbe.jpg" type="image/jpeg" /> 
                    <img src="/rendered/narbe.jpg" alt="Narbenbehandlung" loading="lazy" height={420} />
                  </picture>

                  <div className="card-body">
                    <h5 className="card-title center">Narbenbehandlung</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="6000">
              <div className="therapy-item">
                <div className="card mb-3 therapy-card">
                  <picture>
                    <source srcSet="/rendered/krafttraining.webp" type="image/webp" />
                    <source srcSet="/rendered/krafttraining.jpg" type="image/jpeg" /> 
                    <img src="/rendered/krafttraining.jpg" alt="Krafttraining" loading="lazy" height={460} />
                  </picture>

                  <div className="card-body">
                    <h5 className="card-title center">Krafttraining</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="6000">
              <div className="therapy-item">
                <div className="card mb-3 therapy-card">
                  <picture>
                    <source srcSet="/rendered/sensibilitaet.webp" type="image/webp" />
                    <source srcSet="/rendered/sensibilitaet.jpg" type="image/jpeg" /> 
                    <img src="/rendered/sensibilitaet.jpg" alt="Sensibilitätstraining" loading="lazy" height={420} />
                  </picture>

                  <div className="card-body">
                    <h5 className="card-title center">Sensibilitätstraining</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="6000">
              <div className="therapy-item">
                <div className="card mb-3 therapy-card">
                  <picture>
                    <source srcSet="/rendered/babyrota.webp" type="image/webp" />
                    <source srcSet="/rendered/babyrota.jpg" type="image/jpeg" /> 
                    <img src="/rendered/babyrota.jpg" alt="Rotatherapie" loading="lazy" height={460} />
                  </picture>

                  <div className="card-body">
                    <h5 className="card-title center">Rotatherapie</h5>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#therapyCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#therapyCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>
    </div>
  )
}

export default About