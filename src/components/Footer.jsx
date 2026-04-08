// no lucide import needed

const Footer = () => {
  return (
    <footer className="bg-black-900 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-serif font-bold text-white tracking-widest inline-block mb-2">
              NOVA <span className="text-gold-500">EVENT</span>
            </a>
            <p className="text-gray-400 text-sm font-light">En güzel günlerinizde yanınızdayız.</p>
          </div>

          <div className="flex space-x-4">
            <a href="https://www.instagram.com/novaevent.organizasyon26" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black-800 flex items-center justify-center text-gray-400 hover:text-gold-500 hover:bg-black-700 transition-all border border-white/5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Nova Event Organizasyon. Tüm hakları saklıdır.</p>
          <p>Eskişehir, Türkiye</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
