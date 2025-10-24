import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';
import { MenuIcon } from './icons'; // Assuming you have a menu icon

interface DashboardLayoutProps {
    setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ setIsLoggedIn }) => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    return (
        <div className="flex h-screen bg-warm-gray dark:bg-gray-900 font-open-sans">
            {/* Static sidebar for larger screens */}
            <div className="hidden md:flex">
                <DashboardSidebar setIsLoggedIn={setIsLoggedIn} />
            </div>

            {/* Mobile Sidebar (Drawer) */}
            {isSidebarOpen && (
                 <div className="fixed inset-0 z-40 flex md:hidden">
                     <div className="fixed inset-0 bg-black opacity-50" onClick={() => setIsSidebarOpen(false)}></div>
                     <div className="relative flex-1 flex flex-col max-w-xs w-full bg-church-maroon-dark">
                         <DashboardSidebar setIsLoggedIn={setIsLoggedIn} />
                     </div>
                 </div>
            )}
            
            <div className="flex-1 flex flex-col overflow-hidden">
                 {/* Mobile Header */}
                <header className="md:hidden bg-white dark:bg-gray-800 shadow-md p-2">
                    <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-gray-600 dark:text-gray-300">
                        <MenuIcon className="h-6 w-6" />
                        <span className="sr-only">Open sidebar</span>
                    </button>
                </header>
                
                <main className="flex-1 p-6 md:p-10 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
