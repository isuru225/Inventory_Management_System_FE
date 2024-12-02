import { yupToFormErrors } from "formik";
import * as yup from "yup";

export const userRegValidationSchema = yup.object().shape({
    firstName : yup.string().matches(/^[a-zA-Z]/, 'FirstName must be alphanumeric').min(1, 'FirstName must be at least 1 characters').max(20, 'FirstName must be at most 15 characters').required("first name is required."),
    lastName : yup.string().matches(/^[a-zA-Z]/, 'LastName must be alphanumeric').min(1, 'LastName must be at least 1 characters').max(20, 'LastName must be at most 15 characters').required("last name is required."),
    email : yup.string().email("Invalid email address.").required("email is required."),
    mobileNumber : yup.string().matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits').required("mobile number is requirde."),
    password : yup.string().matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!#%])/,'Pasword contains at least one lowercase,one uppercase and one special character.').min(8,'password should contain at least 8 characters').required('password is required.'),
    confirmedPassword: yup.string().oneOf([yup.ref("password")], "Password should match.").required("Password is required")
}) 
