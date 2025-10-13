import React, { useState } from 'react';
import { leaders, blogPosts, sermons, answeredQuestions, recommendedResources, bibleStudies } from '../data/mockData';
import { NavLink } from 'react-router-dom';
import DailyScripture from '../components/DailyScripture';
import { UserIcon, BookOpenIcon, GlobeAltIcon, FilmIcon, RssIcon, QuestionMarkCircleIcon, SparklesIcon, ClipboardDocumentListIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';


const PastorsCorner: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Biography');
  const [question, setQuestion] = useState('');
  const [isQuestionSubmitted, setIsQuestionSubmitted] = useState(false);

  const pastor = leaders.find(leader => leader.category === 'Pastor');
  const pastorBlogPosts = pastor ? blogPosts.filter(post => post.author === pastor.name) : [];
  const pastorSermons = pastor ? sermons.filter(sermon => sermon.preacher === pastor.name).slice(0, 3) : [];

  if (!pastor) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl">Pastor's information is not available at the moment.</h1>
      </div>
    );
  }
  
  const handleQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
        setIsQuestionSubmitted(true);
        setQuestion('');
        setTimeout(() => setIsQuestionSubmitted(false), 5000); // Reset after 5 seconds
    }
  };

  const tabs = [
    { name: 'Biography', icon: UserIcon },
    { name: 'Sermons', icon: FilmIcon },
    { name: 'Blog', icon: RssIcon },
    { name: 'Bible Study', icon: ClipboardDocumentListIcon },
    { name: 'Teachings', icon: SparklesIcon },
    { name: 'Ask the Pastor', icon: QuestionMarkCircleIcon },
    { name: 'Resources', icon: BookOpenIcon },
  ];
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Biography':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 flex flex-col items-center text-center">
                 <img src={pastor.imageUrl} alt={pastor.name} className="w-40 h-40 rounded-full object-cover shadow-xl border-4 border-white dark:border-gray-700"/>
                 <h2 className="mt-4 text-3xl font-bold text-gray-800 dark:text-gray-100 font-poppins">{pastor.name}</h2>
                 <p className="text-lg font-semibold text-gray-600 dark:text-gray-400">{pastor.position}</p>
                 <div className="mt-4 aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden shadow-md">
                     <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                        <p className="text-gray-500">Video message coming soon</p>
                     </div>
                 </div>
            </div>
            <div className="lg:col-span-2">
                 <h3 className="text-2xl font-bold font-poppins text-church-maroon dark:text-yellow-400 mb-4">About Our Pastor</h3>
                 <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{pastor.fullBio}</p>
                 <h3 className="text-2xl font-bold font-poppins text-church-maroon dark:text-yellow-400 mt-8 mb-4">Pastor's Vision</h3>
                 <p className="text-gray-700 dark:text-gray-300">
                    My vision for First Baptist Church Itire is to be a beacon of hope and a center for spiritual transformation in our community. I pray that we become a church known for its deep love for God, its genuine care for people, and its unwavering commitment to making disciples who impact the world for Christ.
                 </p>
            </div>
          </div>
        );
      case 'Sermons':
        return (
            <div>
                <h2 className="text-2xl font-bold font-poppins text-church-maroon dark:text-yellow-400 mb-6">Recent Sermons</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pastorSermons.map(sermon => (
                        <div key={sermon.id} className="bg-warm-gray dark:bg-gray-700 p-4 rounded-lg">
                            <h3 className="font-bold text-gray-800 dark:text-gray-100">{sermon.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{sermon.date}</p>
                            <a href={sermon.videoUrl || '#'} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-church-maroon-dark dark:text-yellow-300 hover:underline mt-2 inline-block">Watch Now &rarr;</a>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <NavLink to="/sermons" className="bg-church-maroon text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-church-maroon-dark transition-transform transform hover:scale-105">View Full Sermon Archive</NavLink>
                </div>
            </div>
        );
       case 'Blog':
        return (
             <div>
                <h2 className="text-2xl font-bold font-poppins text-church-maroon dark:text-yellow-400 mb-6">From the Pastor's Desk</h2>
                 <div className="space-y-6">
                    {pastorBlogPosts.map(post => (
                        <div key={post.id} className="bg-warm-gray dark:bg-gray-700 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{post.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 mb-3">Published on {post.date}</p>
                            <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
                            <NavLink to={`/blog`} className="text-church-maroon-dark dark:text-yellow-300 font-semibold hover:underline mt-4 inline-block">Read More &rarr;</NavLink>
                        </div>
                    ))}
                </div>
            </div>
        );
      case 'Bible Study':
        return (
            <div>
                <h2 className="text-2xl font-bold font-poppins text-church-maroon dark:text-yellow-400 mb-6">Weekly Bible Study Materials</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Our weekly Bible study is held every Tuesday at 6:00 PM. Download the materials for the upcoming session or catch up on previous weeks.
                </p>
                <div className="space-y-4">
                    {bibleStudies.map(study => (
                        <div key={study.id} className="bg-warm-gray dark:bg-gray-700 p-4 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center">
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{new Date(study.date + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">{study.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{study.description}</p>
                            </div>
                            <a 
                                href={study.fileUrl} 
                                download 
                                className="mt-4 sm:mt-0 sm:ml-4 flex-shrink-0 inline-flex items-center gap-2 bg-church-maroon-dark text-white font-semibold py-2 px-4 rounded-md hover:bg-church-maroon transition-colors"
                            >
                                <ArrowDownTrayIcon className="w-5 h-5"/>
                                Download ({study.fileType.toUpperCase()})
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        );
      case 'Teachings':
        return (
            <div>
                <h2 className="text-2xl font-bold font-poppins text-church-maroon dark:text-yellow-400 mb-6 text-center">Spiritual Teachings</h2>
                <DailyScripture />
                 <div className="mt-8 text-center">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Inspirational Quotes</h3>
                    <blockquote className="mt-4 text-lg italic text-gray-600 dark:text-gray-400">
                        "The Christian does not think God will love us because we are good, but that God will make us good because He loves us." - C.S. Lewis
                    </blockquote>
                </div>
            </div>
        );
       case 'Ask the Pastor':
        return (
            <div>
                 <h2 className="text-2xl font-bold font-poppins text-church-maroon dark:text-yellow-400 mb-6">Ask the Pastor</h2>
                 <div className="bg-warm-gray dark:bg-gray-700 p-6 rounded-xl shadow-inner">
                    <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100 mb-2">Submit Your Question</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Have a question about faith, scripture, or life? Submit it here. Selected questions will be answered and featured below.</p>
                    {isQuestionSubmitted ? (
                        <div className="text-center p-4 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-md">
                            Thank you! Your question has been submitted successfully.
                        </div>
                    ) : (
                        <form onSubmit={handleQuestionSubmit}>
                            <textarea value={question} onChange={e => setQuestion(e.target.value)} rows={4} className="w-full p-2 border rounded-md bg-white text-gray-900 placeholder-gray-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white dark:placeholder-gray-300 focus:ring-church-maroon dark:focus:ring-yellow-400" placeholder="Type your question..." required></textarea>
                            <button type="submit" className="mt-2 w-full bg-church-maroon-dark text-white font-bold py-2 rounded-md hover:bg-church-maroon">Submit Anonymously</button>
                        </form>
                    )}
                 </div>
                 <div className="mt-8">
                     <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100 mb-4">Recently Answered Questions</h3>
                     <div className="space-y-4">
                        {answeredQuestions.map(item => (
                            <div key={item.id} className="border-b dark:border-gray-700 pb-4">
                                <h4 className="font-bold text-gray-700 dark:text-gray-200">Q: {item.question}</h4>
                                <p className="mt-2 text-gray-600 dark:text-gray-300">A: {item.answer}</p>
                                <p className="text-xs text-gray-400 text-right mt-2">Answered on {item.dateAnswered}</p>
                            </div>
                        ))}
                     </div>
                 </div>
            </div>
        );
       case 'Resources':
        return (
             <div>
                <h2 className="text-2xl font-bold font-poppins text-church-maroon dark:text-yellow-400 mb-6">Recommended Resources</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Here are some books and websites I highly recommend for your spiritual growth journey.</p>
                <div className="space-y-6">
                    {recommendedResources.map(res => (
                        <div key={res.id} className="flex items-start gap-4 bg-warm-gray dark:bg-gray-700 p-4 rounded-lg">
                            <div className="flex-shrink-0 bg-church-maroon-dark text-white p-3 rounded-lg">
                                {res.type === 'Book' ? <BookOpenIcon className="w-6 h-6"/> : <GlobeAltIcon className="w-6 h-6"/>}
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800 dark:text-gray-100">{res.title}</h3>
                                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">{res.author}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{res.description}</p>
                                <a href={res.link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-church-maroon-dark dark:text-yellow-300 hover:underline mt-2 inline-block">
                                    {res.type === 'Book' ? 'Learn More' : 'Visit Website'} &rarr;
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
      default:
        return null;
    }
  };


  return (
    <div className="bg-warm-gray dark:bg-gray-900 font-open-sans">
      <section className="bg-church-maroon-dark text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins">Pastor's Corner</h1>
          <p className="mt-4 text-lg md:text-xl text-yellow-200">A Message from Our Shepherd, {pastor.name}</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
            {/* Tabs Navigation */}
            <aside className="lg:w-1/4">
                 <div className="sticky top-24">
                     <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Navigation</h2>
                     <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible -mx-4 px-4 pb-2 lg:pb-0 lg:mx-0 lg:px-0">
                         {tabs.map(tab => {
                             const TabIcon = tab.icon;
                             return (
                                 <button
                                     key={tab.name}
                                     onClick={() => setActiveTab(tab.name)}
                                     className={`flex-shrink-0 lg:w-full flex items-center gap-3 p-3 rounded-lg text-left font-semibold transition-colors duration-200 mb-2 mr-2 lg:mr-0 ${
                                         activeTab === tab.name
                                         ? 'bg-church-maroon text-white'
                                         : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                     }`}
                                 >
                                     <TabIcon className="w-5 h-5"/>
                                     {tab.name}
                                 </button>
                             )
                         })}
                     </div>
                </div>
            </aside>
            {/* Tab Content */}
            <main className="lg:w-3/4 bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg">
                {renderTabContent()}
            </main>
        </div>
      </div>
    </div>
  );
};

export default PastorsCorner;