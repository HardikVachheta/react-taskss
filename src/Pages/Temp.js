import React from 'react';
import Form from 'react-jsonschema-form';

const registrationForms = [
  {
    field_id: 1,
    title: 'A registration form',
    type: 'object',
    required: ['firstName', 'lastName'],
    properties: [
      {
        name: 'firstName',
        type: 'string',
        title: 'First Name',
        default: '',
      },
      {
        name: 'lastName',
        type: 'string',
        title: 'Last Name',
        default: '',
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email',
        format: 'email',
        default: '',
      },
    ],
  },
  {
    field_id: 2,
    title: 'A registration form',
    type: 'object',
    required: ['firstName', 'lastName', 'password', 'gender'],
    properties: [
      {
        name: 'firstName',
        type: 'string',
        title: 'First Name',
        default: '',
      },
      {
        name: 'lastName',
        type: 'string',
        title: 'Last Name',
        default: '',
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email',
        format: 'email',
        default: '',
      },
      {
        name: 'password',
        type: 'string',
        title: 'Password',
        format: 'password',
        default: '',
        minLength: 3,
        maxLength: 6,
      },
      {
        name: 'gender',
        type: 'string',
        title: 'Gender',
        default: '',
        enum: ['Male', 'Female', 'Other'],
      },
    ],
  },
];

const FormRenderer = ({ formSchema }) => {
  const schema = {
    type: 'object',
    properties: {},
    required: [],
  };

  formSchema.properties.forEach((property) => {
    schema.properties[property.name] = {
      type: property.type,
      title: property.title,
      default: property.default,
    };
    if (property.format) {
      schema.properties[property.name].format = property.format;
    }
  });

  schema.required = formSchema.required;

  const uiSchema = {};

  return (
    <Form schema={schema} uiSchema={uiSchema} />
  );
};

const Temp = () => {
  return (
    <div class="layout-wrapper layout-content-navbar">
      <div class="layout-container">

        <div class="layout-page">

          <div class="content-wrapper">
            <div class="container-xxl flex-grow-1 container-p-y">
              <div class="row">
                <div class="card mb-4">
                  <div class="card-body">
                    <div class="mb-3">
                      {registrationForms.map((formSchema) => (
                        <FormRenderer key={formSchema.field_id} formSchema={formSchema} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temp;
