import React, { useState, useEffect } from 'react';
import { Form, FormBuilder } from '@formio/react';
import formJson from "../data/data.json";
import 'formiojs/dist/formio.full.css';
// import { FormBuilder } from '@formio/react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Form from 'react-jsonschema-form';


function FormRenderer() {
  const [form, setForm] = useState(null);

  useEffect(() => {
    setForm(formJson);
  }, []);

  return (
    <div >
      {/* {form ? (
        <Form form={form} />
      ) : (
        <div>Loading form...</div>
      )} */}
      {/* <Form  form={formJson}  /> */}
      <FormBuilder form={{
        display: 'form',
        components: [
          {
            "label": "Email",
            "tableView": true,
            "key": "email",
            "type": "spacer",
            "input": true
          },
          {
            "label": "Password",
            "tableView": false,
            "key": "password",
            "type": "password",
            "input": true,
            "protected": true
          },
        ]
      }} />
    </div>
  );
}

export default FormRenderer;
