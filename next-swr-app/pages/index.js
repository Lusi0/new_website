import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <div className={styles.container}>
      <video autoPlay muted className='width:100% height:100%'>
        <source src='lexvideo.mp4' type='video/mp4' />
      </video>

      <div id="myNav" class="overlay">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>


        <div class="overlay-content">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>

      </div>


      <span onclick="openNav()">open</span>
    </div>
  )
}
