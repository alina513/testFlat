import { FlatsList } from "./components/FlatsList/FlatList";
import { FlatsFilter } from "./components/Filter/Filter";
import { useFlatsState } from "./redux/selectors";
import { FlatForm } from "./components/Form/Form";
const defaultInitialValues = {
  title: "",
  description: "",
  price: "",
  rooms: "",
  photos: "",
};
const isEditTrue = false;
function App() {
  const { flats } = useFlatsState();
  return (
    <>
      <FlatForm initialValues={defaultInitialValues} isEditMode={isEditTrue} />
      <FlatsFilter />
      {flats.length > 0 && <FlatsList />}
    </>
  );
}

export default App;
