import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const onSubmit = (values, { resetForm }) => {
  // Handle form submission here (e.g., send data to the server)
  console.log('Form data submitted:', values);
  resetForm();
};

const Test1 = ({ formData }) => {
  return (
    <div>
      <h1>Formik Example</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
   {formData.fields.map((field) => (
                            
                            <div class="mb-3" key={field.name}>
                                <label class="form-label d-flex justify-content-between" for="basic-icon-default-fullname" htmlFor={field.name}>{field.label}</label>
                                {/* {field.type === 'select' ? (
                                    <select class="select2 form-select" id={field.name}
                                        name={field.name}
                                        // {...register(field.name)}
                                        // value={field.name}
                                        // onChange={handleChange}
                                        // onBlur={handleBlur}
                                        required>
                                        {field.options.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                ) : field.type === 'textarea' ? (
                                    <textarea
                                        id={field.name}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        // {...register(field.name)}
                                        // value={field.name}
                                        // onChange={handleChange}
                                        // onBlur={handleBlur}
                                        required></textarea>
                                ) : ( */}
                                    <Field
                                        class="form-control"
                                        type={field.type}
                                        id={field.name}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        // {...register(field.name)}
                                        // value={field.name}
                                        // onChange={handleChange}
                                        // onBlur={handleBlur}
                                        required/>
                                {/* )} */}
                            </div>
                        ))}
            {/* <div>
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" />
            </div> */}

            {/* <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div> */}

            <div>
              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Test1;
