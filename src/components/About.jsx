import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-black-800 relative w-full overflow-hidden">
      {/* Decorative bg element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-900/5 blur-3xl -z-10 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
              <img
                src="/images/nisan-soz/nisan-1.webp"
                alt="Nova Event Organizasyon"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-2 border-gold-500/30 rounded-2xl m-4 z-10"></div>
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-8 -right-8 bg-black-900 border border-gold-500 p-6 rounded-xl shadow-2xl hidden md:block backdrop-blur-sm">
              <div className="text-center">
                <span className="block text-4xl font-serif text-gold-500 mb-1">100%</span>
                <span className="text-xs uppercase tracking-widest text-gray-400">Müşteri Memnuniyeti</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-sm font-sans tracking-[0.2em] text-gold-500 uppercase mb-3">Biz Kimiz?</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-6 md:mb-8">Nova Event Organizasyon</h3>

            <div className="space-y-6 text-gray-400 font-light leading-relaxed">
              <p>
                Eskişehir merkezli olarak kurulan <strong className="text-gold-400 font-normal">Nova Event Organizasyon</strong>, hayallerinizdeki en özel anları gerçeğe dönüştürmek misyonuyla yola çıktı.
              </p>
              <p>
                <strong className="text-gold-400 font-normal">Nova Event</strong> liderliğinde, detaylara verdiğimiz önem ve profesyonel ekibimizle, düğün, nişan, söz ve tüm özel davetlerinizi sıradanlıktan uzak, tamamen size özel bir estetikle tasarlıyor ve hayata geçiriyoruz.
              </p>
              <p>
                Bizim için her organizasyon, anlatılacak yeni ve büyüleyici bir hikayedir. Sizin hikayenizi en güzel şekilde yansıtmak için dekorasyondan müziğe, ikramlardan konsepte kadar her anı kusursuz bir şekilde planlıyoruz.
              </p>
            </div>

            <div className="mt-10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-[1px] bg-gold-500"></div>
                <p className="font-serif text-white text-xl italic drop-shadow-md">"Detaylarda gizlenen şıklık..."</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
