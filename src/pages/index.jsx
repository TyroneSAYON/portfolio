import Head from 'next/head'
import Navigation from '../components/Navigation'
import Landing from './Landing'
import Skills from './Skills'
import Projects from './Projects'
import Stories from './Stories'
import Contact from './Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tyrone Sayon | Graphic Designer</title>
        <meta name="description" content="Portfolio of Tyrone Sayon, Graphic Designer and UI/UX Designer." />
        <link rel="icon" href="/profilepic.png" />
      </Head>
      <Navigation />
      <main>
        <Landing />
        <Skills />
        <Projects />
        <Stories />
        <Contact />
      </main>
    </>
  )
}
