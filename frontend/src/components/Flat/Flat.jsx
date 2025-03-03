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
  const {
    title,
    description,
    rooms,
    _id,
    price,
    photoURL,
    animals,
    fullDescription,
    bathroom,
    airConditioner,
    floor,
    maxPeople,
    wardrobe,
    gasEquipment,
    parking,
    district,
  } = value;
  const baseUrl = "https://testflat-backend.onrender.com";
  const fullPhotoUrl = `${baseUrl}/${photoURL}`;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { updateStatus } = useFlatsState();
  const dispatch = useDispatch();
  const isEditForm = true;

  const handleDeleteFlat = () => {
    dispatch(deleteFlat(_id));
  };

  const openEditModal = () => {
    setIsModalOpen(true);
  };

  const defaultInitialValues = {
    title: title || "",
    description: description || "",
    fullDescription: fullDescription || "",
    price: price|| "",
    rooms: rooms || "",
    animals: animals || false,
    gasEquipment: gasEquipment || "",
    wardrobe: wardrobe || false,
    bathroom: bathroom || "",
    airConditioner: airConditioner||  "",
    district: district ||  "",
    parking: parking ||  false,
    floor: floor || "",
    maxPeople: maxPeople || "",
  };

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
          <img
            width="100"
            alt="flat"
            src={photoURL ? fullPhotoUrl : flatImage}
          />
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
