import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1000px;
  height: 300px;
  border: 1px solid #c38c55;
  border-radius: 12px;
  padding: 5px 10px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;
  background:  linear-gradient(135deg, #dec0a1, #ffffff);
  box-shadow: 0 6px 8px #debfa1;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(193, 140, 85, 0.5);
  }
`;




export const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

export const General = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const Button = styled.button`
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

