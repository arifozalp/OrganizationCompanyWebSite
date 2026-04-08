import { motion } from 'framer-motion';
import { MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-sans tracking-[0.2em] text-gold-500 uppercase mb-3">Bize Ulaşın</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white">İletişim</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-600 to-gold-400 mx-auto mt-6 rounded-full"></div>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/3 space-y-8"
          >
            <div className="glass p-8 rounded-2xl h-full">
              <h4 className="text-2xl font-serif text-white mb-8">İletişim Bilgileri</h4>

              <div className="space-y-6">
                <div className="flex items-start gap-4 text-gray-300">
                  <div className="mt-1 w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-1">Telefon</h5>
                    <a href="tel:+905419286944" className="hover:text-gold-500 transition-colors">0541 928 69 44</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-gray-300">
                  <div className="mt-1 w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-1">Adres</h5>
                    <p>Eskişehir, Türkiye</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-gray-300">
                  <div className="mt-1 w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-1">Instagram</h5>
                    <a href="https://www.instagram.com/novaevent.organizasyon26" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors">@novaevent</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-2/3"
          >
            <div className="glass p-8 rounded-2xl">
              <h4 className="text-2xl font-serif text-white mb-8">Hızlı İletişim Formu</h4>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Adınız Soyadınız</label>
                    <input type="text" id="name" className="w-full bg-black-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors" placeholder="Adınız Soyadınız" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Telefon Numaranız</label>
                    <input type="tel" id="phone" className="w-full bg-black-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors" placeholder="05XX XXX XX XX" />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-2">İlgilendiğiniz Hizmet</label>
                  <select id="service" className="w-full bg-black-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors appearance-none">
                    <option value="">Seçiniz</option>
                    <option value="dugun">Düğün</option>
                    <option value="nisan">Nişan / Söz</option>
                    <option value="kina">Kına Gecesi</option>
                    <option value="dogum-gunu">Doğum Günü</option>
                    <option value="diger">Diğer Organizasyonlar</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Mesajınız</label>
                  <textarea id="message" rows="4" className="w-full bg-black-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors resiz-none" placeholder="Organizasyonunuz hakkında detaylar..."></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-black-900 font-bold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group">
                  <span>Gönder</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
