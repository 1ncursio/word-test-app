import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import IconButton from '../../components/IconTextButton/IconTextButton';
import useProfileSWR from '../../hooks/swr/useProfileSWR';

const Login = () => {
  const history = useHistory();

  const auth = useCallback(
    (name: string) => () => {
      window.location.href = `http://localhost:3095/auth/${name}`;
    },
    [],
  );

  return (
    <div className="w-full h-full flex justify-center items-center">
      <IconButton icon="google" onClick={auth('google')} />
      <IconButton
        icon="github"
        onClick={auth('github')}
        className="bg-github"
      />
      <IconButton icon="kakao" onClick={auth('kakao')} className="bg-kakao" />
    </div>
  );
};

export default Login;
