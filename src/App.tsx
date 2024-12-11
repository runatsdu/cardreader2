import React, { useState, useEffect } from 'react';
import { CardForm } from './components/CardForm';
import { UsernameList } from './components/UsernameList';
import { fetchUsername } from './api/cardApi';
import { getStoredUsernames, saveUsernames, clearUsernames } from './utils/localStorage';

function App() {
  const [usernames, setUsernames] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setUsernames(getStoredUsernames());
  }, []);

  const handleSubmit = async (cardNumber: string) => {
    setIsLoading(true);
    try {
      const username = await fetchUsername(cardNumber);
      const newUsernames = [...usernames, username];
      setUsernames(newUsernames);
      saveUsernames(newUsernames);
    } catch (error) {
      console.error('Error fetching username:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setUsernames([]);
    clearUsernames();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Card Number Lookup</h1>
          <p className="mt-2 text-sm text-gray-600">
            Enter a card number to retrieve the associated username
          </p>
        </div>
        
        <div className="space-y-8">
          <CardForm onSubmit={handleSubmit} isLoading={isLoading} />
          <UsernameList usernames={usernames} onClear={handleClear} />
        </div>
      </div>
    </div>
  );
}

export default App;