import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
  '/images/nisan-soz/nisan-5.webp',
  '/images/nisan-soz/nisan-7.webp',
  '/images/nisan-soz/nisan-1.webp',
  '/images/nisan-soz/nisan-2.webp',
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center bg-black-900 overflow-hidden pt-20 pb-10">
      {/* Dynamic Blurred Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center blur-[80px] scale-125 opacity-40"
            style={{ 
              backgroundImage: `url('${heroImages[currentImageIndex]}')`,
            }}
          />
        </AnimatePresence>
        
        {/* Additional Overlays for depth and text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black-900 via-black-900/80 to-transparent"></div>
        <div className="absolute inset-0 bg-black-900/40"></div>
        
        {/* Abstract Gold Glows */}
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gold-500/10 blur-[120px] mix-blend-screen"></div>
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] rounded-full bg-gold-400/5 blur-[120px] mix-blend-screen"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Side: Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
                En Güzel Günlerinizde <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 inline-block mt-2 lg:mt-0">Yanınızdayız</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <p className="text-lg md:text-xl text-gray-300 mb-10 tracking-wide font-light max-w-xl mx-auto lg:mx-0">
                Hayallerinizdeki organizasyonu gerçeğe dönüştürüyoruz. Unutulmaz anılarınız için Eskişehir'in en prestijli organizasyon firması.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="https://wa.me/905419286944" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-block bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-black-900 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                Hemen Teklif Al
              </a>
            </motion.div>
          </div>

          {/* Right Side: Framed Image Slider */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative w-[300px] sm:w-[350px] md:w-[420px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.15)] border border-gold-500/20"
            >
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url('${heroImages[currentImageIndex]}')`,
                  }}
                />
              </AnimatePresence>
              
              {/* Subtle inner shadow for depth */}
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] pointer-events-none"></div>
            </motion.div>
            
            {/* Decorative Element */}
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
               className="absolute top-[10%] right-[5%] w-32 h-32 border border-gold-500/20 rounded-full border-dashed hidden lg:block pointer-events-none"
            ></motion.div>
          </div>
          
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#services" className="text-white/50 hover:text-gold-500 transition-colors">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
