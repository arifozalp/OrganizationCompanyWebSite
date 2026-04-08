import { motion } from 'framer-motion';

const mediaList = [
  { type: "image", src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { type: "image", src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { type: "image", src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-black-900 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-sans tracking-[0.2em] text-gold-500 uppercase mb-3">Mutlu Anlar</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white">Galeri & Sosyal Medya</h3>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-gold-600 to-gold-400 mx-auto mt-4 md:mt-6 rounded-full"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl group ${item.type === 'image' ? 'aspect-square cursor-pointer' : 'h-[450px] bg-white'}`}
            >
              {item.type === 'image' ? (
                <>
                  <img
                    src={item.src}
                    alt={`Nova Event Gallery ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white border border-gold-500 px-6 py-2 rounded uppercase tracking-widest text-xs">İncele</span>
                  </div>
                </>
              ) : (
                <iframe
                  src={`${item.link}/embed`}
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency="true"
                  allow="encrypted-media"
                ></iframe>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-gold-500 hover:text-gold-400 transition-colors">
            <span className="tracking-widest uppercase text-sm font-semibold border-b border-gold-500/30 pb-1">Instagram'da Daha Fazlası</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
