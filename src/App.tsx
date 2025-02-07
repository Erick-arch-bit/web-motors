import React, { useState, useEffect } from 'react';
import { Trophy, Star, Download, Mail, Share2, ChevronRight, Globe, Gamepad2, Flame, Zap, Crown, Smartphone, Gift, Rocket, Menu, X } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [language, setLanguage] = useState<'en' | 'es'>('es');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    en: {
      menu: {
        features: 'Features',
        download: 'Download',
        stats: 'Stats',
        contact: 'Contact',
      },
      hero: {
        title: 'Lucha de Motores',
        subtitle: 'The Ultimate Mexican Racing Game',
        cta: 'Download Free',
        platforms: 'Available on iOS & Android',
      },
      features: {
        title: 'Game Features',
        items: [
          'Quick 3-minute races',
          'Play with one hand',
          'Offline mode available',
          'Daily rewards',
        ],
      },
      download: {
        title: 'Download Now',
        subtitle: 'Join over 1 million players!',
        size: 'Only 50MB',
        android: 'Get it on Google Play',
        ios: 'Download on App Store',
      },
      stats: {
        players: 'Players',
        races: 'Daily Races',
        rewards: 'Daily Rewards',
      }
    },
    es: {
      menu: {
        features: 'Características',
        download: 'Descargar',
        stats: 'Estadísticas',
        contact: 'Contacto',
      },
      hero: {
        title: 'Lucha de Motores',
        subtitle: 'El Mejor Juego de Carreras Mexicano',
        cta: 'Descarga Gratis',
        platforms: 'Disponible en iOS y Android',
      },
      features: {
        title: 'Características',
        items: [
          'Carreras de 3 minutos',
          'Juega con una mano',
          'Modo sin internet',
          'Recompensas diarias',
        ],
      },
      download: {
        title: 'Descarga Ahora',
        subtitle: '¡Únete a más de 1 millón de jugadores!',
        size: 'Solo 50MB',
        android: 'Disponible en Google Play',
        ios: 'Descarga en App Store',
      },
      stats: {
        players: 'Jugadores',
        races: 'Carreras Diarias',
        rewards: 'Recompensas',
      }
    },
  };

  const t = translations[language];

  const stats = [
    { icon: Gamepad2, value: '1M+', label: t.stats.players },
    { icon: Flame, value: '500K', label: t.stats.races },
    { icon: Gift, value: '100+', label: t.stats.rewards },
  ];

  const menuItems = [
    { label: t.menu.features, href: '#features' },
    { label: t.menu.download, href: '#download' },
    { label: t.menu.stats, href: '#stats' },
    { label: t.menu.contact, href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-pattern">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Trophy className="inline-block text-[#FF0033] w-6 h-6 sm:w-8 sm:h-8" />
              <span className="text-gradient hidden sm:inline">Lucha de Motores</span>
              <span className="text-gradient sm:hidden">LM</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-white hover:text-[#FF0033] transition-colors text-sm"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="text-white hover:text-[#FF0033] transition-colors"
              >
                <Globe className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="text-white hover:text-[#FF0033] transition-colors"
              >
                <Globe className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-[#FF0033] transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64 mt-4' : 'max-h-0'}`}>
            <div className="flex flex-col space-y-4 py-4">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-white hover:text-[#FF0033] transition-colors text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[90vh] pt-24 pb-12 relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584466977773-e625c37cdd50?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white shadow-xl mb-4 sm:mb-6">
              {t.hero.title}
            </h1>
            <p className="mt-2 sm:mt-4 text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 float">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col items-center gap-4">
              <button className="group relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-[#FF0033] text-white rounded-full text-lg sm:text-xl font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,51,0.5)] w-full sm:w-auto justify-center">
                <span className="relative z-10">{t.hero.cta}</span>
                <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF0033] via-[#FF6B00] to-[#FF0033] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <p className="text-white/80 flex items-center gap-2 text-sm sm:text-base">
                <Smartphone className="w-4 h-4" />
                {t.hero.platforms}
              </p>
            </div>
            <div className="mt-8 sm:mt-12">
              <img
                src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&h=400&q=80"
                alt="Game Screenshot"
                className="rounded-xl shadow-2xl mx-auto w-full max-w-[280px] sm:max-w-sm md:max-w-md hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Features */}
      <section id="features" className="py-12 sm:py-16 bg-white/95 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#009A3B] mb-8 sm:mb-12">
            {t.features.title}
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {t.features.items.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#FF0033]/20 hover:border-[#FF0033] hover:-translate-y-1"
              >
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-[#FF0033] mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-sm sm:text-base font-semibold">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-12 sm:py-16 bg-[#009A3B]/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#009A3B] mb-3 sm:mb-4">
            {t.download.title}
          </h2>
          <p className="text-lg sm:text-xl mb-2">{t.download.subtitle}</p>
          <p className="text-xs sm:text-sm text-gray-600 mb-6 sm:mb-8 flex items-center justify-center gap-2">
            <Rocket className="w-3 h-3 sm:w-4 sm:h-4" />
            {t.download.size}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform text-sm sm:text-base">
              <Download className="w-5 h-5 sm:w-6 sm:h-6" />
              {t.download.android}
            </button>
            <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform text-sm sm:text-base">
              <Download className="w-5 h-5 sm:w-6 sm:h-6" />
              {t.download.ios}
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-8 sm:py-12 bg-black/90 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto text-[#FF0033] mb-1 sm:mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="contact" className="py-12 sm:py-16 bg-black text-white relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Mail className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-[#FF0033] float" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            {language === 'en'
              ? 'Stay in the Race!'
              : '¡Mantente en la Carrera!'}
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(language === 'en' ? 'Thank you for subscribing!' : '¡Gracias por suscribirte!');
              setEmail('');
            }}
            className="max-w-md mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={
                  language === 'en' ? 'Enter your email' : 'Ingresa tu email'
                }
                className="flex-1 px-4 py-2 rounded-lg text-black focus:ring-2 focus:ring-[#FF0033] transition-shadow text-sm sm:text-base"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-[#FF0033] rounded-lg hover:bg-[#CC0033] transition-all hover:scale-105 text-sm sm:text-base"
              >
                {language === 'en' ? 'Subscribe' : 'Suscribirse'}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-3 sm:gap-4">
            <div className="flex gap-4 sm:gap-6">
              <Share2 className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-[#FF0033] transition-colors hover:scale-110 transform" />
              <Download className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-[#FF0033] transition-colors hover:scale-110 transform" />
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-[#FF0033] transition-colors hover:scale-110 transform" />
            </div>
            <p className="text-gradient text-sm sm:text-base">&copy; 2024 Lucha de Motores</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;