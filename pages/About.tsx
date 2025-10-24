
import React, { useState, useMemo } from 'react';
import { leaders, aboutPageContent, churchHistoryLeaders } from '../data/mockData';
import type { Leader } from '../types';
import { PlusIcon, MinusIcon, ChevronRightIcon } from '../components/icons';
import LeaderCard from '../components/LeaderCard';
import Modal from '../components/Modal';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-300 dark:border-gray-600 last:border-b-0">
      <button
        onClick={onClick}
        className={`w-full flex justify-between items-center p-5 text-left transition-colors duration-300 ${isOpen ? 'bg-church-maroon dark:bg-church-maroon-dark text-white' : 'bg-gray-100 dark:bg-gray-700/50 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          {isOpen ? <MinusIcon className="w-5 h-5 flex-shrink-0" /> : <PlusIcon className="w-5 h-5 flex-shrink-0" />}
          <span className="font-bold font-poppins text-lg">{title}</span>
        </div>
        <ChevronRightIcon className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px]' : 'max-h-0'}`}>
        <div className="p-6 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};


const About: React.FC = () => {
    const [openAccordion, setOpenAccordion] = useState<string | null>('Our Mission');
    const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);
    const [activeFilter, setActiveFilter] = useState<'All' | 'Pastor' | 'Deacon' | 'Office Holder'>('All');

    const toggleAccordion = (title: string) => {
        setOpenAccordion(openAccordion === title ? null : title);
    };

    const openModal = (leader: Leader) => setSelectedLeader(leader);
    const closeModal = () => setSelectedLeader(null);

    const filteredLeaders = useMemo(() => {
        if (activeFilter === 'All') return leaders;
        return leaders.filter(leader => leader.category === activeFilter);
    }, [activeFilter]);
    
    const deacons = useMemo(() => leaders.filter(l => l.category === 'Deacon'), []);

    const filterCategories: ('All' | 'Pastor' | 'Deacon' | 'Office Holder')[] = ['All', 'Pastor', 'Deacon', 'Office Holder'];

    return (
        <div className="bg-white dark:bg-gray-900 font-open-sans">
             {/* Hero Section */}
            <section className="relative h-64 md:h-80 bg-cover bg-center text-white flex items-center justify-center" style={{ backgroundImage: "url('/images/1758523173381.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold font-poppins">About Us</h1>
                    <p className="mt-2 text-lg md:text-xl">Get to know more about First Baptist Church Itire, Lagos</p>
                </div>
            </section>
            
            {/* Introduction Section */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Image Collage */}
                    <div className="relative h-[400px] md:h-[500px]">
                        <img src="/images/1759735545142.jpg" alt="Church community" className="absolute top-0 left-0 w-3/4 h-full object-cover rounded-lg shadow-lg"/>
                        <div className="absolute top-4 -left-4 w-1 h-3/4 bg-yellow-400"></div>
                        <img src="/images/1759735492643.jpg" alt="Church service" className="absolute bottom-0 right-0 w-1/2 h-1/2 object-cover rounded-lg shadow-2xl border-8 border-white dark:border-gray-900"/>
                    </div>
                    
                    {/* Right Column: Welcome Text */}
                    <div className="space-y-4">
                        <p className="font-semibold text-red-500 uppercase tracking-wide relative pl-10">
                            <span className="absolute left-0 top-1/2 w-8 h-0.5 bg-red-500"></span>
                            Welcome to church
                        </p>
                        <h2 className="text-4xl font-bold text-church-maroon dark:text-yellow-400 font-poppins">First Baptist Church Itire, Lagos</h2>
                        <h3 className="text-xl font-bold text-red-600 dark:text-red-500">Our Mission: {aboutPageContent.mission}</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300">{aboutPageContent.introParagraph1}</p>
                        <p className="text-gray-600 dark:text-gray-300">{aboutPageContent.introParagraph2}</p>
                    </div>
                </div>
            </section>
            
            {/* Accordion Section */}
            <section className="py-16 md:py-24 bg-warm-gray dark:bg-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                        <AccordionItem title="Our Mission" isOpen={openAccordion === 'Our Mission'} onClick={() => toggleAccordion('Our Mission')}>
                            <p>{aboutPageContent.mission}</p>
                        </AccordionItem>
                        <AccordionItem title="Our Vision" isOpen={openAccordion === 'Our Vision'} onClick={() => toggleAccordion('Our Vision')}>
                             <p>{aboutPageContent.vision}</p>
                        </AccordionItem>
                        <AccordionItem title="Church Motto" isOpen={openAccordion === 'Church Motto'} onClick={() => toggleAccordion('Church Motto')}>
                             <p>{aboutPageContent.motto}</p>
                        </AccordionItem>
                        <AccordionItem title="Church Covenant" isOpen={openAccordion === 'Church Covenant'} onClick={() => toggleAccordion('Church Covenant')}>
                            <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: aboutPageContent.covenant }}/>
                        </AccordionItem>
                        <AccordionItem title="Church History" isOpen={openAccordion === 'Church History'} onClick={() => toggleAccordion('Church History')}>
                            <h4 className="font-bold text-lg mb-2 text-church-maroon-dark dark:text-yellow-400 font-poppins">Brief History of First Baptist Church Itire</h4>
                            <p>{aboutPageContent.history}</p>
                            
                            <div className="mt-8">
                                <h4 className="text-2xl font-bold font-poppins text-church-maroon-dark dark:text-yellow-400 mb-4">Leaders and Pastors of the Church from Inception</h4>
                                <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
                                    <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
                                        <thead className="text-xs text-gray-500 dark:text-gray-400 uppercase bg-gray-50 dark:bg-gray-900/50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 font-semibold tracking-wider">Name</th>
                                                <th scope="col" className="px-6 py-3 font-semibold tracking-wider">Office</th>
                                                <th scope="col" className="px-6 py-3 font-semibold tracking-wider">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {churchHistoryLeaders.map((leader, index) => (
                                                <tr key={index} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                                                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{leader.name}</td>
                                                    <td className="px-6 py-4">{leader.office}</td>
                                                    <td className="px-6 py-4">{leader.date}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem title="The Diaconate" isOpen={openAccordion === 'The Diaconate'} onClick={() => toggleAccordion('The Diaconate')}>
                            <ol className="list-decimal list-inside">
                                {deacons.map((deacon, index) => (
                                    <li key={deacon.id}>{deacon.name} {index === 0 && '(Chairman)'}</li>
                                ))}
                            </ol>
                        </AccordionItem>
                    </div>
                </div>
            </section>
            
            {/* Leadership Section */}
            <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-church-maroon dark:text-yellow-400 font-poppins">Our Leadership</h1>
                        <p className="mt-2 text-lg md:text-xl text-gray-600 dark:text-gray-400">Meet the dedicated team serving our church family.</p>
                    </div>
                    
                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-2 mb-10">
                        {filterCategories.map(category => (
                             <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-4 py-2 font-semibold rounded-full transition-colors duration-200 ${
                                    activeFilter === category
                                        ? 'bg-church-maroon text-white shadow-md'
                                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                                }`}
                            >
                                {category === 'Office Holder' ? 'Office Holders' : category === 'Pastor' ? 'Pastors' : category === 'Deacon' ? 'Deacons' : 'All'}
                            </button>
                        ))}
                    </div>

                    {/* Leaders Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredLeaders.map(leader => (
                            <LeaderCard key={leader.id} leader={leader} onReadMore={openModal} />
                        ))}
                    </div>

                </div>
            </section>

            {selectedLeader && (
                <Modal isOpen={!!selectedLeader} onClose={closeModal}>
                    <div className="p-6 md:p-8 text-center">
                        <img src={selectedLeader.imageUrl} alt={selectedLeader.name} className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-church-maroon dark:border-yellow-400 object-cover" />
                        <h2 className="text-3xl font-bold text-church-maroon dark:text-yellow-400 font-poppins">{selectedLeader.name}</h2>
                        <p className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-4">{selectedLeader.position}</p>
                        <div className="text-left text-gray-700 dark:text-gray-300 space-y-4">
                           {selectedLeader.fullBio.split('\n').map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};

 export default About;
