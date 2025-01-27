import { TiTimes } from "react-icons/ti";
import { CloseBtn, Modal, ModalContent, ModalWrapper } from "./Modal.styled";


export const ModalGeneral = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <Modal>
          <ModalWrapper
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                onClose();
              }
            }}
          >
            <ModalContent>
              <CloseBtn onClick={onClose}>
                <TiTimes />
              </CloseBtn>
              {children}
            </ModalContent>
          </ModalWrapper>
        </Modal>
      )}
    </>
  );
};

