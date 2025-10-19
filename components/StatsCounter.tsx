import React, { useState, useEffect, useRef } from 'react';

// Custom hook for the count-up animation
const useCountUp = (endValue: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const easeOutQuad = (t: number) => t * (2 - t);
        let startTime: number;
        let animationFrameId: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            const easedPercentage = easeOutQuad(percentage);
            const currentCount = Math.floor(easedPercentage * endValue);
            setCount(currentCount);

            if (progress < duration) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                setCount(endValue); // Ensure it ends on the exact value
            }
        };

        const currentRef = ref.current;
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    // Add a small delay to make the animation more noticeable when scrolling
                    setTimeout(() => {
                         animationFrameId = requestAnimationFrame(animate);
                    }, 200);
                    observer.disconnect(); // Animate only once
                }
            },
            { threshold: 0.5 } // Start when 50% of the element is visible
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            cancelAnimationFrame(animationFrameId);
            if(currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [endValue, duration]);

    return { count, ref };
};


const StatItem: React.FC<{ value: number; label: string }> = ({ value, label }) => {
    const { count, ref } = useCountUp(value);
    return (
        <div className="text-center px-4 py-2">
            <span ref={ref} className="text-4xl md:text-5xl font-bold text-church-maroon-dark dark:text-yellow-400">
                {count.toLocaleString()}
            </span>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 tracking-wide uppercase">{label}</p>
        </div>
    );
};

const StatsCounter: React.FC = () => {
    const stats = [
        { value: 800, label: 'Members' },
        { value: 10, label: 'Departments' },
        { value: 30, label: 'Committee Members' },
        { value: 5, label: 'Cardinal Programmes' },
    ];

    return (
        <section className="bg-warm-gray dark:bg-gray-900 font-open-sans">
             <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12">
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-purple-500 rounded-md transform -rotate-12" aria-hidden="true"></div>
                    
                    <div className="flex flex-wrap md:flex-nowrap justify-around items-center md:divide-x md:divide-gray-200 md:dark:divide-gray-700">
                         {stats.map((stat) => (
                            <div key={stat.label} className="w-1/2 md:w-1/4 p-4">
                                <StatItem value={stat.value} label={stat.label} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsCounter;