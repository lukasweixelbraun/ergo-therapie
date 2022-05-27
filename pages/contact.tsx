import { NextPage } from "next";
import Image from 'next/image'
import styles from '../styles/Contact.module.scss'

const Contact: NextPage = () => {
  return (
    <div>
      <Image src="/portrait.jpeg" alt="Portrait" width={360} height={480} />
      <div id="contact" className="page full-page row gx-4 gx-lg-5 justify-content-center">
        <div className="col-md-10 col-lg-9 col-xl-8">
          <h2>Kontakt</h2>
          <h4>Telefon</h4>
          <p>0660/ 6886650 (Terminvergabe Donnerstag, 17 bis 19 Uhr)</p>
          <h4>Email</h4>
          <p>mail@w4tel-therapie.at <a href="mailto:mail@w4tel-therapie.at">Sende eine E-Mail</a></p>
          <h4>Parxis</h4>
          <p>---</p>
        </div>
      </div>
    </div>
  )
}

export default Contact