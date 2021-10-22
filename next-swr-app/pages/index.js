import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <div className={styles.container}>
      <video autoPlay muted className='width:100% height:100%'>
        <source src='lexvideo.mp4' type='video/mp4' />
      </video>

      
  )
}
