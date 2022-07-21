import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { SideBar } from '../components/SideBar/Sidebar'

const Home=()=> {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <SideBar />
      {/* center */}
      </main>

      <div> {/* player */} </div>
    </div>
  )
}

export default Home
 