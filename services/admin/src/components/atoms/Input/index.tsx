import { ChangeEvent } from 'react';

import styles from './Input.module.scss';

interface InputProps {
  value: string;
  type: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ onChange, value, type, placeholder }) => {
  return (
    <>
      <input value={value} onChange={onChange} className={styles.input} type={type} placeholder={placeholder} />
    </>
  );
};
