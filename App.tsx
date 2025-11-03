
import React, { useState } from 'react';
import type { User } from './types';
import RegistrationForm from './components/RegistrationForm';
import SelectionPanel from './components/SelectionPanel';
// Fix: Import UserList to display registered participants.
import UserList from './components/UserList';

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = (name: string, email: string) => {
    setError(null);
    if (!name.trim() || !email.trim()) {
      setError('Name and email cannot be empty.');
      return;
    }
    
    if (!/^[^\s@]+@gmail\.com$/.test(email)) {
      setError('Please enter a valid Gmail address.');
      return;
    }

    if (users.some((user) => user.email === email)) {
      setError('This email has already been registered.');
      return;
    }

    const newUser: User = {
      id: Date.now(),
      name,
      email,
    };
    setUsers([...users, newUser]);
  };

  const handleSelectWinner = () => {
    if (users.length < 2) return;
    setIsLoading(true);
    setSelectedUser(null);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * users.length);
      setSelectedUser(users[randomIndex]);
      setIsLoading(false);
    }, 2500);
  };
  
  const handleReset = () => {
    setUsers([]);
    setSelectedUser(null);
    setError(null);
    setIsLoading(false);
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-4 sm:p-6 lg:p-8 font-sans">
      <div className="container mx-auto max-w-6xl">
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Random Name Selector
          </h1>
          <p className="mt-2 text-lg text-slate-400">
            Register participants and pick a winner for your next giveaway!
          </p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <RegistrationForm onRegister={handleRegister} error={error} />
            {/* Fix: Render UserList to display registered participants. */}
            <UserList users={users} />
          </div>
          <div className="lg:sticky top-8 self-start">
            <SelectionPanel
              usersCount={users.length}
              selectedUser={selectedUser}
              isLoading={isLoading}
              onSelectWinner={handleSelectWinner}
              onReset={handleReset}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;