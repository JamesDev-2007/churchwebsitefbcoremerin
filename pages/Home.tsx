import React from 'react';
import { NavLink } from 'react-router-dom';
import Countdown from '../components/Countdown';
import DailyBibleVerse from '../components/DailyBibleVerse';
import { events as mockEvents, sermons as mockSermons } from '../data/mockData';
import { MapPinIcon, ClockIcon } from '../components/icons';

const Home: React.FC = () => {
  // Get today's date at midnight for accurate comparison
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Get the next 3 upcoming, non-recurring events
  const upcomingEvents = mockEvents
    .filter(event => !event.isRecurring && new Date(event.date + 'T00:00:00') >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);
  
  // Get the 3 most recent sermons
  const recentSermons = [...mockSermons]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="bg-warm-gray dark:bg-gray-900 font-open-sans">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] text-white flex items-center justify-center text-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-full h-full object-cover"
        >
          <source src="/images/IMG_1649.MOV" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-bold font-poppins drop-shadow-lg">Welcome to First Baptist Church Itire</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">Loving God, Loving People, Making Disciples</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <NavLink to="/about" className="bg-yellow-400 text-church-maroon-dark hover:bg-yellow-300 font-bold py-3 px-6 rounded-full shadow-md transition-transform transform hover:scale-105">
              Learn More About Us
            </NavLink>
            <NavLink to="/livestream" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-church-maroon-dark font-bold py-3 px-6 rounded-full shadow-md transition-all">
              Watch Our Facebook Live
            </NavLink>
          </div>
        </div>
      </section>

      {/* Countdown to next service */}
      <Countdown />

      {/* Daily Verse */}
      <DailyBibleVerse />

      {/* Upcoming Events Section */}
      <section className="py-16 md:py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-church-maroon dark:text-yellow-400 font-poppins">Upcoming Events</h2>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Join us for fellowship and growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map(event => (
              <div key={event.id} className="bg-warm-gray dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
                <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover"/>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-poppins text-gray-800 dark:text-gray-100">{event.title}</h3>
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1">{new Date(event.date + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mt-2">
                    <ClockIcon className="w-4 h-4 mr-2" /> {event.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mt-1">
                    <MapPinIcon className="w-4 h-4 mr-2" /> {event.location}
                  </div>
                  <NavLink to="/events" className="mt-4 inline-block font-semibold text-church-maroon-dark dark:text-yellow-300 hover:underline">
                    More Info &rarr;
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <NavLink to="/events" className="bg-church-maroon text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-church-maroon-dark transition-transform transform hover:scale-105">
              View All Events
            </NavLink>
          </div>
        </div>
      </section>
      
      {/* Recent Sermons Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-church-maroon dark:text-yellow-400 font-poppins">Recent Sermons</h2>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Be encouraged by the Word of God.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentSermons.map(sermon => (
              <div key={sermon.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <p className="text-sm text-gray-500 dark:text-gray-400">{new Date(sermon.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mt-2">{sermon.title}</h3>
                <p className="text-md text-gray-600 dark:text-gray-300 mt-1">by {sermon.preacher}</p>
                <NavLink to="/sermons" className="mt-4 inline-block font-semibold text-church-maroon-dark dark:text-yellow-300 hover:underline">
                  Watch Now &rarr;
                </NavLink>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <NavLink to="/sermons" className="bg-church-maroon text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-church-maroon-dark transition-transform transform hover:scale-105">
              Explore Sermon Archive
            </NavLink>
          </div>
        </div>
      </section>

      {/* Meet Our Pastors Section */}
      <section className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/1759735588248.jpg')" }}>
          <div className="absolute inset-0 bg-gray-800 opacity-70"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="text-white">
                      <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Meet Our Senior Pastor</h2>
                      <h3 className="text-2xl font-semibold mb-4">Rev Dr. S.O Afolabi</h3>
                      <p className="text-gray-200 mb-8 max-w-lg">
                          Rev. Dr. S.O. Afolabi joined First Baptist Church Itire in the year 2000, bringing with him a profound passion for the Gospel and a heart for the community. His ministry focuses on sound biblical teaching, compassionate outreach, and equipping believers to live out their God-given purpose.
                      </p>
                      <NavLink to="/about" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-church-maroon-dark font-bold py-3 px-8 rounded-full shadow-md transition-all duration-300">
                          Learn More
                      </NavLink>
                  </div>
                  <div className="hidden md:block">
                      {/* This column is intentionally empty to let the background image show */}
                  </div>
              </div>
          </div>
      </section>


      {/* Get Connected Section */}
      <section className="py-16 md:py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-church-maroon dark:text-yellow-400 font-poppins">Get Connected</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            FBC Itire is more than just a Sunday service; we are a family. There are many ways to get involved, from joining a ministry to attending our community events. Find your place with us!
          </p>
          <div className="mt-8">
            <NavLink to="/connect" className="bg-yellow-400 text-church-maroon-dark hover:bg-yellow-300 font-bold py-3 px-8 rounded-full shadow-md transition-transform transform hover:scale-105 text-lg">
              Join Our Community
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;