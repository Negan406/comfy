import React from 'react';
import Formchekin from '../components/Formchekin';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Home = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.1);
  const [subtitleRef, subtitleVisible] = useScrollAnimation(0.1);
  const [buttonRef, buttonVisible] = useScrollAnimation(0.1);

  return (
    <div className="relative h-screen w-screen bottom-20 overflow-hidden">

      {/* Scrolling Background */}
      <div className="absolute inset-0 z-0">
        <div className=" flex h-full w-max">
          {/* Duplicated images for seamless looping */}
          {[
            '/bg.jpeg',
            
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt=""
              className="h-full w-screen object-cover shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 z-10
                      flex flex-col items-center justify-center gap-6 ">


        <h4
          ref={subtitleRef}
          className={`text-white text-2xl font-semibold tracking-widest relative top-7 transition-all duration-1000 ${subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          HOTEL & RESORT
        </h4>

        <h1
          ref={titleRef}
          className={`text-white text-8xl font-serif text-center relative top-12 transition-all duration-1000 delay-200 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          Welcome To <span className="text-yellow-600">C</span>omfy
        </h1>
        <button
          ref={buttonRef}
          className={`text-white text-2xl font-extralight border-2 rounded-2xl hover:cursor-pointer hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 ease-in-out w-60 p-5 relative top-18 ${buttonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          style={{ transitionDelay: '100ms' }}
        >
          Discover Now
        </button>
        <div className=' relative top-40'>
          <Formchekin />
        </div>

      </div>

    </div>
  );
};

export default Home;
