import React, { useState } from 'react'
import styles from './sideNavBar.module.scss'
import {AiOutlineBars} from 'react-icons/ai'
import {CgClose} from 'react-icons/cg'
import Link from 'next/link'
import { useRouter } from 'next/router';
const SideNavBar = () => {
  const[navOpen, setNavOpen] = useState(false);
  
  const router = useRouter();
  const isArtist = router.pathname.startsWith('/artist');
  return (
    <div className={styles.sideNavBar}>
      <div className={styles.navButtonArea}>
        {!navOpen?<AiOutlineBars  className={styles.navButton} onClick={()=>setNavOpen(true)}/>:<CgClose  className={styles.navButton} onClick={()=>setNavOpen(false)}/>}
      </div>
     {navOpen && <div className={styles.navArea}>
          <Link href="/">
              <div className={`${styles.link} ${router.pathname == "/" ? styles.active : ""}`}>Home</div>
          </Link>

          <Link href="/artists">
              <div className={`${styles.link} ${isArtist ? styles.active : ""}`}>Artists</div>
          </Link>

          <Link href="/about">
              <div className={`${styles.link} ${router.pathname == "/about" ? styles.active : ""}`}>About</div>
          </Link>

          <Link href="/community">
              <div className={`${styles.link} ${router.pathname == "/community" ? styles.active : ""}`}>Community</div>
          </Link>
      </div>}
      {navOpen && <div className={styles.navAreaBack} onClick={()=>setNavOpen(false)} ></div>}
      
        
      <div className={styles.logo}>Gallery</div>  

    </div>
  )
}

export default SideNavBar