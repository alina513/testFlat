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



import { FormWrapper, Button, Input, Checkbox, Select } from "./Form.styled";
import { useDispatch } from "react-redux";
import { Formik, ErrorMessage, Field } from "formik";
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
    fullDescription: Yup.string().trim(),
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
      console.log(values)
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
         <label htmlFor="fullDescription">Опис</label>
        <Input id="fullDescription" name="fullDescription" />
        <ErrorMessage
          name="fullDescription"
          component="div"
          style={{ color: "red" }}
        />

        <label htmlFor="price">Ціна</label>
        <Input id="price" name="price" />
        <ErrorMessage name="price" component="div" style={{ color: "red" }} />

        <label htmlFor="rooms">Кількість кімнат</label>
        <Input id="rooms" name="rooms" />
        <ErrorMessage name="rooms" component="div" style={{ color: "red" }} />

        <label>
            Дозволені тварини
            <Checkbox type="checkbox" name="petsAllowed" />
          </label>

          <label htmlFor="heatingType">Тип опалення</label>
          <Field id="heatingType" name="heatingType" as="select">
            <option value="">Оберіть...</option>
            <option value="газове">Газове</option>
            <option value="електричне">Електричне</option>
            <option value="центральне">Центральне</option>
          </Field>
          <ErrorMessage name="heatingType" component="div" style={{ color: "red" }} />

          <label>
            Гардеробна
            <Checkbox name="walkInCloset" type="checkbox" />
          </label>

          <label htmlFor="bathrooms">Ванна кімната</label>
          <Field id="bathrooms" name="bathrooms" as="select">
            <option value="">Оберіть...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Field>
          <ErrorMessage name="bathrooms" component="div" style={{ color: "red" }} />

          <label htmlFor="airConditioners">Кондиціонер</label>
          <Field id="airConditioners" name="airConditioners" as="select">
            <option value="">Оберіть...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Field>
          <ErrorMessage name="airConditioners" component="div" style={{ color: "red" }} />

          <label htmlFor="district">Район</label>
          <Field id="district" name="district" as="select">
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
            <Checkbox type="checkbox" name="parkingSpace"  />
          </label>

          <label htmlFor="floor">Поверх</label>
          <Input id="floor" name="floor" as='input'/>
          <ErrorMessage name="floor" component="div" style={{ color: "red" }} />

          <label htmlFor="maxPeople">Максимальна кількість мешканців</label>
          <Input id="maxPeople" name="maxPeople" as='input'/>
          <ErrorMessage name="maxPeople" component="div" style={{ color: "red" }} />


        <Button type="submit">{isEditMode ? "Оновити" : "Додати"}</Button>
      </FormWrapper>
    </Formik>
  );
};


