import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/dumpdata.json';

// class AutoPages extends Component {

    
//     constructor() {
//         super();
//         this.state = {};
//     }
const AutoPages = ({formData}) => {

    // render() {


        var id = useParams().id
        console.log("Taskbar page id :----", id)
    
        const [users, setUsers] = useState('')
    
        useEffect(() => {
            getdata()
        })
    
        const getdata = () => {
            console.log(data)
            // var mainid = data.filter((u) => {
            //     return u.task_id == id
            // })
            // setUsers(mainid[0])
            // console.log("main id", mainid)
        }


        return (
            <div class="col-xl">
                <div class="card mb-4">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        {/* <h5 class="mb-0">{users?.task_name}</h5> */}
                    </div>
                    <div class="card-body">
                        <form onSubmit={getdata}>
                            {formData.fields.map((field) => (
                                <div class="mb-3" key={field.name}>
                                    <label class="form-label d-flex justify-content-between" for="basic-icon-default-fullname" htmlFor={field.name}>{field.label}</label>
                                    {field.type === 'select' ? (
                                        <select class="select2 form-select" id={field.name} name={field.name}>
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
                                        ></textarea>
                                    ) : (
                                        <input
                                            class="form-control"
                                            type={field.type}
                                            id={field.name}
                                            name={field.name}
                                            placeholder={field.placeholder}
                                        />
                                    )}
                                </div>
                            ))}
                            <button type="submit" class="btn btn-primary" >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    // }
}

export default AutoPages;
