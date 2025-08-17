import React, { useState, useEffect } from 'react';
import Founder from "./founder";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ISKCONKanpur />} />
        <Route path="/founder" element={<Founder />} />
      </Routes>
    </Router>
  );
}

const ISKCONKanpur = () => {
  // Simple icon components
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

const Play = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5,3 19,12 5,21"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14"/>
    <path d="m12 5 7 7-7 7"/>
  </svg>
);

const Bell = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
  </svg>
);

  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Live temple status function
  const getTempleStatus = () => {
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    const currentTimeMinutes = hour * 60 + minute;
    
    const morningOpen = 4 * 60 + 30;
    const morningClose = 12 * 60 + 30;
    const eveningOpen = 16 * 60 + 15;
    const eveningClose = 21 * 60;
    
    if (currentTimeMinutes >= morningOpen && currentTimeMinutes <= morningClose) {
      if (hour >= 4 && hour < 6) {
        return {
          status: "OPEN",
          message: "Currently - Mangala Arati",
          color: "green",
          nextEvent: "Guru Puja at 07:30"
        };
      } else if (hour >= 6 && hour < 8) {
        return {
          status: "OPEN",
          message: "Currently - Guru Puja & Bhagavatam Class",
          color: "green",
          nextEvent: "Raj Bhoga Arati at 12:00"
        };
      } else {
        return {
          status: "OPEN",
          message: "Currently - Morning Darshan",
          color: "green",
          nextEvent: "Temple closes at 12:30 PM"
        };
      }
    } else if (currentTimeMinutes >= eveningOpen && currentTimeMinutes <= eveningClose) {
      if (hour >= 16 && hour < 18) {
        return {
          status: "OPEN",
          message: "Currently - Evening Darshan",
          color: "green",
          nextEvent: "Sandhya Arati at 07:00 PM"
        };
      } else if (hour >= 18 && hour < 19) {
        return {
          status: "OPEN",
          message: "Currently - Sandhya Arati",
          color: "green",
          nextEvent: "Bhagavad Gita Class at 07:30 PM"
        };
      } else {
        return {
          status: "OPEN",
          message: "Currently - Bhagavad Gita Class",
          color: "green",
          nextEvent: "Temple closes at 09:00 PM"
        };
      }
    } else {
      return {
        status: "CLOSED",
        message: "Opens in the Scheduled Timings",
        color: "red",
        nextEvent: "Check the events"
      };
    }
  };

  const templeStatus = getTempleStatus();

  const events = [
    {
      date: "25",
      month: "AUG",
      title: "Krishna Janmashtami",
      time: "6:00 AM - 11:00 PM",
      location: "Main Temple Hall"
    },
    {
      date: "28",
      month: "AUG",
      title: "Bhagavad Gita Study",
      time: "7:00 PM - 8:30 PM",
      location: "Community Hall"
    },
    {
      date: "2",
      month: "SEP",
      title: "Sunday Feast",
      time: "5:00 PM - 8:00 PM",
      location: "Temple Premises"
    }
  ];

  const programs = [
    {
      icon: Book,
      title: "Bhagavad Gita Classes",
      description: "Daily spiritual discourse on Krishna's teachings from the sacred Bhagavad Gita",
      time: "7:00 AM & 7:00 PM"
    },
    {
      icon: Users,
      title: "Congregational Chanting",
      description: "Join our community in divine kirtan and experience the power of holy names",
      time: "6:30 AM & 6:30 PM"
    },
    {
      icon: Heart,
      title: "Food for Life",
      description: "Free sanctified meals served with love to devotees and community members",
      time: "12:00 PM - 2:00 PM"
    }
  ];

const scheduleData = [
  {
    time: "04:30 AM",
    program: "Mangala Aarti",
    description: "Early morning worship and prayers"
  },
  {
    time: "05:00 AM",
    program: "Tulsi Aarti",
    description: "Worship of Tulsi Maharani"
  },
  {
    time: "07:30 AM",
    program: "Sringar Aarti",
    description: "Morning dressing and decoration of the deities"
  },
  {
    time: "07:35 AM",
    program: "Guru Puja",
    description: "Offering respects to the spiritual master"
  },
  {
    time: "08:00 AM",
    program: "Srimad Bhagavatam Class",
    description: "Scriptural discourse and learning"
  },
  {
    time: "12:30 PM",
    program: "Raj Bhog Aarti",
    description: "Main midday offering and worship"
  },
  {
    time: "01:04 PM",
    program: "Temple Closes",
    description: "Afternoon temple closing"
  },
  {
    time: "04:00 PM",
    program: "Uthan Aarti",
    description: "Waking the Lord and evening worship"
  },
  {
    time: "06:45 PM",
    program: "Tulsi Aarti",
    description: "Evening worship of Tulsi Maharani"
  },
  {
    time: "07:00 PM",
    program: "Sandhya Aarti",
    description: "Evening worship ceremony"
  },
  {
    time: "08:30 PM",
    program: "Temple Close",
    description: "End of daily darshan and programs"
  }
];

const gallery = [
  { id: 1, title: "Sri Radha Krishna Darshan", category: "morning aarti", image: "/images/krishna1.jpg" },
  { id: 2, title: "Bhajan Kirtan", category: "devotional music", image: "/images/krishna2.jpg" },
  { id: 3, title: "Temple Decoration", category: "festivals", image: "/images/krishna3.jpg" },
  { id: 4, title: "Govardhan Puja", category: "celebration", image: "/images/krishna4.jpg" },
  { id: 5, title: "Janmashtami", category: "festival", image: "/images/krishna5.jpg" },
  { id: 6, title: "Sri Radha Rani", category: "darshan", image: "/images/krishna6.jpg" },
];


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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

  return (
    <div className="min-h-screen bg-white">
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

      {/* Hero Section - Temple Layout */}
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">

      <div className="absolute inset-0">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: 'url("images/krishnji.jpg")',
    }}
  >
    <div className="absolute inset-0 bg-black/30"></div>
  </div>
</div>


        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center p-10 mt-100">
          <div className="max-w-5xl mx-auto">
            
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mt-45 mb-16 leading-tight drop-shadow-2xl">
              Sri Sri Radha Madhav Temple
            </h1>

            {/* Temple Status Card */}
            <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 mb-16 shadow-2xl border-2 border-yellow-300">
              <div className="flex items-center justify-center mb-6">
                <div className={`w-5 h-5 rounded-full mr-4 animate-pulse ${
                  templeStatus.color === 'green' ? 'bg-green-500' : 'bg-red-500'
                }`}></div>
                <span className="text-xl md:text-2xl font-bold text-gray-900">
                  {templeStatus.status} - {templeStatus.message}
                </span>
              </div>
              
              <div className="text-gray-700 mb-6">
                <p className="text-lg font-semibold mb-3 text-amber-800">Open all days from</p>
                <p className="text-xl font-bold text-gray-900">4:30 am - 12:30 pm | 4:15 pm - 9:00 pm IST</p>
              </div>

              <div className="text-sm text-gray-600 mb-8">
                <p className="mb-1 font-medium">Next: <span className="text-amber-700">{templeStatus.nextEvent}</span></p>
                <p className="font-medium">Current Time: <span className="text-amber-700">{currentTime.toLocaleTimeString('en-IN', { 
                  timeZone: 'Asia/Kolkata',
                  hour12: true,
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit'
                })}</span></p>
              </div>

              <button 
                onClick={() => scrollToSection('contact')}
                className="text-amber-700 hover:text-amber-800 font-bold text-lg underline transition-colors bg-amber-100 px-6 py-2 rounded-full hover:bg-amber-200"
              >
                View Temple Schedule
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
  onClick={() => window.location.href = "tel:+917080007011"}
  className="group bg-amber-600 hover:bg-amber-700 text-black px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center shadow-lg"
>
  <Phone />
  <span className="ml-2">Call Us</span>
</button>

              <button 
                onClick={() => scrollToSection('contact')}
                className="group bg-orange-600 hover:bg-orange-700 text-black px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center shadow-lg"
              >
                <MapPin />
                <span className="ml-2">Navigate</span>
              </button>
              
              <button className="group bg-red-600 hover:bg-red-700 text-black px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center shadow-lg">
                <Play />
                <span className="ml-2 " >Watch LIVE</span>
              </button>
            </div>
          </div>
        </div>

        {/* Floating + Button */}
        <div className="absolute bottom-8 right-8">
  <button onClick={() => window.open("")}
  className="w-16 h-16 bg-amber-600 hover:bg-amber-700 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center overflow-hidden">
    <img 
      src="/images/morpankh.jpg" 
      alt="Chatbot" 
      className="w-12 h-12 object-cover" 
    />
  </button>
</div>

      </section>

      {/* Temple Schedule Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Daily Temple Schedule</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">Experience the divine rhythm of temple life through our daily spiritual programs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scheduleData.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border-2 border-amber-200 hover:shadow-lg hover:border-amber-300 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-amber-100 rounded-full mr-3">
                    <Clock />
                  </div>
                  <span className="text-lg font-bold text-amber-700">{item.time}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.program}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Philosophy</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">Discover the timeless wisdom of Krishna Consciousness and its transformative power</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">The Essence of Bhakti Yoga</h3>
                <div className="space-y-6 text-lg text-gray-700">
                  <p>Krishna Consciousness is the original consciousness of every living being. It is eternal, full of knowledge and bliss. Through the practice of Bhakti Yoga, we can revive this dormant consciousness.</p>
                  <p>The International Society for Krishna Consciousness (ISKCON) was founded by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada in 1966 to teach this ancient science of God realization.</p>
                  <div className="bg-amber-50 p-6 rounded-2xl shadow-sm border-2 border-amber-200">
                    <h4 className="text-xl font-bold text-amber-800 mb-4">Four Pillars of Spiritual Life</h4>
                     <ul className="space-y-2">
                      <li className="flex items-center text-gray-800">
                        <ChevronRight className="text-amber-600 mr-2" /> अहिंसक आहार (No Meat Eating)
                      </li>
                      <li className="flex items-center text-gray-800">
                        <ChevronRight className="text-amber-600 mr-2" /> जुआ-विनिवृत्ति (No Gambling)
                      </li>
                      <li className="flex items-center text-gray-800">
                        <ChevronRight className="text-amber-600 mr-2" /> शुचिता का पालन (Brahmacharya)
                      </li>
                      <li className="flex items-center text-gray-800">
                        <ChevronRight className="text-amber-600 mr-2" /> मादक-वर्जन (No Intoxication)
                      </li>
                    </ul>

                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-amber-200">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Daily Practice</h4>
                  <p className="text-gray-700 mb-6">Chanting the Hare Krishna mantra, studying sacred texts, and offering devotional service are the foundation of spiritual growth.</p>
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-6 rounded-xl">
                      <p className="font-bold text-lg mb-1">Hare Krishna Hare Krishna</p>
                      <p className="font-bold text-lg mb-1">Krishna Krishna Hare Hare</p>
                      <p className="font-bold text-lg mb-1">Hare Rama Hare Rama</p>
                      <p className="font-bold text-lg">Rama Rama Hare Hare</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-amber-200">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Sacred Texts</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Book className="text-amber-600 mr-3" />
                      <span className="text-gray-800 font-semibold">Bhagavad Gita As It Is</span>
                    </div>
                    <div className="flex items-center">
                      <Book className="text-amber-600 mr-3" />
                      <span className="text-gray-800 font-semibold">Srimad Bhagavatam</span>
                    </div>
                    <div className="flex items-center">
                      <Book className="text-amber-600 mr-3" />
                      <span className="text-gray-800 font-semibold">Sri Chaitanya Charitamrita</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Spiritual Programs</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">Join our diverse spiritual activities designed to nurture your soul and connect with the divine</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl border-2 border-orange-200 hover:shadow-2xl hover:border-orange-300 transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <program.icon />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                  <div className="flex items-center justify-center text-orange-700 font-semibold mb-4">
                    <Clock />
                    <span className="ml-2">{program.time}</span>
                  </div>
                </div>
                <p className="text-gray-700 text-center mb-6">{program.description}</p>
                <div className="text-center">
                  <button className="bg-orange-600 hover:bg-orange-700  px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Join us for these special celebrations and spiritual gatherings</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg border border-blue-100 hover:shadow-2xl transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-2xl p-4 inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-3xl font-bold">{event.date}</div>
                    <div className="text-sm font-semibold">{event.month}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{event.title}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center text-gray-600">
                    <Clock />
                    <span className="ml-2">{event.time}</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <MapPin />
                    <span className="ml-2">{event.location}</span>
                  </div>
                </div>

                <div className="text-center">
                  <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Gallery Section */}
<section id="gallery" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Temple Gallery</h2>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto">Explore moments from our vibrant temple life and festivals</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {gallery.map((item) => (
        <div
          key={item.id}
          className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-100 to-red-100 aspect-square hover:shadow-2xl transition-all duration-300"
          style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-gray-600 group-hover:text-white transition-colors duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm capitalize">{item.category}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="text-center mt-12">
      <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
        View Full Gallery
      </button>
    </div>
  </div>
</section>

 {/* CSR Section */}
 <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-left mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            OUR CSR ACTIVITIES
          </h2>
          <p className="mt-2 text-lg text-orange-600 font-medium">
            CHOOSE CHARITY : CHOOSE LOVE
          </p>
          <ul className="mt-4 space-y-2 text-gray-700 font-semibold">
            <li className="flex items-center gap-2">
              <span className="text-orange-500">✔</span> Food For Life
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-500">✔</span> Youth Programs
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-500">✔</span> Cow Protection
            </li>
          </ul>
        </div>
        
        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative group">
            <img
              src="/images/youth.jpg"
              alt="Youth Activities"
              className="rounded-xl shadow-lg w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="relative group">
            <img
              src="/images/food.jpg"
              alt="Food Distribution"
              className="rounded-xl shadow-lg w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <p>Contact: +91-9198279554 for CSR Contributions</p>
        </div>
      </div>
    </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Visit Our Temple</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Come and experience the divine atmosphere of our temple community</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Temple Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-orange-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                      <p className="text-gray-600">Sri Sri Radha Madhava Mandir, Mainavati Marg, Bithoor Rd



<br />Kanpur, Uttar Pradesh 208001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-orange-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                      <p className="text-gray-600">+91-7080007011</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-orange-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                      <p className="text-gray-600">kanpuriskcon@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="text-orange-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Temple Timings</h4>
                      <p className="text-gray-600">Morning: 4:30 AM - 12:30 PM<br />Evening: 4:15 PM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
  onClick={() => window.location.href = "tel:+91708007011"}
  className="bg-green-600 hover:bg-green-700 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
>
  <Phone className="mr-2" />
  Call Now
</button>

<button
  onClick={() => window.open("https://maps.app.goo.gl/KqF9JVj8mn9z371g9", "_blank")}
  className="bg-blue-600 hover:bg-blue-700 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
>
  <MapPin className="mr-2" />
  Directions
</button>

<button
  onClick={() => window.location.href = "mailto:kanpuriskcon@gmail.com"}
  className="bg-purple-600 hover:bg-purple-700 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
>
  <Mail className="mr-2" />
  Email Us
</button>

                  <button
                    onClick={() => window.open("https://iskconkanpur.com/donation/index.php", "_blank")}
                    className="bg-red-600 hover:bg-red-700 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Heart className="mr-2" />
                    Donate
                  </button>

                </div>
              </div>
            </div>

            {/* Map */}
      <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
  <h3 className="text-2xl font-bold text-gray-800 mb-6">Find Us</h3>
  <div className="aspect-video rounded-4xl overflow-hidden border border-gray-200">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.787879171088!2d80.27514727510864!3d26.52694577656297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c39d8f22f66b3%3A0x9fd821e7fd74b3f5!2sISKCON%20Kanpur%20Temple!5e0!3m2!1sen!2sin!4v1755417339014!5m2!1sen!2sin"
      className="w-full h-full border-0"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>


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
      <a href="https://iskconkanpur.com/" className="hover:text-orange-400 transition-colors" target="_blank" rel="noopener noreferrer">
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
};

export default App;