import { Toaster } from "react-hot-toast";
import { FlatsFilter } from "../components/Filter/Filter";
import { Loader } from "../components/Loader";
import { FlatsList } from "../components/FlatsList/FlatList";
import { useFlatsState } from "../redux/selectors";

export default function FlatsPage() {
  const { flats, loading, error } = useFlatsState();
  const isUserList = true;
  return (
    <>
      <Toaster />
      <FlatsFilter />
      {loading && !error && <Loader />}
      {!loading && !error && flats.length === 0 && (
        <p>Квартир, які відповідають умовам не знайдено</p>
      )}
      {flats.length !== 0 && !loading && !error && <FlatsList isUserList= {isUserList} />}
    </>
  );
}
