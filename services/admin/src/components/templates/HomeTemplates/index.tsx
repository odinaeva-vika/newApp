import styles from './HomeTemplates.module.scss';

import { AnimatedModal } from '@/components/organisms/AnimatedModal';
import { Footer } from '@/components/organisms/Footer/Footer';
import { Header } from '@/components/organisms/Header/Header';
import { HomeInner } from '@/components/organisms/HomeInner';
import { ModalType } from '@/interfaces';

type THomeTemplatesProps = {
  isModalOpen: boolean;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
  formType: ModalType;
};

export const HomeTemplates: React.FC<THomeTemplatesProps> = ({ isModalOpen, openModal, closeModal, formType }) => {
  return (
    <div className="wrapper">
      <Header />
      <main className={styles.main}>
        <section>
          <div className="container">
            <HomeInner openModal={openModal} />
          </div>
        </section>
      </main>
      <Footer />
      <AnimatedModal isOpen={isModalOpen} onClose={closeModal} formType={formType} />
    </div>
  );
};
