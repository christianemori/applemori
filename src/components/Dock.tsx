import React from 'react';
import { theme } from '../config/theme';

function Dock() {
  return (
    <div className="flex justify-center mb-2">
      <div className={`${theme.dock.background} backdrop-blur-xl px-4 py-2 rounded-2xl border ${theme.dock.borderColor}`}>
        <div className="flex space-x-4">
          {theme.dock.apps.map((app, index) => (
            <div
              key={index}
              className="group flex flex-col items-center transition-all duration-300 hover:scale-110"
            >
              <div className={`w-12 h-12 ${theme.dock.iconBackground} rounded-xl flex items-center justify-center hover:${theme.dock.iconHoverBackground} transition-colors`}>
                <app.icon className={`w-6 h-6 ${theme.dock.textColor}`} />
              </div>
              <span className={`opacity-0 group-hover:opacity-100 transition-opacity absolute mt-14 ${theme.dock.textColor} text-xs bg-black/50 px-2 py-1 rounded`}>
                {app.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dock;