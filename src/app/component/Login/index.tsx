'use client';

import { useState } from 'react';

import Button from '@/component/common/Button';
import { LOGIN } from '@/constants';
const Login = () => {
  const {
    ID,
    PASSWORD,
    SAVE_ID,
    BUTTON_TEXT,
    ID_PLACEHOLDER,
    PASSWORD_PLACEHOLDER,
  } = LOGIN;
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <form className="w-3/4 min-w-max max-w-sm flex flex-col gap-4">
      <label className="flex items-center w-full" htmlFor="user-id">
        <span className="w-1/4">{ID}</span>
        <input
          className="bg-gray-100 appearance-none rounded w-full py-2 px-4 focus:outline-none"
          id="user-id"
          type="text"
          value={id}
          placeholder={ID_PLACEHOLDER}
          onChange={e => setId(e.target.value)}
        />
      </label>
      <label className="flex items-center w-full" htmlFor="user-password">
        <span className="w-1/4">{PASSWORD}</span>
        <input
          className="bg-gray-100 appearance-none rounded w-full py-2 px-4 focus:outline-none"
          id="user-password"
          type="password"
          placeholder={PASSWORD_PLACEHOLDER}
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <input className="mr-2 leading-tight" type="checkbox" />
        <span className="text-sm">{SAVE_ID}</span>
      </label>
      <Button type="submit" variant="filled" className="w-full">
        {BUTTON_TEXT}
      </Button>
    </form>
  );
};

export default Login;
