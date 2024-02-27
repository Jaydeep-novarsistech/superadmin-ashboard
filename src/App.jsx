// App.js
import React, { useState, useEffect } from 'react';
import Dashboard from './Components/Dashboard';
import Users from './Components/Users';
import Settings from './Components/Settings';
import Note from './Components/Note';
import SubAdmin from './Components/SubAdmin';
import { Home, User, Settings as SettingsIcon, MessageSquare, BarChart2, Users as UsersIcon } from 'react-feather';
import ReactDOM from 'react-dom';
import AllDetailsSubAdmin from './Components/AllDetailsSubAdmin';

const App = () => {
  const [currentComponent, setCurrentComponent] = useState('Dashboard');

  useEffect(() => {
    // Get the current pathname from the URL
    const currentPath = window.location.pathname;
  
    // Map the pathname to the corresponding component name
    const pathToComponent = {
      '/': 'Dashboard',
      '/SubAdmin': 'SubAdmin',
      '/Users': 'Users',
      '/Settings': 'Settings',
      '/Note': 'Note',
    };
  
    // Set the current component based on the pathname
    setCurrentComponent(pathToComponent[currentPath] || 'Dashboard');
  }, []); // Empty dependency array to run the effect only once on mount
  
  const renderComponent = () => {
    switch (currentComponent) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Users':
        return <Users />;
      case 'Settings':
        return <Settings />;
      case 'Note':
        return <Note />;
      case 'SubAdmin':
        return <SubAdmin />;
      default:
        return null;
    }
  };

  const sidebarItems = [
    { icon: <Home size={24} />, name: 'Dashboard', component: 'Dashboard' },
    { icon: <User size={24} />, name: 'SubAdmin', component: 'SubAdmin' },
    { icon: <UsersIcon size={24} />, name: 'Users', component: 'Users' },
    { icon: <SettingsIcon size={24} />, name: 'Settings', component: 'Settings' },
    { icon: <MessageSquare size={24} />, name: 'Note', component: 'Note' },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-24 bg-gray-800 text-white p-4 flex flex-col">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className={`mb-8 cursor-pointer hover:bg-gray-600 p-2 rounded-md  ${
              currentComponent === item.component ? 'bg-gray-600' : ''
            }`}
            onClick={() => setCurrentComponent(item.component)}
          >
            {item.icon}
            <div className="text-xs mt-1">{item.name}</div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-8 flex flex-col">
        {renderComponent()}
      </div>
      
    </div>
      );
};

export default App;
