import { TiTimes } from "react-icons/ti";
import { CloseBtn, Modal, ModalContent, ModalWrapper } from "./Modal.styled";
import ReactDOM from "react-dom";

export const ModalGeneral = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
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
      </Modal>,
    document.getElementById("modal")
  );
};
