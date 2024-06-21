import { ChangeEvent } from 'react';

import styles from './Input.module.scss';

type TInputProps = {
  value: string;
  type: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<TInputProps> = ({ onChange, value, type, placeholder }) => {
  return (
    <>
      <input value={value} onChange={onChange} className={styles.input} type={type} placeholder={placeholder} />
    </>
  );
};
