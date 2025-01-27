import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: hidden;
  overflow-y: auto;
  transition: opacity 0.36;
  z-index: 12000;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
`;

export const ModalContent = styled.div`
  position: relative;
  margin: 20px;
  padding: 10px;
  width: 1370px;
  overflow: auto;
  background-color: #ffffff;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 22px;
  height: 22px;
  border: none;
  background-color: transparent;
`;
