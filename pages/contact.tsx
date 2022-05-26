import { NextPage } from "next";
import styles from '../styles/Contact.module.scss'

const Contact: NextPage = () => {
  return (
    <div id="contact" className="page full-page row gx-4 gx-lg-5 justify-content-center">
      <div className="col-md-10 col-lg-8 col-xl-7">
        <h2>Kontakt</h2>
        <h4>Telefon</h4>
        <p>0660/ 6886650 (Terminvergabe Donnerstag, 17 bis 19 Uhr)</p>
        <h4>Email</h4>
        <p>mail@w4tel-therapie.at <a href="mailto:mail@w4tel-therapie.at">Sende eine E-Mail</a></p>
        <h4>Parxis</h4>
        <p>---</p>
      </div>
    </div>
  )
}

export default Contact