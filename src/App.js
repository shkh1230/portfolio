import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import { IoCodeWorking, IoMenu, IoLogoGithub } from 'react-icons/io5'
import React, { Component } from 'react'
import Shehryar from './images/Me.jpeg';
import Nyc from './images/NYC.JPG';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Experience, Projects, SocialLinks } from './data';
import { AnimatePresence, motion } from "framer-motion";
{/*import StarsCanvas from './components/canvas/Stars';*/}

function App()  {

  const [isActive, setIsActive] = useState(false)

  return (
    <AnimatePresence initial = {false}>
    <div className = "flex w-screen min-h-screen flex-col items-center justify center relative bg-gradient-to-r from-blue-800 to-purple-500 " >
      <nav className="w-full px-6 z-50 fixed insert-x-0 top-2 flex justify-center item-center"> 
      <div className="w-full md:w-880 bg-gradient-to-r from-blue-800 to-purple-700 p-4 rounded-2xl flex  items-center">
        <p className="text-lg text-textBase font-medium">Shehryar Khan</p>
      
      <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
        <a href="#home"
        className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
        >Home</a>

        <a href="#about"
        className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
        >About</a>

        <a href="#projects"
        className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
        >Projects</a>

        <a href="#contact"
        className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
        >Contact</a>

      
        <a href="https://drive.google.com/file/d/1KCCwmn0-W9ZLGLDZPjgUUiLwAEs4U-21/view?usp=sharing" target="_blank" rel="noopener noreferrer" 
        className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer 
        border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out"
        >Download</a>
      </div>
      
      <motion.div   
        whileTap={{scale : 0.5}}
        className = "block md:hidden ml-auto cursor-pointer"
        onClick={() => setIsActive(!isActive)}
        >
        <IoMenu className= "text-2xl text-textBase" />
      </motion.div>

      {isActive && (
      <div 
        initial = {{opacity : 0, scale : 0.5 }}
        animate = {{opacity : 1, scale : 1.1}}
        exit = {{opacity : 0, scale : 0.5}}
        transition = {{delay : "0.1s", type: "spring"}}
        className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly  gap-6">
          <a href="#home"
        className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
        onClick={() => setIsActive(false)}
        >Home</a>

        <a href="#about"
        className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
        onClick={() => setIsActive(false)}
        >About</a>

        <a href="#projects"
        className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
        onClick={() => setIsActive(false)}
        >Projects</a>

        <a href="#contact"
        className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
        onClick={() => setIsActive(false)}
        >Contact</a>
        
        <motion.a whileTap={{scale : 0.5}}
        href="https://drive.google.com/file/d/1KCCwmn0-W9ZLGLDZPjgUUiLwAEs4U-21/view?usp=sharing" target="_blank" rel="noopener noreferrer" 
        className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer 
        border border-textBase px-2 py-1 rounded-xl 
        hover:border-gray-100 duration-100 ease-in-out"
        >Download
        </motion.a>
      </div>
      )}
    </div>  
  </nav>
      
 
      <div className = "Relative" id = "home"> 
      <Spline scene="https://prod.spline.design/RguLcUmzwHJZgZUA/scene.splinecode" />
      
       <div className="absolute bottom-50 right-10 left-1 w-full flex justify-center items-center">
        <div className="shadow-md p-4 flex items-center justify-center relative bg-gradient-to-r from-blue-800 to-purple-700 rounded-3xl">
          <p className="text-textBase text-5xl">Welcome to my Portfolio</p>
        </div>
      </div>
       {/*Text base above spline3D*/}
       <div className = "absolute top-20 right-10 left-1 w-full flex justify-center items-center"> 
       <div className = "p-4 flex items-center justify-center transform rotate-y-360 animate-spin bg-gradient-to-r from-blue-800 to-purple-700 rounded-2xl"> 
        <p className = "text-textBase text-5xl">You Finally Arrived!</p>
       </div>
       </div>
    </div>
    {/* Main Sections */}

    <main className = "w-[80%] mt-5" >
      {/* about section*/}
      <section className = " w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
      id = "about">
        {/* image box 1*/}
        <div className = "w-full h-420 flex items-center justify-center" >
          <div className="w-275 h-340 bg-white rounded-md relative">
            <img className = "w-full h-full absolute -right-4 top-4 object-cover rounded-lg drop-shadow-2xl " src={Shehryar} alt="" />
          </div>
        </div>
        {/* image box 2*/}
        {/*content box*/}
        <div className= " w-full flex flex-col justify-center items-center">
          <p1 className = "text-left text-xl text-textBase ">
            
            Hello my name is Shehryar Khan, a Computer Science student at the University of Texas at Dallas. Proficient in software design and development, I specialize in creating Full Stack Applications. 
            My current passion revolves around Artificial Intelligence, Machine Learning, Natural Language Processing, and Computer Vision. 
            Excited to explore these cutting-edge fields and contribute to technological advancements. 
            
          </p1>
          <a href= "https://drive.google.com/file/d/1KCCwmn0-W9ZLGLDZPjgUUiLwAEs4U-21/view?usp=sharing" target="_blank" rel="noopener noreferrer" >
          <motion.button
             
          whileTap={{scale : 0.8}}
        
          class="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg 
          group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 
          focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
            
                <span class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Download
                </span>
             
              </motion.button>
            </a>
        </div>
      </section>
      {/* timeline */}
      
      <section className = "w-full flex items-center justify-center">
        <VerticalTimeline> 
         {
          Experience && Experience.map(n=> (
            <VerticalTimelineElement
            key = {n.id}
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(160, 159, 214)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date={n.date}
    iconStyle={{ background: 'rgb(160, 159, 214)', color: '#fff' }}
    icon={n.iconsSrc}
  >
    <h3 className="vertical-timeline-element-title">{n.title}</h3>
    <h4 className="vertical-timeline-element-subtitle">{n.location}</h4>
    <p>{n.description}</p>
  </VerticalTimelineElement>
          ))
         }
        </VerticalTimeline>
    
    
      </section>
      {/* projects */}
      <section className = "flex flex-wrap items-center justify-evenly my-24 gap-4" id="projects">
        {Projects && Projects.map(n => ( 
        <div className = "border hover:border-white rounded-md p-2 min-w-[275px] md:max-w-[275px] hover: border-zinc-900 duration-100 ease-in-out">
          <p className = "text-lg text-primary font-medium uppercase">
          {n.name}
          </p>  
          <img src = {n.imageSrc}
          className = "w-full h-full object-cover rounded-md my-4"
           alt=""
           />
            <div className = "flex flex-1 items-center justify-between"> 
             <p className = "text-lg text-primary"> 
              Technologies
              <span className = "block text-sm text-primary"> 
              {n.techs}
              </span>
             </p>

            <a href={n.github} target="_blank" rel="noopener noreferrer">
              <div> 
                <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
              </div>
            </a>
            </div>
          </div> 
        ))}
      </section>  
    {/* contact */}
    <section id = "contact" className = "flex flex-col items-center justify-center w-full my-24">
      <p className = "text-2xl text-primary capitalize"> Follow me on</p>
      
      <div className = "flex items-center justify-center w-full my-4 flex-wrap gap-4"> 
          {
            SocialLinks && SocialLinks.map(n =>(
              <a key = {n.id}
              href = {n.link} target="_blank" rel="noopener noreferrer" className = "w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-white duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3">
            {n.iconSrc}
            <p className = "text-lg text-primary">{n.name}</p>
          </a>
            ))
          }
      </div>
    </section>
    {/* stars */}
    </main>
  </div>
  </AnimatePresence>
  );

}
 
export default App;
