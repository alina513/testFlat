import { useFlatsState } from "../../redux/selectors";
import { Flat } from "../Flat/Flat";

export const FlatsList = () => {
  const {flats} = useFlatsState();

  return (
    <ul>
      {flats.map(flat => (
        <Flat value = {flat} key={flat._id} />
      ))}
    </ul>
  );
};
