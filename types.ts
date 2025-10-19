import { IconProps } from './components/icons';

export interface Sermon {
  id: string;
  title: string;
  preacher: string;
  date: string;
  description: string;
  videoUrl?: string;
  audioUrl?: string;
  tags: string[];
}

export type EventCategory = 'Regular Service' | 'Departmental Meetings/Programs' | 'Special Event';

export interface Event {
  id: string;
  title:string;
  date: string; // For single events, this is the date. For recurring, this is the start date.
  time: string;
  location: string;
  description: string;
  category: EventCategory;
  imageUrl?: string;
  guestSpeakers?: string[];
  rsvpLink?: string;
  isRecurring?: boolean;
  // Simple recurring pattern for weekly events based on day of week (0=Sun, 1=Mon...)
  recurringDay?: number;
}

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  content: string; // Markdown
  imageUrl: string;
  tags: string[];
  likes: number;
  featured?: boolean;
}

export interface Ministry {
  id: string;
  name: string;
  description: string;
  leader: string;
  imageUrl: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
}

export interface Leader {
  id: string;
  name: string;
  position: string;
  category: 'Pastor' | 'Deacon' | 'Office Holder';
  imageUrl: string;
  shortBio: string;
  fullBio: string;
}

export interface HistoryMilestone {
  year: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface Post {
  id: string;
  name: string;
  type: 'Prayer' | 'Testimony';
  message: string;
  timestamp: Date;
  interactions: number;
}

export interface AnsweredQuestion {
  id: string;
  question: string;
  answer: string;
  dateAnswered: string;
}

export interface RecommendedResource {
    id: string;
    title: string;
    author: string;
    type: 'Book' | 'Website';
    description: string;
    link: string;
}

export interface SpiritualChallenge {
    id: string;
    title: string;
    description: string;
    scripture: string;
    scriptureReference: string;
}

export interface GuidedPrayer {
  id: string;
  title: string;
  author: string;
  content: string;
  audioUrl?: string;
}

export interface AboutPageContent {
    introParagraph1: string;
    introParagraph2: string;
    mission: string;
    vision: string;
    motto: string;
    covenant: string;
    history: string;
}

export interface ChurchHistoryLeader {
    name: string;
    office: string;
    date: string;
}



export interface BibleStudy {
  id: string;
  title: string;
  date: string;
  description: string;
  fileUrl: string;
  fileType: 'pdf' | 'doc';
}

