import { useFlatsState } from "../../redux/selectors";
import { Flat } from "../Flat/Flat";
import { FlatForUser } from "../FlatForUser/FlatForUser";
import { ListWrapper } from "./FlatList.styled";

export const FlatsList = ({ isUserList }) => {
  const { flats } = useFlatsState();

  return (
    <ListWrapper>
      {flats.map((flat) =>
        isUserList ? (
          <FlatForUser value={flat} key={flat._id} />
        ) : (
          <Flat value={flat} key={flat._id} />
        )
      )}
    </ListWrapper>
  );
};
