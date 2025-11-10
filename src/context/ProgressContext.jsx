import { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within ProgressProvider');
  }
  return context;
};

export const ProgressProvider = ({ children }) => {
  const [completedTopics, setCompletedTopics] = useState(() => {
    const saved = localStorage.getItem('completedTopics');
    return saved ? JSON.parse(saved) : [];
  });

  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  const [quizScores, setQuizScores] = useState(() => {
    const saved = localStorage.getItem('quizScores');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('completedTopics', JSON.stringify(completedTopics));
  }, [completedTopics]);

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem('quizScores', JSON.stringify(quizScores));
  }, [quizScores]);

  const markTopicComplete = (topicId) => {
    if (!completedTopics.includes(topicId)) {
      setCompletedTopics([...completedTopics, topicId]);
    }
  };

  const isTopicComplete = (topicId) => {
    return completedTopics.includes(topicId);
  };

  const toggleBookmark = (topicId) => {
    if (bookmarks.includes(topicId)) {
      setBookmarks(bookmarks.filter(id => id !== topicId));
    } else {
      setBookmarks([...bookmarks, topicId]);
    }
  };

  const isBookmarked = (topicId) => {
    return bookmarks.includes(topicId);
  };

  const saveQuizScore = (topicId, score, total) => {
    setQuizScores({
      ...quizScores,
      [topicId]: { score, total, date: new Date().toISOString() }
    });
  };

  const getQuizScore = (topicId) => {
    return quizScores[topicId] || null;
  };

  const value = {
    completedTopics,
    bookmarks,
    quizScores,
    markTopicComplete,
    isTopicComplete,
    toggleBookmark,
    isBookmarked,
    saveQuizScore,
    getQuizScore,
  };

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
};
