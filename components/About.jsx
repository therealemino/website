import React from 'react'
import Socials from './Socials'
import Skills from './Skills'

export default function About(props) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32" id="about" ref={props.refProp} data-aos="zoom-in" data-aos-duration="2000">
      <div className="md:grid md:grid-cols-12 gap-4">
        <div className="col-start-1 col-end-4">
          <div className="bg-profile-image h-52 w-52 lg:h-64 lg:w-64 bg-cover rounded-full mx-auto my-auto">
              {/* PROFILE IMAGE - ABOUT SECTION*/}
          </div>
          <Socials />
        </div>

        <div className="col-start-5 col-end-12">
          <h2 className="py-4 text-2xl md:text-4xl text font-semibold font-nunito text-center md:text-left px-2">About Me</h2>
          <div className="text-xs md:text-base text-justify md:text-left p-4 md:px-2 font-nunito">
            Hi, I&apos;m Ejei-Okeke Emmanuel. Full Stack Developer and Google certified Digital Marketer with 2+ years of hands-on experience designing, developing, and implementing web applications and solutions using various javascript frameworks and technologies (1 year experience on Backend Development). I&apos;m currently based in Nigeria. I work with Javascript frameworks like React and Vue but can also build websites using vanilla HTML,CSS and Javascript. I take Web Development seriously and this means I always strive to ensure my skills are kept up to date within this rapidly changing industry. Asides coding, I love football, music, movies and anime. I find it difficult defining my personality so I took a test on <a href="https://www.16personalities.com/" target="_blank" rel="noreferrer">16 Personalities.</a> Here&apos;s the <a href="https://www.16personalities.com/profiles/df110e2033c7b" className="text-medium-blue dark:text-cream hover:text-dark-blue dark:hover:text-gray-100 font-semibold" target="_blank" rel="noreferrer">result.</a>
          </div>
        </div>
      </div>
      <div>
        <Skills />
      </div>
    </div>
  )
}