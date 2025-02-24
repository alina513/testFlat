import { useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchFlatById } from "../redux/operations";
import { useFlatsState } from "../redux/selectors";
import { Loader } from "../components/Loader";
import { Formik, Form, Field } from 'formik';

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
  <Formik
       initialValues={{name: '', email: '', phone: '', message: ""  }}
       onSubmit={()=> console.log("ok")}
     >
       {({ isSubmitting }) => (
        <Form>
        <label>
          Ім'я:
          <Field type="text" name="name" required />
        </label>

        <label>
          Email:
          <Field type="email" name="email" required />
        </label>

        <label>
          Телефон:
          <Field type="tel" name="phone" required />
        </label>

        <label>
          Повідомлення:
          <Field as="textarea" name="message" placeholder="Ваше повідомлення" />
        </label>

        <button type="submit" disabled={isSubmitting}>
          Надіслати
        </button>
      </Form>
       )}
     </Formik>
  </>;
}

