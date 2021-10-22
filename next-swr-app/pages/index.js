import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <video autoPlay muted className='w-full h-screen z-10'>
        <source src='lexvideo.mp4' type='video/mp4' />
      </video>
    </div>
  )
}
