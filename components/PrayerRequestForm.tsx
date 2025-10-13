import React, { useState } from 'react';
import { CheckCircleIcon } from './icons';

const PrayerRequestForm: React.FC = () => {
    const [name, setName] = useState('');
    const [request, setRequest] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (request.trim()) {
            console.log('Prayer Request Submitted:', { name, request });
            setIsSubmitted(true);
            // Reset form after a few seconds
            setTimeout(() => {
                setIsSubmitted(false);
                setName('');
                setRequest('');
            }, 5000);
        }
    };

    if (isSubmitted) {
        return (
            <div className="p-4">
                 <div className="bg-green-100 dark:bg-green-900/50 border-l-4 border-green-500 text-green-800 dark:text-green-200 p-4 rounded-r-lg text-center">
                    <CheckCircleIcon className="w-8 h-8 mx-auto mb-2"/>
                    <p className="font-semibold">Thank you!</p>
                    <p className="text-sm">Your prayer request has been received. Our team will be praying for you.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="p-4">
            <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2 font-poppins">Submit a Prayer Request</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name (Optional)"
                    className="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-600 dark:border-gray-500 text-sm focus:ring-church-maroon dark:focus:ring-yellow-400"
                />
                <textarea
                    value={request}
                    onChange={(e) => setRequest(e.target.value)}
                    rows={4}
                    placeholder="Your prayer request..."
                    required
                    className="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-600 dark:border-gray-500 text-sm focus:ring-church-maroon dark:focus:ring-yellow-400"
                />
                <button type="submit" className="w-full bg-church-maroon-dark text-white font-semibold py-2 rounded-md hover:bg-church-maroon transition-colors">
                    Submit Prayer
                </button>
            </form>
        </div>
    );
};

export default PrayerRequestForm;