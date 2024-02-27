// Settings.js
import React, { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    enableNotifications: true,
    enableDarkMode: false,
    language: 'English',
    showAvatar: true,
    fontSize: 'medium',
    themeColor: 'blue',
  });

  const handleToggle = (settingKey) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [settingKey]: !prevSettings[settingKey],
    }));
  };

  const handleSelectChange = (e, settingKey) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [settingKey]: e.target.value,
    }));
  };

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-semibold mb-4">Settings</h2>
      <div className="bg-white p-8 shadow-md rounded-md">
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Notifications</h3>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={settings.enableNotifications}
              onChange={() => handleToggle('enableNotifications')}
              className="form-checkbox mr-2 h-5 w-5 text-blue-600"
            />
            Enable Notifications
          </label>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Appearance</h3>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={settings.enableDarkMode}
              onChange={() => handleToggle('enableDarkMode')}
              className="form-checkbox mr-2 h-5 w-5 text-blue-600"
            />
            Enable Dark Mode
          </label>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Language</h3>
          <select
            value={settings.language}
            onChange={(e) => handleSelectChange(e, 'language')}
            className="border border-gray-300 p-2 rounded-md w-full"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            {/* Add more language options as needed */}
          </select>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Display Settings</h3>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={settings.showAvatar}
              onChange={() => handleToggle('showAvatar')}
              className="form-checkbox mr-2 h-5 w-5 text-blue-600"
            />
            Show Avatar
          </label>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Text Size</h3>
          <select
            value={settings.fontSize}
            onChange={(e) => handleSelectChange(e, 'fontSize')}
            className="border border-gray-300 p-2 rounded-md w-full"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Theme Color</h3>
          <select
            value={settings.themeColor}
            onChange={(e) => handleSelectChange(e, 'themeColor')}
            className="border border-gray-300 p-2 rounded-md w-full"
          >
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            {/* Add more theme color options as needed */}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Settings;
