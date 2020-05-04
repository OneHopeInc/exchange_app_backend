import React from 'react'
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom'
import Pills from '../pills'
import styles from './profileCard.module.scss'
import LocationIcon from '../../assets/images/icons/location.svg'

export default function ProfileCard(props) {
  return (
    <div className={styles.profileBorder}>
      <div className={styles.row}>
        <div className={styles.photoHolder}></div>
        <div className={styles.textHolder}>
          <h3>Liam Savage</h3>
          <h5 className={styles.smallText_username}>@liam.s</h5>
          <div className={styles.locationContainer}>
            <img src={LocationIcon} className={styles.locationIcon} />
            <h6 className={styles.smallText_location}>Fort Laudadale</h6>
          </div>
        </div>
      </div>
      <div className={styles.paragraphRow}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim
          vitae ex nec feugiat. Proin diam tellus, rhoncus eget erat ut,
          ullamcorper pellentesque ipsum. Vivamus lacinia lobortis felis, sit
          amet tempus urna vestibulum ac. Morbi orci tellus, rutrum id velit
          vitae, rutrum sagittis risus. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas.
        </p>
      </div>
      <div className={styles.footerRow}>
        <Pills btn_style="btnxSmall" text="UX/UI" />
        <Pills btn_style="btnxSmall" text="Evangelism" />
        <Pills btn_style="btnxSmall" text="Design" />
      </div>
    </div>
  )
}
