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

  const [bookmarkedTopics, setBookmarkedTopics] = useState(() => {
    const saved = localStorage.getItem('bookmarkedTopics');
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
    localStorage.setItem('bookmarkedTopics', JSON.stringify(bookmarkedTopics));
  }, [bookmarkedTopics]);

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
    if (bookmarkedTopics.includes(topicId)) {
      setBookmarkedTopics(bookmarkedTopics.filter(id => id !== topicId));
    } else {
      setBookmarkedTopics([...bookmarkedTopics, topicId]);
    }
  };

  const isBookmarked = (topicId) => {
    return bookmarkedTopics.includes(topicId);
  };

  const saveQuizScore = (topicId, score) => {
    setQuizScores({
      ...quizScores,
      [topicId]: score
    });
  };

  const getQuizScore = (topicId) => {
    return quizScores[topicId] || null;
  };

  return (
    <ProgressContext.Provider value={{
      completedTopics,
      bookmarkedTopics,
      quizScores,
      markTopicComplete,
      isTopicComplete,
      toggleBookmark,
      isBookmarked,
      saveQuizScore,
      getQuizScore
    }}>
      {children}
    </ProgressContext.Provider>
  );
};
