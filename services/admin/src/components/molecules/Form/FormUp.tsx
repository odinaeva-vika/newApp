import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import { InputRadio } from '@/components/atoms/InputRadio';
import { PATHS } from '@/helpers/constants';
import { auth } from '@/helpers/firebase';
import { clearForm, setCopyPassword, setEmail, setError, setPassword } from '@/store/form/formSlice';
import { RootState } from '@/store/store';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ChangeEvent, forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Form.module.scss';

export const FormUp = forwardRef<HTMLFormElement>((props, ref) => {
  const dispatch = useDispatch();
  const { email, password, copyPassword, error } = useSelector((state: RootState) => state.form);
  const navigate = useNavigate();

  const register = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (copyPassword !== password) {
      dispatch(setError('Пароли не совпадают'));
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        dispatch(clearForm());
        navigate(PATHS.ACCOUNT);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(e.target.value));
  };

  const handleCopyPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setCopyPassword(e.target.value));
  };

  return (
    <form onSubmit={register} ref={ref} className={styles.content}>
      <h2 className={styles.title}>Зарегистрироваться</h2>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <InputRadio htmlFor={'student'} id={'student'} value={'student'} name={'formUp'}>
            Студент
          </InputRadio>

          <InputRadio htmlFor={'teacher'} id={'teacher'} value={'teacher'} name={'formUp'}>
            Учитель
          </InputRadio>
        </div>

        <Input value={email} onChange={handleEmailChange} type={'email'} placeholder={'email'} />
        <Input value={password} onChange={handlePasswordChange} type={'password'} placeholder={'password'} />
        <Input
          value={copyPassword}
          onChange={handleCopyPasswordChange}
          type={'password'}
          placeholder={'copyPassword'}
        />
      </div>
      <Button>Зарегистрироваться</Button>
      {error ? <p>{error}</p> : ''}
    </form>
  );
});
