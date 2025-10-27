import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Countdown from '../components/Countdown';
import DailyBibleVerse from '../components/DailyBibleVerse';
import { events as mockEvents, sermons as mockSermons, leaders } from '../data/mockData';
import { 
  HeartDoveIcon, PrayingHandsIcon, FamilyIcon, QuoteIcon, PlusIcon, MinusIcon
} from '../components/icons';

import { MapPinIcon, ClockIcon } from '../components/icons';
import StatsCounter from '../components/StatsCounter';


// AccordionItem Component for "Get to know the church" section
const AccordionItem: React.FC<{ title: string; children: React.ReactNode; isOpen: boolean; onClick: () => void; }> = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-500 py-4">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left"
      >
        <h4 className="text-xl font-semibold">{title}</h4>
        {isOpen ? <MinusIcon className="w-6 h-6" /> : <PlusIcon className="w-6 h-6" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 mt-2' : 'max-h-0'}`}>
        <p className="text-gray-300">{children}</p>
      </div>
    </div>
  );
};

const ValueCard: React.FC<{
  icon: React.FC<any>;
  title: string;
  subtitle: string;
  bgColor: string;
  linkTo: string;
}> = ({ icon: Icon, title, subtitle, bgColor, linkTo }) => {
  return (
    <NavLink to={linkTo} className={`flex flex-col items-center justify-center p-8 text-white transition-opacity hover:opacity-90 ${bgColor}`}>
      <Icon className="w-16 h-16 mb-4" strokeWidth={1} />
      <h3 className="text-2xl font-bold font-poppins">{title}</h3>
      <p className="mt-2 text-sm tracking-widest uppercase">{subtitle}</p>
    </NavLink>
  );
};

const Home: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>('motto');
  const handleAccordionClick = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const pastor = leaders.find(l => l.category === 'Pastor');
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingEvents = mockEvents
    .filter(event => !event.isRecurring && new Date(event.date + 'T00:00:00') >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);

  const recentSermons = [...mockSermons]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="bg-warm-gray dark:bg-gray-900 font-open-sans">

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] text-white flex items-center justify-center text-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute z-0 w-full h-full object-cover">
          <source src="/images/IMG_1649.mp4" type="video/mp4" />
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
              Watch Live
            </NavLink>
          </div>
        </div>
      </section>

      {/* Countdown */}
      <Countdown />

      {/* Verse of the Day */}
      <DailyBibleVerse />

      {/* Welcome Home Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="block h-1 w-16 bg-red-500 mb-4"></span>
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-800 dark:text-gray-100">Welcome Home!</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Welcome to First Baptist Church, Itire! Whether you're seeking faith, family, or fellowship, you belong here. Join us as we worship and serve together in Christ’s love.
            </p>
            <div className="mt-8 bg-warm-gray dark:bg-gray-700 p-6 rounded-lg relative">
              <QuoteIcon className="absolute top-4 left-4 w-12 h-12 text-gray-300 dark:text-gray-500" />
              <p className="relative text-lg italic text-gray-700 dark:text-gray-200">
                "We welcome you with the love of Christ. In this house, you are family."
              </p>
            </div>
            {pastor && (
              <div className="mt-6 flex items-center gap-4">
                <img src={pastor.imageUrl} alt={pastor.name} className="w-20 h-20 rounded-full object-cover border-4 border-red-500"/>
                <div>
                  <p className="text-xl font-bold text-gray-800 dark:text-gray-100">{pastor.name}</p>
                  <p className="text-gray-600 dark:text-gray-400">Church Pastor</p>
                </div>
              </div>
            )}
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ValueCard icon={HeartDoveIcon} title="Fellowship" subtitle="WITH THE BRETHREN" bgColor="bg-red-500" linkTo="/connect" />
            <ValueCard icon={PrayingHandsIcon} title="Prayers" subtitle="GET ANSWERED" bgColor="bg-amber-500" linkTo="/prayer" />
            <ValueCard icon={FamilyIcon} title="Family" subtitle="IS WHO WE ARE" bgColor="bg-indigo-600" linkTo="/ministries" />
            <ValueCard icon={HeartDoveIcon} title="Service" subtitle="IS THE LOVE WAY" bgColor="bg-violet-500" linkTo="/connect" />
          </div>
        </div>
      </section>

      {/* Get To Know The Church */}
<section
  className="relative py-16 md:py-24 text-white bg-cover bg-center"
  style={{ backgroundImage: "url('/images/1759735458369.jpg')" }}
>
  {/* Dark overlay for contrast */}
  <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"></div>

  <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div>
      <span className="block h-1 w-16 bg-yellow-400 mb-4"></span>
      <h2 className="text-4xl md:text-5xl font-bold font-poppins">Get To Know The Church</h2>
      <p className="mt-4 text-gray-200">
        Learn about our values, our mission, and what we stand for as a body of Christ.
      </p>

      <div className="mt-8">
        <AccordionItem
          title="Our Motto"
          isOpen={openAccordion === 'motto'}
          onClick={() => handleAccordionClick('motto')}
        >
          Christ is the answer to all human needs.
        </AccordionItem>

        <AccordionItem
          title="Our Mission"
          isOpen={openAccordion === 'mission'}
          onClick={() => handleAccordionClick('mission')}
        >
          To love God, love people, and make disciples of Jesus Christ.
        </AccordionItem>

        <AccordionItem
          title="Our Values"
          isOpen={openAccordion === 'values'}
          onClick={() => handleAccordionClick('values')}
        >
          To share the message of Christ around the world.
        </AccordionItem>
      </div>
    </div>

    <div className="h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
      <img
        src="/images/1759735458369.jpg"
        alt="Church worship"
        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
      />
    </div>
  </div>
</section>

       {/* Stats Counter */}
      <StatsCounter />


      {/* Upcoming Programmes */}
           <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Left Column: Title & Button */}
            <div className="lg:col-span-2">
                <div className="relative mb-4">
                    <span className="absolute left-0 -top-2 h-1 w-16 bg-church-maroon"></span>
                    <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Upcoming Programmes</p>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-800 dark:text-gray-100">Check latest upcoming programmes</h2>
                <div className="mt-8">
                    <NavLink to="/events" className="bg-church-maroon text-white font-bold py-3 px-8 rounded-md shadow-md hover:bg-church-maroon-dark transition-transform transform hover:scale-105">
                        CHECK MORE PROGRAMMES
                    </NavLink>
                </div>
            </div>
            {/* Right Column: Event Flyers Carousel */}
            <div className="lg:col-span-3">
                <div className="flex overflow-x-auto space-x-6 pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
                    {upcomingEvents.map(event => (
                       <NavLink to="/events" key={event.id} className="flex-shrink-0 w-64 md:w-72 rounded-lg overflow-hidden shadow-lg group transition-transform duration-300 hover:-translate-y-2">
                            <div className="relative h-80">
                                <img src="/images/1.JPG" alt={event.title} className="w-full h-full object-cover" />

                                <div className="absolute top-1/2 -translate-y-1/2 right-0 bg-red-600 text-white py-2 px-4 rounded-l-md text-center leading-none shadow-lg">
                                    <p className="font-bold text-2xl">{new Date(event.date + 'T00:00:00').getDate()}</p>
                                    <p className="text-xs font-semibold uppercase">{new Date(event.date + 'T00:00:00').toLocaleString('en-US', { month: 'short' })}</p>
                                </div>
                            </div>
                            <div className="p-4 bg-church-maroon-dark text-white">
                                <div className="flex items-center gap-2 text-yellow-300 text-sm font-semibold">
                                    <ClockIcon className="w-4 h-4" />
                                    <span>{new Date(event.date + 'T00:00:00').toLocaleString('en-US', { month: 'long', day: 'numeric' })} @ {event.time}</span>
                                </div>
                                <h3 className="font-bold text-lg mt-1 truncate">{event.title}</h3>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Recent Sermons */}
      <section className="py-16 md:py-20 bg-warm-gray dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-church-maroon dark:text-yellow-400 font-poppins">Recent Sermons</h2>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Be encouraged by the Word of God.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentSermons.map(sermon => (
              <div key={sermon.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:-translate-y-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">{new Date(sermon.date).toLocaleDateString('en-US')}</p>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mt-2">{sermon.title}</h3>
                <p className="text-md text-gray-600 dark:text-gray-300 mt-1">by {sermon.preacher}</p>
                <NavLink to="/sermons" className="mt-4 inline-block font-semibold text-church-maroon-dark dark:text-yellow-300 hover:underline">
                  Watch Now &rarr;
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Connected */}
      <section className="py-16 md:py-20 bg-white dark:bg-gray-900 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-church-maroon dark:text-yellow-400 font-poppins">Get Connected</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            FBC Itire is more than just a Sunday service; we are a family. Get involved today and grow with us.
          </p>
          <div className="mt-8">
            <NavLink to="/connect" className="bg-yellow-400 text-church-maroon-dark hover:bg-yellow-300 font-bold py-3 px-8 rounded-full shadow-md transition-transform transform hover:scale-105">
              Join Our Community
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
