import styles from './InputRadio.module.scss';

type TInputRadioProps = {
  htmlFor: string;
  value: string;
  id: string;
  name: string;
  children: React.ReactNode;
};

export const InputRadio: React.FC<TInputRadioProps> = ({ htmlFor, value, id, name, children }) => {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      <input className={styles.input} type="radio" id={id} value={value} name={name} />
      {children}
    </label>
  );
};
