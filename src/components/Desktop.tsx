import React, { useState } from 'react';
import MenuBar from './MenuBar';
import Dock from './Dock';
import Window from './Window';
import { theme } from '../config/theme';

function Desktop() {
  const [time] = useState(() => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  });

  return (
    <div className={`h-screen bg-[url('${theme.background.image}')] bg-cover bg-center flex flex-col animate-fade-in`}>
      <MenuBar time={time} />
      <div className="flex-1 relative">
        <Window />
      </div>
      <Dock />
    </div>
  );
}

export default Desktop;