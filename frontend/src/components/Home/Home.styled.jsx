import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: hidden;
`;

export const Slide = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled(motion.div)`
  text-align: center;
  padding: 40px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  color: #fff;
  max-width: 800px;

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.5rem;
  }
`;

export const Controls = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
`;

export const ControlButton = styled.button`
  padding: 12px 30px;
  width: 136px;
  background-color: #f8f2ec;
  color: #124a1e;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;
