import { Toaster } from "react-hot-toast";
import { FlatForm } from "../components/Form/Form";
import { FlatsFilter } from "../components/Filter/Filter";
import { Loader } from "../components/Loader";
import { FlatsList } from "../components/FlatsList/FlatList";
import { useFlatsState } from "../redux/selectors";
import { isEditTrue, defaultInitialValues } from "../helpers/propToForm";

export default function RieltorPage() {
  const isUserList = false;
  const { flats, loading, error } = useFlatsState();
  return (
    <>
      <Toaster />
      <FlatForm initialValues={defaultInitialValues} isEditMode={isEditTrue} />
      <FlatsFilter />
      {loading && !error && <Loader />}
      {!loading && !error && flats.length === 0 && (
        <p>Квартир, які відповідають умовам не знайдено</p>
      )}
      {flats.length !== 0 && !loading && !error && <FlatsList isUserList={isUserList} />}
    </>
  );
}

