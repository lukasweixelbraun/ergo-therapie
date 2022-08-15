import { NextPage } from "next";
import styles from '../styles/InterestingFacts.module.scss'

const InterestingFacts: NextPage = () => {
  return (
    <div id="good-to-know" className="page full-page row gx-4 gx-lg-5 justify-content-center border-bottom">
      <div className="col-md-10 col-lg-9 col-xl-8">
        <h2 className="headline">Wissenswertes</h2>

        <h3 className="heading">Generelle Terminvereinbarung</h3>
        <p>Für die Ergotherapie ist eine ärztliche Verordnung nötig. Diese sollte wie folgt ausgestellt sein:</p>
        <p>10x Ergotherapie à 45 Minuten (bei orthopädischem Schwerpunkt à 30 Minuten – gegebenenfalls mit
          Hausbesuchen) bei Madlen Weixelbraun.</p>
        <p>
          Ich biete Ergotherapie als Vertragstherapeutin in eigener Praxis an. Auf Anfrage sind auch Hausbesuche möglich. 
          Nachdem ich im Bezirk Horn Vertragstherapeutin der ÖGK, SVS & BVAEB bin, sowie im Bezirk Gmünd der ÖGK, rechne ich direkt mit den Kassen ab und somit entstehen keine Kosten.
          <br />
          Um mit der Therapie beginnen zu können, ist es nötig, die Verordnung vor
          Behandlungsbeginn bei der jeweiligen Krankenkasse bewilligen zu lassen und nach der Behandlung einzureichen.
        </p>

        <h3 className="heading mt-5">Termin verschieben oder absagen</h3>
        <p>Ich bitte Sie rechtzeitig, mindestens 24 Stunden im Vorhinein, den Termin bei Bedarf per Anruf oder SMS
          abzusagen oder zu verschieben. Dann kann ich diesen Termin noch anderweitig vergeben. In manchen Fällen ist
          eine fristgerechte Absage nicht möglich und dafür habe ich Verständnis. Ab dem 2. unentschuldigten Termin muss
          ich die Kosten der Therapie/Beratung privat in Rechnung stellen.
        </p>

        <h3 className="heading mt-5">Tarife</h3>
        <p><i>wird mit den jeweiligen Krankenkassen abgerechnet</i></p>

        <h4 className="mt-3">Workshops: </h4>
        <ul>
          <li>Auf Anfrage</li>
          <li>Babymassagekurs und Demenzgruppe ab 4 Eltern und Kindpaare</li>
        </ul>
      </div>
    </div>
  )
}

export default InterestingFacts