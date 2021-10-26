import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hider from '../components/hider.js'
import Script from "next/script";
import { useEffect, useState } from 'react';
import useSWR from 'swr';

//const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const [videoVisability, setVideoVisablity] = useState(true);

  const foobar = "test"

const hideVideo = () =>{
  setVideoVisablity(false)
}

//const {data, error} = useSWR("https://api.coindesk.com/v1/bpi/currentprice.json", fetcher, {refreshInterval: 3000});

//console.log({data})

useEffect(() => {
    setVideoVisablity(true)
}, [])

  return (
    <div className="max-w-7xl mx-auto">

      {/* <Hider>
      <h1 className="text-center font-serif text-7xl">hello world</h1>
      <p>{videoVisability ? "foobar" : "closed"}</p>
      <p className="font-mono text-center text-7xl">{data?.bpi['USD'].rate}</p>
      </Hider> */}

      <video autoPlay muted onEnded={() => hideVideo()} id="myDIV" className={videoVisability ? "block w-screen" : "hidden"} >
        <source src='lexvideo.mp4' type='video/mp4' />
      </video>

    </div>
  )
}
