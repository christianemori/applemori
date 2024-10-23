import { LucideIcon, Chrome, Folder, Terminal, Music, Image, Mail, Settings, Battery, Wifi, Volume2, Search, Calendar, Cog } from 'lucide-react';

export interface AppIcon {
  icon: LucideIcon;
  name: string;
}

export interface ThemeConfig {
  background: {
    image: string;
    overlay: string;
  };
  login: {
    username: string;
    profileImage: string;
  };
  menuBar: {
    background: string;
    textColor: string;
    borderColor: string;
    height: string;
    menuItems: string[];
    statusIcons: LucideIcon[];
  };
  dock: {
    background: string;
    iconBackground: string;
    iconHoverBackground: string;
    borderColor: string;
    textColor: string;
    apps: AppIcon[];
  };
  window: {
    background: string;
    headerBackground: string;
    width: string;
    height: string;
    position: {
      top: string;
      left: string;
    };
    content: {
      title: string;
      text: string;
    };
  };
}

export const theme: ThemeConfig = {
  background: {
    image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=3540&auto=format&fit=crop',
    overlay: 'bg-black/20',
  },
  login: {
    username: 'John Doe',
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop',
  },
  menuBar: {
    background: 'bg-black/20',
    textColor: 'text-white/90',
    borderColor: 'border-white/10',
    height: 'h-8',
    menuItems: ['Finder', 'File', 'Edit', 'View', 'Go', 'Window', 'Help'],
    statusIcons: [Battery, Wifi, Volume2, Search, Calendar, Cog],
  },
  dock: {
    background: 'bg-white/10',
    iconBackground: 'bg-white/10',
    iconHoverBackground: 'bg-white/20',
    borderColor: 'border-white/20',
    textColor: 'text-white',
    apps: [
      { icon: Chrome, name: 'Chrome' },
      { icon: Folder, name: 'Finder' },
      { icon: Terminal, name: 'Terminal' },
      { icon: Music, name: 'Music' },
      { icon: Image, name: 'Photos' },
      { icon: Mail, name: 'Mail' },
      { icon: Settings, name: 'Settings' },
    ],
  },
  window: {
    background: 'bg-white',
    headerBackground: 'bg-gray-200',
    width: 'w-2/4',
    height: 'h-96',
    position: {
      top: 'top-8',
      left: 'left-1/4',
    },
    content: {
      title: 'Welcome to MacOS',
      text: 'This is a demo of a MacOS-style interface built with React and Tailwind CSS. Try interacting with the dock icons and menu bar elements!',
    },
  },
};