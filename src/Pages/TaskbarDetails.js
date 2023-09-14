import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../data/dumpdata.json';

export const TaskbarDetails = () => {

    // var id = useParams().id
    // console.log("TaskbarDetails id :----", id)


    const [users, setUsers] = useState()
    const getdata = () => {
        setUsers(data);
    }
    useEffect(() => {
        getdata()
    }, [])

    return (
        <h1>
            TaskbarDetails {users?.map((u) => {
                return (
                    u.task_id == id ? u.task_name : null
                )
            })
            }
        </h1>
    )
}
