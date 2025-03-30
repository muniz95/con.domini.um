import { Modal } from '@mui/material';

interface IProps {
  children: React.ReactElement;
  open: boolean;
  setOpen: (isOpen: boolean) => void;
}

const CDUModal = ({ children, open, setOpen }: IProps) => {
  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleModalClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {children}
    </Modal>
  );
};

export default CDUModal;
