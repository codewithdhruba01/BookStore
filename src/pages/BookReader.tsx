import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, BookOpen, Lock, Download, Share2, Bookmark } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const BookReader = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Sample book data - in real app, this would come from API
  const book = {
    id: id,
    title: 'The Future of Technology',
    author: 'Dr. Sarah Mitchell',
    totalPages: 324,
    cover: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800',
    pages: [
      {
        pageNumber: 1,
        content: `
          <h1>Chapter 1: Introduction to Future Technologies</h1>
          <p>The world of technology is evolving at an unprecedented pace. From artificial intelligence to quantum computing, we are witnessing revolutionary changes that will reshape our society, economy, and daily lives.</p>
          <p>In this comprehensive exploration, we will delve into the most promising technological advancements that are set to define the next decade and beyond. Each chapter will provide detailed insights into how these technologies work, their potential applications, and the challenges they present.</p>
          <p>As we embark on this journey through the landscape of emerging technologies, it's important to understand that we are not merely observing these changes from the sidelines. We are active participants in this technological revolution, and our decisions today will determine how these innovations shape tomorrow.</p>
        `,
      },
      {
        pageNumber: 2,
        content: `
          <h2>The AI Revolution</h2>
          <p>Artificial Intelligence has moved from the realm of science fiction to become an integral part of our daily lives. Machine learning algorithms now power everything from search engines to autonomous vehicles, and their capabilities continue to expand exponentially.</p>
          <p>The current generation of AI systems demonstrates remarkable abilities in pattern recognition, natural language processing, and decision-making. However, we are still in the early stages of what AI can achieve.</p>
          <p>Looking ahead, we can expect to see AI systems that can:</p>
          <ul>
            <li>Understand and generate human language with perfect fluency</li>
            <li>Create original artistic and literary works</li>
            <li>Solve complex scientific and mathematical problems</li>
            <li>Assist in medical diagnosis and treatment</li>
          </ul>
        `,
      },
      // Add more pages as needed
    ],
  };

  // Security: Prevent screenshots and right-click
  useEffect(() => {
    const preventScreenshot = (e: KeyboardEvent) => {
      // Prevent common screenshot shortcuts
      if (
        (e.key === 'PrintScreen') ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J') ||
        (e.ctrlKey && e.key === 'u') ||
        (e.key === 'F12')
      ) {
        e.preventDefault();
        alert('Screenshots and developer tools are disabled for content protection.');
      }
    };

    const preventRightClick = (e: MouseEvent) => {
      e.preventDefault();
    };

    const preventCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      alert('Copying is disabled for content protection.');
    };

    const preventSelect = (e: Event) => {
      e.preventDefault();
    };

    document.addEventListener('keydown', preventScreenshot);
    document.addEventListener('contextmenu', preventRightClick);
    document.addEventListener('copy', preventCopy);
    document.addEventListener('selectstart', preventSelect);

    // Blur content when window loses focus (screenshot prevention)
    const handleVisibilityChange = () => {
      const content = document.querySelector('.book-content');
      if (content) {
        if (document.hidden) {
          content.classList.add('blur-sm');
        } else {
          content.classList.remove('blur-sm');
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('keydown', preventScreenshot);
      document.removeEventListener('contextmenu', preventRightClick);
      document.removeEventListener('copy', preventCopy);
      document.removeEventListener('selectstart', preventSelect);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Redirect if not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const nextPage = () => {
    if (currentPage < book.totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getCurrentPageContent = () => {
    const page = book.pages.find(p => p.pageNumber === currentPage);
    return page ? page.content : '<p>Page content not available.</p>';
  };

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-900 ${isFullscreen ? 'fixed inset-0 z-50' : 'pt-16'}`}>
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={book.cover}
              alt={book.title}
              className="w-12 h-16 object-cover rounded"
            />
            <div>
              <h1 className="text-xl font-semibold text-slate-900 dark:text-white">
                {book.title}
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                by {book.author}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Page info */}
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Page {currentPage} of {book.totalPages}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              <button className="p-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Bookmark className="h-5 w-5" />
              </button>
              <button 
                className="p-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsFullscreen(!isFullscreen)}
              >
                <BookOpen className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reader Content */}
      <div className="flex-1 flex">
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Book Content */}
          <div className="flex-1 p-8">
            <div className="max-w-4xl mx-auto">
              <div 
                className="book-content no-select bg-white dark:bg-slate-800 rounded-lg shadow-lg p-12 min-h-96 prose prose-lg dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: getCurrentPageContent() }}
              />
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 p-6">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="flex items-center space-x-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
                <span>Previous</span>
              </button>

              {/* Page selector */}
              <div className="flex items-center space-x-4">
                <input
                  type="range"
                  min="1"
                  max={book.totalPages}
                  value={currentPage}
                  onChange={(e) => setCurrentPage(parseInt(e.target.value))}
                  className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="text-sm text-slate-600 dark:text-slate-400 w-20 text-center">
                  {Math.round((currentPage / book.totalPages) * 100)}%
                </div>
              </div>

              <button
                onClick={nextPage}
                disabled={currentPage === book.totalPages}
                className="flex items-center space-x-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <span>Next</span>
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar - Table of Contents */}
        <div className="w-80 bg-white dark:bg-slate-800 border-l border-slate-200 dark:border-slate-700 p-6 overflow-y-auto">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Table of Contents
          </h3>
          <div className="space-y-2">
            <button className="w-full text-left p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              Chapter 1: Introduction
              <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">Pages 1-15</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300">
              Chapter 2: AI Revolution
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Pages 16-45</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300">
              Chapter 3: Quantum Computing
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Pages 46-78</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300">
              Chapter 4: Biotechnology
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Pages 79-112</div>
            </button>
          </div>

          {/* Reading Progress */}
          <div className="mt-8">
            <h4 className="text-md font-medium text-slate-900 dark:text-white mb-3">
              Reading Progress
            </h4>
            <div className="bg-slate-100 dark:bg-slate-700 rounded-full h-2 mb-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentPage / book.totalPages) * 100}%` }}
              />
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              {currentPage} of {book.totalPages} pages ({Math.round((currentPage / book.totalPages) * 100)}%)
            </div>
          </div>

          {/* Security Notice */}
          <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <div className="flex items-center space-x-2 text-yellow-700 dark:text-yellow-300 mb-2">
              <Lock className="h-4 w-4" />
              <span className="text-sm font-medium">Content Protected</span>
            </div>
            <p className="text-xs text-yellow-600 dark:text-yellow-400">
              This book is protected by digital rights management. Screenshots, copying, and printing are disabled.
            </p>
          </div>
        </div>
      </div>

      {/* Security overlay for screenshots */}
      <div className="hidden fixed inset-0 bg-black z-50 flex items-center justify-center" id="security-overlay">
        <div className="text-white text-center">
          <Lock className="h-16 w-16 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Content Protected</h2>
          <p>Screenshots are not allowed for copyright protection.</p>
        </div>
      </div>
    </div>
  );
};

export default BookReader;