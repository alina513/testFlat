import { useSelector } from "react-redux";

export const useFlatsState = () => {
  const error = useSelector((state) => state.flats.error);
  const loading = useSelector((state) => state.flats.loading);
  const flats = useSelector((state) => state.flats.items);

  return {
    error,
    loading,
    flats
  };
};
