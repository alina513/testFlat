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
} from "./Flat.styled";

export const Flat = ({ value }) => {
  const { title, description, rooms, _id, price } = value;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { updateStatus } = useFlatsState();
  const dispatch = useDispatch();
  const handleDeleteFlat = () => {
    dispatch(deleteFlat(_id));
  };
  const openEditModal = () => {
    setIsModalOpen(true);
  };

  const defaultInitialValues = {
    title: title || "",
    description: description || "",
    price: price || 0,
    rooms: rooms || 1,
  };
  const isEditForm = true;
  useEffect(() => {
    if (updateStatus === "success") {
      setIsModalOpen(false);
    }
  }, [updateStatus]);

  return (
    <>
      <Container>
        <Title>{title}</Title>
        <Wrapper>
          <img width="100" alt="flat" src={flatImage} />
          <div>
            <Description>{description}</Description>
            <General>Кімнат:{rooms}</General>
            <General>Вартість:{price} грн</General>
          </div>
        </Wrapper>
        <Button onClick={handleDeleteFlat}>Видалити</Button>
        <Button onClick={openEditModal}>Редагувати</Button>
      </Container>
      <ModalGeneral isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <FlatForm
          initialValues={defaultInitialValues}
          isEditMode={isEditForm}
          id={_id}
        />
      </ModalGeneral>
    </>
  );
};
