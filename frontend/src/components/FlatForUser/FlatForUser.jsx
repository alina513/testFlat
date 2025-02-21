import { deleteFlat } from "../../redux/operations";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { ModalGeneral } from "../Modal/Modal";
import { FlatForm } from "../Form/Form";
import { useFlatsState } from "../../redux/selectors";
import flatImage from "../../assets/flat.jpg";
import {
  Container,
  Title,
  Description,
  General,
  Wrapper,
  Button,
} from "./FlatForUser.styled";

export const FlatForUser = ({ value }) => {
  const { title, description, rooms, _id, price, photoURL } = value;
  const baseUrl = "https://testflat-backend.onrender.com";
  const fullPhotoUrl = `${baseUrl}/${photoURL}`

  return (
      <Container>
        <Title>{title}</Title>
        <Wrapper>
          <img width="100" alt="flat" src={photoURL ? fullPhotoUrl : flatImage} />
          <div>
            <Description>{description}</Description>
            <General>Кімнат:{rooms}</General>
            <General>Вартість:{price} грн</General>
          </div>
        </Wrapper>
        <Button>Детальніше</Button>
        <Button>Додати до списку обраних</Button>
      </Container>
  );
};
