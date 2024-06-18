import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import { PATHS } from '@/helpers/constants';
import { auth } from '@/helpers/firebase';
import { clearForm, setEmail, setError, setPassword } from '@/store/form/formSlice';
import { RootState } from '@/store/store';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ChangeEvent, forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Form.module.scss';

export const FormIn = forwardRef<HTMLFormElement>((props, ref) => {
  const dispatch = useDispatch();
  const { email, password, error } = useSelector((state: RootState) => state.form);
  const navigate = useNavigate();

  const logIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        dispatch(clearForm());
        navigate(PATHS.ACCOUNT);
      })
      .catch((error) => {
        console.log(error);
        dispatch(setError('Мы не смогли найти ваш аккаунт.'));
      });
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(e.target.value));
  };

  return (
    <form onSubmit={logIn} ref={ref} className={styles.content}>
      <h2 className={styles.title}>Войти</h2>
      <div className={styles.wrapper}>
        <Input value={email} onChange={handleEmailChange} type={'email'} placeholder={'email'} />
        <Input value={password} onChange={handlePasswordChange} type={'password'} placeholder={'password'} />
      </div>
      <Button>Войти</Button>
      {error ? <p>{error}</p> : ''}
    </form>
  );
});
