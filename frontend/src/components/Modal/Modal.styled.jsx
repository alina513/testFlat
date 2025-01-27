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
  // transform: translateY(-50px);
  // transition: opacity 0.3s, transform 0.3s;
  // background: linear-gradient(135deg, #b0f3f1, #76b852);
  // border-radius: 20px;
  // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  // transition: transform 0.2s ease, box-shadow 0.2s ease;
  // &:hover {
  //   box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  // }
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
