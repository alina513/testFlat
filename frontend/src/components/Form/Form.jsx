import { FormWrapper, Button, Input } from "./Form.styled";
import { useDispatch } from "react-redux";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addFlat, updateFlat } from "../../redux/operations";

const flatSchema = Yup.object().shape({
  title: Yup.string()
    .trim()
    .max(90, "Заголовок має бути до 90 символів")
    .required("Заголовок є обовʼязковим"),
  description: Yup.string()
    .trim()
    .max(335, "Опис має бути до 335 символів")
    .required("Опис є обовʼязковим"),
  price: Yup.number()
    .typeError("Ціна має бути числом")
    .positive("Ціна має бути додатною")
    .required("Ціна є обовʼязковою"),
  rooms: Yup.number()
    .oneOf([1, 2, 3], "Кількість кімнат може бути лише 1, 2 або 3")
    .required("Кількість кімнат є обовʼязковою"),
});

export const FlatForm = ({ initialValues, isEditMode, id }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    if (isEditMode) {
      dispatch(updateFlat({ id, ...values }));
    } else {
      dispatch(addFlat(values));
    }
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={flatSchema}
      onSubmit={handleSubmit}
    >
      <FormWrapper>
        <label htmlFor="title">Заголовок</label>
        <Input id="title" name="title" />
        <ErrorMessage name="title" component="div" style={{ color: "red" }} />

        <label htmlFor="description">Опис</label>
        <Input id="description" name="description" />
        <ErrorMessage
          name="description"
          component="div"
          style={{ color: "red" }}
        />

        <label htmlFor="price">Ціна</label>
        <Input id="price" name="price" />
        <ErrorMessage name="price" component="div" style={{ color: "red" }} />

        <label htmlFor="rooms">Кількість кімнат</label>
        <Input id="rooms" name="rooms" />
        <ErrorMessage name="rooms" component="div" style={{ color: "red" }} />

        <Button type="submit">{isEditMode ? "Оновити" : "Додати"}</Button>
      </FormWrapper>
    </Formik>
  );
};
