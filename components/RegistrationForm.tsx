
import React, { useState } from 'react';
import { UserPlusIcon } from './icons';

interface RegistrationFormProps {
  onRegister: (name: string, email: string) => void;
  error: string | null;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onRegister, error }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const validateName = () => {
    if (!name.trim()) {
      setNameError('Name cannot be empty.');
      return false;
    }
    setNameError(null);
    return true;
  };

  const validateEmail = () => {
    if (!email.trim()) {
      setEmailError('Gmail cannot be empty.');
      return false;
    }
    if (!/^[^\s@]+@gmail\.com$/.test(email)) {
      setEmailError('Please enter a valid Gmail address.');
      return false;
    }
    setEmailError(null);
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isNameValid = validateName();
    const isEmailValid = validateEmail();

    if (isNameValid && isEmailValid) {
      onRegister(name, email);
      setName('');
      setEmail('');
    }
  };

  return (
    <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
      <div className="flex items-center mb-4">
        <UserPlusIcon className="w-6 h-6 mr-3 text-indigo-400" />
        <h2 className="text-xl font-bold text-white">Register Participant</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={validateName}
            className={`w-full bg-slate-700 border rounded-md py-2 px-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 ${nameError ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-slate-600 focus:ring-indigo-500 focus:border-indigo-500'}`}
            placeholder="e.g., Jane Doe"
            required
            aria-invalid={!!nameError}
            aria-describedby={nameError ? "name-error" : undefined}
          />
          {nameError && <p id="name-error" className="text-red-400 text-sm mt-1">{nameError}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
            Gmail
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            className={`w-full bg-slate-700 border rounded-md py-2 px-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 ${emailError ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-slate-600 focus:ring-indigo-500 focus:border-indigo-500'}`}
            placeholder="e.g., jane.doe@gmail.com"
            required
            aria-invalid={!!emailError}
            aria-describedby={emailError ? "email-error" : undefined}
          />
          {emailError && <p id="email-error" className="text-red-400 text-sm mt-1">{emailError}</p>}
        </div>
        {error && !nameError && !emailError && <p className="text-red-400 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 disabled:bg-slate-600 disabled:cursor-not-allowed"
        >
          <UserPlusIcon className="w-5 h-5 mr-2" />
          Add Participant
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
