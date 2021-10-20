import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  const { posts, error } = useGetPosts("/posts")
  return (

    <div className={styles.container}>
      
    </div>
  )
}
