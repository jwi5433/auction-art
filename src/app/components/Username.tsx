'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Username: React.FC = () => {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleJoin = () => {
    if (username) {
      router.push(`/auction?username=${encodeURIComponent(username)}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <input
        type="text"
        placeholder="Enter your Instagram username"
        className="border p-2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleJoin}
      >
        Join Auction
      </button>
    </div>
  );
};

export default Username;