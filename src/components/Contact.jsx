import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    // NOT: Aşağıdaki URL'yi kendi yayına aldığınız Google Apps Script URL'si ile değiştirin.
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbytpA5RGhSt1X1_pOZKvhIvuT5cHYCgzpPg1LaF0600-ZDNo5cCA9_k-96mLzDVxFlnKw/exec";

    try {
      // Google Apps Script için en güvenli ve temiz kaçış yolu: no-cors
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(formData)
      });

      setStatus('success');
      // Başarılı gönderimden sonra formu temizliyoruz
      setFormData({ name: '', phone: '', service: '', message: '' });

      // 5 saniye sonra başarı mesajını kaldır
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error("Form gönderim hatası:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-black-900 border-t border-white/5 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-sans tracking-[0.2em] text-gold-500 uppercase mb-3">Bize Ulaşın</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white">İletişim</h3>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-gold-600 to-gold-400 mx-auto mt-4 md:mt-6 rounded-full"></div>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
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
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Adınız Soyadınız</label>
                    <input type="text" id="name" value={formData.name} onChange={handleChange} required className="w-full bg-black-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors" placeholder="Adınız Soyadınız" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Telefon Numaranız</label>
                    <input type="tel" id="phone" value={formData.phone} onChange={handleChange} required className="w-full bg-black-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors" placeholder="05XX XXX XX XX" />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-2">İlgilendiğiniz Hizmet</label>
                  <select id="service" value={formData.service} onChange={handleChange} required className="w-full bg-black-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors appearance-none">
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
                  <textarea id="message" value={formData.message} onChange={handleChange} required rows="4" className="w-full bg-black-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors resiz-none" placeholder="Organizasyonunuz hakkında detaylar..."></textarea>
                </div>

                {status === 'success' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-center font-medium">
                    Mesajınız başarıyla alındı!
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-center font-medium">
                    Bir hata oluştu. Lütfen tekrar deneyin.
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-black-900 font-bold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-black-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Gönderiliyor...
                    </span>
                  ) : (
                    <>
                      <span>Gönder</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
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
