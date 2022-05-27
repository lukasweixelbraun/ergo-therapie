import { NextPage } from "next";
import Image from 'next/image'
import styles from '../styles/Rota.module.scss'

const Rota: NextPage = () => {
  return (
    <div id="rota" className="page full-page row gx-4 gx-lg-5 justify-content-center">
      <div className="col-md-10 col-lg-9 col-xl-8">
        <h2>Rota® Therapie</h2>
        <Image src="/rota.jpeg" alt="Rota Therapie" width={500} height={200} />
        <p>
          Durch Körperübungen, die eine Rotation der Wirbelsäule, als auch Rotation des Körpers um seine Achsen im Raum
          beinhalten, wird das Gehirn angeregt, die Körperspannung optimal zu regulieren. Verspannungen, die durch
          verborgen noch aktive Restreflexe aus der frühen Kindheit entstehen, werden gelöst. Impulse zur Verbesserung
          der Mundmotorik und Wahrnehmung unterstützen wesentlich die positive und ausgleichende Wirkung für eine gute
          sensomotorische Entwicklung. Die Arbeits-, Schul- und Freizeitgestaltung wird so angepasst, dass sich
          vorhandene Symptome, Konzentrationsschwächen oder Beeinträchtigungen verbessern. Im motorischen als auch
          vegetativen System: Essen, Schlafen, Verdauung.
          (Rota Therapie, 2021)
        </p>

        <h3 className="heading">Für wen ist diese Therapieform?</h3>
        <p>
          Durch Körperübungen, die eine Rotation der Wirbelsäule, als auch Rotation des Körpers um seine Achsen im Raum
          beinhalten, wird das Gehirn angeregt, die Körperspannung optimal zu regulieren. Verspannungen, die durch
          verborgen noch aktive Restreflexe aus der frühen Kindheit entstehen, werden gelöst. Impulse zur Verbesserung
          der Mundmotorik und Wahrnehmung unterstützen wesentlich die positive und ausgleichende Wirkung für eine gute
          sensomotorische Entwicklung. Die Arbeits-, Schul- und Freizeitgestaltung wird so angepasst, dass sich
          vorhandene Symptome, Konzentrationsschwächen oder Beeinträchtigungen verbessern. Im motorischen als auch
          vegetativen System: Essen, Schlafen, Verdauung.
          (Rota Therapie, 2021)
        </p>

        <h3 className="heading">Die Besonderheiten</h3>
        <ul>
          <li>Ein individuelles und abgestimmtes Übungsprogramm für Zuhause</li>
          <li>Einschließlich Impulse für den Mund</li>
        </ul>
      </div>
    </div>
  )
}

export default Rota