import React, { useState, useMemo } from 'react';
import { blogPosts as initialBlogPosts } from '../data/mockData';
import type { BlogPost } from '../types';
import Modal from '../components/Modal';
import { HeartIcon, HeartIconSolid, TagIcon, ShareIcon, FacebookIcon, XIcon, WhatsAppIcon, EnvelopeIcon, UserIcon } from '../components/icons';

// A simple markdown to HTML converter (inspired by SpiritualGrowth.tsx)
const MarkdownRenderer: React.FC<{ markdown: string }> = ({ markdown }) => {
    const toHtml = (text: string) => {
        let html = text
            .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold font-poppins my-4">$1</h1>')
            .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold font-poppins my-3">$1</h2>')
            .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold font-poppins my-2">$1</h3>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic my-4">$1</blockquote>')
            .replace(/^\* (.*$)/gim, '<li class="ml-6">$1</li>')
            .replace(/(<li>.*<\/li>\s*)+/g, (match) => `<ul class="list-disc pl-5 my-4">${match}</ul>`)
            .replace(/\n/g, '<br />');
        html = html.replace(/<br \/>(\s*<ul|<h[1-3])/g, '$1');
        return html;
    };
    return <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: toHtml(markdown) }} />;
};

const Blog: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>(() => 
        initialBlogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    );
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTag, setActiveTag] = useState<string>('All');
    const [currentPage, setCurrentPage] = useState(1);
    
    const POSTS_PER_PAGE = 6;

    const allTags = useMemo(() => ['All', ...Array.from(new Set(initialBlogPosts.flatMap(p => p.tags)))], [initialBlogPosts]);
    const featuredPost = useMemo(() => posts.find(p => p.featured), [posts]);

    const handleLike = (postId: string) => {
        setPosts(posts.map(p => p.id === postId ? { ...p, likes: p.likes + 1 } : p));
    };

    const filteredPosts = useMemo(() => {
        return posts
            .filter(p => !p.featured)
            .filter(p => {
                const term = searchTerm.toLowerCase();
                return p.title.toLowerCase().includes(term) || p.excerpt.toLowerCase().includes(term) || p.author.toLowerCase().includes(term);
            })
            .filter(p => activeTag === 'All' || p.tags.includes(activeTag));
    }, [posts, searchTerm, activeTag]);

    const paginatedPosts = useMemo(() => {
        const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
        return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
    }, [filteredPosts, currentPage]);
    
    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

    return (
        <div className="bg-warm-gray dark:bg-gray-900 font-open-sans">
            {/* Hero Section */}
            <section className="relative bg-cover bg-center text-white py-20" style={{ backgroundImage: "url('https://picsum.photos/1200/800?random=56')" }}>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-poppins">From the Pastor's Desk</h1>
                    <p className="mt-4 text-lg md:text-xl text-yellow-200">Insights, stories, and encouragement from our community.</p>
                </div>
            </section>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                {/* Featured Post */}
                {featuredPost && (
                    <section className="mb-12 md:mb-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                            <img src={featuredPost.imageUrl} alt={featuredPost.title} className="w-full h-80 object-cover rounded-lg"/>
                            <div>
                                <span className="text-sm font-bold uppercase text-yellow-500 tracking-wider">Featured Post</span>
                                <h2 className="text-3xl font-bold text-church-maroon dark:text-yellow-400 font-poppins mt-2">{featuredPost.title}</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">By {featuredPost.author} on {new Date(featuredPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                <p className="mt-4 text-gray-600 dark:text-gray-400">{featuredPost.excerpt}</p>
                                <button onClick={() => setSelectedPost(featuredPost)} className="mt-6 bg-church-maroon-dark text-white font-bold py-2 px-5 rounded-full hover:bg-church-maroon transition-colors">
                                    Read Full Story &rarr;
                                </button>
                            </div>
                        </div>
                    </section>
                )}

                {/* Filters & Search */}
                <section className="mb-8 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search articles..."
                            className="w-full md:w-1/3 px-4 py-2 border rounded-full bg-warm-gray dark:bg-gray-700 dark:border-gray-600"
                        />
                         <div className="flex flex-wrap justify-center gap-2">
                            {allTags.map(tag => (
                                <button key={tag} onClick={() => setActiveTag(tag)} className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${activeTag === tag ? 'bg-church-maroon text-white shadow' : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}`}>
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Blog Grid */}
                {paginatedPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {paginatedPosts.map(post => (
                            <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:-translate-y-2">
                                <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover"/>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-2 mb-2">
                                            {post.tags.map(tag => <span key={tag} className="text-xs font-semibold bg-gray-200 dark:bg-gray-700 text-church-maroon-dark dark:text-yellow-300 px-2 py-1 rounded-full">{tag}</span>)}
                                        </div>
                                        <h3 className="text-xl font-bold text-church-maroon dark:text-yellow-400 font-poppins mb-2">{post.title}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">By {post.author} on {new Date(post.date).toLocaleDateString()}</p>
                                        <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">{post.excerpt}</p>
                                    </div>
                                    <div className="mt-auto flex justify-between items-center">
                                        <button onClick={() => setSelectedPost(post)} className="font-semibold text-church-maroon-dark dark:text-yellow-300 hover:underline">Read More</button>
                                        <button onClick={() => handleLike(post.id)} className="flex items-center gap-2 text-red-500 font-semibold px-3 py-1.5 rounded-full bg-red-100 dark:bg-red-900/20 hover:bg-red-200 dark:hover:bg-red-900/40 transition-colors">
                                            <HeartIcon className="w-5 h-5"/> {post.likes}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                     <div className="text-center py-16 text-gray-500">
                        <h3 className="text-2xl font-bold">No Posts Found</h3>
                        <p>Try adjusting your search or filter.</p>
                    </div>
                )}
                
                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="mt-12 flex justify-center items-center gap-4">
                        <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="px-4 py-2 bg-white dark:bg-gray-700 rounded-md font-semibold disabled:opacity-50">Previous</button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="px-4 py-2 bg-white dark:bg-gray-700 rounded-md font-semibold disabled:opacity-50">Next</button>
                    </div>
                )}

                {/* Newsletter Signup */}
                <section className="mt-16 md:mt-24 bg-church-maroon-dark text-white p-8 rounded-2xl text-center">
                    <EnvelopeIcon className="w-12 h-12 mx-auto text-yellow-300"/>
                    <h2 className="text-3xl font-bold font-poppins mt-4">Stay Connected</h2>
                    <p className="mt-2 max-w-xl mx-auto">Subscribe to our newsletter for the latest blog posts, news, and event updates delivered straight to your inbox.</p>
                    <form className="mt-6 flex flex-col sm:flex-row justify-center max-w-lg mx-auto gap-2">
                        <input type="email" placeholder="Enter your email address" className="w-full px-4 py-3 rounded-md text-gray-800" />
                        <button type="submit" className="bg-yellow-400 text-church-maroon-dark font-bold py-3 px-6 rounded-md hover:bg-yellow-300 transition-colors">Subscribe</button>
                    </form>
                </section>
            </div>

            {/* Post Modal */}
            {selectedPost && (
                <Modal isOpen={!!selectedPost} onClose={() => setSelectedPost(null)}>
                    <img src={selectedPost.imageUrl} alt={selectedPost.title} className="w-full h-64 object-cover rounded-t-lg"/>
                    <div className="p-6 md:p-8">
                        <div className="flex items-center gap-2 mb-2">
                            {selectedPost.tags.map(tag => <span key={tag} className="text-xs font-semibold bg-gray-200 dark:bg-gray-700 text-church-maroon-dark dark:text-yellow-300 px-2 py-1 rounded-full">{tag}</span>)}
                        </div>
                        <h2 className="text-3xl font-bold text-church-maroon dark:text-yellow-400 font-poppins">{selectedPost.title}</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">By {selectedPost.author} on {new Date(selectedPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        
                        <div className="mt-6 text-gray-700 dark:text-gray-300">
                             <MarkdownRenderer markdown={selectedPost.content}/>
                        </div>

                         <div className="mt-6 border-t dark:border-gray-700 pt-4 flex items-center justify-between">
                            <button onClick={() => handleLike(selectedPost.id)} className="flex items-center gap-2 text-red-500 font-semibold px-3 py-1.5 rounded-full bg-red-100 dark:bg-red-900/20 hover:bg-red-200 dark:hover:bg-red-900/40 transition-colors">
                                <HeartIconSolid className="w-5 h-5"/> {posts.find(p=>p.id === selectedPost.id)?.likes}
                            </button>
                             <div className="flex items-center gap-3">
                                <span className="font-semibold text-sm">Share:</span>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"><FacebookIcon className="h-6 w-6" /></a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white"><XIcon className="h-6 w-6" /></a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-500 dark:hover:text-green-400"><WhatsAppIcon className="h-6 w-6" /></a>
                            </div>
                        </div>

                         {/* Mock Comments Section */}
                        <div className="mt-8 border-t dark:border-gray-700 pt-6">
                            <h3 className="text-xl font-bold font-poppins mb-4">Comments (2)</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="bg-gray-200 dark:bg-gray-600 p-2 rounded-full"><UserIcon className="w-5 h-5"/></div>
                                    <div>
                                        <p className="font-semibold">Grace J.</p>
                                        <p className="text-sm">Such an encouraging word. Thank you for this!</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                     <div className="bg-gray-200 dark:bg-gray-600 p-2 rounded-full"><UserIcon className="w-5 h-5"/></div>
                                     <div>
                                        <p className="font-semibold">David A.</p>
                                        <p className="text-sm">This was a very timely reminder. God bless.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 pt-4">
                                     <div className="bg-gray-200 dark:bg-gray-600 p-2 rounded-full"><UserIcon className="w-5 h-5"/></div>
                                     <textarea rows={1} placeholder="Add a comment..." className="w-full px-3 py-2 border rounded-md bg-warm-gray dark:bg-gray-600 dark:border-gray-500" disabled></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default Blog;