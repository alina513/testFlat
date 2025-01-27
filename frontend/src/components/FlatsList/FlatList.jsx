import { useFlatsState } from "../../redux/selectors";
import { Flat } from "../Flat/Flat";
import { ListWrapper } from "./FlatList.styled";

export const FlatsList = () => {
  const {flats} = useFlatsState();

  return (
    <ListWrapper>
      {flats.map(flat => (
        <Flat value = {flat} key={flat._id} />
      ))}
    </ListWrapper>
  );
};
