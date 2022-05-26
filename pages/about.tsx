import { NextPage } from "next";
import styles from '../styles/About.module.scss'

const About: NextPage = () => {
  return (
    <div id="about-me" className={styles.logo}>
      <div className="col-md-10 col-lg-8 col-xl-7">
        <div className="container">
          <h2>Über mich</h2>
          <p>Mein Name ist Madlen Weixelbraun und ich bin freiberufliche Ergotherapeutin in Hirschbach im Bezirk Gmünd.
            Ich arbeite vor allem mit Kindern, Säuglingen und PatientInnen mit orthopädischen, rheumatischen,
            handchirurgischen und neurologischen Krankheitsbildern.
          </p>

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
                <td>Master Studium "Angewandte Gesundheitswissenschaften" an der IMC FH Krems</td>
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
    
      <div id="therapy" className="page row fill-row">
        <div className="container">
          <h3 className="heading">Wann können Sie zu mir kommen?</h3>

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

          <div className="card therapy-card">
            <div className="card-body">
              <h5 className="card-title">bei orthopädischen Problematiken</h5>
              <ul>
                <li>Beschwerden der Wirbelsäule (Schmerzen, Bandscheibenvorfall, Cervicalsyndrom)</li>
                <li>nach Operationen</li>
              </ul>
            </div>
          </div>

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

          <div className="card therapy-card">
            <div className="card-body">
              <h5 className="card-title">Burn Out</h5>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About