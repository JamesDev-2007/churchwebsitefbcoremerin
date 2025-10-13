import React, { useState, useMemo, useEffect } from 'react';
import { BookOpenIcon, PuzzlePieceIcon, SparklesIcon, ArrowDownTrayIcon, HeartIcon, SpeakerWaveIcon } from '@heroicons/react/24/outline';
import Quiz from '../components/Quiz';
import { generateMultipageDevotional, generateQuizQuestions } from '../services/geminiService';
import { sermons, communityPosts as initialCommunityPosts, recommendedResources, spiritualChallenge, guidedPrayer } from '../data/mockData';
import type { Post, QuizQuestion } from '../types';
import { NavLink } from 'react-router-dom';

// Declare global variables from CDN scripts for TypeScript
declare var jspdf: any;
declare var html2canvas: any;
declare var saveAs: any;

const MarkdownRenderer: React.FC<{ markdown: string }> = ({ markdown }) => {
    // A simple markdown to HTML converter
    const toHtml = (text: string) => {
        let html = text
            // Headers
            .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold font-poppins my-4">$1</h1>')
            .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold font-poppins my-3">$1</h2>')
            .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold font-poppins my-2">$1</h3>')
            // Bold
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            // Italic
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
             // Blockquotes
            .replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic my-4">$1</blockquote>')
            // Bullet points
            .replace(/^\* (.*$)/gim, '<li class="ml-6">$1</li>')
            // Combine consecutive li elements into a ul
            .replace(/(<li>.*<\/li>\s*)+/g, (match) => `<ul class="list-disc pl-5 my-4">${match}</ul>`)
            // Paragraphs (newlines)
            .replace(/\n/g, '<br />');

        // Remove extra breaks created by list conversion
        html = html.replace(/<br \/>(\s*<ul|<h[1-3])/g, '$1');

        return html;
    };

    return <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: toHtml(markdown) }} />;
};


const BibleStudyContent: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [devotional, setDevotional] = useState('');
    const [error, setError] = useState('');
    
    const handleGenerateDevotional = async () => {
        setIsLoading(true);
        setError('');
        setDevotional('');
        try {
            const result = await generateMultipageDevotional();
            setDevotional(result);
        } catch (err) {
            setError('Failed to generate devotional. Please try again.');
            console.error(err);
        }
        setIsLoading(false);
    };

    const downloadPdf = () => {
        const { jsPDF } = jspdf;
        const input = document.getElementById('devotional-content');
        if (!input) return;

        html2canvas(input, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const ratio = canvasWidth / pdfWidth;
            const imgHeight = canvasHeight / ratio;
            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
            heightLeft -= pdfHeight;

            while (heightLeft > 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
                heightLeft -= pdfHeight;
            }
            pdf.save('FBC_Itire_Devotional.pdf');
        });
    };
    
    const downloadWord = () => {
        const contentElement = document.getElementById('devotional-content');
        if (!contentElement) return;

        const content = contentElement.innerHTML;
        const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Devotional</title></head><body>";
        const footer = "</body></html>";
        const html = header + content + footer;

        const blob = new Blob(['\ufeff', html], {
            type: 'application/msword'
        });
        saveAs(blob, 'FBC_Itire_Devotional.doc');
    };

    const testimonies = initialCommunityPosts.filter(p => p.type === 'Testimony').slice(0, 2);

    return (
        <div className="space-y-12">
            {/* AI Devotional Generator */}
            <section className="bg-warm-gray dark:bg-gray-700 p-6 rounded-xl shadow-inner text-center">
                 <SparklesIcon className="w-12 h-12 mx-auto text-yellow-500" />
                 <h2 className="text-2xl font-bold text-church-maroon dark:text-yellow-400 font-poppins mt-2">AI-Powered Devotional Generator</h2>
                 <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Click the button below to generate a unique, detailed devotional on a random spiritual topic, complete with scripture, practical applications, and a prayer.</p>
                 <button onClick={handleGenerateDevotional} disabled={isLoading} className="mt-4 bg-church-maroon text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-church-maroon-dark transition-transform transform hover:scale-105 disabled:bg-gray-400 disabled:scale-100">
                    {isLoading ? 'Generating...' : 'Generate a Devotional'}
                 </button>
                 {isLoading && <div className="mt-4 animate-spin rounded-full h-8 w-8 border-b-2 border-church-maroon dark:border-yellow-400 mx-auto"></div>}
                 {error && <p className="mt-4 text-red-500">{error}</p>}
                 {devotional && (
                    <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-lg text-left shadow-md">
                        <div id="devotional-content" className="p-4">
                            <MarkdownRenderer markdown={devotional}/>
                        </div>
                        <div className="mt-4 flex flex-wrap justify-center gap-4 border-t dark:border-gray-700 pt-4">
                            <button onClick={downloadPdf} className="flex items-center gap-2 bg-red-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700 transition-colors">
                                <ArrowDownTrayIcon className="w-5 h-5"/> Download PDF
                            </button>
                             <button onClick={downloadWord} className="flex items-center gap-2 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                                <ArrowDownTrayIcon className="w-5 h-5"/> Download Word
                            </button>
                        </div>
                    </div>
                 )}
            </section>
            
            {/* Other Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Sermon Highlights */}
                <section>
                     <h2 className="text-2xl font-bold text-church-maroon dark:text-yellow-400 font-poppins mb-4">Sermon Highlights</h2>
                     <div className="space-y-4">
                        {sermons.slice(0,2).map(sermon => (
                            <div key={sermon.id} className="bg-warm-gray dark:bg-gray-700 p-4 rounded-lg">
                                <h3 className="font-bold">{sermon.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">by {sermon.preacher}</p>
                                <NavLink to="/sermons" className="text-sm font-semibold text-church-maroon-dark dark:text-yellow-300 hover:underline mt-2 inline-block">Watch Now &rarr;</NavLink>
                            </div>
                        ))}
                     </div>
                </section>
                {/* Spiritual Challenge */}
                <section>
                    <h2 className="text-2xl font-bold text-church-maroon dark:text-yellow-400 font-poppins mb-4">Challenge of the Week</h2>
                    <div className="bg-warm-gray dark:bg-gray-700 p-4 rounded-lg">
                        <h3 className="font-bold">{spiritualChallenge.title}</h3>
                        <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">{spiritualChallenge.description}</p>
                        <blockquote className="mt-3 text-sm italic border-l-2 border-church-maroon dark:border-yellow-400 pl-3">
                            "{spiritualChallenge.scripture}" - {spiritualChallenge.scriptureReference}
                        </blockquote>
                    </div>
                </section>
                 {/* Inspirational Stories */}
                <section>
                    <h2 className="text-2xl font-bold text-church-maroon dark:text-yellow-400 font-poppins mb-4">Inspirational Stories</h2>
                    <div className="space-y-4">
                        {testimonies.map(testimony => (
                             <div key={testimony.id} className="bg-warm-gray dark:bg-gray-700 p-4 rounded-lg">
                                 <p className="text-sm text-gray-600 dark:text-gray-300">"{testimony.message}"</p>
                                 <p className="text-sm font-semibold text-right mt-2">- {testimony.name}</p>
                             </div>
                        ))}
                    </div>
                </section>
                {/* Recommended Resources */}
                <section>
                    <h2 className="text-2xl font-bold text-church-maroon dark:text-yellow-400 font-poppins mb-4">Recommended Resources</h2>
                     <div className="space-y-4">
                        {recommendedResources.slice(0,2).map(res => (
                             <div key={res.id} className="bg-warm-gray dark:bg-gray-700 p-4 rounded-lg">
                                 <h3 className="font-bold">{res.title} <span className="text-sm font-normal text-gray-500 dark:text-gray-400">- {res.author}</span></h3>
                                 <a href={res.link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-church-maroon-dark dark:text-yellow-300 hover:underline mt-1 inline-block">Learn More &rarr;</a>
                             </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

const timeAgo = (date: Date): string => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + " years ago";
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + " months ago";
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + " days ago";
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + " hours ago";
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + " minutes ago";
    return Math.floor(seconds) + " seconds ago";
};

const PrayerContent: React.FC = () => {
    const initialPrayerPosts = useMemo(() => initialCommunityPosts.filter(p => p.type === 'Prayer').sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime()), []);
    const [posts, setPosts] = useState<Post[]>(initialPrayerPosts);
    const [name, setName] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [message, setMessage] = useState('');

    const handlePostSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!message.trim()) return;

        const newPost: Post = {
            id: `post-${Date.now()}`,
            name: isAnonymous ? 'Anonymous' : name.trim() || 'Anonymous',
            type: 'Prayer',
            message: message.trim(),
            timestamp: new Date(),
            interactions: 0,
        };
        setPosts([newPost, ...posts]);
        setName('');
        setIsAnonymous(false);
        setMessage('');
    };

    const handleInteraction = (postId: string) => {
        setPosts(posts.map(p => p.id === postId ? { ...p, interactions: p.interactions + 1 } : p));
    };

    return (
        <div className="space-y-12">
            {/* Guided Prayer Section */}
            <section className="bg-warm-gray dark:bg-gray-700 p-6 rounded-xl shadow-inner">
                <h2 className="text-2xl font-bold text-church-maroon dark:text-yellow-400 font-poppins text-center mb-4">Guided Prayer of the Week</h2>
                <div className="max-w-2xl mx-auto text-center">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{guidedPrayer.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">by {guidedPrayer.author}</p>
                    <p className="text-gray-700 dark:text-gray-300 italic">"{guidedPrayer.content}"</p>
                    <div className="mt-4">
                        <a href={guidedPrayer.audioUrl} className="inline-flex items-center gap-2 bg-church-maroon-dark text-white font-semibold py-2 px-4 rounded-full hover:bg-church-maroon transition-colors">
                            <SpeakerWaveIcon className="w-5 h-5"/> Listen to Audio Prayer
                        </a>
                    </div>
                </div>
            </section>

            {/* Form & Resources Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <section>
                    <h2 className="text-2xl font-bold text-church-maroon dark:text-yellow-400 font-poppins mb-4">Submit a Prayer Request</h2>
                    <div className="bg-warm-gray dark:bg-gray-700 p-6 rounded-xl shadow-md">
                        <form onSubmit={handlePostSubmit} className="space-y-4">
                            <div className="flex items-center gap-4">
                                <input type="text" value={name} onChange={e => setName(e.target.value)} disabled={isAnonymous} placeholder="Your Name (Optional)" className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-600 dark:border-gray-500 disabled:opacity-50"/>
                                <label className="flex items-center gap-2 cursor-pointer text-sm flex-shrink-0"><input type="checkbox" checked={isAnonymous} onChange={e => setIsAnonymous(e.target.checked)} className="h-4 w-4 rounded"/> Anonymous</label>
                            </div>
                            <textarea value={message} onChange={e => setMessage(e.target.value)} rows={4} placeholder="Share your prayer request..." className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-600 dark:border-gray-500" required></textarea>
                            <button type="submit" className="w-full bg-church-maroon-dark text-white font-bold py-3 rounded-lg shadow-md hover:bg-church-maroon transition-colors">Post to Prayer Wall</button>
                        </form>
                    </div>
                </section>
                <section>
                     <h2 className="text-2xl font-bold text-church-maroon dark:text-yellow-400 font-poppins mb-4">Prayer Resources</h2>
                     <div className="bg-warm-gray dark:bg-gray-700 p-6 rounded-xl shadow-md space-y-4">
                        <div>
                            <h3 className="font-bold text-lg">Prayer Tips</h3>
                            <p className="text-sm mt-1">Try the A.C.T.S. model: Adoration (praising God), Confession (admitting faults), Thanksgiving (expressing gratitude), and Supplication (asking for needs).</p>
                        </div>
                        <div className="border-t dark:border-gray-600 pt-4">
                            <h3 className="font-bold text-lg">Scripture for Prayer</h3>
                            <p className="text-sm mt-1 italic">"Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours." - <span className="font-semibold">Mark 11:24</span></p>
                        </div>
                     </div>
                </section>
            </div>
            
            {/* Community Prayer Wall */}
            <section>
                <h2 className="text-2xl font-bold text-church-maroon dark:text-yellow-400 font-poppins mb-4 text-center">Community Prayer Wall</h2>
                 <div className="space-y-4 max-w-3xl mx-auto">
                    {posts.map(post => (
                        <div key={post.id} className="bg-warm-gray dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-bold text-gray-800 dark:text-gray-100">{post.name}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{timeAgo(post.timestamp)}</p>
                                </div>
                                <button onClick={() => handleInteraction(post.id)} className="flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full bg-white dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors">
                                    <HeartIcon className="w-4 h-4 text-red-500" />
                                    <span>I Prayed</span>
                                    <span className="font-bold text-church-maroon dark:text-yellow-400">{post.interactions}</span>
                                </button>
                            </div>
                            <p className="mt-2 text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{post.message}</p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};


const SpiritualGrowth: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'study' | 'prayer' | 'games'>('study');
    const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
    const [isQuizLoading, setIsQuizLoading] = useState(false);
    const [quizError, setQuizError] = useState('');

    const fetchQuizQuestions = async () => {
        setIsQuizLoading(true);
        setQuizError('');
        try {
            const questions = await generateQuizQuestions();
            if (questions && questions.length > 0) {
                setQuizQuestions(questions);
            } else {
                throw new Error("No questions were generated.");
            }
        } catch (err) {
            console.error(err);
            setQuizError("Could not load the quiz. Please try again later.");
        } finally {
            setIsQuizLoading(false);
        }
    };

    // Fetch questions when tab becomes active for the first time
    useEffect(() => {
        if (activeTab === 'games' && quizQuestions.length === 0) {
            fetchQuizQuestions();
        }
    }, [activeTab]);

    return (
        <div className="bg-warm-gray dark:bg-gray-900 font-open-sans">
            <section className="bg-church-maroon-dark text-white py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-poppins">Spiritual Growth</h1>
                <p className="mt-4 text-lg md:text-xl text-yellow-200">Tools and resources to deepen your faith journey.</p>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Sub Navigation */}
                <div className="flex justify-center border-b-2 border-gray-300 dark:border-gray-700 mb-8 overflow-x-auto">
                    <button
                        onClick={() => setActiveTab('study')}
                        className={`flex-shrink-0 flex items-center gap-2 px-6 py-3 font-semibold text-lg transition-colors ${activeTab === 'study' ? 'border-b-4 border-church-maroon dark:border-yellow-400 text-church-maroon dark:text-yellow-400' : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'}`}
                    >
                        <BookOpenIcon className="w-6 h-6" /> Bible Study
                    </button>
                     <button
                        onClick={() => setActiveTab('prayer')}
                        className={`flex-shrink-0 flex items-center gap-2 px-6 py-3 font-semibold text-lg transition-colors ${activeTab === 'prayer' ? 'border-b-4 border-church-maroon dark:border-yellow-400 text-church-maroon dark:text-yellow-400' : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'}`}
                    >
                        <HeartIcon className="w-6 h-6" /> Prayer
                    </button>
                    <button
                        onClick={() => setActiveTab('games')}
                        className={`flex-shrink-0 flex items-center gap-2 px-6 py-3 font-semibold text-lg transition-colors ${activeTab === 'games' ? 'border-b-4 border-church-maroon dark:border-yellow-400 text-church-maroon dark:text-yellow-400' : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'}`}
                    >
                        <PuzzlePieceIcon className="w-6 h-6" /> Games & Quizzes
                    </button>
                </div>

                {/* Content */}
                <div className="bg-white dark:bg-gray-800 p-4 sm:p-8 rounded-2xl shadow-lg">
                    {activeTab === 'study' && <BibleStudyContent />}
                    {activeTab === 'prayer' && <PrayerContent />}
                    {activeTab === 'games' && (
                        <div>
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold text-church-maroon dark:text-yellow-400 font-poppins">Bible Knowledge Challenge</h2>
                                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                    Test your knowledge with a unique 10-question quiz generated just for you by our AI!
                                </p>
                            </div>
                            <div className="min-h-[500px] flex flex-col items-center justify-center">
                                {isQuizLoading && (
                                    <div className="text-center">
                                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-church-maroon dark:border-yellow-400 mx-auto"></div>
                                        <p className="mt-4 text-gray-600 dark:text-gray-400">Generating your personal Bible quiz...</p>
                                    </div>
                                )}
                                {quizError && (
                                    <div className="text-center text-red-500">
                                        <p>{quizError}</p>
                                        <button onClick={fetchQuizQuestions} className="mt-4 bg-church-maroon text-white font-bold py-2 px-4 rounded-lg">Try Again</button>
                                    </div>
                                )}
                                {!isQuizLoading && !quizError && quizQuestions.length > 0 && (
                                    <Quiz questions={quizQuestions} onRestart={fetchQuizQuestions} />
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SpiritualGrowth;