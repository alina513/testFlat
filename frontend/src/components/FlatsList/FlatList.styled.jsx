import styled from "styled-components";

export const ListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 1350px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px;
  border: 1px solid transparent;
  background: linear-gradient(135deg, #f0fff4, #eafaf1);
  border-image: linear-gradient(135deg, #76b852, #b0f3f1) 1;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  border-radius: 12px;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }
`;
