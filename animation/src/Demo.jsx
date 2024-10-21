import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imagesLoaded from "imagesloaded";
import './App.css';  

gsap.registerPlugin(ScrollTrigger);

const Demo = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  useEffect(() => {
    const images = gsap.utils.toArray('img');
    const loader = document.querySelector('.loader--text');

    const updateProgress = (instance) => {
      const progress = Math.round((instance.progressedCount * 100) / images.length);
      setLoadingProgress(progress);
    };

    const showDemo = () => {
      document.body.style.overflow = 'auto';
      document.scrollingElement.scrollTo(0, 0);
      gsap.to(document.querySelector('.loader'), { autoAlpha: 0 });
      
      gsap.utils.toArray('section').forEach((section, index) => {
        const wrapper = section.querySelector('.wrapper');
        const [x, xEnd] = (index % 2)
          ? ['100%', (wrapper.scrollWidth - section.offsetWidth) * -1]
          : [wrapper.scrollWidth * -1, 0];

        gsap.fromTo(wrapper, { x }, {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.5
          }
        });
      });
    };

    imagesLoaded(images).on('progress', updateProgress).on('always', showDemo);
  }, []);

  return (
    <div className="demo-wrapper">
      {/* Loader */}
      <div className="loader df aic jcc">
        <div>
          <h1>Loading</h1>
          <h2 className="loader--text">{loadingProgress}%</h2>
        </div>
      </div>

      {/* Header */}
      <header className="df aic jcc">
        <div>
          <h1>ScrollTrigger</h1>
          <h2>demo</h2>
        </div>
      </header>

      {/* Text Section */}
      <section className="demo-text">
        <div className="wrapper text">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
        </div>
      </section>

      {/* Gallery Sections */}
      {[1, 2, 3, 4].map((_, i) => (
        <section className="demo-gallery" key={i}>
          <ul className="wrapper">
            {[...Array(Math.floor(Math.random() * (4 - 3 + 1)) + 3)].map((_, i) => (
              <li key={i}>
                <img 
                  src={`https://source.unsplash.com/random/1240x874?sig=${Math.floor(Math.random() * 207)}`} 
                  alt={`Random ${i}`} 
                  width="1240" 
                  height="874"
                />
              </li>
            ))}
          </ul>
        </section>
      ))}

      {/* Text Section */}
      <section className="demo-text">
        <div className="wrapper text">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
        </div>
      </section>

      {/* Footer */}
      <footer className="df aic jcc">
        <p>
          Images from <a href="https://unsplash.com/">Unsplash</a>
        </p>
      </footer>
    </div>
  );
};

export default Demo;
