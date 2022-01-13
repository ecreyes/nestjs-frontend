import type { NextPage } from 'next'
import Head from 'next/head'
import MainLayout from '../layouts/MainLayout'

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <h1>Home</h1>
      </MainLayout>
    </>
  )
}

export default Home
