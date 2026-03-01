import { Modal, type MantineSize } from '@mantine/core';
import React from 'react';

interface IProps {
  children: React.ReactNode;
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  title?: React.ReactNode;
  size?: MantineSize | (string & {});
  centered?: boolean;
}

const CDUModal = ({
  children,
  open,
  setOpen,
  title,
  size = 'md',
  centered = true,
}: IProps) => {
  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      opened={open}
      onClose={handleModalClose}
      title={title}
      size={size}
      centered={centered}
      withCloseButton
      closeOnEscape
      closeOnClickOutside
    >
      {children}
    </Modal>
  );
};

export default CDUModal;
