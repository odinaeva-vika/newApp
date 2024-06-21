import { FormIn } from '@/components/molecules/Form/FormIn';
import { FormUp } from '@/components/molecules/Form/FormUp';
import { ANIMATION_TIME } from '@/helpers/constants';
import { ModalType } from '@/interfaces';
import { setAnimationIn } from '@/store/animationIn/animationInSlice';
import { RootState } from '@/store/store';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import styles from './LayoutModal.module.scss';

type TLayoutModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onExited: () => void;
  formType: ModalType;
};

const overlayAnimation = {
  enter: styles.overlayEnter,
  enterActive: styles.overlayEnterActive,
  exit: styles.overlayExit,
  exitActive: styles.overlayExitActive,
};

const contentAnimation = {
  enter: styles.contentEnter,
  enterActive: styles.contentEnterActive,
  exit: styles.contentExit,
  exitActive: styles.contentExitActive,
};

export const LayoutModal: React.FC<TLayoutModalProps> = ({ onClose, isOpen, onExited, formType }) => {
  const { animationIn } = useSelector((state: RootState) => state.animationIn);

  const overlayRef = useRef();
  const contentRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAnimationIn(isOpen));
  }, [isOpen]);

  return (
    <div className={styles.container}>
      <CSSTransition
        in={animationIn}
        nodeRef={overlayRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={overlayAnimation}
        onExited={onExited}
      >
        <div ref={overlayRef} className={styles.overlay} onClick={onClose} />
      </CSSTransition>
      <CSSTransition
        in={animationIn}
        nodeRef={contentRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={contentAnimation}
        onExited={onExited}
      >
        {formType === 'register' ? <FormUp ref={contentRef} /> : <FormIn ref={contentRef} />}
      </CSSTransition>
    </div>
  );
};
