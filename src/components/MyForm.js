import React from 'react'
import { Helmet } from 'react-helmet';
import Form from 'react-jsonschema-form';
import formData from "../data/task_customer_details.json";

export const MyForm = () => {
    // Clone the original JSON data to avoid mutating it directly
    const clonedData = JSON.parse(JSON.stringify(formData));

    // Convert "subtype" to "type" for fields of type "textfield"
    clonedData.form_def?.components.forEach((component) => {
        if (component.type === "textfield") {
            component.type = "string";
        }
        else {
            component.type = "string";
        }
    });


    const schema = {
        title: 'Your Form',
        type: "object",
        properties: Object.fromEntries(
            clonedData.form_def?.components?.map((property) => [
                property.key,
                {
                    type: property.type,
                    title: property.label,
                    placeholder : "Enter Your " 
                },
            ])
        ),
    };


    const uiSchema = {
        classNames: 'form-control',
        'ui:options': {
        //   placeholder: 'Your placeholder text',
          style: { color: 'red', backgroundColor: 'lightgray' },
        },
        "ui:placeholder": "getPlaceholder(propertyName)",
      };
      

    const onSubmit = ({ formData }) => {
        console.log(formData);
    };



    return (
        <>
            <Helmet>
                {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.5.0/dist/css/bootstrap.min.css" rel="stylesheet" /> */}

            </Helmet>
            <div className="content-wrapper">
                <div className="container-lg flex-grow-1 container-p-y">
                    <div className="row">
                        {/* {formData.form_def} */}
                        Hardik
                        <Form
                            schema={schema}
                            uiSchema={uiSchema}
                            formData={formData}
                            onSubmit={onSubmit}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
