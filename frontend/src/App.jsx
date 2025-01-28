import { FlatsList } from "./components/FlatsList/FlatList";
import { FlatsFilter } from "./components/Filter/Filter";
import { useFlatsState } from "./redux/selectors";
import { FlatForm } from "./components/Form/Form";
import { Loader } from "./components/Loader";
import { Toaster } from "react-hot-toast";
import { isEditTrue, defaultInitialValues } from "./helpers/propToForm";

function App() {
  const { flats, loading, error } = useFlatsState();
  return (
    <>
      <Toaster />
      <FlatForm initialValues={defaultInitialValues} isEditMode={isEditTrue} />
      <FlatsFilter />
      {loading && !error && <Loader />}
      {flats.length !== 0 ? (
        <FlatsList />
      ) : (
        <p>Квартир, які відповідають умовам не знайдено</p>
      )}
    </>
  );
}

export default App;
