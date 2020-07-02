import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
  setLogin,
} from '../redux';

import StyleLogin from './style.Login';

import loginUser from '../utils/index';

export default () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = useCallback((event) => {
    event.preventDefault();
    loginUser({ 'email': userName, 'password': password })
      .then((userId) => {
        dispatch(setLogin(userId));
      })
      .catch((error) => console.log(error));
  }, [dispatch, password, userName]);

  return (
    <StyleLogin>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          placeholder="hello@user.com"
        />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Gfhjkm_123"
        />
        <button type="submit"> Login </button>
      </form>
    </StyleLogin>
  );
};
