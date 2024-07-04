import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import css from './BookingForm.module.css';

export default function BookingForm() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
  });

  return (
    <div className={css.formWrap}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.caption}>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={{
          name: '',
          email: '',
          date: '',
          comment: '',
        }}
        validationSchema={validationSchema}
        onSubmit={async values => {
          await new Promise(r => setTimeout(r, 500));
            alert(` Thank you for booking ${values.name}! 
  If you like this project, please write a message to 8tzaidel@gmail.com.
  Have a nice day:)
            `);
        }}
      >
        <Form className={css.form}>
          <Field name="name" placeholder="Name" className={css.formField} />
          <Field type="email" name="email" placeholder="Email" className={css.formField} />
          <Field type="date" name="date" placeholder="Booking date" className={css.formField} />
          <Field
            as="textarea"
            name="comment"
            placeholder="Comment"
            className={`${css.formField} ${css.comment}`}
          />
          <button type="submit" className={css.formButton}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
}
