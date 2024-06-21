import style from './Button.module.scss';

type TButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
};

export const Button: React.FC<TButtonProps> = ({ onClick, children }) => {
  return (
    <>
      <button onClick={onClick} className={style.button}>
        {children}
      </button>
    </>
  );
};
