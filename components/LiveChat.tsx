import React from 'react';
import { UserIcon, SendIcon } from './icons';
import { HandRaisedIcon, GiftIcon, UserGroupIcon } from '@heroicons/react/24/outline';


const mockMessages = [
  { user: 'FBC Itire Admin', text: 'Welcome to the service! We are so glad you could join us today. Let us know where you are watching from!' },
  { user: 'Samuel', text: 'Amen! So excited for the word today. 🙏' },
  { user: 'Ayomide', text: 'Good morning everyone! Watching from Abuja.' },
  { user: 'Admin', text: 'If you have a prayer request, feel free to use the "Prayer" tab. Our team is standing by.' },
  { user: 'Sarah K.', text: 'Blessings to all the church family!' },
];

const InteractionCard: React.FC<{
    icon: React.ElementType;
    title: string;
    buttonText: string;
    bgColor: string;
    iconColor: string;
}> = ({ icon: Icon, title, buttonText, bgColor, iconColor }) => (
    <div className={`p-3 rounded-lg flex items-center justify-between ${bgColor}`}>
        <div className="flex items-center gap-3">
            <div className={`p-2 rounded-full bg-white/20 ${iconColor}`}>
                <Icon className="w-5 h-5" />
            </div>
            <p className="font-semibold text-white text-sm">{title}</p>
        </div>
        <button className="bg-white text-gray-800 text-xs font-bold py-1 px-3 rounded-full shadow-sm hover:bg-gray-200 transition-colors">
            {buttonText}
        </button>
    </div>
);


const LiveChat: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
        {/* Interaction Cards */}
        <div className="p-3 space-y-2 border-b dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
            <InteractionCard 
                icon={HandRaisedIcon} 
                title="I Commit My Life to Jesus" 
                buttonText="Raise hand" 
                bgColor="bg-purple-500"
                iconColor="text-purple-100"
            />
            <InteractionCard 
                icon={GiftIcon} 
                title="Click Here To Give" 
                buttonText="Give"
                bgColor="bg-teal-500"
                iconColor="text-teal-100"
            />
            <InteractionCard 
                icon={UserGroupIcon} 
                title="Joining for the First Time?" 
                buttonText="Connect"
                bgColor="bg-sky-500"
                iconColor="text-sky-100"
            />
        </div>
        
        {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {mockMessages.map((msg, index) => (
          <div key={index} className="flex items-start gap-2.5">
            <div className="flex-shrink-0 bg-gray-200 dark:bg-gray-600 p-1.5 rounded-full">
                <UserIcon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
            </div>
            <div className="bg-warm-gray dark:bg-gray-700 p-2 rounded-lg rounded-tl-none">
              <p className="font-semibold text-sm text-church-maroon dark:text-yellow-400">{msg.user}</p>
              <p className="text-sm text-gray-700 dark:text-gray-200">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Chat Input */}
      <div className="p-4 border-t dark:border-gray-700 flex items-center gap-2">
         <input 
            type="text" 
            placeholder="Commenting is disabled" 
            disabled 
            className="w-full px-3 py-2 border rounded-full bg-gray-100 dark:bg-gray-700 dark:border-gray-600 text-sm disabled:opacity-70"
        />
        <button disabled className="p-2 rounded-full bg-gray-300 dark:bg-gray-600 cursor-not-allowed">
            <SendIcon className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default LiveChat;