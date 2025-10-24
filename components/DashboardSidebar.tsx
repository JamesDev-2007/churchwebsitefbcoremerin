import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
    HomeIcon, VideoCameraIcon, CalendarIcon, UsersIcon, HeartIcon,
    FilmIcon, RssIcon, UserCircleIcon, LifebuoyIcon, InformationCircleIcon,
    PhotoIcon, PhoneIcon, ArrowLeftOnRectangleIcon, Cog6ToothIcon
} from './icons';

interface DashboardSidebarProps {
    setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const NavItem: React.FC<{ to: string; icon: React.ElementType; children: React.ReactNode }> = ({ to, icon: Icon, children }) => {
    const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
        `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm ${
        isActive
            ? 'bg-yellow-400 text-church-maroon-dark font-semibold shadow-inner'
            : 'text-gray-300 hover:bg-church-maroon hover:text-white'
        }`;
    
    return (
        <NavLink to={to} className={navLinkClasses} end={to === "/dashboard"}>
            <Icon className="w-5 h-5 flex-shrink-0" />
            <span className="flex-1">{children}</span>
        </NavLink>
    );
};

const NavGroup: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h3 className="px-3 text-xs font-semibold uppercase text-gray-400 tracking-wider mb-2">{title}</h3>
        <div className="space-y-1">{children}</div>
    </div>
);

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const userName = 'Member';

    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate('/');
    };

    return (
        <aside className="w-64 bg-church-maroon-dark text-white flex-col h-full shadow-2xl hidden md:flex">
            <div className="p-4 border-b border-church-maroon">
                 <NavLink to="/dashboard" className="flex items-center gap-3 text-white">
                    <svg className="h-8 w-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2C11.45 2 11 2.45 11 3V9H5C4.45 9 4 9.45 4 10C4 10.55 4.45 11 5 11H11V21C11 21.55 11.45 22 12 22C12.55 22 13 21.55 13 21V11H19C19.55 11 20 10.55 20 10C20 9.45 19.55 9 19 9H13V3C13 2.45 12.55 2 12 2Z" />
                    </svg>
                  <span className="text-xl font-bold font-poppins">FBC Itire</span>
                </NavLink>
            </div>

            <nav className="flex-1 p-4 space-y-6 overflow-y-auto">
                <NavGroup title="Main">
                    <NavItem to="/dashboard" icon={HomeIcon}>Dashboard</NavItem>
                    <NavItem to="/dashboard/livestream" icon={VideoCameraIcon}>Livestream</NavItem>
                </NavGroup>
                
                <NavGroup title="Connect">
                    <NavItem to="/dashboard/events" icon={CalendarIcon}>Events</NavItem>
                    <NavItem to="/dashboard/ministries" icon={UsersIcon}>Ministries</NavItem>
                    <NavItem to="/dashboard/connect" icon={RssIcon}>Community Wall</NavItem>
                    <NavItem to="/dashboard/prayer" icon={HeartIcon}>Prayer Request</NavItem>
                </NavGroup>

                <NavGroup title="Resources">
                    <NavItem to="/dashboard/sermons" icon={FilmIcon}>Sermons</NavItem>
                    <NavItem to="/dashboard/blog" icon={RssIcon}>Blog</NavItem>
                    <NavItem to="/dashboard/pastors-corner" icon={UserCircleIcon}>Pastor's Corner</NavItem>
                    <NavItem to="/dashboard/spiritual-growth" icon={LifebuoyIcon}>Spiritual Growth</NavItem>
                </NavGroup>

                <NavGroup title="Information">
                    <NavItem to="/dashboard/about" icon={InformationCircleIcon}>About Us</NavItem>
                    <NavItem to="/dashboard/gallery" icon={PhotoIcon}>Gallery</NavItem>
                    <NavItem to="/dashboard/contact" icon={PhoneIcon}>Contact Us</NavItem>
                </NavGroup>
            </nav>

            <div className="p-4 border-t border-church-maroon mt-auto">
                 <div className="flex items-center gap-3 mb-4">
                    <UserCircleIcon className="w-10 h-10 text-gray-400" />
                    <div>
                        <p className="font-semibold text-sm">{userName}</p>
                        <a href="#" className="text-xs text-gray-400 hover:text-yellow-300">View Profile</a>
                    </div>
                </div>
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm text-gray-300 hover:bg-church-maroon hover:text-white"
                >
                    <ArrowLeftOnRectangleIcon className="w-5 h-5" />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default DashboardSidebar;
