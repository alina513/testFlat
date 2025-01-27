import styled from "styled-components";
import { Form, Field } from "formik";
export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 5px;
  width: 1350px;
  margin: 20px auto;
  background: linear-gradient(135deg, #b0f3f1, #76b852);
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const Button = styled.button`
color: #ffffff;
background-color: #124a1e;
padding: 10px;
border-radius: 5px;
margin-top: 10px;
 &:hover , &:focus{
 color: #85aa9f;
background-color: #bfdbc5;}
`

export const Input = styled(Field)`
padding: 10px;
border-radius: 5px;
border: 2px solid #124a1e;
`
