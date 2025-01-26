import {useDispatch} from 'react-redux';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { addFlat } from '../../redux/operations';

const flatAddSchema = Yup.object().shape({
    title: Yup.string()
      .max(90, 'Заголовок має бути до 90 символів')
      .required('Заголовок є обовʼязковим'),
    description: Yup.string()
      .max(335, 'Опис має бути до 335 символів')
      .required('Опис є обовʼязковим'),
    price: Yup.number()
      .typeError('Ціна має бути числом')
      .positive('Ціна має бути додатною')
      .required('Ціна є обовʼязковою'),
    rooms: Yup.number()
      .oneOf([1, 2, 3], 'Кількість кімнат може бути лише 1, 2 або 3')
      .required('Кількість кімнат є обовʼязковою'),
    photos: Yup.array()
      .of(
        Yup.mixed()
          .test('fileType', 'Файл має бути зображенням', (value) => {
            return value && ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type);
          })
          .test('fileSize', 'Розмір файлу не має перевищувати 5MB', (value) => {
            return value && value.size <= 5 * 1024 * 1024;
          })
      )
      .optional(), // Можливість додавання фотографій не є обовʼязковою
  });
  


export const FormAddFlat = () => {
    const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(addFlat(values)); 
    isLoggedIn &&
    actions.resetForm();
  };
    return(
    <div>
      <Formik
        initialValues={{
          title: '',
          description: '',
          price: '',
          rooms: '',
          photos: ''
        }}
        validationSchema={flatAddSchema}

        onSubmit={handleSubmit}


      > <Form>
      <label htmlFor="firstName">First Name</label>
      <Field id="firstName" name="firstName" placeholder="Jane" />

      <label htmlFor="lastName">Last Name</label>
      <Field id="lastName" name="lastName" placeholder="Doe" />

      <label htmlFor="email">Email</label>
      <Field
        id="email"
        name="email"
        placeholder="jane@acme.com"
        type="email"
      />
      <button type="submit">Submit</button>
    </Form>
  </Formik>
</div>
);}