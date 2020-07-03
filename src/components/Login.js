import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
  setLogin,
} from '../redux';

import StyleLogin from './style.Login';

import ModalWindowError from './ModalWindowError';

import loginUser from '../utils/index';

export default () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loginFalse, setLoginFalse] = useState(false);
  const [error, setError] = useState('');

  const openError = useCallback((typeError) => {
    setLoginFalse(true);
    setError(typeError.message);
  }, []);

  const submitHandler = useCallback((event) => {
    event.preventDefault();
    loginUser({ 'email': userName, 'password': password }, openError)
      .then((userId) => {
        dispatch(setLogin(userId));
      })
      .catch((err) => openError(err));
  }, [dispatch, openError, password, userName]);

  const closeError = useCallback(() => {
    setLoginFalse(false);
  }, []);

  return (
    <StyleLogin>
      {loginFalse
        ? (<ModalWindowError error={error} closeError={closeError} />)
        : null}
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
