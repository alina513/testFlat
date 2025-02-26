import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { addContactForm } from '../../redux/operations';
import { useParams } from 'react-router';
import * as Yup from "yup";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("Ім'я є обовʼязковим"),
  email: Yup.string()
    .email('Неправильний формат email')
    .trim()
    .required("Email є обовʼязковим"),
  phone: Yup.string()
    .matches(/^\+?\d{10,15}$/, "Неправильний формат номера телефону")
    .required("Телефон є обовʼязковим"),
  message: Yup.string()
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(addContactForm({ id, ...values }));
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', phone: '', message: '' }}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <label>
            Ім'я:
            <Field type="text" name="name" required />
            {errors.name && touched.name ? <p>{errors.name}</p> : null}
          </label>

          <label>
            Email:
            <Field type="email" name="email" required />
            {errors.email && touched.email ? <p>{errors.email}</p> : null}
          </label>

          <label>
            Телефон:
            <Field type="tel" name="phone" required />
            {errors.phone && touched.phone ? <p>{errors.phone}</p> : null}
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
  );
};
