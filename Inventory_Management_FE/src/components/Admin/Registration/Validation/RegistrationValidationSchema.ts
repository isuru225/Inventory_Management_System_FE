import * as yup from "yup";

export const RegistartionModalValidationSchema = yup.object().shape({
    firstName: yup.string()
        .matches(/^[a-zA-Z]/, 'First name must be alphanumeric')
        .min(1, 'First name must have at least 1 characters')
        .max(20, 'First name must be at most 15 characters').required("First name is required."),
    lastName: yup.string()
        .matches(/^[a-zA-Z]/, 'Last name must be alphanumeric')
        .min(1, 'Last name must have at least 1 characters')
        .max(20, 'Last name must be at most 15 characters').required("Last name is required."),
    email: yup.string().email('Invalid email format').required('Email is required'),
    mobileNumber: yup.string()
        .matches(/^\d{10}$/, 'Mobile number must be exactly 10 digits')
        .required('Mobile number is required'),
    password: yup.string()
        .matches(
            /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!#%$]).{8,}$/,
            'Password must contain at least one uppercase letter, one lowercase letter, one number, one special character (!#%$), and be at least 8 characters long'
        )
        .required('Password is required'),
    confirmedPassword: yup.string()
        .oneOf([yup.ref('password'), undefined], 'Passwords must match')
        .required('Confirm password is required'),
    role: yup.string().required('Role is required'),
})


