import { TPortal } from '@/interfaces';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export const Portal: React.FC<TPortal> = ({ children }) => {
  const [container] = useState(() => document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(children, container);
};