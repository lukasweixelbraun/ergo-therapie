import { NextPage } from "next";
import styles from '../styles/InterestingFacts.module.scss'

const InterestingFacts: NextPage = () => {
  return (
    <div id="good-to-know" className="page full-page row gx-4 gx-lg-5 justify-content-center">
      <div className="col-md-10 col-lg-9 col-xl-8">
        <h2>Wissenswertes</h2>
        <p>Für die Ergotherapie ist eine ärztliche Verordnung nötig. Diese sollte wie folgt ausgestellt sein:</p>
        <p>10x Ergotherapie à 45 Minuten (bei orthopädischem Schwerpunkt à 30 Minuten – gegebenenfalls mit
          Hausbesuche) bei Madlen Weixelbraun.</p>
        <p>
          Ich biete Ergotherapie als Wahltherapeutin in eigenen Praxis an. Auf Anfrage sind auch Hausbesuche möglich. Um
          seitens der Krankenkasse einen Kostenersatz beantragen zu können, ist es nötig, die Verordnung vor
          Behandlungsbeginn gemeinsam mit einem von mir erstellten Behandlungsplan einzureichen.
        </p>
        <p>Die Höhe der Refundierung richtet sich nach den Tarifen der jeweiligen Krankenkasse.</p>

        <h3 className="heading">Termin verschieben oder absagen</h3>
        <p>Ich bitte Sie rechtzeitig mindestens 24 Stunden im Vorhinein den Termin bei Bedarf per Anruf oder SMS
          abzusagen oder zu verschieben. Dann kann ich diesen Termin noch anderweitig vergeben. In manchen Fällen ist
          eine fristgerechte Absage nicht möglich und dafür habe ich Verständnis. Ab dem 2. unentschuldigten Termin muss
          ich aber die Kosten der Therapie/Beratung privat in Rechnung stellen.
        </p>

        <h3 className="heading">Tarife</h3>
        <h4>Ergotherapie: </h4>
        <ul>
          <li>á 45 Minuten -</li>
          <li>á 30 Minuten -</li>
        </ul>

        <h4>Hausbesuchspauschale: </h4>
        <ul>
          <li>25€</li>
          <li>+ Kilometergeld (0,42€ bis max. 25 Kilometer)</li>
        </ul>

        <h4>Workshops: </h4>
        <ul>
          <li>Auf Anfrage</li>
          <li>Babymassagekurs und Demenzgruppe ab 4 Eltern und Kindpaare</li>
        </ul>
      </div>
    </div>
  )
}

export default InterestingFacts