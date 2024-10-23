import React from 'react';
import { theme } from '../config/theme';

interface MenuBarProps {
  time: string;
}

function MenuBar({ time }: MenuBarProps) {
  return (
    <div className={`${theme.menuBar.height} ${theme.menuBar.background} backdrop-blur-xl border-b ${theme.menuBar.borderColor}`}>
      <div className={`flex items-center justify-between w-full px-4 ${theme.menuBar.textColor} text-sm`}>
        <div className="flex items-center space-x-4">
          <span className="font-semibold">☐</span>
          {theme.menuBar.menuItems.map((item, index) => (
            <span key={index} className={index === 0 ? 'font-semibold' : ''}>
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          {theme.menuBar.statusIcons.map((Icon, index) => (
            <Icon key={index} className="w-4 h-4" />
          ))}
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;