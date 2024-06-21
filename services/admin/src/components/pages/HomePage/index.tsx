import { useDispatch, useSelector } from 'react-redux';
import { HomeTemplates } from '@/components/templates/HomeTemplates';
import { ModalType } from '@/interfaces';
import { RootState } from '@/store/store';
import { setFormType, setIsModalOpen } from '@/store/homePage/homePageSlice';

export const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const { isModalOpen, formType } = useSelector((state: RootState) => state.homePage);

  const openModal = (type: ModalType) => {
    dispatch(setFormType(type));
    dispatch(setIsModalOpen(true));
  };
  const closeModal = () => dispatch(setIsModalOpen(false));

  return <HomeTemplates isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal} formType={formType} />;
};
