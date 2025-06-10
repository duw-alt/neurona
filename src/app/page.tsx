"use client";
import Image from "next/image";
import { useState } from "react";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import { AnimatedCard } from "./components/AnimatedCard";
import {
  ClockIcon,
  ArrowPathIcon,
  BookOpenIcon,
  BellIcon,
  UserGroupIcon,
  DevicePhoneMobileIcon,
  CheckCircleIcon,
  XCircleIcon
} from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Scroll animation refs
  const heroRef = useScrollAnimation({ animationType: 'fade-in' });
  const techniquesRef = useScrollAnimation({ animationType: 'slide-up', delay: 200 });
  const scienceRef = useScrollAnimation({ animationType: 'slide-up', delay: 200 });
  const pricingRef = useScrollAnimation({ animationType: 'slide-up', delay: 200 });
  const ctaRef = useScrollAnimation({ animationType: 'fade-in', delay: 200 });

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[var(--accent)] min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10 animate-fade-in">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 lg:px-0">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/logo.png" alt="Neurona Logo" width={50} height={50} />
            <span className="font-bold text-lg text-[var(--primary)] tracking-wide">Neurona</span>
          </div>
          <nav className="hidden md:flex gap-8 text-[var(--foreground)] font-medium">
            <a href="#techniques" className="hover:text-[var(--primary)] transition-all cursor-pointer">Techniques</a>
            <a href="#science" className="hover:text-[var(--primary)] transition-all cursor-pointer">Science</a>
            <a href="#pricing" className="hover:text-[var(--primary)] transition-all cursor-pointer">Pricing</a>
          </nav>
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex gap-2">
              <button className="border border-[var(--primary)] text-[var(--primary)] px-4 py-1.5 rounded-md font-semibold hover:bg-[var(--accent)] transition-all cursor-pointer">Sign In</button>
              <button className="bg-[var(--primary)] text-white px-4 py-1.5 rounded-md font-semibold hover:bg-[var(--primary-dark)] transition-all cursor-pointer">Get Started</button>
            </div>
            <button className="sm:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
              <svg className="w-7 h-7 text-[var(--primary)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="sm:hidden bg-white border-t border-gray-100 px-4 pb-4 animate-slide-up">
            <nav className="flex flex-col gap-2 text-[var(--foreground)] font-medium">
              <a href="#techniques" className="hover:text-[var(--primary)] transition-all cursor-pointer" onClick={() => setMenuOpen(false)}>Techniques</a>
              <a href="#science" className="hover:text-[var(--primary)] transition-all cursor-pointer" onClick={() => setMenuOpen(false)}>Science</a>
              <a href="#pricing" className="hover:text-[var(--primary)] transition-all cursor-pointer" onClick={() => setMenuOpen(false)}>Pricing</a>
              <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-gray-100">
                <button className="border border-[var(--primary)] text-[var(--primary)] px-4 py-1.5 rounded-md font-semibold hover:bg-[var(--accent)] transition-all cursor-pointer">Sign In</button>
                <button className="bg-[var(--primary)] text-white px-4 py-1.5 rounded-md font-semibold hover:bg-[var(--primary-dark)] transition-all cursor-pointer">Get Started</button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="bg-[var(--accent)] py-12 sm:py-16 text-center flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--foreground)] mb-2">Elevate Your Study Experience</h1>
        <p className="italic text-[var(--foreground)] mb-4">Powered by Neuroscience, Designed for You</p>
        <p className="max-w-xl mx-auto text-[var(--foreground)] mb-6">Discover research-backed study techniques to enhance your learning efficiency and academic performance.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md">
          <button className="bg-[var(--primary)] text-white px-6 py-2 rounded-md font-semibold hover:bg-[var(--primary-dark)] transition-all cursor-pointer hover-lift">Explore Techniques</button>
          <button 
            onClick={scrollToPricing}
            className="border border-[var(--primary)] text-[var(--primary)] px-6 py-2 rounded-md font-semibold hover:bg-[var(--accent)] transition-all cursor-pointer hover-lift"
          >
            View Pricing
          </button>
        </div>
      </section>

      {/* Techniques Section */}
      <section ref={techniquesRef} id="techniques" className="py-12 sm:py-16 bg-white px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-[var(--foreground)] mb-8 sm:mb-10">Study Techniques That Work</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              icon: ClockIcon,
              title: "Ultradian Rhythm Breaks",
              description: "Optimize your focus with 60-120 minute work sessions followed by strategic breaks to align with your brain's natural energy cycles."
            },
            {
              icon: ArrowPathIcon,
              title: "Retrieval Practice",
              description: "Strengthen memory retention with personalized quizzes designed to help you actively recall information rather than passive review."
            },
            {
              icon: BookOpenIcon,
              title: "Feynman Technique",
              description: "Master complex topics by explaining problems in simple terms to our AI chatbot, identifying gaps in your understanding."
            },
            {
              icon: BellIcon,
              title: "Spaced Repetition",
              description: "Receive smart notifications to review material at scientifically-optimized intervals (1, 3, and 7 days) for maximum retention."
            },
            {
              icon: UserGroupIcon,
              title: "Study Matching",
              description: "Find study partners with our tinder-style matching system to discuss course material and enhance collaborative learning."
            },
            {
              icon: DevicePhoneMobileIcon,
              title: "Mobile Access",
              description: "Coming soon: Take your study techniques on the go with our mobile app, ensuring consistent learning anywhere."
            }
          ].map((technique, index) => (
            <AnimatedCard
              key={index}
              index={index}
              className="bg-[var(--accent)] rounded-lg p-6 shadow-sm flex flex-col gap-2 hover-lift transition-all cursor-pointer"
            >
              <div className="bg-[var(--accent)] w-10 h-10 flex items-center justify-center rounded-full mb-2">
                <technique.icon className="w-6 h-6 text-[var(--primary)]" />
              </div>
              <h3 className="font-bold text-lg text-[var(--foreground)]">{technique.title}</h3>
              <p className="text-[var(--foreground)] text-sm">{technique.description}</p>
              <a href="#" className="text-[var(--primary)] font-semibold text-sm mt-2 hover:underline cursor-pointer">Learn More →</a>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* Science Section */}
      <section ref={scienceRef} id="science" className="bg-[var(--accent)] py-12 sm:py-16 px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-[var(--foreground)] mb-6 sm:mb-8">The Science Behind Neurona</h2>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 order-2 md:order-1 w-full animate-slide-up">
            <h3 className="font-bold text-lg sm:text-xl text-[var(--foreground)] mb-2">Research-Backed Methodology</h3>
            <p className="text-[var(--foreground)] mb-4">Each technique in Neurona is grounded in cognitive science and educational psychology. We&apos;ve analyzed decades of research on learning and memory to create a platform that works with your brain&apos;s natural processes.</p>
            <p className="text-[var(--foreground)] mb-4">Every lecture includes access to detailed research articles explaining the science behind why these techniques are effective, helping you understand not just how to study, but why certain approaches yield better results.</p>
            <button className="bg-[var(--primary)] text-white px-5 py-2 rounded-md font-semibold hover:bg-[var(--primary-dark)] transition-all cursor-pointer hover-lift">Explore Research Articles</button>
          </div>
          <div className="flex-1 flex justify-center order-1 md:order-2 w-full mb-6 md:mb-0 animate-scale-in">
            <Image src="/brain.png" alt="Brain" width={350} height={250} className="rounded-lg shadow-md object-cover w-full max-w-xs sm:max-w-sm md:max-w-md hover-lift transition-all" />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} id="pricing" className="py-12 sm:py-16 bg-white px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-[var(--foreground)] mb-8 sm:mb-10">Choose Your Plan</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Free Trial",
              price: "FREE",
              features: [
                "3 days access",
                "1 study technique only",
                "1 research article",
                "Feynman technique (1 time)",
                "Personalized study plan",
                "Social matching",
                "Spaced repetition"
              ],
              buttonText: "Start Free Trial",
              popular: false
            },
            {
              title: "Premium",
              price: "$9.99",
              period: "/month",
              features: [
                "Full access to all techniques",
                "All research articles",
                "Adaptive study plan",
                "Feynman technique (1x/day, Mode 1)",
                "Unlimited social matching",
                "Motivation tracker + badges",
                "Progress tracking",
                "Voice interaction (1 time)",
                "Support (3 times)",
                "Spaced repetition notifications"
              ],
              buttonText: "Get Premium",
              popular: true
            },
            {
              title: "Pro",
              price: "$4.99",
              period: "/month",
              yearlyPrice: "or $49.99/year",
              features: [
                "Everything in Premium",
                "Enhanced adaptive study plan",
                "Unlimited Feynman in both modes",
                "Fully customizable spaced repetition",
                "Exclusive badges",
                "Detailed progress tracking",
                "Full voice interaction access",
                "Priority support"
              ],
              buttonText: "Get Pro",
              popular: false
            }
          ].map((plan, index) => (
            <AnimatedCard
              key={index}
              index={index}
              className={`bg-[var(--accent)] rounded-lg p-8 shadow-sm flex flex-col items-center border ${
                plan.popular 
                  ? 'border-[var(--primary)] border-2 scale-105' 
                  : 'border-gray-200'
              } hover-lift transition-all cursor-pointer`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--primary)] text-white text-xs px-3 py-1 rounded-full font-semibold">Popular</span>
              )}
              <h3 className="font-bold text-lg text-[var(--foreground)] mb-2">{plan.title}</h3>
              <span className="text-[var(--primary)] font-bold text-3xl mb-2">{plan.price}<small className="text-base font-normal">{plan.period}</small></span>
              {plan.yearlyPrice && <span className="text-gray-500 text-xs mb-2">{plan.yearlyPrice}</span>}
              <ul className="text-[var(--foreground)] text-sm mb-6 space-y-2 w-full">
                {plan.features.map((feature, i) => (
                  <li key={i} className={`flex items-center gap-2 ${i >= 4 && !plan.popular ? 'text-gray-400' : ''}`}>
                    {i >= 4 && !plan.popular ? (
                      <XCircleIcon className="w-5 h-5 text-gray-400" />
                    ) : (
                      <CheckCircleIcon className="w-5 h-5 text-green-500" />
                    )}
                    <span className={i >= 4 && !plan.popular ? 'line-through' : ''}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-[var(--primary)] text-white px-5 py-2 rounded-md font-semibold hover:bg-[var(--primary-dark)] transition-all cursor-pointer hover-lift">{plan.buttonText}</button>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="bg-[var(--primary-light)] py-8 sm:py-12 text-center text-white px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Ready to Transform Your Study Habits?</h2>
        <p className="mb-6">Join thousands of students who have improved their academic performance with Neurona&apos;s research-backed techniques.</p>
        <button className="bg-white text-[var(--primary)] px-6 py-2 rounded-md font-semibold hover:bg-[var(--accent)] transition-all cursor-pointer hover-lift">Start Your Free Trial Today</button>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--foreground)] text-white py-8 sm:py-10 mt-auto px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 px-0">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2 mb-2 cursor-pointer">
              <Image src="/logo.png" alt="Neurona Logo" width={32} height={32} />
              <span className="font-bold text-lg tracking-wide">Neurona</span>
            </div>
            <p className="text-sm text-gray-300 max-w-xs mb-2">Powered by Neuroscience, Designed for You. Neurona helps students optimize their learning with research-backed study techniques.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                <FontAwesomeIcon icon={faFacebook} className="w-8 h-8" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                <FontAwesomeIcon icon={faGithub} className="w-8 h-8" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                <FontAwesomeIcon icon={faLinkedinIn} className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 flex-1">
            {[
              {
                title: "Study Techniques",
                items: ["Ultradian Rhythm", "Retrieval Practice", "Feynman Technique", "Spaced Repetition", "Study Matching"]
              },
              {
                title: "Company",
                items: ["About Us", "Our Team", "Careers", "Contact"]
              },
              {
                title: "Resources",
                items: ["Research Articles", "Blog", "Help Center", "Privacy Policy", "Terms of Service"]
              }
            ].map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-2">{section.title}</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  {section.items.map((item, i) => (
                    <li key={i} className="hover:text-[var(--primary-light)] transition-all cursor-pointer">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-8">© 2025 Neurona. All rights reserved.</div>
      </footer>
    </div>
  );
}
