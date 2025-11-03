import React, { useState } from 'react';
import { User } from '../types';
import { UsersIcon, ChevronDownIcon } from './icons';

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-800/50 p-6 rounded-lg mt-8 border border-slate-700">
      <button
        className="w-full flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-800 rounded-md -m-2 p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="participants-list"
      >
        <div className="flex items-center">
          <UsersIcon className="w-6 h-6 mr-3 text-indigo-400" />
          <h2 className="text-xl font-bold text-white">Participants ({users.length})</h2>
        </div>
        <ChevronDownIcon
          className={`w-6 h-6 text-slate-400 transition-transform duration-300 transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div id="participants-list" className="mt-4 max-h-80 overflow-y-auto space-y-3 pr-2">
          {users.length === 0 ? (
            <p className="text-slate-400 text-center py-4">No participants registered yet.</p>
          ) : (
            users.map((user) => (
              <div
                key={user.id}
                className="bg-slate-700/50 p-3 rounded-md flex items-center justify-between border border-slate-600"
              >
                <div>
                  <p className="font-semibold text-white">{user.name}</p>
                  <p className="text-sm text-slate-400">{user.email}</p>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default UserList;