import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import hiding from '../components/hider.js'
import Script from "next/script";


export default function Home() {
  return (
    <div className={styles.container}>

      <Script type="text/javascript" src="hider.js">

      <video autoPlay muted onended="myFunction()" id="myDIV" className='width:100% height:100%'>
        <source src='lexvideo.mp4' type='video/mp4' />
      </video>

    </div>
  )
}
