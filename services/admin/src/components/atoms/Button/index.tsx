import { TButton } from '@/interfaces';
import style from './Button.module.scss';

export const Button: React.FC<TButton> = ({ onClick, children }) => {
  return (
    <>
      <button onClick={onClick} className={style.button}>
        {children}
      </button>
    </>
  );
};
