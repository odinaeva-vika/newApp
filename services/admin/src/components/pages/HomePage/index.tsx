import { useState } from 'react';

import { HomeTemplates } from '@/components/templates/HomeTemplates';

export const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState<'register' | 'login'>('register');

  const openModal = (type: 'register' | 'login') => {
    setFormType(type);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return <HomeTemplates isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal} formType={formType} />;
};
