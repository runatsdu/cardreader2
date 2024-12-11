import React, { useState, useRef, useEffect } from 'react';
import { CreditCard } from 'lucide-react';

interface CardFormProps {
  onSubmit: (cardNumber: string) => Promise<void>;
  isLoading: boolean;
}

export function CardForm({ onSubmit, isLoading }: CardFormProps) {
  const [cardNumber, setCardNumber] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cardNumber.trim()) {
      await onSubmit(cardNumber);
      setCardNumber('');
      // Set focus back to input after submission
      inputRef.current?.focus();
    }
  };

  // Set initial focus when component mounts
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <CreditCard className="h-5 w-5 text-gray-400" />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="Enter card number"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          aria-label="Card number input"
        />
      </div>
      <button
        type="submit"
        disabled={isLoading || !cardNumber.trim()}
        className="mt-3 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Processing...' : 'Submit'}
      </button>
    </form>
  );
}