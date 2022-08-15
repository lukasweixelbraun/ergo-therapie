import { NextPage } from "next";
import Image from 'next/image'
import styles from '../styles/Rota.module.scss'

const Rota: NextPage = () => {
  return (
    <div id="rota" className="page full-page row gx-4 gx-lg-5 justify-content-center border-bottom">
      <div className="col-md-10 col-lg-9 col-xl-8">
        <div className="flex">
          <h2 className="headline">Rota® Therapie</h2>

          <Image src="/rendered/rota.jpg" alt="Rota Therapie" loading="lazy" height={150} width={381}></Image>
          
        </div>
        
        <p>
          Durch Körperübungen, die eine Rotation der Wirbelsäule, als auch Rotation des Körpers um seine Achsen im Raum
          beinhalten, wird das Gehirn angeregt, die Körperspannung optimal zu regulieren. Verspannungen, die durch
          verborgene noch aktive Restreflexe aus der frühen Kindheit entstehen, werden gelöst. Impulse zur Verbesserung
          der Mundmotorik und Wahrnehmung unterstützen wesentlich die positive und ausgleichende Wirkung für eine gute
          sensomotorische Entwicklung. Die Arbeits-, Schul- und Freizeitgestaltung wird so angepasst, dass sich
          vorhandene Symptome, Konzentrationsschwächen oder Beeinträchtigungen verbessern, sowohl im motorischen als auch
          vegetativen System: Essen, Schlafen, Verdauung.
          (Rota Therapie, 2022)
        </p>

        <h3 className="heading mt-5">Für wen ist diese Therapieform?</h3>
        <p>
          Die Rota-Therapie kann grundsätzlich in jedem Alter und bei unterschiedlichsten Belastungen geeignet sein. 
          Mit einem individuellen Übungsprogramm wird das Vorgehen in einzelnen Sitzungen angeleitet und die Alltagsgestaltung 
          besprochen und adaptiert. Daher können Eltern, Angehörige oder die PatientInnen selbst die Prinzipien der 
          Rota-Therapie erlernen und diese täglich anwenden. Zusätzlich ist es perfekt als Prophylaxe geeignet. 
        </p>

        <p>
          Bei Säuglingen und kleinen Kindern werden die Übungen auf dem Schoß ausgeführt, größere Kinder und Erwachsene üben 
          auf dem Boden oder im Bett. Eine Rota-Position eignet sich sogar als Schlafposition und wirkt sich 
          positiv auf unser Zentralnervensystem aus.
        </p>

        <p>
          Die Gemeinsamkeit der Probleme ist die Tonusregulation – darauf kann die Rota-Therapie guten Einfluss nehmen. 
          Bei vielen Krankheitsbildern ist die zentral gesteuerte Basis der Körperspannung nicht optimal reguliert. 
        </p>

        <h3 className="heading mt-5">Mögliche Einsatzgebiete der Rota-Therapie</h3>
        <ul>
          <li>Zentrale Koordinationsstörung</li>
          <li>Frühgeborene</li>
          <li>Risikokinder</li>
          <li>Schreibabys</li>
          <li>Saug- und Stillprobleme</li>
          <li>Entwicklungsverzögerung</li>
          <li>Genetische Besonderheiten
            <ul>
              <li>Down Syndrom</li>
            </ul>
          </li>
          
          <li>Autismus</li>
          <li>Wahrnehmungsstörungen</li>
          <li>Konzentrations- und Lernstörungen</li>
          <li>AD(H)S</li>
          <li>Skoliose und Wirbelsäulenbeschwerden</li>
          <li>Hüftdysplasien und -luxationen</li>
          <li>Fußfehlstellungen</li>
          <li>Neurologische Krankheitsbilder
            <ul>
              <li>Parkinson</li>
              <li>MS</li>
              <li>Schlaganfall</li>
            </ul>
          </li>
          <li>Spastische Bedrohung und/oder Behinderung</li>
        </ul>

        <h3 className="heading mt-5">Die Besonderheiten</h3>
        <ul>
          <li>Ein individuelles und abgestimmtes Übungsprogramm für Zuhause</li>
          <li>Einschließlich Impulse für den Mund</li>
        </ul>
      </div>
    </div>
  )
}

export default Rota