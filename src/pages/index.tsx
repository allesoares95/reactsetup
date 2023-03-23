import React from 'react'

import Head from 'next/head'
import LogoTestNext from '../assets/icons-next.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <main >
        <LogoTestNext />
        <h1>test...</h1>
      </main>
    </Container>
  )
}

export default Home
