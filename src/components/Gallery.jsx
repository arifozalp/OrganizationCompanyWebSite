import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ["Tümü", "Nişan & Söz", "Doğum Günü", "Kına"];

const mediaList = [
  { id: 1, type: "image", category: "Nişan & Söz", src: "/images/nisan-soz/nisan-1.webp" },
  { id: 2, type: "image", category: "Nişan & Söz", src: "/images/nisan-soz/nisan-2.webp" },
  { id: 3, type: "image", category: "Nişan & Söz", src: "/images/nisan-soz/nisan-3.webp" },
  { id: 4, type: "image", category: "Nişan & Söz", src: "/images/nisan-soz/nisan-4.webp" },
  { id: 5, type: "image", category: "Nişan & Söz", src: "/images/nisan-soz/nisan-5.webp" },
  { id: 6, type: "image", category: "Nişan & Söz", src: "/images/nisan-soz/nisan-6.webp" },
  { id: 7, type: "image", category: "Nişan & Söz", src: "/images/nisan-soz/nisan-7.webp" },
  { id: 8, type: "image", category: "Nişan & Söz", src: "/images/nisan-soz/nisan-8.webp" },
  { id: 9, type: "image", category: "Nişan & Söz", src: "/images/nisan-soz/nisan-9.webp" },
  { id: 10, type: "image", category: "Doğum Günü", src: "/images/dogum-gunu/dogum-gunu-1.webp" },
  { id: 11, type: "image", category: "Kına", src: "/images/kina/kina-1.webp" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredMedia = activeCategory === "Tümü" 
    ? mediaList 
    : mediaList.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-black-900 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-sans tracking-[0.2em] text-gold-500 uppercase mb-3">Mutlu Anlar</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white">Galeri & Organizasyonlarımız</h3>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-gold-600 to-gold-400 mx-auto mt-4 md:mt-6 rounded-full mb-8"></div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm tracking-wider uppercase transition-all duration-300 ${
                    activeCategory === category 
                      ? "bg-gold-500 text-black-900 font-bold shadow-[0_0_15px_rgba(212,175,55,0.5)]" 
                      : "bg-transparent text-white border border-gold-500/50 hover:border-gold-500 hover:text-gold-400"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredMedia.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImage(item)}
                className="relative overflow-hidden rounded-xl group aspect-[4/5] cursor-pointer bg-black-800"
              >
                <img
                  src={item.src}
                  alt={`${item.category} Resmi`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-900/90 via-black-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-gold-500 font-sans tracking-widest text-xs uppercase mb-1">{item.category}</span>
                  <span className="text-white border border-gold-500/50 hover:bg-gold-500 hover:text-black-900 transition-colors w-fit px-6 py-2 rounded uppercase tracking-widest text-xs mt-2 backdrop-blur-sm">İncele</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-gold-500 hover:text-gold-400 transition-colors">
            <span className="tracking-widest uppercase text-sm font-semibold border-b border-gold-500/30 pb-1">Instagram'da Daha Fazlası</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black-900/95 p-4 sm:p-8 backdrop-blur-md cursor-pointer"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-gold-500 transition-colors z-[110] bg-black-800/50 p-2 rounded-full backdrop-blur-md"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-gold-500/20"
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.category}
                className="w-full h-full max-h-[90vh] object-contain bg-black-800"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black-900/90 to-transparent p-6 text-center">
                <span className="text-gold-500 font-sans tracking-widest text-sm uppercase">{selectedImage.category}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
