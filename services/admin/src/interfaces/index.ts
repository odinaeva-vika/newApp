type ModalType = 'register' | 'login';

export type TButton = {
  onClick?: () => void;
  children: React.ReactNode;
};

export type TAnimatedModal = {
  isOpen: boolean;
  onClose: () => void;
  formType: ModalType;
};

export type THomeInner = {
  openModal: (formType: ModalType) => void;
};

export type TLayoutModal = {
  isOpen: boolean;
  onClose: () => void;
  onExited: () => void;
  formType: ModalType;
};

export type THomePage = {
  isModalOpen: boolean;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
  formType: ModalType;
};

export type TPortal = {
  children: React.ReactNode;
};
