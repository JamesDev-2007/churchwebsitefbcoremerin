import React from 'react';
import { NavLink } from 'react-router-dom';
import { sermons, blogPosts, events } from '../data/mockData';
import {
  CurrencyDollarIcon,
  VideoCameraIcon,
  ArrowUpRightIcon,
  CalendarIcon,
  HeartIcon,
} from '../components/icons';
import { useUser } from '../contexts/UserContext';

interface DashboardProps {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const QuickActionCard: React.FC<{
  to: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  color: string;
}> = ({ to, icon: Icon, title, subtitle, color }) => (
  <NavLink
    to={to}
    className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between text-white ${color}`}
  >
    <div>
      <Icon className="w-10 h-10 mb-4" />
      <h3 className="font-bold text-2xl font-poppins">{title}</h3>
      <p className="text-white/80">{subtitle}</p>
    </div>
    <div className="mt-6 flex justify-end">
      <ArrowUpRightIcon className="w-6 h-6" />
    </div>
  </NavLink>
);

const Dashboard: React.FC<DashboardProps> = ({ setIsLoggedIn }) => {
  const { user } = useUser();
  const userName = user?.displayName || 'Member';

  const latestSermon =
    [...sermons].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0] || null;

  const latestBlogPost =
    [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0] || null;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const nextEvent =
    [...events]
      .filter((e) => !e.isRecurring && new Date(e.date + 'T00:00:00') >= today)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0] || null;

  return (
    <div className="bg-warm-gray dark:bg-gray-900 min-h-screen px-6 py-10 font-open-sans">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold font-poppins text-gray-800 dark:text-gray-100">
          Welcome back, {userName}!
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Here's your overview and what's new.
        </p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold font-poppins text-church-maroon dark:text-yellow-400 mb-4">
          What's New
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <NavLink
            to="/dashboard/sermons"
            className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-500">Latest Sermon</p>
            <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mt-2 truncate">
              {latestSermon?.title || 'No recent sermon'}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{latestSermon?.preacher || ''}</p>
          </NavLink>

          <NavLink
            to="/dashboard/blog"
            className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-purple-500">From the Blog</p>
            <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mt-2 truncate">
              {latestBlogPost?.title || 'No recent blog post'}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{latestBlogPost?.author || ''}</p>
          </NavLink>

          <NavLink
            to="/dashboard/events"
            className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">Next Event</p>
            <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mt-2 truncate">
              {nextEvent?.title || 'No upcoming events'}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {nextEvent
                ? new Date(nextEvent.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                  })
                : 'Check the calendar'}
            </p>
          </NavLink>
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-semibold font-poppins text-church-maroon dark:text-yellow-400 mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <QuickActionCard
            to="/dashboard/donate"
            icon={CurrencyDollarIcon}
            title="Give Online"
            subtitle="Support our mission"
            color="bg-gradient-to-br from-green-500 to-green-600"
          />
          <QuickActionCard
            to="/dashboard/livestream"
            icon={VideoCameraIcon}
            title="Watch Live"
            subtitle="Join our service"
            color="bg-gradient-to-br from-red-500 to-red-600"
          />
          <QuickActionCard
            to="/dashboard/prayer"
            icon={HeartIcon}
            title="Prayer Request"
            subtitle="Let us pray with you"
            color="bg-gradient-to-br from-sky-500 to-sky-600"
          />
          <QuickActionCard
            to="/dashboard/events"
            icon={CalendarIcon}
            title="View Events"
            subtitle="See what's coming up"
            color="bg-gradient-to-br from-purple-500 to-purple-600"
          />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
