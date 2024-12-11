import React from 'react';
import { Trash2 } from 'lucide-react';

interface UsernameListProps {
  usernames: string[];
  onClear: () => void;
}

export function UsernameList({ usernames, onClear }: UsernameListProps) {
  if (usernames.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-md mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Stored Usernames</h2>
        <button
          onClick={onClear}
          className="flex items-center px-3 py-1 text-sm text-red-600 hover:text-red-700 focus:outline-none"
        >
          <Trash2 className="h-4 w-4 mr-1" />
          Clear All
        </button>
      </div>
      <ul className="bg-white rounded-lg shadow divide-y divide-gray-200">
        {usernames.map((username, index) => (
          <li key={index} className="px-4 py-3 hover:bg-gray-50">
            {username}
          </li>
        ))}
      </ul>
    </div>
  );
}