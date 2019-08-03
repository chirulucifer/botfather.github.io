import React, { useState, useEffect } from 'react';
import Loader from '../Loader';
import Profile from '../Profile';
import './App.css';

function App() {
  const [shouldPresentContent, setShouldPresentContent] = useState(true);

  const showContent = () => {
    setShouldPresentContent(!shouldPresentContent);
  };

  useEffect(() => {
    setInterval(showContent, 3000);
  }, []);

  return (
    <div className="profile-container">
      {
        shouldPresentContent ? <Loader /> : <Profile />
      }
    </div>
  );
}

export default App;
