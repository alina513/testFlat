import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const Container = styled.header`
  height: 88px;
  width: 100%;
  padding: 20px 100px ;
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
  gap: 20px;
  list-style: none;
  margin-right: 60px;
`;
export const LinkNav = styled(NavLink)`
cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  padding: 10px;
  color: #124a1e;
  &:hover,
  &:focus {
    color: #85aa9f;
  }
     &.active {
    color: #85aa9f;
    border: 2px solid  #85aa9f;
    border-radius: 10px;
  }
`;

export const Logo = styled(Link)`
cursor: pointer;
font-family: "SecondFont";
font-weight: 700;
color: #124a1e;
font-size: 18px;
 &:hover,
  &:focus {
    color: #85aa9f;
  }
`

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Svg = styled.svg`
fill: #124a1e;
`