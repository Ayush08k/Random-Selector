import React from 'react';
import { User } from '../types';
import { TrophyIcon, StarIcon, RefreshCwIcon } from './icons';

interface SelectionPanelProps {
  usersCount: number;
  selectedUser: User | null;
  isLoading: boolean;
  onSelectWinner: () => void;
  onReset: () => void;
}

const SelectionPanel: React.FC<SelectionPanelProps> = ({
  usersCount,
  selectedUser,
  isLoading,
  onSelectWinner,
  onReset,
}) => {
  return (
    <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center mb-4">
            <TrophyIcon className="w-6 h-6 mr-3 text-amber-400" />
            <h2 className="text-xl font-bold text-white">Select a Winner</h2>
        </div>
        <div className="h-64 bg-slate-900/50 rounded-lg flex items-center justify-center p-4 border-2 border-dashed border-slate-700">
          {isLoading ? (
            <div className="text-center">
              <RefreshCwIcon className="w-12 h-12 text-indigo-400 mx-auto animate-spin-slow" />
              <p className="text-slate-300 mt-4 text-lg">Selecting a winner...</p>
            </div>
          ) : selectedUser ? (
            <div className="text-center animate-pop-in">
              <TrophyIcon className="w-16 h-16 text-amber-400 mx-auto" />
              <p className="text-slate-300 mt-2 animate-fade-in-char" style={{ animationDelay: '0.2s' }}>The winner is</p>
              <h3 className="relative text-3xl md:text-4xl font-extrabold text-white mt-1 overflow-hidden animate-shine">
                {selectedUser.name.split('').map((char, index) => (
                    <span
                        key={index}
                        className="animate-fade-in-char"
                        style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
              </h3>
              <p 
                className="text-indigo-300 animate-fade-in-char" 
                style={{ animationDelay: `${0.3 + selectedUser.name.length * 0.05 + 0.2}s` }}
              >
                {selectedUser.email}
              </p>
            </div>
          ) : (
            <div className="text-center text-slate-400">
              <p>Click the button below to select a winner.</p>
              <p className="text-sm">(Requires at least 2 participants)</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <button
          onClick={onSelectWinner}
          disabled={usersCount < 2 || isLoading}
          className="w-full flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-md transition-colors duration-300 disabled:bg-slate-600 disabled:cursor-not-allowed group"
        >
          <StarIcon className="w-5 h-5 mr-2 transform group-hover:rotate-12 transition-transform" />
          {selectedUser ? 'Select a New Winner' : 'Select a Winner'}
        </button>
        <button
          onClick={onReset}
          disabled={isLoading}
          className="w-full sm:w-auto flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-md transition-colors duration-300 disabled:bg-slate-600"
        >
          <RefreshCwIcon className="w-5 h-5" />
          <span className="sm:inline hidden ml-2">Reset All</span>
        </button>
      </div>
    </div>
  );
};

export default SelectionPanel;