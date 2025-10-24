import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { GoogleIcon } from '../components/icons';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useUser } from '../contexts/UserContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('Logging in with:', { email, password });
    setTimeout(() => {
      setIsLoading(false);
      alert('This is a demo. Email/password login not yet implemented.');
    }, 1500);
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Google user:', user);
      setUser(user);
      navigate('/dashboard'); // ✅ fixed route
    } catch (error) {
      console.error(error);
      alert('Google Sign-In failed.');
    }
  };

  return (
    <div className="bg-warm-gray dark:bg-gray-900 py-12 md:py-20 font-open-sans">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl text-center">
          <h1 className="text-3xl font-bold text-church-maroon dark:text-yellow-400 font-poppins mb-2">
            Welcome Back!
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Sign in to your account to connect with the community.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg bg-warm-gray dark:bg-gray-700 dark:border-gray-600 focus:ring-church-maroon dark:focus:ring-yellow-400"
              />
            </div>

            <div>
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <a href="#" className="text-sm font-semibold text-church-maroon-dark dark:text-yellow-300 hover:underline">
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg bg-warm-gray dark:bg-gray-700 dark:border-gray-600 focus:ring-church-maroon dark:focus:ring-yellow-400"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-church-maroon text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-church-maroon-dark transition-colors disabled:bg-gray-400"
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div className="my-6 flex items-center">
            <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
            <span className="mx-4 text-sm font-semibold text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
          </div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-bold py-3 border dark:border-gray-600 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
          >
            <GoogleIcon className="w-6 h-6" />
            Sign In with Google
          </button>

          <p className="mt-8 text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?{' '}
            <NavLink to="/signup" className="font-bold text-church-maroon-dark dark:text-yellow-300 hover:underline">
              Sign Up
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
