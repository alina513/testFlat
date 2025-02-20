import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 88px;
  width: 100%;
  padding-left: 80px;
  padding-right: 100px;
  border: 2px solid #e3cdb5;
  border-radius: 12px;
  background: #f8f2ec;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
  margin-right: 60px;
`;
export const LinkNav = styled(Link)`
  font-weight: 600;
  font-size: 14px;
  color: #124a1e;
  &:hover,
  &:focus {
    color: #85aa9f;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
