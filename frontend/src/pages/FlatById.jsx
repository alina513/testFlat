import { useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchFlatById } from "../redux/operations";
import { useFlatsState } from "../redux/selectors";
import { Loader } from "../components/Loader";
import { ContactForm } from "../components/ContactForm/ContactForm";


export default function FlatById() {
  const { currentFlat, loading } = useFlatsState();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFlatById(id));
  }, [dispatch, id]);

  return loading ? <Loader /> : 
  <>
  <h1>{currentFlat?._id}</h1>
  <ContactForm/>
  </>;
}

