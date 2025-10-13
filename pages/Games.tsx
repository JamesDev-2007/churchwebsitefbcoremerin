
import React, { useState, useEffect } from 'react';
import Quiz from '../components/Quiz';
import { generateQuizQuestions } from '../services/geminiService';
import type { QuizQuestion } from '../types';

const Games: React.FC = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNewQuiz = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const newQuestions = await generateQuizQuestions();
      if (newQuestions && newQuestions.length > 0) {
        setQuestions(newQuestions);
      } else {
        throw new Error("Failed to generate new questions.");
      }
    } catch (err) {
      setError("Sorry, we couldn't load a new quiz. Please try again later.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNewQuiz();
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="text-center p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-church-maroon dark:border-yellow-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Generating your personal Bible quiz...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center p-8 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-200 rounded-lg">
          <h3 className="font-bold">An Error Occurred</h3>
          <p>{error}</p>
          <button onClick={fetchNewQuiz} className="mt-4 bg-church-maroon text-white font-bold py-2 px-4 rounded-lg">
            Try Again
          </button>
        </div>
      );
    }

    if (questions.length > 0) {
      // FIX: Pass the required `questions` and `onRestart` props to the Quiz component.
      return <Quiz questions={questions} onRestart={fetchNewQuiz} />;
    }
    
    return null; // Should not happen if error handling is correct
  };

  return (
    <div className="bg-warm-gray dark:bg-gray-900 py-12 md:py-20 font-open-sans min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-8 px-4">
        <h1 className="text-4xl font-bold text-church-maroon dark:text-yellow-400 font-poppins">Bible Quiz Game</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Test your knowledge of the Bible with our fun quiz!
        </p>
      </div>
      <div className="w-full px-4 max-w-2xl">
        {renderContent()}
      </div>
    </div>
  );
};

export default Games;
