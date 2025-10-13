import React, { useState, useEffect } from 'react';
import { ChevronUpIcon } from './icons';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-24 right-6 bg-church-maroon text-white p-3 rounded-full shadow-lg hover:bg-church-maroon-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-church-maroon transition-all duration-300 z-40 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`}
      aria-label="Scroll to top"
    >
      <ChevronUpIcon className="h-6 w-6" />
    </button>
  );
};

export default ScrollToTopButton;
