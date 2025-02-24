import { Formik, Form, Field } from 'formik';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

export const ContactForm = ()=> {
    // const dispatch = useDispatch();
    // const { id } = useParams();

   
  
    // const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    //   try {
    //     const response = await fetch(`https://your-backend.com/api/flats/${id}/contact`, {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify(values),
    //     });
  
    //     if (response.ok) {
    //       alert("Заявка успішно відправлена!");
    //       resetForm();
    //     } else {
    //       alert("Помилка при відправці заявки.");
    //     }
    //   } catch (error) {
    //     console.error("Помилка:", error);
    //     alert("Сервер недоступний. Спробуйте пізніше.");
    //   } finally {
    //     setSubmitting(false);
    //   }
    // };


    return(
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
    )
}