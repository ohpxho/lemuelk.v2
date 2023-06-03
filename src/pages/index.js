import { useState, useEffect } from 'react';
import Navigation from './navigation';
import Main from './main';
import Projects from './projects';
import Skills from './skills';
import About from './about';
import Contact from './contact';
import Footer from './footer';
import Data from "../data.json";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import gsap from 'gsap';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [data, setData] = useState({});
  
  useEffect(() => {
    setData(Data);
  }, []);

  useEffect(() => {
    const bigBall = document.querySelector('.cursor__ball--big');
    const smallBall = document.querySelector('.cursor__ball--small');
    const hoverables = document.querySelectorAll('.hoverable');

    // Listeners
    document.body.addEventListener('mousemove', onMouseMove);
    for (let i = 0; i < hoverables.length; i++) {
      hoverables[i].addEventListener('mouseenter', onMouseHover);
      hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
    }

    // Move the cursor
    function onMouseMove(e) {
      const scrollX = window.scrollX || window.pageXOffset;
      const scrollY = window.scrollY || window.pageYOffset;

      gsap.to(bigBall, 0.4, {
        x: e.pageX - 15 - scrollX,
        y: e.pageY - 15 - scrollY,
      });
      gsap.to(smallBall, 0.1, {
        x: e.pageX - 5 - scrollX,
        y: e.pageY - 7 - scrollY,
      });
    }

    // Hover an element
    function onMouseHover() {
      gsap.to(bigBall, 0.3, {
        scale: 4,
      });
    }
    function onMouseHoverOut() {
      gsap.to(bigBall, 0.3, {
        scale: 1,
      });
    }

    return () => {
      document.body.removeEventListener('mousemove', onMouseMove);
      for (let i = 0; i < hoverables.length; i++) {
        hoverables[i].removeEventListener('mouseenter', onMouseHover);
        hoverables[i].removeEventListener('mouseleave', onMouseHoverOut);
      }
    };
  }, []);

  useEffect(() => {
    const main = document.querySelector('#main');
    const scrolltop = document.querySelector('#scrolltop');

   const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.75 
    };

    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
          scrolltop.classList.remove('block');
          scrolltop.classList.add('hidden');
        } else {
          scrolltop.classList.remove('hidden');
          scrolltop.classList.add('block');
        }
    }, options);
    

    observer.observe(main);
  }, []);

  return (
    <main className={`min-h-screen h-max ${inter.className}`}>
      <div className="cursor hidden md:block">
        <div className="cursor__ball cursor__ball--big ">
          <svg height="30" width="30">
            <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
          </svg>
        </div>
        
        <div className="cursor__ball cursor__ball--small">
          <svg height="10" width="10">
            <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
          </svg>
        </div>
      </div>

      <div id="scrolltop" className="fixed hidden bottom-20 right-10 w-max h-max bg-blue-700 p-4 z-30 rounded-md transition-all hoverable">
        <a clasName="" href="#main">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white w-6 h-6 animate-bounce">
            <path fill-rule="evenodd" d="M11.47 4.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5zm.53 7.59l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 12.31z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>

      <Navigation />
      <Main data={data.main} />
      <Projects data={data.projects}/>
      <Skills data={data.skills}/>
      <About data={data.about}/>
      <Contact />
      <Footer />
    </main>
  )
}
