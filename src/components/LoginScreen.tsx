import React, { useState } from 'react';
import { ArrowRight, User } from 'lucide-react';
import { theme } from '../config/theme';

interface LoginScreenProps {
  onLogin: () => void;
}

function LoginScreen({ onLogin }: LoginScreenProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-screen w-screen relative overflow-hidden">
      {/* Background with blur effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${theme.background.image})`,
          filter: 'blur(30px) brightness(0.7)',
          transform: 'scale(1.1)'
        }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center">
        <div className="w-[420px] p-8 rounded-2xl bg-black/20 backdrop-blur-xl border border-white/10">
          {/* Profile Image */}
          <div className="relative group mx-auto">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-black/20 border-2 border-white/20 mx-auto">
              {theme.login.profileImage ? (
                <img 
                  src={theme.login.profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <User className="w-full h-full p-6 text-gray-400" />
              )}
            </div>
            <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
              <span className="text-white text-xs font-medium">Change</span>
            </div>
          </div>

          {/* User Name */}
          <h2 className="text-white text-2xl font-medium text-center mt-4 mb-2">
            {theme.login.username}
          </h2>
          <p className="text-white/60 text-sm text-center mb-6">
            Click to unlock
          </p>

          {/* Login Button */}
          <button
            onClick={onLogin}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-full h-12 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
          >
            <ArrowRight 
              className={`w-5 h-5 text-white transition-transform duration-300 ${
                isHovered ? 'translate-x-1' : ''
              }`}
            />
          </button>
        </div>

        {/* Time and Date */}
        <div className="absolute bottom-8 text-white/90 text-center space-y-1">
          <div className="text-6xl font-light tracking-tight">
            {new Date().toLocaleTimeString('en-US', { 
              hour: 'numeric', 
              minute: '2-digit',
              hour12: true 
            })}
          </div>
          <div className="text-lg font-light">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        </div>

        {/* Power Options */}
        <div className="absolute bottom-8 right-8 flex items-center space-x-4">
          <button className="text-white/80 hover:text-white transition-colors text-sm font-medium">
            Restart
          </button>
          <button className="text-white/80 hover:text-white transition-colors text-sm font-medium">
            Shut Down
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;