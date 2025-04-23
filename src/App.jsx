import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ProfileCard from './components/ProfileCard';
import ErrorMessage from './components/ErrorMessage';

export default function App() {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!username) return;
    setLoading(true);
    setError(null);
    setProfile(null);

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) throw new Error('Usuário não encontrado');
      const data = await res.json();
      setProfile(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-4 gap-6 bg-black text-white">
      <h1 className="text-4xl font-bold flex items-center gap-2 mt-4">
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" className="w-10 h-10" />
        Perfil <span className="text-white font-extrabold">GitHub</span>
      </h1>
      <SearchBar username={username} setUsername={setUsername} onSearch={handleSearch} />
      {loading && <p>Carregando...</p>}
      {error && <ErrorMessage message={error} />}
      {profile && <ProfileCard profile={profile} />}
    </div>
  );
}
