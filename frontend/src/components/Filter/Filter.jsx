import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchFlats } from "../../redux/operations";
import { Wrapper, Input, Select, Button } from "./Filter.styled";

export const FlatsFilter = () => {
  const dispatch = useDispatch();

  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [rooms, setRooms] = useState("");

  useEffect(() => {
    dispatch(fetchFlats({}));
  }, [dispatch]);

  const handleFilter = () => {
    dispatch(fetchFlats({ priceMin, priceMax, rooms }));
  };

  const handleResetFilters = () => {
    setPriceMin("");
    setPriceMax("");
    setRooms("");
    dispatch(fetchFlats({}));
  };

  return (
    <Wrapper>
      <label>
        Мінімальна ціна:
        <Input
          type="number"
          value={priceMin}
          onChange={(e) => setPriceMin(e.target.value)}
        />
      </label>
      <label>
        Максимальна ціна:
        <Input
          type="number"
          value={priceMax}
          onChange={(e) => setPriceMax(e.target.value)}
        />
      </label>
      <label>
        Кімнат:
        <Select value={rooms} onChange={(e) => setRooms(e.target.value)}>
          <option value="">All</option>
          <option value="1">1 Room</option>
          <option value="2">2 Rooms</option>
          <option value="3">3 Rooms</option>
        </Select>
      </label>
      <Button onClick={handleFilter}>Пошук</Button>
      <Button onClick={handleResetFilters}>Очистити фільтр</Button>
    </Wrapper>
  );
};
