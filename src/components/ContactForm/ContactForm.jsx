import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'User name must be at least 2 characters!')
    .max(50, 'User name must be less than 50 characters!')
    .required('User name is required!'),
  number: Yup.string()
    .matches(/^[0-9]{10}$/, 'Invalid phone number')
    .required('Phone number is required'),
});

const INITIAL_FORM_DATA = {
  name: '',
  number: '',
};

const ContactForm = ({ onAddNewContact }) => {
  const handleSubmit = (data, formActions) => {
    onAddNewContact(data);
    formActions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_FORM_DATA}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          <span>Name</span>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </label>
        <label>
          <span>Number</span>
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="span" />
        </label>
        <button
          type="submit"
          title="Click to save new contact"
          aria-label="Add new contact"
        >
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
