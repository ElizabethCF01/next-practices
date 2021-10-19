import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Layout from './components/Layout'

export default function Home() {
  return (
    <Layout>
        <Image 
        className={styles.landingImage}
        layout="fill"
        src="/images/2.jpg" 
        objectFit='cover'
        objectPosition='center'
        property='true'
        />
      </Layout>
  )
}
