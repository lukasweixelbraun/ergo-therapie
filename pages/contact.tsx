import { NextPage } from "next";
import Image from 'next/image'
import styles from '../styles/Contact.module.scss'

const Contact: NextPage = () => {
  return (
    <div id="contact" className="page full-page row gx-4 gx-lg-5 justify-content-center">
      <div className="generic-block">
        <div className="left">
          <h2 className="headline">Kontakt</h2>

          <h4>Telefon</h4>
          <p>0677 / 64404774</p>

          <h4>Email</h4>
          <p><a href="mailto:mail@w4tel-therapie.at">Sende eine E-Mail</a> an mail@w4tel-therapie.at</p>

          <h4>Praxis</h4>
          <ul>
            <li>Josef-Strommer-Straße 24, 3580 Horn</li>
            <li>Breinleiten 18, 3950 Gmünd - Großeibenstein</li>
          </ul>
        </div>

        <div className="right">
          <picture>
            <source srcSet="/rendered/portrait.webp" type="image/webp" />
            <source srcSet="/rendered/portrait.jpg" type="image/jpeg" /> 
            <img src="/rendered/portrait.jpg" alt="Portrait" loading="lazy" height={480} />
          </picture>
        </div>
      </div>
    </div>
  )
}

export default Contact