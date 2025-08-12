import * as yup from "yup";

export const resetPasswordValidationSchema = yup.object().shape({
    newPassword : yup.string().matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!#%])/,'Pasword contains at least one lowercase,one uppercase and one special character.').min(8,'password should contain at least 8 characters').required('password is required.'),
    confirmedNewPassword: yup.string().oneOf([yup.ref("password")], "Password should match.").required("Password is required")
}) 
