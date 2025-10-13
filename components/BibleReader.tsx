import React, { useState, useEffect } from 'react';
import { bibleBooks, bibleBookChapters } from '../data/bibleData';
import { ChevronLeftIcon, ChevronRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

// --- Constants & Mappings ---
// A curated list of Bible translations available from the new public API
const availableTranslations = [
    { id: 'kjv', name: 'King James (KJV)' },
    { id: 'web', name: 'World English Bible (WEB)' },
    { id: 'bbe', name: 'Bible in Basic English (BBE)' },
];


const BibleReader: React.FC = () => {
    // State for selectors
    const [selectedBook, setSelectedBook] = useState('Genesis');
    const [chaptersInBook, setChaptersInBook] = useState(bibleBookChapters['Genesis']);
    const [selectedChapter, setSelectedChapter] = useState(1);
    const [selectedTranslationId, setSelectedTranslationId] = useState(availableTranslations[0].id);
    
    // State for search input
    const [searchTerm, setSearchTerm] = useState('');

    // State for content display
    const [passageReference, setPassageReference] = useState('Genesis 1');
    const [contentHtml, setContentHtml] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    // Central query state to trigger all data fetches
    const [query, setQuery] = useState('Genesis 1');

    // Centralized data fetching logic using the new public API
    useEffect(() => {
        const fetchBibleContent = async () => {
            if (!query) return;
            setIsLoading(true);
            setError(null);
            setContentHtml(null);
            
            try {
                const passageForApi = encodeURIComponent(query);
                const apiUrl = `https://bible-api.com/${passageForApi}?translation=${selectedTranslationId}`;

                const response = await fetch(apiUrl);

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'The requested passage could not be found. Please check your spelling or try a different format (e.g., John 3:16).');
                }

                const data = await response.json();

                if (!data.verses || data.verses.length === 0) {
                    throw new Error('No content was returned for this passage.');
                }
                
                // Construct HTML from the verses array for better formatting
                const generatedHtml = data.verses.map((verse: any) =>
                    `<span class="v">${verse.verse}</span> ${verse.text.trim().replace(/\n/g, ' ')}`
                ).join('<br><br>'); // Add space between verses

                setContentHtml(generatedHtml);
                setPassageReference(data.reference);

                // Update selectors to match the loaded content
                const currentBookName = data.verses[0].book_name;
                const currentChapter = data.verses[0].chapter;

                setSelectedBook(currentBookName);
                setSelectedChapter(currentChapter);
                setChaptersInBook(bibleBookChapters[currentBookName] || 1);

            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred while fetching scripture.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchBibleContent();
    }, [query, selectedTranslationId]);

    // Handlers for selectors and navigation
    const handleBookChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const book = e.target.value;
        setQuery(`${book} 1`);
    };
    
    const handleChapterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const chapter = parseInt(e.target.value, 10);
        setQuery(`${selectedBook} ${chapter}`);
    };
    
    const handleTranslationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTranslationId(e.target.value);
    };

    const goToPrevChapter = () => {
        if (selectedChapter > 1) {
            setQuery(`${selectedBook} ${selectedChapter - 1}`);
        } else {
            const currentBookIndex = bibleBooks.indexOf(selectedBook);
            if (currentBookIndex > 0) {
                const prevBook = bibleBooks[currentBookIndex - 1];
                const lastChapterOfPrevBook = bibleBookChapters[prevBook];
                setQuery(`${prevBook} ${lastChapterOfPrevBook}`);
            }
        }
    };
    
    const goToNextChapter = () => {
        if (selectedChapter < chaptersInBook) {
            setQuery(`${selectedBook} ${selectedChapter + 1}`);
        } else {
            const currentBookIndex = bibleBooks.indexOf(selectedBook);
            if (currentBookIndex < bibleBooks.length - 1) {
                const nextBook = bibleBooks[currentBookIndex + 1];
                setQuery(`${nextBook} 1`);
            }
        }
    };
    
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchTerm.trim() === '') return;
        setQuery(searchTerm);
        setSearchTerm('');
    };

    return (
        <div className="bg-white dark:bg-gray-800 flex flex-col h-full">
            <div className="p-3 border-b dark:border-gray-700 space-y-2">
                <form onSubmit={handleSearch} className="flex items-center gap-2">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search (e.g., John 3:16)"
                        className="w-full px-3 py-1.5 border dark:border-gray-600 rounded-md text-sm bg-warm-gray dark:bg-gray-700 focus:ring-1 focus:ring-church-maroon dark:focus:ring-yellow-400 focus:outline-none"
                    />
                    <button 
                        type="submit" 
                        className="p-2 bg-church-maroon text-white rounded-md hover:bg-church-maroon-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-church-maroon"
                    >
                        <MagnifyingGlassIcon className="w-4 h-4" />
                    </button>
                </form>
                <div className="grid grid-cols-2 gap-2">
                    <select value={selectedBook} onChange={handleBookChange} className="w-full px-3 py-1.5 border dark:border-gray-600 rounded-md text-sm bg-warm-gray dark:bg-gray-700 focus:ring-1 focus:ring-church-maroon dark:focus:ring-yellow-400 focus:outline-none">
                        {bibleBooks.map(book => <option key={book} value={book}>{book}</option>)}
                    </select>
                    <select value={selectedChapter} onChange={handleChapterChange} className="w-full px-3 py-1.5 border dark:border-gray-600 rounded-md text-sm bg-warm-gray dark:bg-gray-700 focus:ring-1 focus:ring-church-maroon dark:focus:ring-yellow-400 focus:outline-none">
                        {Array.from({ length: chaptersInBook }, (_, i) => i + 1).map(chap => <option key={chap} value={chap}>{chap}</option>)}
                    </select>
                </div>
                 <select value={selectedTranslationId} onChange={handleTranslationChange} className="w-full px-3 py-1.5 border dark:border-gray-600 rounded-md text-sm bg-warm-gray dark:bg-gray-700 focus:ring-1 focus:ring-church-maroon dark:focus:ring-yellow-400 focus:outline-none">
                    {availableTranslations.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                </select>
            </div>

            <div className="flex-1 p-4 overflow-y-auto text-gray-700 dark:text-gray-300">
                 <style>{`
                    .bible-content .v { font-weight: bold; padding-right: 0.25rem; color: #9ca3af; } /* gray-400 */
                    .dark .bible-content .v { color: #6b7280; } /* gray-500 */
                `}</style>
                {isLoading ? (
                    <div className="flex justify-center items-center h-full">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-church-maroon dark:border-yellow-400"></div>
                    </div>
                ) : error ? (
                    <div className="text-center text-red-500 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                        <p className="font-semibold">Error</p>
                        <p className="text-sm">{error}</p>
                    </div>
                ) : contentHtml ? (
                    <div>
                        <h4 className="font-bold text-center uppercase text-lg mb-4 text-church-maroon dark:text-yellow-400">{passageReference}</h4>
                        <div
                            className="text-base leading-relaxed bible-content"
                            dangerouslySetInnerHTML={{ __html: contentHtml }}
                        />
                    </div>
                ) : null}
            </div>

            <div className="p-2 border-t dark:border-gray-700 flex justify-between items-center">
                <button onClick={goToPrevChapter} className="flex items-center gap-1 font-semibold text-sm px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <ChevronLeftIcon className="w-5 h-5" /> Previous
                </button>
                <button onClick={goToNextChapter} className="flex items-center gap-1 font-semibold text-sm px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    Next <ChevronRightIcon className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default BibleReader;
