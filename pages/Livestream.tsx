import React, { useState } from 'react';
import LiveChat from '../components/LiveChat';
import PrayerRequestForm from '../components/PrayerRequestForm';
import BibleReader from '../components/BibleReader';
import SermonNotes from '../components/SermonNotes';
import { BookOpenIcon, PencilSquareIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from '@heroicons/react/24/outline';


type Tab = 'bible' | 'notes' | 'chat' | 'prayer';

const Livestream: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('chat');

    const tabs: { id: Tab; name: string; icon: React.FC<React.SVGProps<SVGSVGElement>> }[] = [
        { id: 'chat', name: 'Chat', icon: ChatBubbleOvalLeftEllipsisIcon },
        { id: 'prayer', name: 'Prayer', icon: HeartIcon },
        { id: 'notes', name: 'Notes', icon: PencilSquareIcon },
        { id: 'bible', name: 'Bible', icon: BookOpenIcon },
    ];

    const TabButton: React.FC<{ tab: typeof tabs[0] }> = ({ tab }) => (
        <button
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center justify-center text-center p-3 flex-1 transition-colors ${
                activeTab === tab.id
                    ? 'text-church-maroon dark:text-yellow-400 border-b-2 border-church-maroon dark:border-yellow-400'
                    : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
            }`}
        >
            <tab.icon className="w-6 h-6 mb-1" />
            <span className="text-xs font-semibold uppercase tracking-wider">{tab.name}</span>
        </button>
    );

    const renderTabContent = () => {
        switch (activeTab) {
            case 'bible':
                return <BibleReader />;
            case 'notes':
                return <SermonNotes />;
            case 'chat':
                return <LiveChat />;
            case 'prayer':
                return <PrayerRequestForm />;
            default:
                return null;
        }
    };


    return (
        <div className="bg-gray-100 dark:bg-black font-open-sans min-h-screen">
            <main className="max-w-screen-2xl mx-auto p-4 lg:p-6">
                <div className="lg:grid lg:grid-cols-12 lg:gap-6">
                    
                    {/* Main Content: Video Player and Info */}
                    <div className="lg:col-span-8 space-y-4">
                        {/* Video Player */}
                        <div className="aspect-[9/16] w-full max-w-md mx-auto bg-black rounded-lg shadow-lg overflow-hidden">
                            <iframe
                                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Ffb.watch%2FCxOyoNpVYM%2F&show_text=false&adapt_container_width=true"
                                className="w-full h-full"
                                style={{ border: 'none', overflow: 'hidden' }}
                                scrolling="no"
                                frameBorder="0"
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                allowFullScreen={true}
                            ></iframe>
                        </div>
                        {/* Service Info */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold font-poppins text-gray-800 dark:text-gray-100">Live Service Broadcast</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Join us live for worship and a message of hope.</p>
                        </div>
                    </div>

                    {/* Sidebar: Interactive Panel */}
                    <aside className="lg:col-span-4 mt-6 lg:mt-0">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col h-[85vh] lg:h-full">
                            <div className="flex justify-around border-b dark:border-gray-700">
                                {tabs.map(tab => <TabButton key={tab.id} tab={tab} />)}
                            </div>
                            <div className="flex-1 overflow-y-auto">
                                {renderTabContent()}
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default Livestream;