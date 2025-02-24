import flatImage from "../../assets/flat.jpg";
import { useState, useEffect } from "react";
import {
  Container,
  Title,
  Description,
  General,
  Wrapper,
  Button,
  Link
} from "./FlatForUser.styled";

export const FlatForUser = ({ value }) => {
  const { title, description, rooms, _id, price, photoURL } = value;
  const baseUrl = "https://testflat-backend.onrender.com";
  const fullPhotoUrl = `${baseUrl}/${photoURL}`;

  const [isFavorite, setIsFavorite] = useState(false);


  const checkIfFavorite = ()=>{
    const storedItems = JSON.parse(localStorage.getItem('storedItems')) || [];
    const itemIndex = storedItems.findIndex(item => item._id === _id);
    if (itemIndex!== -1) {
      setIsFavorite(true);
    }
    return
  }
  useEffect(() => {
    checkIfFavorite()
  }, )


  const toggleItemInLocalStorage = () => {
    let storedItems = JSON.parse(localStorage.getItem('storedItems')) || [];

    if (isFavorite) {
      storedItems = storedItems.filter(item => item._id !== _id);
      setIsFavorite(false);
      window.location.reload();
    } else {
      storedItems.push(value);
      setIsFavorite(true);
    }

    localStorage.setItem('storedItems', JSON.stringify(storedItems));
  };

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
        <Link href={`flats/${_id}`}>Детальніше</Link>
        <Button type="submit" onClick={toggleItemInLocalStorage}>{isFavorite ? "Видалити із списку обраних" : "Додати до списку обраних"}</Button>
      </Container>
  );
};
