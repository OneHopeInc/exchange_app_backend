import React from 'react'
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom'
import Pills from '../pills'
import styles from './leftProfile.module.scss'
import logo from '../../assets/images/indigitous.svg'
import LocationIcon from '../../assets/images/icons/location.svg'
import SettingsIcon from '../../assets/images/icons/settings.svg'

export default function LeftProfile() {
  return (
    <div className={styles.profileContainer}>
      {/* <img src={SettingsIcon} className={styles.settingsIcon} /> */}

      <div className={styles.logoContainer}>
        <img src={logo} className={styles.logo} />
      </div>
      <div className={styles.column}>
        <div className={styles.photoHolder}></div>
        <div className={styles.textHolder}>
          <h3>Liam Savage</h3>
          <h5 className={styles.smallText}>@liam.s</h5>
        </div>
        <div className={styles.row}>
          <div className={styles.stats}>
            100 <div>Connections</div>
          </div>
          <div className={styles.stats}>
            6 <div>Projects</div>
          </div>
        </div>
      </div>
      <div className={styles.paragraphRow}>
        <div className={styles.locationContainer}>
          <img src={LocationIcon} className={styles.locationIcon} />
          <h6 className={styles.smallText_location}>Fort Laudadale</h6>
        </div>

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
