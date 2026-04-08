import { motion } from 'framer-motion';
import { Heart, Gem, Gift, Cake, Scissors, PartyPopper, Smile, Sparkles, Star } from 'lucide-react';

const servicesList = [
  { title: "Düğün", icon: Heart, image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80", desc: "Hayatınızın en anlamlı gününü kusursuz bir masala dönüştürüyoruz." },
  { title: "Nişan", icon: Gem, image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80", desc: "Sonsuzluğa giden yolda ilk adımlarınızı zarif detaylarla süslüyoruz." },
  { title: "Söz", icon: Gift, image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80", desc: "En özel merasimlerinizde geleneksel ve modern dokunuşlar." },
  { title: "Doğum Günü", icon: Cake, image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80", desc: "Sevdiklerinizle paylaşacağınız neşe dolu, sürprizlerle dolu anlar." },
  { title: "Açılış", icon: Scissors, image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80", desc: "Markanızın prestijli başlangıcını görkemli bir şölene çeviriyoruz." },
  { title: "Balon Süsleme", icon: PartyPopper, image: "https://images.unsplash.com/photo-1530103862676-de889ad4546c?auto=format&fit=crop&w=800&q=80", desc: "Mekanlarınıza renkli, cıvıl cıvıl ve kusursuz bir atmosfer katıyoruz." },
  { title: "Palyaço", icon: Smile, image: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&w=800&q=80", desc: "Çocukların yüzünü güldürecek enerjik ve eğlenceli etkinlikler." },
  { title: "Kına", icon: Sparkles, image: "https://images.unsplash.com/photo-1544425515-d49d9703fdd1?auto=format&fit=crop&w=800&q=80", desc: "Geleneklerin coşkuyla harmanlandığı unutulmaz kına geceleri." },
  { title: "Sünnet", icon: Star, image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80", desc: "Erkekliğe ilk adımda, görkemli ve hatıralardan silinmeyecek bir gün." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-black-800 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-sans tracking-[0.2em] text-gold-500 uppercase mb-3">Neler Yapıyoruz?</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white">Hizmetlerimiz</h3>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-gold-600 to-gold-400 mx-auto mt-4 md:mt-6 rounded-full"></div>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="glass rounded-2xl group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col justify-end min-h-[320px] p-8 border border-white/10 hover:border-gold-500/50"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-70"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
                
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black-900 via-black-900/80 to-black-900/20 z-0 group-hover:via-black-900/70 transition-all duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-14 h-14 rounded-full bg-black-900/50 backdrop-blur-md flex items-center justify-center mb-6 border border-gold-500/30 group-hover:bg-gold-500/20 group-hover:border-gold-500 transition-colors">
                    <Icon className="w-7 h-7 text-gold-500" />
                  </div>
                  <h4 className="text-2xl font-serif text-white mb-3 group-hover:text-gold-400 transition-colors">{service.title}</h4>
                  <p className="text-gray-300 leading-relaxed font-light opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto transition-all duration-300 overflow-hidden line-clamp-3">{service.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
