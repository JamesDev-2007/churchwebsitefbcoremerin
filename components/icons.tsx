import React from 'react';

// FIX: Export the IconProps interface to make it available for import in other modules.
export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const MenuIcon: React.FC<IconProps> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

export const ChatIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);

export const SendIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
    </svg>
);

export const UserIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

export const BotIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V5c0-1.105-1.79-2-4-2S4 3.895 4 5v1m0 0v1a2 2 0 002 2h8a2 2 0 002-2v-1m-2 0h2M12 12a2 2 0 012 2v1a2 2 0 01-2 2h-2a2 2 0 01-2-2v-1a2 2 0 012-2z" />
    </svg>
);


export const SunIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

export const MoonIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);

export const FacebookIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
);

export const XIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

export const YouTubeIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.701V8.115l6.5 4.386-6.5 3.384z" />
    </svg>
);

export const InstagramIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.258.056 2.105.248 2.82.521.72.274 1.305.638 1.888 1.222.583.583.948 1.168 1.222 1.888.273.715.465 1.562.52 2.82.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.258-.248 2.105-.52 2.82-.274.72-.638 1.305-1.222 1.888-.583.583-1.168.948-1.888 1.222-.715.273-1.562.465-2.82.52-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.258-.056-2.105-.248-2.82-.52-.72-.274-1.305-.638-1.888-1.222-.583-.583-.948-1.168-1.222-1.888-.273-.715-.465-1.562-.52-2.82-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.258.248-2.105.52-2.82.274-.72.638 1.305 1.222-1.888.583-.583 1.168.948 1.888-1.222.715.273 1.562.465 2.82.52 1.266.058 1.646.07 4.85.07zM12 0C8.74 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.784.297-1.465.717-2.126 1.378S.927 3.356.63 4.14C.333 4.905.131 5.775.072 7.053.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.297.784.717 1.465 1.378 2.126s1.342.927 2.126 1.378c.766.296 1.636.499 2.913.558C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c1.277-.06 2.148-.261 2.913-.558.784-.297 1.465-.717 2.126-1.378s.927-1.342 1.378-2.126c.296-.765.499-1.636.558-2.913.06-1.277.072-1.687.072-4.947s-.014-3.667-.072-4.947c-.06-1.277-.261-2.148-.558-2.913-.297-.784-.717-1.465-1.378-2.126S20.644.927 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
    </svg>
);

export const TikTokIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.84-.95-6.43-2.88-1.59-1.93-2.2-4.35-1.72-6.73.4-1.99 1.52-3.81 3.12-5.01 1.81-1.34 4.09-1.97 6.32-1.61.24.03.48.09.72.15v4.2c-.15-.04-.3-.06-.45-.09-1.19-.24-2.45-.1-3.63.41-1.19.51-2.22 1.34-2.88 2.38-.54.86-.81 1.83-.83 2.83-.02 1.13.25 2.28.81 3.28.56.99 1.43 1.83 2.49 2.41 1.1.6 2.39.87 3.68.74.83-.09 1.63-.35 2.37-.77.63-.35 1.18-.8 1.64-1.32.33-.35.62-.73.87-1.13.12-.2.24-.4.36-.62h-4.3v-4.13c.02-1.03.01-2.07.01-3.1 0-1.89-.88-3.65-2.29-4.87-1.42-1.22-3.26-1.9-5.15-1.81-2.18.1-4.25.95-5.74 2.55-1.52 1.64-2.36 3.86-2.34 6.13.02 2.43.93 4.75 2.55 6.43 1.66 1.72 3.85 2.62 6.12 2.62 2.49 0 4.88-1.02 6.51-2.92 1.41-1.65 2.11-3.79 2.05-5.95v-2.88c-1.4-.23-2.77-.7-4.01-1.45-1.23-.75-2.31-1.76-3.14-2.93-.24-.34-.46-.7-.66-1.07-.05-.09-.1-.19-.15-.28-.01-.02-.02-.04-.03-.06-.01-.02-.02-.03-.02-.05-.01-.01-.01-.02-.01-.03z" />
    </svg>
);


export const WhatsAppIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.358 1.898 6.096l-1.206 4.387 4.542-1.191z" />
    </svg>
);

export const MessengerIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.493 1.795 6.634 4.576 8.544.17.112.288.29.34.49l.526 1.758c.24.802 1.228 1.01 1.75.44l1.37-1.482c.168-.182.4-.287.643-.287h2.803c6.627 0 12-4.974 12-11.11S18.627 0 12 0zm1.196 14.963l-2.203-2.203-4.576 2.203c-.482.233-.94-.31-.643-.753l5.22-7.51c.24-.343.753-.343.994 0l5.22 7.51c.296.442-.16.985-.643.753l-4.576-2.203z" />
    </svg>
);

export const FellowshipIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a2.25 2.25 0 00-2.25 2.25c0 .524.188 1.01.51 1.387.324.376.78.613 1.29.613h.9c.51 0 .966-.237 1.29-.613.322-.377.51-.863.51-1.387A2.25 2.25 0 0012 12z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a4.5 4.5 0 00-4.5-4.5c0-1.243.75-2.25 1.5-2.25S10.5 6.257 10.5 7.5" />
    </svg>
);

export const PrayersIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5l3-3m0 0l3 3m-3-3v6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6.75h3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v2.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 9l-1.5-1.5M16.5 9l1.5-1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 12h-1.5m16.5 0h-1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.19 18.428a3.743 3.743 0 01-1.39-2.238 3.75 3.75 0 01-.17-1.44V12a3.75 3.75 0 013.75-3.75h1.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.81 18.428a3.743 3.743 0 001.39-2.238 3.75 3.75 0 00.17-1.44V12a3.75 3.75 0 00-3.75-3.75h-1.25" />
    </svg>
);

export const FamilyIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 16.5a3.75 3.75 0 00-7.5 0" />
    </svg>
);

export const ServiceIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
         <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a2.25 2.25 0 00-2.25 2.25c0 .524.188 1.01.51 1.387.324.376.78.613 1.29.613h.9c.51 0 .966-.237 1.29-.613.322-.377.51-.863.51-1.387A2.25 2.25 0 0012 12z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a4.5 4.5 0 00-4.5-4.5c0-1.243.75-2.25 1.5-2.25S10.5 6.257 10.5 7.5" />
    </svg>
);

export const MapPinIcon: React.FC<IconProps> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const ClockIcon: React.FC<IconProps> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const ShareIcon: React.FC<IconProps> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6.002l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.368a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
  </svg>
);

export const CalendarIcon: React.FC<IconProps> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

export const ChevronLeftIcon: React.FC<IconProps> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

export const PrinterIcon: React.FC<IconProps> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
  </svg>
);

export const ChevronUpIcon: React.FC<IconProps> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
  </svg>
);

export const ArrowDownTrayIcon: React.FC<IconProps> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

export const SpeakerWaveIcon: React.FC<IconProps> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5 5 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
  </svg>
);

export const HeartIcon: React.FC<IconProps> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

export const HeartIconSolid: React.FC<IconProps> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

export const TagIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
    </svg>
);

export const EnvelopeIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);


export const CreditCardIcon: React.FC<IconProps> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);

export const QrCodeIcon: React.FC<IconProps> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7M3 4a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 8a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zm8-8a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V4zM4.5 12.5v.01m0-.01v.01m7.5-7.5v.01m0-.01v.01m-3.5 4v.01m0-.01v.01m0 3.49v.01m0-.01v.01m3.5-3.5v.01m0-.01v.01m0 3.49v.01m0-.01v.01m3.5-7.5v.01m0-.01v.01M11 19.5v-5.5a1 1 0 011-1h5.5" />
  </svg>
);

export const BanknotesIcon: React.FC<IconProps> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-15c-.621 0-1.125-.504-1.125-1.125V6.375c0-.621.504-1.125 1.125-1.125h1.5c.414 0 .75-.336.75-.75V4.5m0 13.5v.75a.75.75 0 00.75.75h.75m-1.5-1.5h.375a.75.75 0 01.75.75v.75m0 0H21m-18 0h9.521a1.5 1.5 0 011.06.44l1.125 1.125a1.5 1.5 0 002.122 0l1.125-1.125a1.5 1.5 0 011.06-.44H18m0 0v9" />
  </svg>
);

export const CheckCircleIcon: React.FC<IconProps> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// SVGs for payment cards - simple placeholders
export const VisaIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill="#1A1F71" d="M14.5,14.5H13.6V9.8h.9c.5,0,.9,.4,.9,.8v3.1c0,.4-.4,.8-.9,.8Z"/>
    <path fill="#1A1F71" d="M21.5,14.5h-1c-.4,0-.7-.2-.9-.5l-1.9-4.7h-.8v4.7H16V9.8h1.7c.4,0,.7,.2,.9,.5l1.9,4.7h.5Z"/>
    <path fill="#1A1F71" d="M10,9.8c-.8,0-1.5,.7-1.5,1.7c0,1.3,1,1.9,1.8,2.2c.4,.1,.5,.2,.5,.4s-.2,.3-.5,.3c-.4,0-.8-.2-1-.4l-.2-.8H7.3c.1,.9,.8,1.6,1.8,1.6c.9,0,1.6-.6,1.6-1.6c0-1.1-.9-1.7-1.7-2.1c-.4-.1-.5-.2-.5-.4c0-.2,.2-.3,.4-.3c.3,0,.6,.1,.8,.3l.2,.6h1.7c-.2-1.1-.9-1.8-1.8-1.8Z"/>
    <path fill="#1A1F71" d="M6.2,14.5l-1.9-4.5c0-.1-.1-.2-.3-.2h-1.3v4.7H2V9.8h2.3c.5,0,.8,.4,.9,.8l1.3,3.5l1.2-3.5c.1-.4,.4-.8,.9-.8H11v4.7H9.2v-3l-3,4.5Z"/>
  </svg>
);

export const MastercardIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 38 24" >
    <path d="M34.61 12c0 6.63-5.37 12-12 12s-12-5.37-12-12 5.37-12 12-12 12 5.37 12 12z" fill="#ff5f00"/>
    <path d="M12 12c0 6.63-5.37 12-12 12S-12 18.63-12 12s5.37-12 12-12 12 5.37 12 12z" fill="#eb001b" transform="translate(15.39)"/>
    <path d="M22.61 12c0 6.63-5.37 12-12 12s-12-5.37-12-12 5.37-12 12-12 12 5.37 12 12z" fill="#f79e1b" opacity=".8"/>
  </svg>
);

export const VerveIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 100 35">
    <path fill="#FBB040" d="M99.5 35H.5C.2 35 0 34.8 0 34.5v-34C0 .2.2 0 .5 0h99c.3 0 .5.2.5.5v34c0 .3-.2.5-.5.5"/>
    <path fill="#00AEEF" d="M85 30H15c-1.7 0-3-1.3-3-3V8c0-1.7 1.3-3 3-3h70c1.7 0 3 1.3 3 3v19c0 1.7-1.3 3-3 3"/>
    <path fill="#ED1C24" d="M18.8 19.3l-5.6-8.3c-.2-.3-.5-.5-.9-.5H9.6c-.6 0-1 .5-1 1s.5 1 1 1h2.2l4.1 6-4.1 6H9.6c-.6 0-1 .5-1 1s.5 1 1 1h2.7c.4 0 .7-.2.9-.5l5.6-8.3c.3-.4.3-.9 0-1.2z"/>
    <path fill="#fff" d="M26.2 11.5h11.9v2h-4.9v10h-2V13.5h-5V11.5zM44.5 11.5h2v12h-2zM53.1 11.5h11.9v2h-4.9v10h-2V13.5h-5V11.5zM71.4 11.5h2l4.5 12h-2.1l-1-2.8h-4.8l-1 2.8h-2.1l4.5-12zm-3.1 7.4h4.4l-2.2-6.3-2.2 6.3z"/>
  </svg>
);

export const PlusIcon: React.FC<IconProps> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);

export const MinusIcon: React.FC<IconProps> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
  </svg>
);
