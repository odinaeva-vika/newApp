import { ModalType } from '@/interfaces';
import { setMounted } from '@/store/animatedModal/animatedModalSlice';
import { RootState } from '@/store/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Portal } from '../../../helpers/Portal';
import { LayoutModal } from '../LayoutModal';

type TAnimatedModalProps = {
  isOpen: boolean;
  onClose: () => void;
  formType: ModalType;
};

export const AnimatedModal: React.FC<TAnimatedModalProps> = ({ isOpen, onClose, formType }) => {
  const dispatch = useDispatch();
  const { mounted } = useSelector((state: RootState) => state.animatedModal);

  useEffect(() => {
    if (isOpen) {
      dispatch(setMounted(true));
    }
  }, [isOpen]);

  const handleExited = () => {
    if (!isOpen) {
      dispatch(setMounted(false));
    }
  };

  return (
    mounted && (
      <Portal>
        <LayoutModal onClose={onClose} isOpen={isOpen} onExited={handleExited} formType={formType} />
      </Portal>
    )
  );
};
