import { useSelector } from "react-redux";

export const useFlatsState = () => {
  const error = useSelector((state) => state.flats.error);
  const loading = useSelector((state) => state.flats.isLoading);
  const flats = useSelector((state) => state.flats.items);
  const updateStatus = useSelector((state) => state.flats.updateStatus);

  return {
    error,
    loading,
    flats,
    updateStatus,
  };
};
