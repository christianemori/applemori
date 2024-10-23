import React, { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import Desktop from './components/Desktop';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="h-screen">
      {!isLoggedIn ? (
        <LoginScreen onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <Desktop />
      )}
    </div>
  );
}

export default App;