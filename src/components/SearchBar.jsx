import React from 'react';
import { FiSearch } from 'react-icons/fi';

export default function SearchBar({ username, setUsername, onSearch }) {
  return (
    <div className="flex w-full max-w-xl rounded-lg overflow-hidden bg-white">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full px-4 py-2 text-black focus:outline-none"
        placeholder="Digite um usuário do Github"
      />
      <button onClick={onSearch} className="bg-blue-600 text-white px-4 flex items-center justify-center">
        <FiSearch size={20} />
      </button>
    </div>
  );
}
