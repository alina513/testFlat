import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1350px;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  padding: 5px;
  border: 2px solid #124a1e;
  border-radius: 5px;
`;
export const Select = styled.select`
  padding: 5px;
  border: 2px solid #124a1e;
  border-radius: 5px;
`;
export const Button = styled.button`
  width: 200px;
  color: #ffffff;
  background-color: #124a1e;
  padding: 5px;
  border-radius: 5px;
  &:hover,
  &:focus {
    color: #85aa9f;
    background-color: #bfdbc5;
  }
`;
