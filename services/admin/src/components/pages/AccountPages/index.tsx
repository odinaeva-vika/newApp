import { auth } from '@/helpers/firebase';
import { setAuthUser } from '@/store/authUser/authUserSlice';
import { RootState } from '@/store/store';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const AccountPages: React.FC = () => {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state: RootState) => state.authUser);

  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setAuthUser(user));
      } else {
        dispatch(setAuthUser(null));
      }
    });
    return () => {
      listen();
    };
  }, []);

  function userSingOut() {
    signOut(auth)
      .then(() => {
        console.log('ты вышел');
        navigate('/');
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div>
      {authUser ? (
        <div>
          <p>{authUser.email}</p>
          <button onClick={userSingOut}>выйти</button>
        </div>
      ) : (
        <div>Вы вышли со своего аккаунта</div>
      )}
    </div>
  );
};
