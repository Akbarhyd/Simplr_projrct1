import React, { useState } from 'react';
import { login } from '../api/auth';
import { setAuthToken } from '../api/documents';

export default function Login({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async e => {
    e.preventDefault();
    const resp = await login(username, password);
    const token = resp.data.accessToken;
    setAuthToken(token);
    setToken(token);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button>Login</button>
    </form>
  );
}