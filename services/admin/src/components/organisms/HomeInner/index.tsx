import styles from './HomeInner.module.scss';

import { Button } from '@/components/atoms/Button';
import { THomeInner } from '@/interfaces';

export const HomeInner: React.FC<THomeInner> = ({ openModal }) => {
  return (
    <div className={styles.home__inner}>
      <h1 className={styles.home__title}>Платформа «всё в одном» для запуска вашей онлайн-школы</h1>
      <h2 className={styles.home__description}>
        Создавайте онлайн-курсы, собирайте базу, принимайте оплаты через Get Модуль, управляйте процессами легко и
        быстро
      </h2>
      <Button onClick={() => openModal('register')}>Зарегистрироваться</Button>
      <Button onClick={() => openModal('login')}>Войти</Button>
    </div>
  );
};
