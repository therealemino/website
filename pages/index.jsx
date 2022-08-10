import React, { useState,useRef,useEffect } from 'react';
import Head from 'next/head'
import Jumbotron from "../components/Jumbotron";
import About from '../components/About';
import Resume from '../components/Resume/Resume';
import Portfolio from '../components/Portfolio/Portfolio';
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({
      disable: 'mobile'
    })
  })
  const [darkMode, setDarkMode] = useState(false);

  function changeDarkMode() {
    const root = document.documentElement
    root.classList.toggle('dark')
  }


  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Ejei-Okeke Emmanuel. Personal Profile</title>
        <meta name="title" content="Ejei-Okeke Emmanuel. Personal Profile" />
        <meta name="description" content="Personal profile of Ejei-Okeke Emmanuel. Created using react" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ejeiokekeemmanuel.dev/" />
        <meta property="og:title" content="Ejei-Okeke Emmanuel. Personal Profile" />
        <meta property="og:description" content="Personal profile of Ejei-Okeke Emmanuel. Created using react" />
        <meta property="og:image" content="/emino-image.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ejeiokekeemmanuel.dev/" />
        <meta property="twitter:title" content="Ejei-Okeke Emmanuel. Personal Profile" />
        <meta property="twitter:description" content="Personal profile of Ejei-Okeke Emmanuel. Created using react" />
        <meta property="twitter:image" content="/emino-image.jpg" />        
      </Head>
      <div className="App">
        <div className="bg-whitish-green md:bg-whitish-blue dark:bg-brownish-purple relative text-dark-green md:text-dark-blue dark:text-gray-300 font-montserrat">
          <Jumbotron darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Resume />
          <Portfolio />
        </div>
      </div>
    </>
  );
}

export default App;
