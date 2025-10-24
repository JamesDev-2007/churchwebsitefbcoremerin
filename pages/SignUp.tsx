import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { GoogleIcon } from '../components/icons';
import { auth } from '../firebase';
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { useUser } from '../contexts/UserContext';

const SignUp: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useUser();

  // Email/password sign-up
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    setIsLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      if (fullName) {
        await updateProfile(result.user, { displayName: fullName });
      }
      setUser(result.user);
      navigate('/dashboard'); // ✅ fixed route
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Google Sign-Up
  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      navigate('/dashboard'); // ✅ fixed route
    } catch (error) {
      console.error(error);
      alert('Google Sign-Up failed.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-warm-gray dark:bg-gray-900 py-12 md:py-20 font-open-sans">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl text-center">
          <h1 className="text-3xl font-bold text-church-maroon dark:text-yellow-400 font-poppins mb-2">
            Create Your Account
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Join our online community to stay connected.
          </p>

          <button
            type="button"
            onClick={handleGoogleSignUp}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-bold py-3 border dark:border-gray-600 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
          >
            <GoogleIcon className="w-6 h-6" />
            Sign Up with Google
          </button>

          <div className="my-6 flex items-center">
            <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
            <span className="mx-4 text-sm font-semibold text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label htmlFor="fullName" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg bg-warm-gray dark:bg-gray-700 dark:border-gray-600 focus:ring-church-maroon dark:focus:ring-yellow-400"
              />
            </div>

            <div>
              <label htmlFor="email-signup" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <input
                id="email-signup"
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
              <label htmlFor="password-signup" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <input
                id="password-signup"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg bg-warm-gray dark:bg-gray-700 dark:border-gray-600 focus:ring-church-maroon dark:focus:ring-yellow-400"
              />
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg bg-warm-gray dark:bg-gray-700 dark:border-gray-600 focus:ring-church-maroon dark:focus:ring-yellow-400"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-church-maroon text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-church-maroon-dark transition-colors disabled:bg-gray-400"
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <p className="mt-8 text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <NavLink to="/login" className="font-bold text-church-maroon-dark dark:text-yellow-300 hover:underline">
              Sign In
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
