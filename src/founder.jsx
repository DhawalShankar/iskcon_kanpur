import React, { useState, useEffect } from 'react';

// Simple icon components (keeping your existing ones)
const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

const Menu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="4" x2="20" y1="6" y2="6"/>
    <line x1="4" x2="20" y1="12" y2="12"/>
    <line x1="4" x2="20" y1="18" y2="18"/>
  </svg>
);

const X = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6 6 18"/>
    <path d="m6 6 12 12"/>
  </svg>
);

const Calendar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8 2v4"/>
    <path d="M16 2v4"/>
    <rect width="18" height="18" x="3" y="4" rx="2"/>
    <path d="M3 10h18"/>
  </svg>
);

const MapPin = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const Heart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/>
  </svg>
);

const Users = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="m22 21-3-3 3-3"/>
  </svg>
);

const Book = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
  </svg>
);

const Phone = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const Mail = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-10 5L2 7"/>
  </svg>
);

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

const Clock = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
  </svg>
);

const Star = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
  </svg>
);

const Globe = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const Award = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="6"/>
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
);

const Bell = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
  </svg>
);

const Quote = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-orange-400">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
  </svg>
);

const FounderAcharyaPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const timeline = [
    { year: "1896", event: "Born as Abhay Charan De in Calcutta, India on September 1st", location: "Calcutta, India" },
    { year: "1922", event: "First meeting with spiritual master Bhaktisiddhanta Saraswati Thakura", location: "Calcutta, India" },
    { year: "1933", event: "Formally initiated and given the name Abhay Charanaravinda", location: "Allahabad, India" },
    { year: "1944", event: "Started Back to Godhead magazine to spread Krishna consciousness", location: "Delhi, India" },
    { year: "1959", event: "Accepted sannyasa (renounced order) and became A.C. Bhaktivedanta Swami", location: "Vrindavan, India" },
    { year: "1965", event: "Journey to America at age 69 with $7 and crates of books", location: "New York, USA" },
    { year: "1966", event: "Founded ISKCON (International Society for Krishna Consciousness)", location: "New York, USA" },
    { year: "1968", event: "Established New Vrindavan, the first ISKCON rural community", location: "West Virginia, USA" },
    { year: "1970", event: "ISKCON devotees first traveled to London, meeting the Beatles", location: "London, UK" },
    { year: "1971", event: "Returned to India after establishing ISKCON worldwide", location: "India" },
    { year: "1977", event: "Departed this world in Vrindavan on November 14th", location: "Vrindavan, India" }
  ];

  const books = [
    { title: "Bhagavad-gita As It Is", description: "Complete translation and commentary on Krishna's instructions to Arjuna", volumes: "1 Volume" },
    { title: "Srimad-Bhagavatam", description: "The beautiful story of Krishna - the most comprehensive Vedic literature", volumes: "18 Volumes" },
    { title: "Sri Caitanya-caritamrita", description: "Biography of Sri Chaitanya Mahaprabhu, Krishna's most recent incarnation", volumes: "9 Volumes" },
    { title: "The Nectar of Devotion", description: "Complete science of bhakti-yoga based on Rupa Goswami's teachings", volumes: "1 Volume" },
    { title: "Sri Isopanisad", description: "Translation and commentary on the most important Upanishad", volumes: "1 Volume" },
    { title: "The Science of Self-Realization", description: "Collection of conversations and lectures on spiritual topics", volumes: "1 Volume" }
  ];

  const achievements = [
    {
      icon: Globe,
      title: "Global Expansion",
      description: "Established 108 temples worldwide in just 11 years",
      stats: "108 Temples, 6 Continents"
    },
    {
      icon: Book,
      title: "Literary Legacy",
      description: "Translated and commented on 60+ volumes of Vedic literature",
      stats: "500+ Million Books Distributed"
    },
    {
      icon: Users,
      title: "Spiritual Movement",
      description: "Initiated thousands of disciples from all backgrounds",
      stats: "10,000+ Initiated Disciples"
    },
    {
      icon: Award,
      title: "Cultural Impact",
      description: "Introduced authentic Vedic culture to the Western world",
      stats: "Millions of Lives Transformed"
    }
  ];

  const quotes = [
    {
      text: "The ultimate goal of life is to go back to Godhead, back to our eternal home in the spiritual sky.",
      context: "Philosophy of Krishna Consciousness"
    },
    {
      text: "Real education means to prepare oneself for the next life. That is real education.",
      context: "On Education and Learning"
    },
    {
      text: "Chanting Hare Krishna is the easiest process of meditation in this age.",
      context: "On Meditation and Spiritual Practice"
    },
    {
      text: "Books are the basis. Preach with your life and words will become more effective.",
      context: "To his disciples on preaching"
    }
  ];

return (
   <div className="  overflow-x-hidden min-h-screen bg-white w-screen">
    {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-2xl' : 'bg-white/95 backdrop-blur-sm'}`}>
        {/* Top Info Bar */}
        <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 text-white py-2">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-6">
                <span className="flex items-center gap-2">
                  <Phone />
                  <span className="hidden sm:inline">+91-7080007011</span>
                </span>
                <span className="flex items-center gap-2">
                  <Mail />
                  <span className="hidden sm:inline">kanpuriskcon@gmail.com</span>
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Bell />
                <span className="hidden md:inline">Temple Open: 4:30 AM - 9:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-4">
                            <img
                  src="/images/iskcon-logo.jpg"
                  alt="ISKCON Kanpur Logo"
                  className="w-20 h-20 object-contain"
                />

              <div>
                <h1 className="text-2xl font-bold text-gray-800">ISKCON Kanpur</h1>
                <p className="text-sm text-orange-600 font-medium">International Society for Krishna Consciousness</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <button onClick={() => window.location.href("https://iskcon-kanpur.vercel.app/")} className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Home</button>
              
              <div className="relative">
                <button 
                  onMouseEnter={() => setActiveDropdown('about')}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="flex items-center text-gray-700 hover:text-orange-600 font-medium transition-colors"
                >
                  About <ChevronDown />
                </button>
                {activeDropdown === 'about' && (
                  <div 
                    onMouseEnter={() => setActiveDropdown('about')}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute top-full left-0 bg-white shadow-2xl rounded-xl py-3 w-56 mt-2 border border-orange-100"
                  >
                    <button onClick={() => scrollToSection('philosophy')} className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">Our Philosophy</button>
                    
                    <button
  onClick={() => navigate('/founder')}
  className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
>
  Founder Acharya
</button>
<button className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">Temple History</button>
                    <button onClick={() => window.open("https://www.gopals.org.in/", "_blank")} className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">Children's Wing</button>
                  </div>
                )}
              </div>

              <button onClick={() => scrollToSection('programs')} className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Programs</button>
              <button onClick={() => scrollToSection('events')} className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Events</button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Gallery</button>
              <button onClick={() => scrollToSection('events')} className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Join Us!</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Contact</button>
              
              <button  onClick={() => window.open("https://pages.razorpay.com/AkshayaTritiya", "_blank")}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Donate Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-700"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl rounded-b-2xl border-t border-orange-100">
              <div className="py-6 px-4 space-y-4">
                <button onClick={() => window.location.href("https://iskcon-kanpur.vercel.app/")} className="block w-full text-left text-gray-700 hover:text-orange-600 py-2 font-medium">Home</button>
                <button onClick={() => scrollToSection('philosophy')} className="block w-full text-left text-gray-700 hover:text-orange-600 py-2 font-medium">About</button>
                <button onClick={() => scrollToSection('programs')} className="block w-full text-left text-gray-700 hover:text-orange-600 py-2 font-medium">Activities</button>
                <button onClick={() => scrollToSection('events')} className="block w-full text-left text-gray-700 hover:text-orange-600 py-2 font-medium">Events & Announcements</button>
                <button onClick={() => scrollToSection('gallery')} className="block w-full text-left text-gray-700 hover:text-orange-600 py-2 font-medium">Gallery</button>
                <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 hover:text-orange-600 py-2 font-medium">Join ISKCON</button>
                <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 hover:text-orange-600 py-2 font-medium">Contact</button>
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-full font-semibold mt-4">Donate Now</button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-32 p-20">
        {/* Fixed gradient background instead of missing image */}
        <div className="absolute inset-0 bg-cover bg-[url('/images/temple.jpg')]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center w-full">
          <div className="max-w-4xl mx-auto ">
            <div className="mb-8">
              {/* Prabhupada's photo */}
              <div className="w-64 h-64 mx-auto mb-6 rounded-full bg-white/20 border-4 border-amber-300 shadow-2xl overflow-hidden m-40">
                <img 
                  src="/images/prabhupad.png" 
                  alt="His Divine Grace A.C. Bhaktivedanta Swami Prabhupada"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            
            <div className='flex justify-center'> <h2 className="  text-2xl md:text-4xl lg:text-3xl  w-3xl p-5 font-bold text-black rounded-2xl bg-amber-50 mb-6 leading-tight">
              His Divine Grace A.C. Bhaktivedanta  Swami Prabhupada
            </h2>
           </div>
            <p className="text-lg md:text-xl text-black font-extrabold mb-8 max-w-xs mx-auto  bg-amber-100 rounded-2xl p-1">
              Founder-Acharya of the International Society for Krishna Consciousness (ISKCON)
              <br />
              <span className="text-black font-extrabold bg-amber-100 rounded-2xl p-1">(1896-1977)</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('biography')}
                className="bg-amber-600 hover:bg-amber-700 text-black px-6 py-3 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center shadow-lg"
              >
                <Book className="mr-2 w-5 h-5" />
                Read Biography
              </button>
              
              <button 
                onClick={() => scrollToSection('teachings')}
                className="bg-orange-600 hover:bg-orange-700 text-black px-6 py-3 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center shadow-lg"
              >
                <Quote className="mr-2 w-5 h-5" />
                His Teachings
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Extraordinary Life of Srila Prabhupada</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A pure devotee who dedicated his life to spreading the timeless message of Krishna consciousness throughout the world
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">A Mission of Love</h3>
                <p className="text-gray-700 mb-4">
                  At the age of 69, when most people retire, Srila Prabhupada embarked on a steamship journey to America with just $7 in his pocket and a crate of his books. His mission: to share the ancient wisdom of Krishna consciousness with the Western world.
                </p>
                <p className="text-gray-700 mb-4">
                  Within just 11 years, he established 108 temples across six continents, initiated over 10,000 disciples, and translated more than 60 volumes of ancient Vedic literature into English.
                </p>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-amber-200">
                  <h4 className="text-lg font-bold text-amber-800 mb-2">His Divine Instruction</h4>
                  <p className="text-gray-700 italic text-sm">
                    "My spiritual master ordered me to spread Krishna consciousness in the English language. So whatever I have done, it is simply to carry out his order."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white p-4 rounded-2xl shadow-md border border-orange-200 text-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <achievement.icon className="text-white w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-2">{achievement.title}</h4>
                  <p className="text-xs text-gray-600 mb-2">{achievement.description}</p>
                  <p className="text-orange-700 font-semibold text-xs">{achievement.stats}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="biography" className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Life Timeline</h2>
            <p className="text-lg text-gray-700">Key moments in the extraordinary life of Srila Prabhupada</p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start gap-4">
                {/* Year */}
                <div className="md:w-20 flex-shrink-0">
                  <span className="text-2xl font-bold text-orange-600">{item.year}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="bg-white p-6 rounded-2xl shadow-md border border-orange-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="text-lg font-semibold text-gray-800">{item.event}</h3>
                      <span className="text-sm text-gray-500 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Literary Legacy</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Srila Prabhupada's translations and commentaries on ancient Vedic texts remain the foundation of spiritual knowledge for millions worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-md">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded flex items-center justify-center">
                    <Book className="text-white w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{book.title}</h3>
                <div className="mb-3">
                  <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {book.volumes}
                  </span>
                </div>
                <p className="text-gray-700 text-sm">{book.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachings/Quotes Section */}
      <section id="teachings" className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">His Teachings</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Srila Prabhupada's words continue to inspire millions on the path of devotion, wisdom, and self-realization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quotes.map((quote, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-md border border-orange-200 flex flex-col items-center">
                <Quote />
                <p className="text-lg text-gray-800 italic mb-4 mt-4 text-center">"{quote.text}"</p>
                <span className="text-sm text-orange-700 font-semibold">{quote.context}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Footer */}
     <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
      {/* Logo and Description */}
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src="/images/iskcon-logo.png"
            alt="ISKCON Kanpur Logo"
            className="w-25 h-25 object-contain rounded-full bg-white transition-colors"
          />
          <div>
            <h3 className="text-xl font-bold">ISKCON Kanpur</h3>
            <p className="text-gray-300 text-sm">International Society for Krishna Consciousness</p>
          </div>
        </div>
        <p className="text-gray-300 mb-6 max-w-md">
          Dedicated to spreading the timeless wisdom of Krishna Consciousness and serving humanity through spiritual knowledge and devotional practices.
        </p>
        {/* Socials */}
        <span className="flex space-x-4 rounded-xl bg-yellow-400 w-3xs">
         <a
  href="https://www.instagram.com/iskcon_kanpur/"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-300 hover:border-2 transition-colors"
  aria-label="Instagram"
>
  <svg
    className="w-6 h-6 text-gray-800 dark:text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
      clipRule="evenodd"
    />
  </svg>
</a>
              
                   <a href="https://www.facebook.com/iskcon.kanpur.96"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-300 hover:border-2  transition-colors"
  aria-label="Facebook"
>
 <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
</svg>
                </a>
                <a
                   href="https://x.com/ISKCON_KANPUR"
                  target="_blank"
                   rel="noopener noreferrer"
  className="w-10 h-10 flex items-center justify-center rounded-full  hover:bg-gray-300 hover:border-2  transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
</svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/iskcon-kanpur/"
                  target="_blank"
                      rel="noopener noreferrer"
  className="w-10 h-10 flex items-center justify-center rounded-full  hover:bg-gray-300 hover:border-2  transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
  <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
</svg>
                </a>
                <a
                  href="https://www.youtube.com/@iskconkanpur"
                  target="_blank"
                  rel="noopener noreferrer"
  className="w-10 h-10 flex items-center justify-center rounded-full  hover:bg-gray-300 hover:border-2  transition-colors"
                  aria-label="YouTube"
                >
                 <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd"/>
</svg>
                </a>
    
        </span>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-black">
           {/* Quick Links */}
            <div>
  
  <ul className="space-y-2 text-black">
    <li>
      <button
        onClick={() => window.open("https://iskconkanpur.com/about-us/", "_blank")}
        className="hover:text-orange-400 transition-colors"
      >
        About Us
      </button>
    </li>
    <li>
      <button
        onClick={() => window.open("https://iskconkanpur.com/philosophy/", "_blank")}
        className="hover:text-orange-400 transition-colors"
      >
        Philosophy
      </button>
    </li>
    <li>
      <button
        onClick={() => window.open("https://iskconkanpur.com/programs/", "_blank")}
        className="hover:text-orange-400 transition-colors"
      >
        Programs
      </button>
    </li>
    <li>
      <button
        onClick={() => window.open("https://iskconkanpur.com/events/", "_blank")}
        className="hover:text-orange-400 transition-colors"
      >
        Events
      </button>
    </li>
    <li>
      <button
        onClick={() => window.open("https://iskconkanpur.com/gallery/", "_blank")}
        className="hover:text-orange-400 transition-colors"
      >
        Gallery
      </button>
    </li>
  </ul>
            </div>
        </ul>
      </div>

      {/* About Us (from image) */}
<div>
  <h4 className="text-lg font-semibold mb-4 text-white">About Us</h4>
  <ul className="space-y-2 text-black">
    <li>
      <a href="https://iskcon-kanpur.vercel.app/" className="hover:text-orange-400 transition-colors" target="_blank" rel="noopener noreferrer">
        ISKCON Kanpur
      </a>
    </li>
    <li>
      <a href="https://iskconkanpur.com/what-is-iskcon/" className="hover:text-orange-400 transition-colors" target="_blank" rel="noopener noreferrer">
        What is ISKCON?
      </a>
    </li>
    <li>
      <a href="https://iskconkanpur.com/author/admin/" className="hover:text-orange-400 transition-colors" target="_blank" rel="noopener noreferrer">
        Srila Prabhupada
      </a>
    </li>
    <li>
      <a href="https://www.iskconkanpur.com/ur/privacy-policy" className="hover:text-orange-400 transition-colors" target="_blank" rel="noopener noreferrer">
        Privacy Policy
      </a>
    </li>
    <li>
      <a href="https://www.iskconkanpur.com/ja/about-iskcon" className="hover:text-orange-400 transition-colors" target="_blank" rel="noopener noreferrer">
        Terms &amp; Conditions
      </a>
    </li>
  </ul>
</div>

{/* Booking (from image) */}
<div>
  <h4 className="text-lg font-semibold mb-4 text-white">Booking</h4>
  <ul className="space-y-2 text-black">
    <li>
      <a href="https://iskconkanpur.com/spiritual-discourses/" className="hover:text-orange-400 transition-colors" target="_blank" rel="noopener noreferrer">
        Katha
      </a>
    </li>
    <li>
      <a href="https://iskconkanpur.com/offer-puja/" className="hover:text-orange-400 transition-colors" target="_blank" rel="noopener noreferrer">
        Offer Puja
      </a>
    </li>
    <li>
      <a href="https://iskconkanpur.com/plan-a-visit/" className="hover:text-orange-400 transition-colors" target="_blank" rel="noopener noreferrer">
        Guest House
      </a>
    </li>
    <li>
      <a href="https://iskconkanpur.com/brahmana-bhoj-seva/" className="hover:text-orange-400 transition-colors" target="_blank" rel="noopener noreferrer">
        Brahmana Bhoj Seva
      </a>
    </li>
    <li>
      <a href="https://iskconkanpur.com/life-membership/" className="hover:text-orange-400 transition-colors" target="_blank" rel="noopener noreferrer">
        Join ISKCON Kanpur / Training
      </a>
    </li>
  </ul>
</div>

{/* Donate (from image) */}
<div>
  <h4 className="text-lg font-semibold mb-4 text-white">Donate</h4>
  <ul className="space-y-2 text-black">
    <li>
      <a href="https://iskconkanpur.com/donate__trashed/folk/" className="hover:text-orange-400 transition-colors" target="_blank" rel="noopener noreferrer">
        FOLK
      </a>
    </li>
    <li>
      <a href="https://iskconkanpur.com/donation/index.php" className="hover:text-orange-400 transition-colors" target="_blank" rel="noopener noreferrer">
        CSR
      </a>
    </li>
    <li>
      <a href="https://iskconkanpur.com/youth-activities/" className="hover:text-orange-400 transition-colors" target="_blank" rel="noopener noreferrer">
        Youth Activities
      </a>
    </li>
    <li>
      <a href="https://iskconkanpur.com/cow-protection/" className="hover:text-orange-400 transition-colors" target="_blank" rel="noopener noreferrer">
        Gau Seva
      </a>
    </li>
    <li>
      <a href="https://iskconkanpur.com/food-for-life/" className="hover:text-orange-400 transition-colors" target="_blank" rel="noopener noreferrer">
        Food for life
      </a>
    </li>
  </ul>
</div>

      {/* Contact Info */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Contact</h4>
        <div className="space-y-2 text-gray-300 text-sm">
          <p>Sri Sri Radha Madhava Mandir, Mainavati Marg, Bithoor Rd </p>
          <p>Kanpur, Uttar Pradesh 208002</p>
          <p>Phone: +91-7080007011</p>
          <p>Email: kanpuriskcon@gmail.com</p>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
      <p>&copy; 2025 ISKCON Kanpur. All rights reserved. | Hare Krishna Hare Krishna Krishna Krishna Hare Hare</p>
      <p>Made with Bhakti by Dhawal❤️</p>
    </div>
  </div>
</footer>

    </div>
  );
}

export default FounderAcharyaPage;