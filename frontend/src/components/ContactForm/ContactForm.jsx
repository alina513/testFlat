import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { addContactForm } from '../../redux/operations';
import { useParams } from 'react-router';


export const ContactForm = ()=> {
    const dispatch = useDispatch();
    const { id } = useParams();

   
  
    const handleSubmit = (values, { setSubmitting, resetForm }) => {
      dispatch(addContactForm({id, ...values}));
      setSubmitting(false);
      resetForm(); 
    };

    return(
        <Formik
       initialValues={{name: '', email: '', phone: '', message: ""  }}
       onSubmit={handleSubmit}
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
    )
}