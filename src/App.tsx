/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Scissors, 
  Star, 
  CheckCircle, 
  Menu, 
  X, 
  ChevronRight,
  Clock,
  Award,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const GOLD = '#D4AF37';

const services = [
  { title: 'Haircut & Hair Styling', description: 'Precision cuts and modern styling for all hair types.', icon: <Scissors className="w-8 h-8" /> },
  { title: 'Hair Coloring & Treatments', description: 'Premium colors and nourishing treatments for vibrant hair.', icon: <Zap className="w-8 h-8" /> },
  { title: 'Hair Spa', description: 'Relaxing and rejuvenating spa sessions for healthy scalp.', icon: <ShieldCheck className="w-8 h-8" /> },
  { title: 'Beard Grooming & Shaving', description: 'Classic and modern beard styles with expert precision.', icon: <Scissors className="w-8 h-8" /> },
  { title: 'Facial & Skin Care', description: 'Luxury facials and skin treatments for a glowing look.', icon: <Award className="w-8 h-8" /> },
  { title: 'Manicure & Pedicure', description: 'Complete hand and foot care with premium products.', icon: <CheckCircle className="w-8 h-8" /> },
  { title: 'Bridal & Party Makeup', description: 'Exquisite makeup for your most special occasions.', icon: <Star className="w-8 h-8" /> },
];

const testimonials = [
  { name: 'Priya Sharma', rating: 5, text: 'The best salon experience in Chandivali! The stylists are professional and the hygiene is top-notch.' },
  { name: 'Rahul Mehta', rating: 5, text: 'Excellent beard grooming. They really know their craft. Highly recommended for men.' },
  { name: 'Anjali Gupta', rating: 4, text: 'Got a hair spa and facial. Feeling rejuvenated! The gold-themed interior is beautiful.' },
];

const galleryImages = [
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800',
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <span className="text-2xl font-bold tracking-tighter text-white">
              i <span style={{ color: GOLD }}>infinity</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {['About', 'Services', 'Gallery', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-white/80 hover:text-[#D4AF37] transition-colors uppercase tracking-widest"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#D4AF37] text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-white transition-all transform hover:scale-105"
            >
              BOOK NOW
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-black border-t border-white/10 py-6 md:hidden"
            >
              <div className="flex flex-col items-center space-y-6">
                {['About', 'Services', 'Gallery', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-lg font-medium text-white uppercase tracking-widest"
                  >
                    {item}
                  </button>
                ))}
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-[#D4AF37] text-black px-8 py-3 rounded-full text-lg font-bold"
                >
                  BOOK NOW
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=1920" 
            alt="Salon Background" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-4 tracking-tighter">
              i <span style={{ color: GOLD }}>infinity</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10 font-light italic tracking-widest">
              Style Without Limits
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full md:w-auto bg-[#D4AF37] text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:scale-105 shadow-xl"
              >
                Book Appointment
              </button>
              <a 
                href="tel:+918879379869"
                className="w-full md:w-auto border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black transition-all transform hover:scale-105"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800" 
                  alt="Stylist at work" 
                  className="rounded-2xl shadow-2xl relative z-10"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#D4AF37] rounded-2xl z-0"></div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-sm font-bold text-[#D4AF37] uppercase tracking-[0.3em] mb-4">About Us</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Premium Care for Your Unique Style</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Welcome to i infinity unisex salon, where we believe style has no limits. Located in the heart of Raheja Vihar, Chandivali, we offer a sanctuary of beauty and grooming for both men and women.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our team of experienced stylists combines modern hair styling techniques with premium salon services to ensure you leave looking and feeling your absolute best. We prioritize customer satisfaction, hygiene, and professional care in every service we provide.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-[#D4AF37]" />
                  <span className="font-bold">Expert Stylists</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-[#D4AF37]" />
                  <span className="font-bold">Premium Products</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-[#D4AF37]" />
                  <span className="font-bold">Hygienic Setup</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-[#D4AF37]" />
                  <span className="font-bold">Modern Tech</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-[#D4AF37] uppercase tracking-[0.3em] mb-4">Our Services</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Exquisite Salon Services</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-all group"
              >
                <div className="text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-black text-[#D4AF37] rounded-full flex items-center justify-center mb-6">
                <Scissors />
              </div>
              <h5 className="font-bold mb-2">Expert Stylists</h5>
              <p className="text-sm text-gray-500">Highly trained professionals</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-black text-[#D4AF37] rounded-full flex items-center justify-center mb-6">
                <ShieldCheck />
              </div>
              <h5 className="font-bold mb-2">Premium Products</h5>
              <p className="text-sm text-gray-500">Only the best brands</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-black text-[#D4AF37] rounded-full flex items-center justify-center mb-6">
                <CheckCircle />
              </div>
              <h5 className="font-bold mb-2">Hygienic Environment</h5>
              <p className="text-sm text-gray-500">Clean and sanitized</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-black text-[#D4AF37] rounded-full flex items-center justify-center mb-6">
                <Zap />
              </div>
              <h5 className="font-bold mb-2">Affordable Pricing</h5>
              <p className="text-sm text-gray-500">Luxury at great value</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-black text-[#D4AF37] rounded-full flex items-center justify-center mb-6">
                <Star />
              </div>
              <h5 className="font-bold mb-2">Customer Satisfaction</h5>
              <p className="text-sm text-gray-500">Our top priority</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-[#D4AF37] uppercase tracking-[0.3em] mb-4">Gallery</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Our Work & Interior</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-2xl aspect-square group cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${index}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 border-2 border-[#D4AF37] rounded-full flex items-center justify-center text-white">
                    <ChevronRight />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-[#D4AF37] uppercase tracking-[0.3em] mb-4">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-bold">What Our Clients Say</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div key={index} className="p-8 bg-white/5 rounded-2xl border border-white/10">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < t.rating ? 'text-[#D4AF37] fill-[#D4AF37]' : 'text-gray-600'}`} />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{t.text}"</p>
                <h5 className="font-bold text-[#D4AF37]">{t.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold text-[#D4AF37] uppercase tracking-[0.3em] mb-4">Contact Us</h2>
              <h3 className="text-4xl font-bold mb-8">Get In Touch</h3>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="bg-black text-[#D4AF37] p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Call Us</h5>
                    <a href="tel:+918879379869" className="text-gray-600 hover:text-[#D4AF37] transition-colors">+91 8879379869</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-black text-[#D4AF37] p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Visit Us</h5>
                    <p className="text-gray-600">Shop no 5, Sun Grace, Raheja Vihar, Chandivali, Andheri East, Mumbai, Maharashtra 400072</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-black text-[#D4AF37] p-3 rounded-lg">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Opening Hours</h5>
                    <p className="text-gray-600">Mon - Sun: 10:00 AM - 09:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden h-64 shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.967399564265!2d72.8943720752061!3d19.109151582103507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c87340000001%3A0x7d6f5f3e9f8f8f8f!2si%20infinity%20unisex%20salon!5e0!3m2!1sen!2sin!4v1710712345678!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-gray-50 p-10 rounded-3xl border border-gray-200">
                <h4 className="text-2xl font-bold mb-6">Book an Appointment</h4>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-bold mb-2 uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 uppercase tracking-wider">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 uppercase tracking-wider">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors"
                      placeholder="Tell us what service you're looking for"
                    ></textarea>
                  </div>
                  <button className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-[#D4AF37] hover:text-black transition-all shadow-lg">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-2xl font-bold tracking-tighter">
                  i <span style={{ color: GOLD }}>infinity</span>
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Premium unisex salon offering expert hair styling, grooming, and skin care services. Style without limits.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://wa.me/918879379869" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h5 className="text-lg font-bold mb-6 text-[#D4AF37]">Quick Links</h5>
              <ul className="space-y-4 text-gray-400">
                <li><button onClick={() => scrollToSection('hero')} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('gallery')} className="hover:text-white transition-colors">Gallery</button></li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-bold mb-6 text-[#D4AF37]">Services</h5>
              <ul className="space-y-4 text-gray-400">
                <li>Hair Styling</li>
                <li>Hair Coloring</li>
                <li>Beard Grooming</li>
                <li>Skin Care</li>
                <li>Makeup</li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-bold mb-6 text-[#D4AF37]">Contact Info</h5>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <span>Raheja Vihar, Chandivali, Andheri East, Mumbai</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <span>+91 8879379869</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} i infinity unisex salon. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/918879379869"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
