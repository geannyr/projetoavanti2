import React from 'react';

export default function ProfileCard({ profile }) {
  return (
    <div className="bg-gray-100 text-black rounded-2xl p-6 flex items-center max-w-3xl shadow-lg gap-6">
      <img
        src={profile.avatar_url}
        alt={profile.name}
        className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
      />
      <div>
        <h2 className="text-xl font-bold text-blue-600">{profile.name}</h2>
        <p>{profile.bio}</p>
      </div>
    </div>
  );
}
