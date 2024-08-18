import React, { useState } from 'react';
import { IoMenu, IoLogoGithub } from 'react-icons/io5';
import Shehryar from './images/Me.jpeg';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Experience, Portfolio, Projects, SocialLinks } from './data';
import { AnimatePresence, motion } from "framer-motion";
import Starfield from './components/canvas/starfield.tsx';
import { TypeAnimation } from 'react-type-animation'

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <AnimatePresence initial={false}>
      <div className="relative w-screen min-h-screen bg-gray-900 text-white">
        <Starfield speedFactor={0.05} backgroundColor="rgba(0, 0, 20, 0.8)" starColor={[255, 255, 255]} starCount={3000} />
        
        <nav className="w-full px-6 py-4 fixed top-0 left-0 z-50 bg-gray-800 bg-opacity-90">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <p className="text-xl font-bold nav-text">Shehryar Khan</p>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="nav-link hover:text-blue-400 transition-colors">Home</a>
              <a href="#about" className="nav-link hover:text-blue-400 transition-colors">About</a>
              <a href="#projects" className="nav-link hover:text-blue-400 transition-colors">Projects</a>
              <a href="#portfolio" className="nav-link hover:text-blue-400 transition-colors">Portfolio</a>
              <a href="#contact" className="nav-link hover:text-blue-400 transition-colors">Contact</a>
            </div>
            <motion.div 
              whileTap={{ scale: 0.8 }}
              className="md:hidden cursor-pointer"
              onClick={() => setIsActive(!isActive)}
            >
              <IoMenu className="text-2xl" />
            </motion.div>
          </div>
        </nav>


        {isActive && (
          <motion.div 
            initial={{opacity: 0, y: -50}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -50}}
            className="fixed top-16 left-0 right-0 bg-gray-800 z-40 md:hidden"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              <a href="#home" className="nav-link hover:text-blue-400 transition-colors " onClick={() => setIsActive(false)}>Home</a>
              <a href="#about" className="hover:text-blue-400 transition-colors" onClick={() => setIsActive(false)}>About</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors" onClick={() => setIsActive(false)}>Projects</a>
              <a href="#portfolio" className="hover:text-blue-400 transition-colors" onClick={() => setIsActive(false)}>Portfolio</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors" onClick={() => setIsActive(false)}>Contact</a>

            </div>
          </motion.div>
        )}

          <main className="pt-20 px-6 max-w-7xl mx-auto">
                    <section id="home" className="min-h-screen flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl md:text-5xl font-bold nav-text mb-8"> {/* Adjusted size for better fit */}
                          <TypeAnimation
                          sequence={[
                            "Building innovative web solutions",
                              1000,
                              "Crafting user-centric experiences",
                              1000,
                              "Exploring the frontiers of AI",
                              1000,
                              "Turning complex ideas into elegant code",
                              1000,
                              "Welcome to Shehryar Khan's digital space",
                              3000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ display: 'inline-block' }}
                            repeat={Infinity}
                          />
                        </div>
                        <p className="text-xl md:text-2xl mb-8 font nav-text">
                          Full Stack Developer | AI Enthusiast | Innovation Driver
                        </p>
                        <p className="text-lg md:text-xl mb-8 font nav-text">
                          Turning ideas into reality through code and innovation
                        </p>
                        <a href="#about" className="bg-blue-600 hover:bg-blue-700 text-white nav-text py-2 px-4 rounded transition-colors">
                          Learn More About Me
                        </a>
                      </div>
                    </section>

          <section id="about" className="py-20">
            <h2 className="text-3xl nav-text mb-8 text-center">About Me</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3">
                <img src={Shehryar} alt="Shehryar Khan" className="rounded-lg shadow-lg w-full" />
              </div>
                <div className="w-full md:w-2/3">
                  <p className="text-xl mb-4 nav-text">
                      Hey there! I'm Shehryar Khan, a passionate Computer Science student at the University of Texas at Dallas. My journey in tech is driven by an insatiable curiosity and a love for creating innovative solutions.
                    </p>
                    <p className="text-xl mb-4 nav-text">
                      I thrive in the world of Full Stack Development, where I can bring ideas to life from concept to deployment. But what really gets me excited? The cutting-edge realms of Artificial Intelligence, Machine Learning, Natural Language Processing, and Computer Vision. These aren't just buzzwords to me – they're the tools I'm using to shape the future.
                    </p>
                    <p className="text-xl mb-4 nav-text">
                      My mission is simple: leverage technology to make a positive impact on the world. Whether it's developing intuitive user interfaces or diving deep into complex algorithms, I'm always up for the challenge. Let's connect and explore how we can innovate together!
                  </p>
                <a 
                  href="https://drive.google.com/file/d/1KCCwmn0-W9ZLGLDZPjgUUiLwAEs4U-21/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors inline-block"
                >
                  Download CV
                </a>
              </div>
            </div>
          </section>

          <section id="experience" className="py-20">
            <h2 className="text-3xl nav-text mb-8 text-center">Experience</h2>
            <VerticalTimeline>
              {Experience && Experience.map(n => (
                <VerticalTimelineElement
                  key={n.id}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                  date={n.date}
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={n.iconsSrc}
                >
                  <h3 className="vertical-timeline-element-title">{n.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{n.location}</h4>
                  <p>{n.description}</p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </section>

          <section id="projects" className="py-20">
            <h2 className="text-3xl nav-text mb-8 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Projects && Projects.map(n => (
                <div key={n.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img src={n.imageSrc} alt={n.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl nav-text mb-2">{n.name}</h3>
                    <p className="text-gray-400 mb-4">{n.techs}</p>
                    <a href={n.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                      <IoLogoGithub className="inline-block mr-2" /> View on GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="portfolio" className="py-20">
            <h2 className="text-3xl nav-text mb-8 text-center">Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Portfolio && Portfolio.map(n => (
                <motion.div 
                  key={n.id}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={n.imageSrc} alt={n.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl nav-text mb-2">{n.name}</h3>
                    <p className="text-gray-400">{n.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="contact" className="py-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Connect with Me</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {SocialLinks && SocialLinks.map(n => (
                <a
                  key={n.id}
                  href={n.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors flex items-center space-x-2"
                >
                  {n.iconSrc}
                  <span>{n.name}</span>
                </a>
              ))}
            </div>
          </section>
        </main>

        <footer className="bg-gray-800 text-white py-6 mt-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p>&copy; 2024 Shehryar Khan. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </AnimatePresence>
  );
}

export default App;