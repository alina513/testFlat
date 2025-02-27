// import { FormWrapper, Button, Input } from "./Form.styled";
// import { useDispatch } from "react-redux";
// import { Formik, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { addFlat, updateFlat } from "../../redux/operations";

// const flatSchema = Yup.object().shape({
//   title: Yup.string()
//     .trim()
//     .max(90, "Заголовок має бути до 90 символів")
//     .required("Заголовок є обовʼязковим"),
//   description: Yup.string()
//     .trim()
//     .max(335, "Опис має бути до 335 символів")
//     .required("Опис є обовʼязковим"),
//   price: Yup.number()
//     .typeError("Ціна має бути числом")
//     .positive("Ціна має бути додатною")
//     .required("Ціна є обовʼязковою"),
//   rooms: Yup.number()
//     .oneOf([1, 2, 3], "Кількість кімнат може бути лише 1, 2 або 3")
//     .required("Кількість кімнат є обовʼязковою"),
// });

// export const FlatForm = ({ initialValues, isEditMode, id }) => {
//   const dispatch = useDispatch();

//   const handleSubmit = (values, actions) => {
//     if (isEditMode) {
//       dispatch(updateFlat({ id, ...values }));
//     } else {
//       dispatch(addFlat(values));
//     }
//     actions.resetForm();
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={flatSchema}
//       onSubmit={handleSubmit}
//     >
//       <FormWrapper>
//         <label htmlFor="title">Заголовок</label>
//         <Input id="title" name="title" />
//         <ErrorMessage name="title" component="div" style={{ color: "red" }} />

//         <label htmlFor="description">Опис</label>
//         <Input id="description" name="description" />
//         <ErrorMessage
//           name="description"
//           component="div"
//           style={{ color: "red" }}
//         />

//         <label htmlFor="price">Ціна</label>
//         <Input id="price" name="price" />
//         <ErrorMessage name="price" component="div" style={{ color: "red" }} />

//         <label htmlFor="rooms">Кількість кімнат</label>
//         <Input id="rooms" name="rooms" />
//         <ErrorMessage name="rooms" component="div" style={{ color: "red" }} />

//         <Button type="submit">{isEditMode ? "Оновити" : "Додати"}</Button>
//       </FormWrapper>
//     </Formik>
//   );
// };


import { FormWrapper, Button, Input, Select, Checkbox } from "./Form.styled";
import { useDispatch } from "react-redux";
import { Formik, ErrorMessage, Field, Form } from "formik";
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
  petsAllowed: Yup.boolean(),
  heatingType: Yup.string().oneOf(["газове", "електричне", "центральне"], "Оберіть тип опалення"),
  walkInCloset: Yup.boolean(),
  bathrooms: Yup.number().oneOf([1, 2, 3], "Кількість ванних кімнат може бути лише 1, 2 або 3"),
  airConditioners: Yup.number().oneOf([1, 2, 3], "Кількість кондиціонерів може бути лише 1, 2 або 3"),
  fullDescription: Yup.string().trim(),
  district: Yup.string().oneOf(["Дарницький", "Оболонський", "Печерський", "Шевченківський", "Голосіївський", "Деснянський", "Дніпровський"], "Оберіть район"),
  parkingSpace: Yup.boolean(),
  floor: Yup.number(),
  maxPeople: Yup.number(),
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
      {({ isSubmitting }) => (
        <FormWrapper as={Form}>
          <label htmlFor="title">Заголовок</label>
          <Field as={Input} id="title" name="title" />
          <ErrorMessage name="title" component="div" style={{ color: "red" }} />

          <label htmlFor="description">Опис</label>
          <Field as={Input} id="description" name="description" />
          <ErrorMessage name="description" component="div" style={{ color: "red" }} />

          <label htmlFor="price">Ціна</label>
          <Field as={Input} id="price" name="price" />
          <ErrorMessage name="price" component="div" style={{ color: "red" }} />

          <label htmlFor="rooms">Кількість кімнат</label>
          <Field as={Input} id="rooms" name="rooms" />
          <ErrorMessage name="rooms" component="div" style={{ color: "red" }} />

          <label>
            Дозволені тварини
            <Field type="checkbox" name="petsAllowed" as={Checkbox} />
          </label>

          <label htmlFor="heatingType">Тип опалення</label>
          <Field as={Select} id="heatingType" name="heatingType">
            <option value="">Оберіть...</option>
            <option value="газове">Газове</option>
            <option value="електричне">Електричне</option>
            <option value="центральне">Центральне</option>
          </Field>
          <ErrorMessage name="heatingType" component="div" style={{ color: "red" }} />

          <label>
            Гардеробна
            <Field type="checkbox" name="walkInCloset" as={Checkbox} />
          </label>

          <label htmlFor="bathrooms">Ванна кімната</label>
          <Field as={Select} id="bathrooms" name="bathrooms">
            <option value="">Оберіть...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Field>
          <ErrorMessage name="bathrooms" component="div" style={{ color: "red" }} />

          <label htmlFor="airConditioners">Кондиціонер</label>
          <Field as={Select} id="airConditioners" name="airConditioners">
            <option value="">Оберіть...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Field>
          <ErrorMessage name="airConditioners" component="div" style={{ color: "red" }} />

          <label htmlFor="district">Район</label>
          <Field as={Select} id="district" name="district">
            <option value="">Оберіть район...</option>
            <option value="Дарницький">Дарницький</option>
            <option value="Оболонський">Оболонський</option>
            <option value="Печерський">Печерський</option>
            <option value="Шевченківський">Шевченківський</option>
            <option value="Голосіївський">Голосіївський</option>
            <option value="Деснянський">Деснянський</option>
            <option value="Дніпровський">Дніпровський</option>
          </Field>
          <ErrorMessage name="district" component="div" style={{ color: "red" }} />

          <label>
            Паркомісце
            <Field type="checkbox" name="parkingSpace" as={Checkbox} />
          </label>

          <label htmlFor="floor">Поверх</label>
          <Field as={Input} id="floor" name="floor" />
          <ErrorMessage name="floor" component="div" style={{ color: "red" }} />

          <label htmlFor="maxPeople">Максимальна кількість мешканців</label>
          <Field as={Input} id="maxPeople" name="maxPeople" />
          <ErrorMessage name="maxPeople" component="div" style={{ color: "red" }} />

          <Button type="submit" disabled={isSubmitting}>
            {isEditMode ? "Оновити" : "Додати"}
          </Button>
        </FormWrapper>
      )}
    </Formik>
  );
};
