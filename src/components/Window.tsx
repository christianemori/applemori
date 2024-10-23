import React, { useState } from 'react';
import { Minus, Square, X } from 'lucide-react';
import { theme } from '../config/theme';

function Window() {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className={`absolute ${theme.window.position.top} ${theme.window.position.left} ${theme.window.width} rounded-lg overflow-hidden shadow-2xl`}>
      <div 
        className={`${theme.window.headerBackground} h-8 flex items-center justify-between px-4 cursor-move`}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
      >
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex space-x-4">
          <Minus className="w-4 h-4 text-gray-600" />
          <Square className="w-4 h-4 text-gray-600" />
          <X className="w-4 h-4 text-gray-600" />
        </div>
      </div>

      <div className={`${theme.window.background} ${theme.window.height} p-6`}>
        <h1 className="text-2xl font-bold mb-4">{theme.window.content.title}</h1>
        <p className="text-gray-600">{theme.window.content.text}</p>
      </div>
    </div>
  );
}

export default Window;