import { NextPage } from "next";
import Image from 'next/image'
import styles from '../styles/About.module.scss'

const About: NextPage = () => {
  return (
    <div id="about-me" className="page full-page row gx-4 gx-lg-5 justify-content-center">
      <div className="col-md-10 col-lg-9 col-xl-8">
        <div className="container">

          <h2>Über mich</h2>
          <div className="about-me-container">
            <div className="img-about-me">
              <Image src="/aboutMe.jpeg" alt="About me Portrait" width={450} height={675} />
            </div>

            <p className="txt-about-me">Mein Name ist Madlen Weixelbraun und ich bin freiberufliche Ergotherapeutin in Hirschbach im Bezirk Gmünd.
              Ich arbeite vor allem mit Kindern, Säuglingen und PatientInnen mit orthopädischen, rheumatischen,
              handchirurgischen und neurologischen Krankheitsbildern.
            </p>
          </div>

          <div className="werdegang-container">
            <h3 className="heading">Beruflicher Werdegang</h3>
            <table>
              <tbody>
                <tr>
                  <td><b>2021</b></td>
                  <td>Moorheilbad Harbach</td>
                </tr>
                <tr>
                  <td><b>2018 - 2021</b></td>
                  <td>Pychosomatisches Zentrum Waldviertel - Rehabilitationsklinik für Psychische Gesundheit</td>
                </tr>
                <tr>
                  <td><b>2018 - 2020</b></td>
                  <td>Master Studium &quot;Angewandte Gesundheitswissenschaften&ldquo; an der IMC FH Krems</td>
                </tr>
                <tr>
                  <td><b>2019</b></td>
                  <td>Start in die Freiberuflichkeit</td>
                </tr>
                <tr>
                  <td><b>2015 - 2018</b></td>
                  <td>Ergotherapie Studium an der IMC FH Krems</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="fortbildung-container">
            <h3 className="heading">Forbildungen</h3>
            <table>
              <tbody>
                <tr>
                  <td><b>2021 / 2022</b></td>
                  <td>Rota Therapie Säuglingskurs Aufbau</td>
                </tr>
                <tr>
                  <td><b>2021</b></td>
                  <td>Rota Therapie</td>
                </tr>
                <tr>
                  <td><b>2021</b></td>
                  <td>Handtherapie Grund- und Aufbaukurs</td>
                </tr>
                <tr>
                  <td><b>2020</b></td>
                  <td>Spiraldynamik Lehrgang Basic Med</td>
                </tr>
                <tr>
                  <td><b>2017</b></td>
                  <td>K-Taping Therapie Kurs</td>
                </tr>
              </tbody>
            </table>
          </div>
          
        </div>
      </div>
    
      <div id="therapy" className="page therapy-page row fill-row">
        <div className="container">
          <h3 className="heading">Wann können Sie zu mir kommen?</h3>
        </div>
        <div id="therapyCarousel" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#therapyCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Hand und Finger Problematiken"></button>
            <button type="button" data-bs-target="#therapyCarousel" data-bs-slide-to="1" aria-label="orthopädischen Problematiken"></button>
            <button type="button" data-bs-target="#therapyCarousel" data-bs-slide-to="2" aria-label="neurologischen Problematiken"></button>
            <button type="button" data-bs-target="#therapyCarousel" data-bs-slide-to="3" aria-label="Spannungs- oder Schmerzzuständen"></button>
            <button type="button" data-bs-target="#therapyCarousel" data-bs-slide-to="4" aria-label="Babys und Kindern"></button>
            <button type="button" data-bs-target="#therapyCarousel" data-bs-slide-to="5" aria-label="Burn Out"></button>
          </div>

          <div className="carousel-inner">

            <div className="carousel-item active" data-bs-interval="4000">
              <div className="therapy-item">
                <Image src="/hand.jpeg" alt="Hand und Finger Problematiken" width={280} height={420} />
                <div className="card therapy-card">
                  <div className="card-body">
                    <h5 className="card-title">bei Hand und Finger Problematiken</h5>
                    <ul>
                      <li>nach Verletzungen (der Sehnen, Nerven oder Gelenke, Amputationen, Brüche)</li>
                      <li>nach Operationen</li>
                      <li>Carpaltunnelsyndrom</li>
                      <li>Morbus Dupuytren</li>
                      <li>Arthrosen/Arthritis</li>
                      <li>Rheuma</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="6000">
              <div className="therapy-item">
                <Image src="/hand2.jpeg" alt="orthopädischen Problematiken" width={420} height={280} />
                <div className="card therapy-card">
                  <div className="card-body">
                    <h5 className="card-title">bei orthopädischen Problematiken</h5>
                    <ul>
                      <li>Beschwerden der Wirbelsäule (Schmerzen, Bandscheibenvorfall, Cervicalsyndrom)</li>
                      <li>nach Operationen</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="6000">
              <div className="therapy-item">
                <div className="card therapy-card">
                  <div className="card-body">
                    <h5 className="card-title">bei neurologischen Problematiken</h5>
                    <ul>
                      <li>nach Operationen</li>
                      <li>Morbus Parkinson</li>
                      <li>Schädel-Hirn-Trauma</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="6000">
              <div className="therapy-item">
                <Image src="/narbe.jpeg" alt="Spannungs- oder Schmerzzuständen" width={280} height={420} />
                <div className="card therapy-card">
                  <div className="card-body">
                    <h5 className="card-title">bei Spannungs- oder Schmerzzuständen</h5>
                    <ul>
                      <li>Kopfschmerzen/Migräne</li>
                      <li>Schwindel</li>
                      <li>Narben (auch nach Kaiserschnitt/Dammschnitt)</li>
                      <li>Muskelverspannungen</li>
                      <li>Muskelverspannungen</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="6000">
              <div className="therapy-item">
                <Image src="/baby.jpeg" alt="Babys und Kindern" width={280} height={420} />
                <div className="card therapy-card">
                  <div className="card-body">
                    <h5 className="card-title">mit Babys und Kindern</h5>
                    <ul>
                      <li>mit Schwächen in Konzentration, Ausdauer, Frustrationstoleranz</li>
                      <li>Wahrnehmungsstörungen</li>
                      <li>Entwicklungsverzögerungen</li>
                      <li>Regulationsproblemen (Schreibaby, Blähungen, Geburtstrauma,.)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="6000">
              <div className="therapy-item">
                <div className="card therapy-card">
                  <div className="card-body">
                    <h5 className="card-title">Burn Out</h5>
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