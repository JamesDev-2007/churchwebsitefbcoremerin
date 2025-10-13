import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

interface Service {
    day: number;
    startHour: number;
    startMinute: number;
    endHour: number;
    endMinute: number;
    name: string;
}

interface NextService {
    targetDate: Date;
    name: string;
}

const services: Service[] = [
    { day: 0, startHour: 7, startMinute: 20, endHour: 9, endMinute: 0, name: 'Sunday English Service' },
    { day: 0, startHour: 10, startMinute: 30, endHour: 12, endMinute: 30, name: 'Sunday Yoruba Service' },
    { day: 2, startHour: 18, startMinute: 0, endHour: 20, endMinute: 0, name: 'Tuesday Bible Study' },
    { day: 3, startHour: 19, startMinute: 0, endHour: 20, endMinute: 0, name: 'Wednesday Prayer Meeting' },
];

const calculateNextService = (): NextService => {
    const now = new Date();

    const upcomingServices = services.map(service => {
        const serviceDate = new Date();
        serviceDate.setDate(now.getDate() + (service.day - now.getDay() + 7) % 7);
        serviceDate.setHours(service.startHour, service.startMinute, 0, 0);

        if (serviceDate.getTime() < now.getTime()) {
            serviceDate.setDate(serviceDate.getDate() + 7);
        }
        return { targetDate: serviceDate, name: service.name };
    });

    upcomingServices.sort((a, b) => a.targetDate.getTime() - b.targetDate.getTime());
    
    return upcomingServices[0];
};

const checkIfServiceIsLive = (): Service | null => {
    const now = new Date();
    const currentDay = now.getDay();
    
    for (const service of services) {
        if (service.day === currentDay) {
            const startTime = new Date(now);
            startTime.setHours(service.startHour, service.startMinute, 0, 0);

            const endTime = new Date(now);
            endTime.setHours(service.endHour, service.endMinute, 0, 0);

            if (now >= startTime && now < endTime) {
                return service;
            }
        }
    }
    return null;
}

const TimeCard: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center bg-church-maroon-dark text-white rounded-lg shadow-2xl overflow-hidden">
            <div className="absolute top-0 w-full h-1/2 bg-black bg-opacity-10"></div>
            <span key={value} className="text-5xl sm:text-6xl font-bold tracking-wider animate-[pop-in_0.5s_ease-out]">{String(value).padStart(2, '0')}</span>
        </div>
        <span className="mt-3 text-sm sm:text-base uppercase text-gray-600 dark:text-gray-400 font-semibold">{label}</span>
        <style>{`
            @keyframes pop-in {
                0% { transform: scale(0.8); opacity: 0; }
                60% { transform: scale(1.1); opacity: 1; }
                100% { transform: scale(1.0); opacity: 1; }
            }
            .animate-\\[pop-in_0\\.5s_ease-out\\] {
                animation: pop-in 0.5s ease-out;
            }
        `}</style>
    </div>
);

const Countdown: React.FC = () => {
    const [liveService, setLiveService] = useState<Service | null>(checkIfServiceIsLive());
    const [nextService, setNextService] = useState<NextService>(calculateNextService());
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({});

    useEffect(() => {
        const timer = setInterval(() => {
            const currentLiveService = checkIfServiceIsLive();
            setLiveService(currentLiveService);
            
            if (!currentLiveService) {
                const now = new Date();
                const difference = nextService.targetDate.getTime() - now.getTime();
                
                if (difference > 0) {
                    setTimeLeft({
                        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                        minutes: Math.floor((difference / 1000 / 60) % 60),
                        seconds: Math.floor((difference / 1000) % 60),
                    });
                } else {
                    setTimeLeft({});
                    setNextService(calculateNextService());
                }
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [nextService]);
    
    const getCountdownTitle = () => {
        if (!nextService) return 'Join Our Next Service';
        switch(nextService.name) {
            case 'Sunday English Service': return 'Countdown to our next English Service';
            case 'Sunday Yoruba Service': return 'Countdown to our Yoruba Service';
            case 'Tuesday Bible Study': return 'Countdown to our next Bible Study';
            case 'Wednesday Prayer Meeting': return 'Countdown to our Prayer Meeting';
            default: return 'Join Our Next Service';
        }
    }

    if (liveService) {
        return (
            <div className="bg-warm-gray dark:bg-gray-900 py-12 md:py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                        <h2 className="text-3xl font-bold text-church-maroon dark:text-yellow-400 font-poppins">
                           The {liveService.name} is Live Now!
                        </h2>
                    </div>
                     <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Join us for a time of worship and fellowship.</p>
                     <NavLink 
                        to="/livestream" 
                        className="bg-red-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105 inline-block text-xl"
                    >
                        Watch Live
                    </NavLink>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-warm-gray dark:bg-gray-900 py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-church-maroon dark:text-yellow-400 font-poppins mb-8">{getCountdownTitle()}</h2>
                <div className="flex justify-center space-x-3 sm:space-x-6 text-gray-800">
                    {timeLeft.days !== undefined ? (
                        <>
                            <TimeCard value={timeLeft.days} label="Days" />
                            <TimeCard value={timeLeft.hours!} label="Hours" />
                            <TimeCard value={timeLeft.minutes!} label="Minutes" />
                            <TimeCard value={timeLeft.seconds!} label="Seconds" />
                        </>
                    ) : (
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                           <span className="text-2xl font-semibold text-church-maroon dark:text-yellow-400">Calculating next service...</span>
                        </div>
                    )}
                </div>
                 <div className="mt-10">
                    <p className="text-lg">Service Times:</p>
                    <p className="text-md text-gray-600 dark:text-gray-400">
                        Sundays @ <strong>7:20 AM</strong> (English) & <strong>10:30 AM</strong> (Yoruba) | Tuesdays @ <strong>6:00 PM</strong> | Wednesdays @ <strong>7:00 PM</strong>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Countdown;