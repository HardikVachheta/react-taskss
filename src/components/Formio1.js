import React from 'react';
import { Form } from '@formio/react';
import { Helmet } from 'react-helmet';
// import styles from '../data/form-styles.css';

// const formConfig = {

//     "components": [
//         {
//             "type": "textfield",
//             "input": true,
//             "tableView": true,
//             "label": "Name",
//             "key": "name",
//             "validate": {
//                 "required": true
//             },
//             "inputFormat": "plain",
//             "widget": {
//                 "type": "input"
//             }
//         },
//         {
//             "type": "email",
//             "input": true,
//             "tableView": true,
//             "label": "Email",
//             "key": "email",
//             "validate": {
//                 "required": true
//             },
//             "widget": {
//                 "type": "input"
//             }
//         },
//         {
//             "type": "checkbox",
//             "input": true,
//             "tableView": true,
//             "label": "Hobbies",
//             "key": "hobbies",
//             "widget": {
//                 "type": "checkbox"
//             }
//         },
//         {
//             "type": "select",
//             "input": true,
//             "tableView": true,
//             "label": "Country",
//             "key": "country",
//             "data": {
//                 "values": [
//                     {
//                         "label": "USA",
//                         "value": "USA"
//                     },
//                     {
//                         "label": "Canada",
//                         "value": "Canada"
//                     },
//                     {
//                         "label": "UK",
//                         "value": "UK"
//                     },
//                     {
//                         "label": "Australia",
//                         "value": "Australia"
//                     }
//                 ]
//             },
//             "widget": {
//                 "type": "select"
//             }
//         }
//     ]
// };

export const Formio1 = ({ formData }) => {
    const onSubmit = ({ formData }) => {
        console.log(formData);
    };
    return (
        // <div className={styles.myCustomForm}>
            <Form form={formData} onSubmit={onSubmit} />
        // </div>
    );
}
