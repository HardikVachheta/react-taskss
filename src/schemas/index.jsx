import * as Yup from 'yup';

export const signUpSchema = Yup.object ({
    name : Yup.string().min(2).max(25).required("Please enter your name"),
    email : Yup.string().email().required("Please enter your email"),
    password : Yup.string().min(6).required("Please enter your password"),
    confirm_password : Yup.string().required().oneOf([Yup.ref('password'),null],
    "Password must match"),
}) 

export const loginSchema = Yup.object ({
    username : Yup.string().required("Please enter your email"),
    password : Yup.string().required("Please enter your password"),
})

export const autoPage1Schema = Yup.object ({
    firstName : Yup.string().min(2).max(25).required("Please enter your name"),
    lastName : Yup.string().min(2).max(25).required("Please enter your name"),
    email : Yup.string().email().required("Please enter your email")
})

export const commentSchema = Yup.object ({
    comment : Yup.string().min(2).max(25).required("Please enter your comment"),
})

export const createUserSchema = Yup.object ({
    id : Yup.string().min(2).max(25).required("Please enter your Id"),
    password : Yup.string().min(6).required("Please enter your password"),
    confirm_password : Yup.string().required().oneOf([Yup.ref('password'),null],"Password must match"),

    firstName : Yup.string().min(2).max(25).required("Please enter your First name"),
    lastName : Yup.string().min(2).max(25).required("Please enter your Last name"),
    email : Yup.string().email().required("Please enter your email"),
}) 

export const updateUserSchema = Yup.object ({
    id : Yup.string().min(2).max(25).required("Please enter your Id"),
    firstName : Yup.string().min(2).max(25).required("Please enter your First name"),
    lastName : Yup.string().min(2).max(25).required("Please enter your Last name"),
    email : Yup.string().email().required("Please enter your email"),
}) 
