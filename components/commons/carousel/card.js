import React from 'react'
import styles from './carousel.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({data,className}) => {
  return (
    <div className={`${styles.card} ${className!=null?className:''}`}>
      <Link  href={data.link} className={styles.link}>
        <Image  className={styles.image} src={data.image}/>
      </Link>
      <div className={styles.artistNameArea}>
        <div className={styles.artistName} >{data.artistName}</div>  
      </div>  
    </div>
  )
}

export default Card